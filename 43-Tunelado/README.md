# Telematics
<p><code>Fundamentos de Telemática</code></p>
<p>Creado por <code>Giancarlo Ortiz</code> para explicar los fundamentos de los <code>Sistemas de comunicaciones</code> en los cursos de telemática y redes de computadores.</p>

## Túneles
Un túnel en el contexto de las redes de ordenadores es un protocolo que encapsula otros protocolos y permite la comunicación segura entre dos puntos separados por una red pública o no controlada como Internet.

## Agenda
1. [Tunneling PtP](#1-tunneling-ptp).
1. [Tunneling PtMP orientado a datagramas](#2-tunneling-ptmp-arientado-a-datagramas).
1. [Tunneling PtMP orientado a flujo](#3-orientados-a-datagramas).
1. [VPN](#4-vpn).

<br>

---
# 1. [Tunneling PtP](#agenda)
La técnica de [Tunneling][1] en un enlace [PtP][1_] consiste en encapsular un protocolo de red sobre otro dentro de una red de computadoras para aislar la conexión entre dos puntos.

[1]:https://es.wikipedia.org/wiki/T%C3%BAnel_(inform%C3%A1tica)#
[1_]:https://es.wikipedia.org/wiki/Red_punto_a_punto

* ><i>"Muchos matemáticos derivan parte de su autoestima sintiéndose orgullosos herederos de una larga tradición de pensamiento racional, me temo que idealizan sus ancestros culturales."</i><br>
<cite style="display:block; text-align: right">[Edsger Dijkstra](https://es.wikipedia.org/wiki/Edsger_Dijkstra)</cite>

### 1.1. Características ✔
* Se utiliza en redes [WAN][11_1] de largo alcance.
* Habituales para conectar la [ISP][11_2] con sus clientes.
* Autentificación [PPP][11_3].
* Veloces, fáciles de configurar pero inseguros.
* Administración descentralizada.


[11_1]:https://es.wikipedia.org/wiki/Red_de_%C3%A1rea_amplia
[11_2]:https://es.wikipedia.org/wiki/Proveedor_de_servicios_de_internet
[11_3]:https://es.wikipedia.org/wiki/Point-to-Point_Protocol

### 1.2. Ejemplos ✔
* [PPTP][12_1] - point-to-Point tunneling protocol.
* [PPPoE][12_2] - point-to-point protocol over Ethernet.
* [PPPoA][12_3] - point-to-point protocol over ATM.

[12_1]:https://es.wikipedia.org/wiki/PPTP
[12_2]:https://es.wikipedia.org/wiki/PPPoE
[12_3]:https://es.wikipedia.org/wiki/PPPoA

# 2. [Tunneling PtMP orientado a datagramas](#agenda)
La técnica de [Tunneling][2] en un enlace [PtMP][2_] consiste en encapsular un protocolo de red sobre otro dentro de una red de computadoras para conectar uno o varios puntos separados en una LAN segura.

[2]:https://es.wikipedia.org/wiki/T%C3%BAnel_(inform%C3%A1tica)#
[2_]:https://es.wikipedia.org/wiki/Red_multipunto

* ><i>"Muchos matemáticos derivan parte de su autoestima sintiéndose orgullosos herederos de una larga tradición de pensamiento racional, me temo que idealizan sus ancestros culturales."</i><br>
<cite style="display:block; text-align: right">[Edsger Dijkstra](https://es.wikipedia.org/wiki/Edsger_Dijkstra)</cite>

### 2.1. Características ✔
* Se utiliza en redes [VPN][21_1].
* Habituales para conectar [CPE][21_2] con seguridad.
* Autentificación [PPP][11_3] y [Radius][21_3].
* Administración centralizada.
* Difíciles de configurar pero seguros.

[11_1]:https://es.wikipedia.org/wiki/Red_de_%C3%A1rea_amplia
[11_2]:https://es.wikipedia.org/wiki/Customer_Premises_Equipment
[11_3]:https://es.wikipedia.org/wiki/RADIUS

### 2.2. Ejemplos ✔
* [GRE][22_1] - generic routing encapsulation.
* [L2F][22_2] - layer 2 forwarding.
* [L2TP][22_3] - layer 2 tunneling protocol.

[22_1]:https://es.wikipedia.org/wiki/GRE
[22_2]:https://es.wikipedia.org/wiki/L2F
[22_3]:https://es.wikipedia.org/wiki/L2TP


# 3. [Tunneling PtMP orientado a flujo](#agenda)
La técnica de [Tunneling][2] en un enlace [PtMP][2_] consiste en encapsular un protocolo de red sobre otro dentro de una red de computadoras para uno o varios puntos separados a una LAN segura.

[2]:https://es.wikipedia.org/wiki/T%C3%BAnel_(inform%C3%A1tica)#
[2_]:https://es.wikipedia.org/wiki/Red_multipunto

* ><i>"Muchos matemáticos derivan parte de su autoestima sintiéndose orgullosos herederos de una larga tradición de pensamiento racional, me temo que idealizan sus ancestros culturales."</i><br>
<cite style="display:block; text-align: right">[Edsger Dijkstra](https://es.wikipedia.org/wiki/Edsger_Dijkstra)</cite>

### 3.1. Características ✔
* Se utiliza en redes [VPN][31_1].
* Habituales para conexiones seguras entre redes.
* Autentificación con certificado.
* Administración centralizada.
* Difíciles de configurar pero seguros.
* Transmisión continua.

[11_1]:https://es.wikipedia.org/wiki/Red_de_%C3%A1rea_amplia
[11_2]:https://es.wikipedia.org/wiki/Proveedor_de_servicios_de_internet
[11_3]:https://es.wikipedia.org/wiki/Point-to-Point_Protocol

### 3.2. Ejemplos ✔
* [IKEv2][22_1] - Internet key exchange version 2.
* [SSTP][22_2] - Secure Socket Tunneling Protocol.
* [IPsec][22_3] - internet protocol security.


[22_1]:https://es.wikipedia.org/wiki/L2F
[22_2]:https://es.wikipedia.org/wiki/L2TP
[22_3]:https://es.wikipedia.org/wiki/IPsec

<br>

---
## Mas Recursos
- [Red punto a punto](https://es.wikipedia.org/wiki/Red_punto_a_punto) (Wikipedia)
- [Red multi-punto](https://es.wikipedia.org/wiki/Red_multipunto) (Wikipedia)
