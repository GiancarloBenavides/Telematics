///******************************************/
///*          flezz framework 1.0           */
///******************************************/
///*  Name: scroll
///*  Version: 0.1.5
///*  Description: scroll plugin for jquery
///*  Author: Giancarlo Ortiz.
///*  URI: http://www.zerez.org
///*  License: GNU General Public License v2 or later
///*  License URI: http://www.gnu.org/licenses/gpl-2.0.html
///*  Tags: scroll, plugin, js.
///******************************************/
///*    Content
///*
///*  1. Road map.
///*  2. Plugin start.
///*  3. Config variables.
///*  4. Private function.
///*  5. Public function.
///*  6. Public options default.
///******************************************/
/*jslint nomen: true*/
/*jslint regexp: true*/
/*global document, window, alert, console, jQuery, require*/
///* 1 *//* ROAD MAP */

//
///* 2 *//* PLUGIN - MODULE */
///* Use plugin development pattern, by Mike Alsup */
///*  URI: http://www.learningjquery.com/2007/10/a-plugin-development-pattern */
// Se implementa creando un cierre y funcion anónima que se auto-invoca y estiende el objeto jquery.fn de jquery
// en el interior definimos la variable FlezzScroll la cual contendrá todo el prototipo de nuestro modulo.
//
// create closure
(function ($) {
    "use strict";
    ///* 3 *//* CONFIG VARIABLES */
    ///* private variables, and private methods *///
    var BROWSER_IS_IE7, BROWSER_SCROLLBAR_WIDTH, DOMSCROLL, DOWN, DRAG, ENTER, KEYDOWN, KEYUP, MOUSEDOWN, MOUSEENTER, MOUSEMOVE, MOUSEUP, MOUSEWHEEL, FlezzScroll, PANEDOWN, RESIZE, SCROLL, SCROLLBAR, TOUCHMOVE, UP, WHEEL, cAF, defaults, getBrowserScrollbarWidth, hasTransform, isFFWithBuggyScrollbar, rAF, transform, _elementStyle, _prefixStyle, _vendor;
    //
    ///* config selector *///
    defaults = {
        paneClass: 'scroll-bar',
        sliderClass: 'scroll-slider',
        contentClass: 'scroll-content',
        enabledClass: 'has-scrollbar',
        flashedClass: 'flashed',
        activeClass: 'active',
        iOSNativeScrolling: false,
        preventPageScrolling: false,
        disableResize: false,
        alwaysVisible: false,
        sliderMinHeight: 20,
        sliderMaxHeight: null,
        documentContext: null,
        windowContext: null
    };
    SCROLLBAR = 'scrollbar';
    SCROLL = 'scroll';
    MOUSEDOWN = 'mousedown';
    MOUSEENTER = 'mouseenter';
    MOUSEMOVE = 'mousemove';
    MOUSEWHEEL = 'mousewheel';
    MOUSEUP = 'mouseup';
    RESIZE = 'resize';
    DRAG = 'drag';
    ENTER = 'enter';
    UP = 'up';
    PANEDOWN = 'panedown';
    DOMSCROLL = 'DOMMouseScroll';
    DOWN = 'down';
    WHEEL = 'wheel';
    KEYDOWN = 'keydown';
    KEYUP = 'keyup';
    TOUCHMOVE = 'touchmove';
    BROWSER_IS_IE7 = window.navigator.appName === 'Microsoft Internet Explorer' && /msie 7./i.test(window.navigator.appVersion) && window.ActiveXObject;
    BROWSER_SCROLLBAR_WIDTH = null;
    rAF = window.requestAnimationFrame;
    cAF = window.cancelAnimationFrame;
    // plugin definition
    FlezzScroll = (function () {
        function FlezzScroll(el, options) {
            this.el = el;
            this.options = options;
            BROWSER_SCROLLBAR_WIDTH || (BROWSER_SCROLLBAR_WIDTH = getBrowserScrollbarWidth());
            this.$el = $(this.el);
            this.doc = $(this.options.documentContext || document);
            this.win = $(this.options.windowContext || window);
            this.body = this.doc.find('body');
            this.$content = this.$el.children("." + this.options.contentClass);
            this.$content.attr('tabindex', this.options.tabIndex || 0);
            this.content = this.$content[0];
            this.previousPosition = 0;
            if (this.options.iOSNativeScrolling && (this.el.style.WebkitOverflowScrolling !== null)) {
                this.nativeScrolling();
            } else {
                this.generate();
            }
            this.createEvents();
            this.addEvents();
            this.reset();
        }
        FlezzScroll.prototype.preventScrolling = function (e, direction) {
            if (!this.isActive) {
                return;
            }
            if (e.type === DOMSCROLL) {
                if ((direction === DOWN && e.originalEvent.detail > 0) || (direction === UP && e.originalEvent.detail < 0)) {
                    e.preventDefault();
                }
            } else if (e.type === MOUSEWHEEL) {
                if (!e.originalEvent || !e.originalEvent.wheelDelta) {
                    return;
                }
                if ((direction === DOWN && e.originalEvent.wheelDelta < 0) || (direction === UP && e.originalEvent.wheelDelta > 0)) {
                    e.preventDefault();
                }
            }
        };
        FlezzScroll.prototype.nativeScrolling = function () {
            this.$content.css({
                WebkitOverflowScrolling: 'touch'
            });
            this.iOSNativeScrolling = true;
            this.isActive = true;
        };
        FlezzScroll.prototype.updateScrollValues = function () {
            var content, direction;
            content = this.content;
            this.maxScrollTop = content.scrollHeight - content.clientHeight;
            this.prevScrollTop = this.contentScrollTop || 0;
            this.contentScrollTop = content.scrollTop;
            direction = this.contentScrollTop > this.previousPosition ? "down" : this.contentScrollTop < this.previousPosition ? "up" : "same";
            this.previousPosition = this.contentScrollTop;
            if (direction !== "same") {
                this.$el.trigger('update', {
                    position: this.contentScrollTop,
                    maximum: this.maxScrollTop,
                    direction: direction
                });
            }
            if (!this.iOSNativeScrolling) {
                this.maxSliderTop = this.paneHeight - this.sliderHeight;
                this.sliderTop = this.maxScrollTop === 0 ? 0 : this.contentScrollTop * this.maxSliderTop / this.maxScrollTop;
            }
        };
        FlezzScroll.prototype.setOnScrollStyles = function () {
            var cssValue;
            if (hasTransform) {
                cssValue = {};
                cssValue[transform] = "translate(0, " + this.sliderTop + "px)";
            } else {
                cssValue = {
                    top: this.sliderTop
                };
            }
            if (rAF) {
                if (cAF && this.scrollRAF) {
                    cAF(this.scrollRAF);
                }
                this.scrollRAF = rAF((function (_this) {
                    return function () {
                        _this.scrollRAF = null;
                        return _this.slider.css(cssValue);
                    };
                }(this)));
            } else {
                this.slider.css(cssValue);
            }
        };
        FlezzScroll.prototype.createEvents = function () {
            this.events = {
                down: (function (_this) {
                    return function (e) {
                        _this.isBeingDragged = true;
                        _this.offsetY = e.pageY - _this.slider.offset().top;
                        if (!_this.slider.is(e.target)) {
                            _this.offsetY = 0;
                        }
                        _this.pane.addClass(_this.options.activeClass);
                        _this.doc.bind(MOUSEMOVE, _this.events[DRAG]).bind(MOUSEUP, _this.events[UP]);
                        _this.body.bind(MOUSEENTER, _this.events[ENTER]);
                        return false;
                    };
                }(this)),
                drag: (function (_this) {
                    return function (e) {
                        _this.sliderY = e.pageY - _this.$el.offset().top - _this.paneTop - (_this.offsetY || _this.sliderHeight * 0.5);
                        _this.scroll();
                        if (_this.contentScrollTop >= _this.maxScrollTop && _this.prevScrollTop !== _this.maxScrollTop) {
                            _this.$el.trigger('scrollend');
                        } else if (_this.contentScrollTop === 0 && _this.prevScrollTop !== 0) {
                            _this.$el.trigger('scrolltop');
                        }
                        return false;
                    };
                }(this)),
                up: (function (_this) {
                    return function (e) {
                        _this.isBeingDragged = false;
                        _this.pane.removeClass(_this.options.activeClass);
                        _this.doc.unbind(MOUSEMOVE, _this.events[DRAG]).unbind(MOUSEUP, _this.events[UP]);
                        _this.body.unbind(MOUSEENTER, _this.events[ENTER]);
                        return false;
                    };
                }(this)),
                resize: (function (_this) {
                    return function (e) {
                        _this.reset();
                    };
                }(this)),
                panedown: (function (_this) {
                    return function (e) {
                        _this.sliderY = (e.offsetY || e.originalEvent.layerY) - (_this.sliderHeight * 0.5);
                        _this.scroll();
                        _this.events.down(e);
                        return false;
                    };
                }(this)),
                scroll: (function (_this) {
                    return function (e) {
                        _this.updateScrollValues();
                        if (_this.isBeingDragged) {
                            return;
                        }
                        if (!_this.iOSNativeScrolling) {
                            _this.sliderY = _this.sliderTop;
                            _this.setOnScrollStyles();
                        }
                        if (e === null) {
                            return;
                        }
                        if (_this.contentScrollTop >= _this.maxScrollTop) {
                            if (_this.options.preventPageScrolling) {
                                _this.preventScrolling(e, DOWN);
                            }
                            if (_this.prevScrollTop !== _this.maxScrollTop) {
                                _this.$el.trigger('scrollend');
                            }
                        } else if (_this.contentScrollTop === 0) {
                            if (_this.options.preventPageScrolling) {
                                _this.preventScrolling(e, UP);
                            }
                            if (_this.prevScrollTop !== 0) {
                                _this.$el.trigger('scrolltop');
                            }
                        }
                    };
                }(this)),
                wheel: (function (_this) {
                    return function (e) {
                        var delta;
                        if (e === null) {
                            return;
                        }
                        delta = e.delta || e.wheelDelta || (e.originalEvent && e.originalEvent.wheelDelta) || -e.detail || (e.originalEvent && -e.originalEvent.detail);
                        if (delta) {
                            _this.sliderY += -delta / 3;
                        }
                        _this.scroll();
                        return false;
                    };
                }(this)),
                enter: (function (_this) {
                    return function (e) {
                        var _ref;
                        if (!_this.isBeingDragged) {
                            return;
                        }
                        if ((e.buttons || e.which) !== 1) {
                            return (_ref = _this.events)[UP].apply(_ref, arguments);
                        }
                    };
                }(this))
            };
        };
        FlezzScroll.prototype.addEvents = function () {
            var events;
            this.removeEvents();
            events = this.events;
            if (!this.options.disableResize) {
                this.win.bind(RESIZE, events[RESIZE]);
            }
            if (!this.iOSNativeScrolling) {
                this.slider.bind(MOUSEDOWN, events[DOWN]);
                this.pane.bind(MOUSEDOWN, events[PANEDOWN]).bind("" + MOUSEWHEEL + " " + DOMSCROLL, events[WHEEL]);
            }
            this.$content.bind("" + SCROLL + " " + MOUSEWHEEL + " " + DOMSCROLL + " " + TOUCHMOVE, events[SCROLL]);
        };
        FlezzScroll.prototype.removeEvents = function () {
            var events;
            events = this.events;
            this.win.unbind(RESIZE, events[RESIZE]);
            if (!this.iOSNativeScrolling) {
                this.slider.unbind();
                this.pane.unbind();
            }
            this.$content.unbind("" + SCROLL + " " + MOUSEWHEEL + " " + DOMSCROLL + " " + TOUCHMOVE, events[SCROLL]);
        };
        FlezzScroll.prototype.generate = function () {
            var contentClass, cssRule, currentPadding, options, pane, paneClass, sliderClass;
            options = this.options;
            paneClass = options.paneClass;
            sliderClass = options.sliderClass;
            contentClass = options.contentClass;
            if (!(pane = this.$el.children("." + paneClass)).length && !pane.children("." + sliderClass).length) {
                this.$el.append("<div class=\"" + paneClass + "\"><div class=\"" + sliderClass + "\" /></div>");
            }
            this.pane = this.$el.children("." + paneClass);
            this.slider = this.pane.find("." + sliderClass);
            if (BROWSER_SCROLLBAR_WIDTH === 0 && isFFWithBuggyScrollbar()) {
                currentPadding = window.getComputedStyle(this.content, null).getPropertyValue('padding-right').replace(/[^0-9.]+/g, '');
                cssRule = {
                    right: -14,
                    paddingRight: +currentPadding + 14
                };
            } else if (BROWSER_SCROLLBAR_WIDTH) {
                cssRule = {
                    right: -BROWSER_SCROLLBAR_WIDTH
                };
                this.$el.addClass(options.enabledClass);
            }
            if (cssRule !== null) {
                this.$content.css(cssRule);
            }
            return this;
        };
        FlezzScroll.prototype.restore = function () {
            this.stopped = false;
            if (!this.iOSNativeScrolling) {
                this.pane.show();
            }
            this.addEvents();
        };
        FlezzScroll.prototype.reset = function () {
            var content, contentHeight, contentPosition, contentStyle, contentStyleOverflowY, paneBottom, paneHeight, paneOuterHeight, paneTop, parentMaxHeight, right, sliderHeight;
            if (this.iOSNativeScrolling) {
                this.contentHeight = this.content.scrollHeight;
                return;
            }
            if (!this.$el.find("." + this.options.paneClass).length) {
                this.generate().stop();
            }
            if (this.stopped) {
                this.restore();
            }
            content = this.content;
            contentStyle = content.style;
            contentStyleOverflowY = contentStyle.overflowY;
            if (BROWSER_IS_IE7) {
                this.$content.css({
                    height: this.$content.height()
                });
            }
            contentHeight = content.scrollHeight + BROWSER_SCROLLBAR_WIDTH;
            parentMaxHeight = parseInt(this.$el.css("max-height"), 10);
            if (parentMaxHeight > 0) {
                this.$el.height("");
                this.$el.height(content.scrollHeight > parentMaxHeight ? parentMaxHeight : content.scrollHeight);
            }
            paneHeight = this.pane.outerHeight(false);
            paneTop = parseInt(this.pane.css('top'), 10);
            paneBottom = parseInt(this.pane.css('bottom'), 10);
            paneOuterHeight = paneHeight + paneTop + paneBottom;
            sliderHeight = Math.round(paneOuterHeight / contentHeight * paneHeight);
            if (sliderHeight < this.options.sliderMinHeight) {
                sliderHeight = this.options.sliderMinHeight;
            } else if ((this.options.sliderMaxHeight !== null) && sliderHeight > this.options.sliderMaxHeight) {
                sliderHeight = this.options.sliderMaxHeight;
            }
            if (contentStyleOverflowY === SCROLL && contentStyle.overflowX !== SCROLL) {
                sliderHeight += BROWSER_SCROLLBAR_WIDTH;
            }
            this.maxSliderTop = paneOuterHeight - sliderHeight;
            this.contentHeight = contentHeight;
            this.paneHeight = paneHeight;
            this.paneOuterHeight = paneOuterHeight;
            this.sliderHeight = sliderHeight;
            this.paneTop = paneTop;
            this.slider.height(sliderHeight);
            this.events.scroll();
            this.pane.show();
            this.isActive = true;
            if ((content.scrollHeight === content.clientHeight) || (this.pane.outerHeight(true) >= content.scrollHeight && contentStyleOverflowY !== SCROLL)) {
                this.pane.hide();
                this.isActive = false;
            } else if (this.el.clientHeight === content.scrollHeight && contentStyleOverflowY === SCROLL) {
                this.slider.hide();
            } else {
                this.slider.show();
            }
            this.pane.css({
                opacity: (this.options.alwaysVisible ? 1 : ''),
                visibility: (this.options.alwaysVisible ? 'visible' : '')
            });
            contentPosition = this.$content.css('position');
            if (contentPosition === 'static' || contentPosition === 'relative') {
                right = parseInt(this.$content.css('right'), 10);
                if (right) {
                    this.$content.css({
                        right: '',
                        marginRight: right
                    });
                }
            }
            return this;
        };
        FlezzScroll.prototype.scroll = function () {
            if (!this.isActive) {
                return;
            }
            this.sliderY = Math.max(0, this.sliderY);
            this.sliderY = Math.min(this.maxSliderTop, this.sliderY);
            this.$content.scrollTop(this.maxScrollTop * this.sliderY / this.maxSliderTop);
            if (!this.iOSNativeScrolling) {
                this.updateScrollValues();
                this.setOnScrollStyles();
            }
            return this;
        };
        FlezzScroll.prototype.scrollBottom = function (offsetY) {
            if (!this.isActive) {
                return;
            }
            this.$content.scrollTop(this.contentHeight - this.$content.height() - offsetY).trigger(MOUSEWHEEL);
            this.stop().restore();
            return this;
        };
        FlezzScroll.prototype.scrollTop = function (offsetY) {
            if (!this.isActive) {
                return;
            }
            this.$content.scrollTop(+offsetY).trigger(MOUSEWHEEL);
            this.stop().restore();
            return this;
        };
        FlezzScroll.prototype.scrollTo = function (node) {
            if (!this.isActive) {
                return;
            }
            this.scrollTop(this.$el.find(node).get(0).offsetTop);
            return this;
        };
        FlezzScroll.prototype.stop = function () {
            if (cAF && this.scrollRAF) {
                cAF(this.scrollRAF);
                this.scrollRAF = null;
            }
            this.stopped = true;
            this.removeEvents();
            if (!this.iOSNativeScrolling) {
                this.pane.hide();
            }
            return this;
        };
        FlezzScroll.prototype.destroy = function () {
            if (!this.stopped) {
                this.stop();
            }
            if (!this.iOSNativeScrolling && this.pane.length) {
                this.pane.remove();
            }
            if (BROWSER_IS_IE7) {
                this.$content.height('');
            }
            this.$content.removeAttr('tabindex');
            if (this.$el.hasClass(this.options.enabledClass)) {
                this.$el.removeClass(this.options.enabledClass);
                this.$content.css({
                    right: ''
                });
            }
            return this;
        };
        FlezzScroll.prototype.flash = function () {
            if (this.iOSNativeScrolling) {
                return;
            }
            if (!this.isActive) {
                return;
            }
            this.reset();
            this.pane.addClass(this.options.flashedClass);
            setTimeout((function (_this) {
                return function () {
                    _this.pane.removeClass(_this.options.flashedClass);
                };
            }(this)), this.options.flashDelay);
            return this;
        };
        return FlezzScroll;
    }());
    //
    ///* 4 *//* PRIVATE FUNTIONS */
    _elementStyle = document.createElement('div').style;
    _vendor = (function () {
        var i, transform, vendor, vendors, _i, _len;
        vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'];
        for (i = _i = 0, _len = vendors.length; _i < _len; i = ++_i) {
            vendor = vendors[i];
            transform = vendors[i] + 'ransform';
            if (transform in _elementStyle) {
                return vendors[i].substr(0, vendors[i].length - 1);
            }
        }
        return false;
    }());
    _prefixStyle = function (style) {
        if (_vendor === false) {
            return false;
        }
        if (_vendor === '') {
            return style;
        }
        return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
    };
    //
    transform = _prefixStyle('transform');
    hasTransform = transform !== false;
    getBrowserScrollbarWidth = function () {
        var outer, outerStyle, scrollbarWidth;
        outer = document.createElement('div');
        outerStyle = outer.style;
        outerStyle.position = 'absolute';
        outerStyle.width = '100px';
        outerStyle.height = '100px';
        outerStyle.overflow = SCROLL;
        outerStyle.top = '-9999px';
        document.body.appendChild(outer);
        scrollbarWidth = outer.offsetWidth - outer.clientWidth;
        document.body.removeChild(outer);
        return scrollbarWidth;
    };
    isFFWithBuggyScrollbar = function () {
        var isOSXFF, ua, version;
        ua = window.navigator.userAgent;
        isOSXFF = /(?=.+Mac OS X)(?=.+Firefox)/.test(ua);
        if (!isOSXFF) {
            return false;
        }
        version = /Firefox\/\d{2}\./.exec(ua);
        if (version) {
            version = version[0].replace(/\D+/g, '');
        }
        return isOSXFF && +version > 23;
    };
    //
    ///* 5 *//* PUBLIC FUNTIONS - METHODS */
    // define and expose our function
    $.fn.scrollable = function (settings) {
        return this.each(function () {
            var options, scrollbar;
            if (!(scrollbar = this.scrollable)) {
                options = $.extend({}, defaults, settings);
                this.scrollable = scrollbar = new FlezzScroll(this, options);
            }
            if (settings && typeof settings === "object") {
                $.extend(scrollbar.options, settings);
                if (settings.scrollBottom !== null) {
                    return scrollbar.scrollBottom(settings.scrollBottom);
                }
                if (settings.scrollTop !== null) {
                    return scrollbar.scrollTop(settings.scrollTop);
                }
                if (settings.scrollTo) {
                    return scrollbar.scrollTo(settings.scrollTo);
                }
                if (settings.scroll === 'bottom') {
                    return scrollbar.scrollBottom(0);
                }
                if (settings.scroll === 'top') {
                    return scrollbar.scrollTop(0);
                }
                if (settings.scroll && settings.scroll instanceof $) {
                    return scrollbar.scrollTo(settings.scroll);
                }
                if (settings.stop) {
                    return scrollbar.stop();
                }
                if (settings.destroy) {
                    return scrollbar.destroy();
                }
                if (settings.flash) {
                    return scrollbar.flash();
                }
            }
            return scrollbar.reset();
        });
    };
    $.fn.scrollable.Constructor = FlezzScroll;
    //
    ///* 6 *//* PUBLIC PROPERTIES */
    // define and expose plugin defaults
    $.fn.scrollable.defaults = {
        paneClass: 'scroll-bar',
        sliderClass: 'scroll-slider',
        contentClass: 'scroll-content',
        enabledClass: 'has-scrollbar',
        flashedClass: 'flashed',
        activeClass: 'active',
        iOSNativeScrolling: false,
        preventPageScrolling: false,
        disableResize: false,
        alwaysVisible: false,
        sliderMinHeight: 20,
        sliderMaxHeight: null,
        documentContext: null,
        windowContext: null
    };
    //
    // end of closure
}(jQuery));