# Telematics
<p><code>Fundamentos de Telemática</code></p>
<p>Creado por <code>Giancarlo Ortiz</code> para explicar los fundamentos de los <code>Sistemas de comunicaciones</code> en los cursos de telemática y redes de computadores.</p>

## Direccionamiento
La gestión de los servicios que ofrece un sistema de comunicaciones digital, pueden estar distribuidos en diferentes componentes de hardware y de software, los conocimientos para configurar estos componentes dependen del fabricante pero conociendo la base técnica es posible adaptar las soluciones a la perspectiva de las diferentes marcas. 

## Agenda
1. [Nombres en internet](#2-sistema-descentralizados).
1. [Números en internet](#2-sistema-descentralizados).
1. [Dirección IP](#1-sistemas-centralizados).
1. [direccionamiento IPv4](#3-seguridad).
1. [Redes](#3-redes).

<br>

---
# 1. [Nombres de internet](#agenda)
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
* https://es.wikipedia.org/wiki/Localizador_de_recursos_uniforme
* https://www.youtube.com/watch?v=4IuNKK2y49s
* ftp://ftp.rediris.es/sites/releases.ubuntu.com/23.04
* http://ftp.ufanet.ru/pub/firmware/

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


# 2. Números en internet
El [Encaminamiento][1] o enrutamiento es la función de buscar el camino mas optimo entre dos posibles nodos en un red formada por sistema de nodos interconectados.

[1]:https://es.wikipedia.org/wiki/Encaminamiento

* ><i>"Muchos matemáticos derivan parte de su autoestima sintiéndose orgullosos herederos de una larga tradición de pensamiento racional, me temo que idealizan sus ancestros culturales."</i><br>
<cite style="display:block; text-align: right">[Edsger Dijkstra](https://es.wikipedia.org/wiki/Edsger_Dijkstra)</cite>





---
## Mas Recursos
- [Teoría de grafos](https://es.wikipedia.org/wiki/Teor%C3%ADa_de_grafos) (Wikipedia)
- [Algoritmo de Bellman-Ford](https://es.wikipedia.org/wiki/Algoritmo_de_Bellman-Ford) (Wikipedia)
- [Algoritmo de Dijkstra](https://es.wikipedia.org/wiki/Algoritmo_de_Dijkstra) (Wikipedia)



- [Wiki Mikrotik](https://wiki.mikrotik.com/wiki/Main_Page) (Wiki)
- [Llamada a procedimiento remoto](https://es.wikipedia.org/wiki/Llamada_a_procedimiento_remotos) (Wikipedia)
- [Distributed Component Object Model](https://es.wikipedia.org/wiki/Modelo_de_Objetos_de_Componentes_Distribuidos) (Wikipedia)
- [Common Object Request Broker Architecture](https://es.wikipedia.org/wiki/CORBA) (Wikipedia)
- [Remote Method Invocation](https://es.wikipedia.org/wiki/Java_Remote_Method_Invocation) (Wikipedia)
- [Simple Object Access Protocol](https://es.wikipedia.org/wiki/Simple_Object_Access_Protocol) (Wikipedia)