# Telematics
<p><code>Fundamentos de Telemática</code></p>
<p>Creado por <code>Giancarlo Ortiz</code> para explicar los fundamentos de los <code>Sistemas de comunicaciones</code> en los cursos de telemática y redes de computadores.</p>

## Fundamentos
Una red de computadoras, red de ordenadores o red informática es un conjunto de equipos nodos y software conectados entre sí por medio de dispositivos físicos que envían y reciben impulsos eléctricos, ondas electromagnéticas o cualquier otro medio para el transporte de datos, con la finalidad de compartir información, recursos y ofrecer servicios.

## Agenda
1. [Dispositivos](#1-dispositivos).
1. [Protocolos](#2-protocolos).
1. [Organismos](#3-organismos).
1. [Tipos de Redes](#4-tipos-de-redes).

<br>

---
# 1. [Dispositivos](#agenda)
Un [dispositivo de red][1] es cualquier dispositivo físico (computadora, laptop, teléfono inteligente, impresora) que se conecta a una red para enviar y recibir datos.

[1]:https://es.wikipedia.org/wiki/Red_de_computadoras#Dispositivos_de_red



## 1.1. Tipos de dispositivos por funcionalidad ✔
* Cliente.
* Servidor.  
* De interconexión.

## 1.2. Dispositivos de interconexión ✔
* Concentrador de red ([__HUB__][12_1]).
* Puente de red ([__BRIDGE__][12_2]).
* Enrutador ([__ROUTER__][12_3]).

[12_1]:https://es.wikipedia.org/wiki/Concentrador
[12_2]:https://es.wikipedia.org/wiki/Puente_de_red
[12_3]:https://es.wikipedia.org/wiki/R%C3%BAter

## 1.3. Tipos de Puentes de red ✔
* Punto de acceso ([__AP__][13_1]).
* Conmutador ([__SWITCH__][13_2]).

[13_1]:https://es.wikipedia.org/wiki/Punto_de_acceso_inal%C3%A1mbrico
[13_2]:https://es.wikipedia.org/wiki/Conmutador_(dispositivo_de_red)/

## 1.4. Gestión de Dispositivos ✔
La gestión de los servicios que ofrece un sistema de comunicaciones digital, pueden estar distribuidos en diferentes componentes de hardware y de software, los conocimientos para configurar estos componentes dependen del fabricante pero conociendo la base técnica es posible adaptar las soluciones a la perspectiva de las diferentes marcas.

# 2. [Protocolos](#agenda)
Un [protocolo de comunicaciones][2] es un conjunto de reglas que permite que los dispositivos de red se comuniquen entre ellas para transmitir información por medio de cualquier tipo de variación de una magnitud física.

[2]:https://es.wikipedia.org/wiki/Protocolo_de_comunicaciones



## 2.1. Componentes ✔
Un protocolo podría incluir:
* Detección de portadora.
* Saludo - [__HANDSHAKE__][21_1].
* Autenticación - [__AUTH__][21_2].
* Negociación de condiciones (Formato, cifrado, corrección de errores).
* Inicio de Tx.
* Comprobación de errores - [__EDAC__][21_1].
* Finalización.

[21_1]:https://es.wikipedia.org/wiki/Establecimiento_de_comunicaci%C3%B3n
[21_2]:https://es.wikipedia.org/wiki/Detecci%C3%B3n_y_correcci%C3%B3n_de_errores
[21_3]:https://es.wikipedia.org/wiki/Detecci%C3%B3n_y_correcci%C3%B3n_de_errores

## 2.2. Capas ✔
|Capa| Nombre | Dispositivo |
|:--:|--|--|
|7|Aplicación|
|6|Presentación|
|5|sesión|
|4|Transporte|[TCP][22_6] - [UDP][22_7] - [ICMP][22_8]|
|3|red|[IP][22_5]|
|2|Enlace|[ARP][22_3] - [Ethernet][22_4]|
|1|Física|[1000BASE-T][22_1] - [802.11][22_2]|

[22_1]:https://es.wikipedia.org/wiki/1000BASE-T
[22_2]:https://es.wikipedia.org/wiki/IEEE_802.11
[22_3]:https://es.wikipedia.org/wiki/Protocolo_de_resoluci%C3%B3n_de_direcciones
[22_4]:https://es.wikipedia.org/wiki/Ethernet
[22_5]:https://es.wikipedia.org/wiki/Protocolo_de_internet
[22_6]:https://es.wikipedia.org/wiki/Protocolo_de_control_de_transmisi%C3%B3n
[22_7]:https://es.wikipedia.org/wiki/Protocolo_de_datagramas_de_usuario
[22_8]:https://es.wikipedia.org/wiki/Protocolo_de_control_de_mensajes_de_Internet



# 1. [Organismos](#agenda)
En  [organismo][3]


# 1. [Redes](#agenda)
Una [red informática][2] de ordenadores es un conjunto de equipos nodos y software conectados entre sí por medio de dispositivos físicos que envían y reciben impulsos eléctricos, ondas electromagnéticas o cualquier otro medio para el transporte de datos, con la finalidad de compartir información, recursos y ofrecer servicios.

IANA
ICANN
RIR
IXP
NSRC
NAP

El [Encaminamiento][1] o enrutamiento es la función de buscar el camino mas optimo entre dos posibles nodos en un red formada por sistema de nodos interconectados.

[1]:https://es.wikipedia.org/wiki/Encaminamiento

* ><i>"Muchos matemáticos derivan parte de su autoestima sintiéndose orgullosos herederos de una larga tradición de pensamiento racional, me temo que idealizan sus ancestros culturales."</i><br>
<cite style="display:block; text-align: right">[Edsger Dijkstra](https://es.wikipedia.org/wiki/Edsger_Dijkstra)</cite>


## 3.1. Tipos de sub-redes ✔

### 3.1.1. Redes por capa 
* Red conectada por concentradores - Dominio de colisión.
* Red conectada por conmutadores - dominio de difusión.  
* Red conectada por enrutadores - dominio de broadcast. 

### 3.1.2. Redes por tecnología
* Red Gpon - sobre Fibra óptica.
* Red Ethernet - sobre UTP.  
* Red HFC - Coaxial y fibra.  
* Red ADSL - sobre par trenzado telefónico.


## 1.2. Registro Regional de Internet ✔
Un Regional Internet Registry ([__RIR__][12]), es una organización que supervisa la asignación y el registro de números de Internet en una región del mundo. Los recursos incluyen direcciones IP (tanto IPv4 como IPv6) y números de sistemas autónomos (para su uso en encaminamiento BGP).

![](../img/rirs.svg)

[12]:https://es.wikipedia.org/wiki/Registro_Regional_de_Internet

## 1.3. Niveles de red ✔
El [nivel de una red][13] o proveedor de internet indica como participa esta con acuerdos de interconexión o peering en internet asi:

* __Red de nivel 1:__ ISP de mayor nivel cuya red que se empareja de forma gratuita con todas las redes de internet, sin comprar tránsito IP o pagar por interconexión.
* __Red de nivel 2:__ una red que se empareja de forma gratuita con algunas redes, pero compra tránsito IP o paga por emparejamiento para alcanzar al menos una parte de Internet.
* __Red de nivel 3:__ Una red que únicamente compra tránsito/peering de otras redes para participar en Internet.

[13]:https://es.wikipedia.org/wiki/Red_tier_1



---
## Mas Recursos
- [Wiki Mikrotik](https://wiki.mikrotik.com/wiki/Main_Page) (Wiki)
