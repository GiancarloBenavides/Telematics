# Telematics
<p><code>Fundamentos de Telemática</code></p>
<p>Creado por <code>Giancarlo Ortiz</code> para explicar los fundamentos de los <code>Sistemas de comunicación</code> en los cursos de telemática y redes de computadores.</p>

## Fundamentos
La administración y los servicios que ofrece un sistema de procesamiento digital, pueden estar distribuidos en diferentes componentes de hardware y según como organicen pueden ser clasificados.

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

### 1.1. Métricas ✔
Las métricas que se puede tener en cuenta para encontrar el camino mas optimo de comunicación entre dos nodos del sistema pueden ser:
* Numero de saltos (menor)
* Costo o distancia (menor)
* Tiempo de retardo (menor)

## 1.2. Métodos de encaminamiento ✔
Los métodos de encaminamiento puedes ser:
* __Estáticos o deterministas:__ la cuantificación de todas las métricas se hace fuera de linea y se mantiene inalterada ante un cambio de estado del sistema.
* __Dinámicos o adaptativos:__ la valoración de las métricas se modifica continuamente según los cambios de estado del sistema, cuantificando en cada iteración una solución del problema buscando que en un número de iteraciones converja a la solución optima.

### 1.2.1 Basados en vector de distancias ✔
El [vector de distancias][121] es un método que resuelve el problema de la ruta mas corta, calculando el costo entre cada nodo origen y los demás nodos del sistema consignando estos valores en una tabla que luego comparte con sus vecinos. Este método se usa para sistemas con un numero reducido de nodos porque no escala bien en sistemas demasiado grandes.

[121]:https://es.wikipedia.org/wiki/Vector_de_distancias

## 1.2.2 Basados en el estado del enlace ✔
El [estado del enlace][122] es un método que resuelve el problema de la ruta mas corta, calculando el costo entre el y sus vecinos y lo comunica a todos los nodos de la red. Este método converge rápidamente y escala bien en sistemas de muchos nodos.

[122]:https://es.wikipedia.org/wiki/Estado_de_enlace

## 1.3. Algoritmos de encaminamiento ✔
Son secuencias de instrucciones iterativas que convergen a encontrar el camino optimo entre cada nodo de una red.

```mermaid
graph TD;
    C-->A;
    B-->A;
    B-->C;
    C-->B;
    D-->B;
    E-->C;
    D-->E;
    D-->D;
```

### 1.3.1 Algoritmo de Bellman-Ford ✔
se usa en protocolos de encaminamiento basados en vector de distancias

### 1.3.2 Algoritmo de Dijkstra ✔

---
## Mas Recursos
- [Teoría de grafos](https://es.wikipedia.org/wiki/Teor%C3%ADa_de_grafos) (Wikipedia)
- [Problema de los dos generales](https://es.wikipedia.org/wiki/Problema_de_los_dos_generales) (Wikipedia)


- [Cadena de bloques](https://es.wikipedia.org/wiki/Cadena_de_bloques) (Wikipedia)
- [Red entre iguales](https://es.wikipedia.org/wiki/Peer-to-peer) (Wikipedia)


- [Llamada a procedimiento remoto](https://es.wikipedia.org/wiki/Llamada_a_procedimiento_remotos) (Wikipedia)


- [Distributed Component Object Model](https://es.wikipedia.org/wiki/Modelo_de_Objetos_de_Componentes_Distribuidos) (Wikipedia)
- [Common Object Request Broker Architecture](https://es.wikipedia.org/wiki/CORBA) (Wikipedia)
- [Remote Method Invocation](https://es.wikipedia.org/wiki/Java_Remote_Method_Invocation) (Wikipedia)
- [Simple Object Access Protocol](https://es.wikipedia.org/wiki/Simple_Object_Access_Protocol) (Wikipedia)