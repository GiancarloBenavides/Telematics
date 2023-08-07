# Telematics
<p><code>Fundamentos de Telemática</code></p>
<p>Creado por <code>Giancarlo Ortiz</code> para explicar los fundamentos de los <code>Sistemas de comunicaciones</code> en los cursos de telemática y redes de computadores.</p>

## Túneles
Un túnel en el contexto de las redes de ordenadores es un protocolo que encapsula otros protocolos y permite la comunicación segura entre dos puntos separados por una red pública o no controlada como Internet.

## Agenda
1. [Tunneling PtP](#1-tunneling-ptp).
1. [Tunneling PtMP](#1-tunneling-ptmp).
1. [Orientados a datagramas](#2-orientados-a-datagramas).
1. [VPN](#3-vpn).
1. [IPSec](#4-ipsec).

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
* Administración descentralizada.
* Fáciles de configurar pero inseguros.

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

# 2. [Tunneling PtMP](#agenda)
La técnica de [Tunneling][2] en un enlace [PtMP][2_] consiste en encapsular un protocolo de red sobre otro dentro de una red de computadoras para uno o varios puntos separados a una LAN segura.

[2]:https://es.wikipedia.org/wiki/T%C3%BAnel_(inform%C3%A1tica)#
[2_]:https://es.wikipedia.org/wiki/Red_multipunto

* ><i>"Muchos matemáticos derivan parte de su autoestima sintiéndose orgullosos herederos de una larga tradición de pensamiento racional, me temo que idealizan sus ancestros culturales."</i><br>
<cite style="display:block; text-align: right">[Edsger Dijkstra](https://es.wikipedia.org/wiki/Edsger_Dijkstra)</cite>

### 2.1. Características ✔
* Se utiliza en redes [VPN][21_1].
* Habituales para conectar la [ISP][21_2] con sus clientes.
* Autentificación [Radius][21_3].
* Administración centralizada.
* Difíciles de configurar pero seguros.

[11_1]:https://es.wikipedia.org/wiki/Red_de_%C3%A1rea_amplia
[11_2]:https://es.wikipedia.org/wiki/Proveedor_de_servicios_de_internet
[11_3]:https://es.wikipedia.org/wiki/Point-to-Point_Protocol

### 2.2. Ejemplos ✔
* [L2F][22_1] - layer 2 forwarding.
* [L2TP][22_2] - layer 2 tunneling protocol.
* [IPsec][22_3] - internet protocol security.


[22_1]:https://es.wikipedia.org/wiki/L2F
[22_2]:https://es.wikipedia.org/wiki/L2TP
[22_3]:https://es.wikipedia.org/wiki/IPsec



---
## Mas Recursos
- [Red punto a punto](https://es.wikipedia.org/wiki/Red_punto_a_punto) (Wikipedia)
- [Red multi-punto](https://es.wikipedia.org/wiki/Red_multipunto) (Wikipedia)
