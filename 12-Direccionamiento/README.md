# Telematics
<p><code>Fundamentos de Telemática</code></p>
<p>Creado por <code>Giancarlo Ortiz</code> para explicar los fundamentos de los <code>Sistemas de comunicaciones</code> en los cursos de telemática y redes de computadores.</p>

## Direccionamiento
La gestión de los servicios que ofrece un sistema de comunicaciones digital, pueden estar distribuidos en diferentes componentes de hardware y de software, los conocimientos para configurar estos componentes dependen del fabricante pero conociendo la base técnica es posible adaptar las soluciones a la perspectiva de las diferentes marcas. 

## Agenda
1. [Nombres usados en redes](#1-nombres-usados-en-redes).
1. [Etiquetas numéricas en las redes](#2-numeros-en-internet).
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


# 2. [Números en internet](#agenda)
Existen varias [etiquetas][2_1] numéricas que identifican recursos en una red, posiblemente una [interfaz][2_2] en un dispositivo o incluso un subsistema de red.


[2_1]:https://es.wikipedia.org/wiki/Encaminamiento
[2_2]:https://es.wikipedia.org/wiki/Tarjeta_de_red

* ><i>"El Internet reside en que cualquier persona puede acceder a él."</i><br>
<cite style="display:block; text-align: right">[Vinton Cerf](https://es.wikipedia.org/wiki/Vinton_Cerf)</cite>

## 2.1. Dirección IP ✔
Una dirección IP es una etiqueta numérica que identifica de manera lógica y jerárquica a una interfaz que utiliza el [protocolo de internet][21_1] para conectar un dispositivo a una red.

[21_1]:https://es.wikipedia.org/wiki/Protocolo_de_internet


### 2.1.1. Direcciones IPv4
Las direcciones [IPV4][211] se expresan mediante un número binario de 32 bits (4 bytes) permitiendo un espacio de $2^{32}$ direcciones únicas posibles, aproximadamente 4.294 Millones.

|Octeto| 1 byte | 2 byte  | 3 byte  | 4 byte |
|--|:--:|:--:|:--:|:--:|
|__Decimal__ | 192 | __168__ | 254 | __172__ |
|__Binario__ | 11000000 | __10101000__ | 11111110 | __10101100__ |
|__Bites__   | 8 | 16 | 24 | 32 |

[211]:https://es.wikipedia.org/wiki/IPv4


### 2.1.2. Direcciones IPv6
Las direcciones [IPV6][212] se expresan mediante un número binario de 128 bits (16 bytes) permitiendo un espacio de $2^{128}$ direcciones posibles, aproximadamente 340 sextillones.

|Octeto| 4 byte | 8 byte  | 12 byte  | 16 byte |
|--|:--:|:--:|:--:|:--:|
|__Decimal__ | 192 | __168__ | 254 | __172__ |
|__Binario__ | 11000000 | __10101000__ | 11111110 | __10101100__ |
|__Bites__   | 8 | 16 | 24 | 32 |


[212]:https://es.wikipedia.org/wiki/IPv6


# 3. [Sub-redes](#agenda)
Existen varias [etiquetas][2_1] numéricas que identifican recursos en una red, posiblemente una [interfaz][2_2] en un dispositivo o incluso un subsistema de red.


[2_1]:https://es.wikipedia.org/wiki/Encaminamiento
[2_2]:https://es.wikipedia.org/wiki/Tarjeta_de_red

* ><i>"El Internet reside en que cualquier persona puede acceder a él."</i><br>
<cite style="display:block; text-align: right">[Vinton Cerf](https://es.wikipedia.org/wiki/Vinton_Cerf)</cite>


#### 2.1.1.1 Tipo de direcciones IPv4
De las $2^{32}$ 
De estas direcciones 16 Millones son privadas y 268 Millones de multidifusión


---
## Mas Recursos
- [Registro Regional de Internet](https://es.wikipedia.org/wiki/Registro_Regional_de_Internet) (Wiki)
- [Protocolo de internet](https://es.wikipedia.org/wiki/Protocolo_de_internet) (Wiki)
- [Tarjeta de red](https://es.wikipedia.org/wiki/Tarjeta_de_red) (Wiki)
- [Wiki Mikrotik](https://wiki.mikrotik.com/wiki/Main_Page) (Wiki)

