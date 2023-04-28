# Telematics
<p><code>Fundamentos de Telemática</code></p>
<p>Creado por <code>Giancarlo Ortiz</code> para explicar los fundamentos de los <code>Sistemas de comunicaciones</code> en los cursos de telemática y redes de computadores.</p>

## Fundamentos
La gestión de los servicios que ofrece un sistema de comunicaciones digital, pueden estar distribuidos en diferentes componentes de hardware y de software, los conocimientos para configurar estos componentes dependen del fabricante pero conociendo la base técnica es posible adaptar las soluciones a la perspectiva de las diferentes marcas. 

## Agenda
1. [Encaminamiento](#2-sistema-descentralizados).
1. [Sistemas Autónomos](#1-sistemas-centralizados).
1. [Seguridad](#3-seguridad).
1. [Redes](#3-redes).

<br>

---
# 1. Encaminamiento
El [Encaminamiento][1] o enrutamiento es la función de buscar el camino mas optimo entre dos posibles nodos en un red formada por sistema de nodos interconectados.

[1]:https://es.wikipedia.org/wiki/Encaminamiento

* ><i>"Muchos matemáticos derivan parte de su autoestima sintiéndose orgullosos herederos de una larga tradición de pensamiento racional, me temo que idealizan sus ancestros culturales."</i><br>
<cite style="display:block; text-align: right">[Edsger Dijkstra](https://es.wikipedia.org/wiki/Edsger_Dijkstra)</cite>

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


### 1.3.1 Algoritmo de Bellman-Ford ✔
El 3 de febrero de 2011, la IANA asignó los últimos bloques libres a los RIRs, efectivamente agotando el pool de direcciones IPv4 disponibles

### 1.3.2 Algoritmo de Dijkstra ✔



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