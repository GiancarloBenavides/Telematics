# Telematics
<p><code>Fundamentos de Telemática</code></p>
<p>Creado por <code>Giancarlo Ortiz</code> para explicar los fundamentos de los <code>Sistemas de comunicaciones</code> en los cursos de telemática y redes de computadores.</p>

## Direccionamiento
A cada dispositivo o host que se conecta a una red IP como Internet se le asigna al menos una dirección única en esa red. Esta dirección es utilizada por los protocolos de internet de la capa tres y superiores para garantizar una comunicación segura y sin errores.

## Agenda
1. [Nombres usados en redes](#1-nombres-usados-en-redes).
1. [Etiquetas numéricas](#2-etiquetas-numéricas).
1. [Sub-redes](#3-sub-redes).


<br>

---
# 1. [Nombres usados en redes](#agenda)
Un [Dominio][1] es un nombre que identifica un area dentro de una red, en internet existen distintos tipos de dominios.

[1]:https://es.wikipedia.org/wiki/Dominio_de_internet

* ><i>"Afectas al mundo por lo que navegas."</i><br>
<cite style="display:block; text-align: right">[Tim Berners-Lee](https://es.wikipedia.org/wiki/Tim_Berners-Lee)</cite>


## 1.1. Niveles de Dominio ✔
En internet existen subdominios de dentro de un dominio y dominios de nivel superior que agrupan dominios, esto se agrupa en el nombre de 

<code>Nombre de un host:</code>
... [subdominio][11_1] . [dominio][1] . [dominio_de_nivel_superior][11_2] ...

<code>Ejemplos:</code>
* https://mikrotik.com/
    * https://help.mikrotik.com/docs/
    * https://wiki.mikrotik.com/wiki/
    * https://mum.mikrotik.com/

[11_1]:https://es.wikipedia.org/wiki/Subdominio
[11_2]:https://es.wikipedia.org/wiki/Dominio_de_nivel_superior


## 1.2. Identificador de recursos uniforme ✔
Una [URI][12_1] o identificador de recursos uniforme es una cadena de caracteres que identifica los recursos físicos o virtuales de una red de forma unívoca.

![Componentes uri](../img/uri_.svg)

[12_1]:https://es.wikipedia.org/wiki/Identificador_de_recursos_uniforme


### 1.2.1. Componentes.
Algunos elementos posibles son:
* __Esquema:__ identificador de una especificación o protocolo.
* __Autoridad de nombres:__ estructura jerárquico de nombres (dominio).
* __Ruta:__ Información jerárquica, que identifica un recurso.
* __Consulta:__ Información no jerárquica que identifica un recurso.
* __Fragmento:__ identificador de una parte del recurso.


### 1.2.2. Ejemplos
Algunos ejemplos de recursos son:
* https://es.wikipedia.org/wiki/Localizador_de_recursos_uniforme
* https://www.youtube.com/watch?v=4IuNKK2y49s
* [ftp://ftp.rediris.es/sites/releases.ubuntu.com/23.04][11_3]
* http://ftp.ufanet.ru/pub/firmware/

[11_3]:ftp://ftp.rediris.es/sites/releases.ubuntu.com/23.04


</br>


# 2. [Etiquetas numéricas](#agenda)
Existen varias [etiquetas][2_1] numéricas que identifican recursos en una red, posiblemente una [interfaz][2_2] en un dispositivo o incluso un subsistema de red.


[2_1]:https://es.wikipedia.org/wiki/Encaminamiento
[2_2]:https://es.wikipedia.org/wiki/Tarjeta_de_red

* ><i>"El Internet reside en que cualquier persona puede acceder a él."</i><br>
<cite style="display:block; text-align: right">[Vinton Cerf](https://es.wikipedia.org/wiki/Vinton_Cerf)</cite>

## 2.1. Historia ✔
* __1981:__ El [Protocolo de Internet][21_1] fue presentado por Darpa.
* __1983:__ El [RFC:791][21_2] o protocolo IPv4 se convierte en el estándar de internet.
* __1985:__ El [RFC:950][21_3] agrega sub-redes al direccionamiento.
* __1987:__ El [RFC:1009][21_4] agrega sub-redes de tamaño variable.
* __1993:__ El [RFC:1519][21_5] agrega enrutamiento sin clases CIDR.
* __1994:__ Los [RFC:1597][21_6] y [RFC:1631][21_7] agrega direcciones privadas y traducción de direcciones.
* __1995:__ El [RFC:1771][21_8] agrega enrutamiento en sistemas autónomos por BGP.
* __1998:__ El [RFC:2460][21_9] inicia el desarrollo formal de IPv6.
* __2017:__ El [RFC:8200][21_10] o protocolo IPv6 se convierte en el estándar de internet.


[21_1]:https://es.wikipedia.org/wiki/Protocolo_de_internet
[21_2]:https://datatracker.ietf.org/doc/html/rfc791
[21_3]:https://datatracker.ietf.org/doc/html/rfc950
[21_4]:https://datatracker.ietf.org/doc/html/rfc1009
[21_5]:https://datatracker.ietf.org/doc/html/rfc1519
[21_6]:https://datatracker.ietf.org/doc/html/rfc1597
[21_7]:https://datatracker.ietf.org/doc/html/rfc1631
[21_8]:https://datatracker.ietf.org/doc/html/rfc1771
[21_9]:https://datatracker.ietf.org/doc/html/rfc2460
[21_10]:https://datatracker.ietf.org/doc/html/rfc8200


## 2.2. Dirección IP ✔
* Una IP es etiqueta numérica para identificar de manera lógica y jerárquica a una interfaz.
* Un dispositivo puede tener mas de una interfaz para conectarse a la red.
* Una parte de este número identifica la red y otra el equipo dentro de esa red.
* La cantidad de hosts de una red es el número de IP's posibles menos dos.
* La primera dirección esta reservada para el nombre de la sub-red.
* La segunda esta reservada para la dirección de broadcast.


### 2.2.1. Direcciones IPv4
Las direcciones [IPV4][221] se expresan mediante un número binario de 32 bits (4 bytes) permitiendo un espacio de $2^{32}$ direcciones únicas posibles, aproximadamente 4.294 Millones.

<code>Ejemplo:</code> representar la ip [__192.168.254.172__](#) en formato binario.

|Octeto| 1 byte | 2 byte  | 3 byte  | 4 byte |
|--|:--:|:--:|:--:|:--:|
|__Decimal__ | 192 | __168__ | 254 | __172__ |
|__Binario__ | 11000000 | __10101000__ | 11111110 | __10101100__ |
|__Bites__   | 8 | 16 | 24 | 32 |

[221]:https://es.wikipedia.org/wiki/Direcci%C3%B3n_IP


### 2.2.2. Direcciones IPv6
Las direcciones [IPV6][222] se expresan mediante un número binario de 128 bits (16 bytes) permitiendo un espacio de $2^{128}$ direcciones posibles, aproximadamente 340 sextillones.

<code>Ejemplo:</code> representar los primeros 64 bits de la ip [__2001:0DB8:AC10:FE01:1319:8A2E:0370:7334__](#) en formato binario.

|Octeto| 2 byte | 4 byte  | 6 byte  | 8 byte |
|--|:--:|:--:|:--:|:--:|
|__Hexadecimal__ | 2001 | __0DB8__ | AC10 | __FE01__ |
|__Binario__ | 0010 0000 0000 0001 | __0000 1101 1011 1000__ | 1010 1100 0001 0000 | __1111 1110 0000 0001__ |
|__Bites__   | 16 | 32 | 48 | 64 |


[222]:https://es.wikipedia.org/wiki/Direcci%C3%B3n_IPv6

## 2.3. Número de Sistema Autónomo (ASN) ✔
* Los números ASN están definidos por un número entero de 32 bits.
* Permitiendo un espacio de $2^{32}$ números o 4.294 Millones de ASN únicos posibles.
* Unos cuantos están reservados y no se pueden usar por los operadores.
* Los intervalos 64512–65534 y 4200000000–4294967294 son para uso privado.
* Los números ASN son asignados en bloques por la IANA a las RIR.
* Los RIR asignan los ASN públicos a los operadores.
* En 2021 existen Mas de 100.000 redes autónomas publicas en internet.

</br>

# 3. [Sub-redes](#agenda)
En sistemas de comunicación digital, una [sub-red][3] es un subsistema que tiene algún grado de independencia pero que pertenece a otro grupa mas grande y dentro de ese conjunto opera con otros subsistemas. Todos los dispositivos conectados a internet pertenecen a diferentes tipos de redes según su tamaño, alcance o tecnología.

[3]:https://es.wikipedia.org/wiki/Subred

* ><i>"No puedes mirar en la bola de cristal y ver el futuro. Lo que Internet será en el futuro es lo que la sociedad haga de él.."</i><br>
<cite style="display:block; text-align: right">[Robert Kahn](https://es.wikipedia.org/wiki/Robert_Kahn)</cite>

## 3.1. Mascara de Red ✔
* La mascara de red es una técnica para optimizar el uso de las direcciones IP.
* Indica que porción de la dirección ip etiqueta la red y cual etiqueta el host dentro de esa red.
* El numero de bits que etiquetan los host están en la parte baja de la dirección IP.
* Esta técnica permite dividir una red en sub-redes jerarquicamente.
* La cantidad de hosts de una sub-red es el número de IP's posibles menos dos.
* La primera dirección esta reservada para el nombre de la sub-red.
* La segunda esta reservada para la dirección de broadcast.


## 3.1.1. Mascaras Classful - [1985][311] ✔
|Mascara de red|Clase|Inicio|Fin|Red|Broadcast|
|--|:--:|--|--|--:|--:|
|255.0.0.0|__A__|0000 $\overline{0}$|0111 $\overline{1}$|0.0.0.0|127.255.255.255|
|255.255.0.0|__B__|1000 $\overline{0}$|1011 $\overline{1}$|128.0.0.0|191.255.255.255|
|255.255.255.0|__C__|1100 $\overline{0}$|1101 $\overline{1}$|192.0.0.0|223.255.255.255|
|255.255.255.255|__D__|1110 $\overline{0}$|1110 $\overline{1}$|224.0.0.0|239.255.255.255|
|255.255.255.255|__E__|1111 $\overline{0}$|1111 $\overline{1}$|240.0.0.0|255.255.255.255|

[311]:https://es.wikipedia.org/wiki/Subred

</br>

## 3.1.2. Mascaras de tamaño variable - [1987][312] ✔

|Mascara de red|Clase|Inicio|Fin|Red|Broadcast|
|--|:--:|--|--|--:|--:|
|255.0.0.0|__A__|0000 $\overline{0}$|0111 $\overline{1}$|0.0.0.0|127.255.255.255|
|255.255.0.0|__B__|1000 $\overline{0}$|1011 $\overline{1}$|128.0.0.0|191.255.255.255|
|255.255.255.0|__C__|1100 $\overline{0}$|1101 $\overline{1}$|192.0.0.0|223.255.255.255|
|255.255.255.255|__D__|1110 $\overline{0}$|1110 $\overline{1}$|224.0.0.0|239.255.255.255|
|255.255.255.255|__E__|1111 $\overline{0}$|1111 $\overline{1}$|240.0.0.0|255.255.255.255|

</br>

## 3.1.3. Mascaras para enrutamiento entre dominios sin clases - [1993][312] ✔


<p>0&#773;</p>
0&#x305;


#### 2.1.1.1 Tipo de direcciones IPv4
De las $2^{32}$ 
De estas direcciones 16 Millones son privadas y 268 Millones de multidifusión


 un rango de direcciones lógicas
Cuando una red se vuelve muy grande, conviene dividirla en sub-redes, esta técnica de direccionamiento ayuda a optimizar las  
Existen varias [etiquetas][2_1] numéricas que identifican recursos en una red, posiblemente una [interfaz][2_2] en un dispositivo o incluso un subsistema de red.

---
## Mas Recursos
- [Registro Regional de Internet](https://es.wikipedia.org/wiki/Registro_Regional_de_Internet) (Wiki)
- [Protocolo de internet](https://es.wikipedia.org/wiki/Protocolo_de_internet) (Wiki)
- [Protocolo IPv4](https://es.wikipedia.org/wiki/IPv4) (Wiki)
- [Protocolo IPv6](https://es.wikipedia.org/wiki/IPv6) (Wiki)
- [Tarjeta de red](https://es.wikipedia.org/wiki/Tarjeta_de_red) (Wiki)
- [Dirección MAC](https://es.wikipedia.org/wiki/Direcci%C3%B3n_MAC) (Wiki)
- [Wiki Mikrotik](https://wiki.mikrotik.com/wiki/Main_Page) (Wiki)


|Clase|Superiores|Red|host|
|:--:|:--:|:--:|:--:|
|A|0xx|5|24|
|B|10x|13|16|
|C|110|21|8|