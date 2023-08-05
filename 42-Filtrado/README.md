# Telematics
<p><code>Fundamentos de Telemática</code></p>
<p>Creado por <code>Giancarlo Ortiz</code> para explicar los fundamentos de los <code>Sistemas de comunicaciones</code> en los cursos de telemática y redes de computadores.</p>

## Filtrado
En un sistema informático o una red informática debe diseñarse con la capacidad de bloquear el acceso no autorizado a servicios o recursos de red privilegiados, permitiendo al mismo tiempo comunicaciones autorizadas y a servicios públicos. 

## Agenda
1. [Cortafuegos](#1-cortafuegos).
1. [ACLs](#2-utm).
1. [UTM](#3-utm).

<br>

---
# 1. [Cortafuegos](#agenda)
Un [Cortafuegos][1] es un componente de software o hardware de un sistema informático diseñado para filtrar el acceso a los recursos de comunicaciones; evitando el acceso no autorizado y permitiendo al mismo tiempo comunicaciones autorizadas.

[1]:https://es.wikipedia.org/wiki/Cortafuegos_(inform%C3%A1tica)#

* ><i>"Los clientes insatisfechos son la mejor fuente de aprendizaje."</i><br>
<cite style="display:block; text-align: right">[Bill Gates](https://es.wikipedia.org/wiki/Bill_Gates)</cite>

## 1.1. Características ✔
* Es [firewall][13_1] un subsistema del sistema o red informática.
* El subsistema esta diseñado para bloquear el [acceso no autorizado][13_2].
* La implementación puede ser por software como en [ufw][13_3] [ipfw][13_4] en las computadores.
* La implementación puede ser por hardware como en las [UTM][13_5].
* Las ultimas generaciones pueden incluir herramientas de [inteligencia artificial][13_6] para detectar amenazas.

[13_1]:https://es.wikipedia.org/wiki/Cortafuegos_(inform%C3%A1tica)#
[13_2]:https://es.wikipedia.org/wiki/Acceso
[13_3]:https://es.wikipedia.org/wiki/Uncomplicated_Firewall
[13_4]:https://es.wikipedia.org/wiki/Ipfw
[13_5]:https://es.wikipedia.org/wiki/Unified_Threat_Management
[13_6]:https://es.wikipedia.org/wiki/Inteligencia_artificial

### 1.2. Generaciones de cortafuegos ✔
* [Primera generación:][131_1] filtrado de paquetes. 
* [Segunda generación:][131_2] cortafuegos de estado de paquetes.
* [Tercera generación:][131_3] cortafuegos de aplicación.

[131_1]:https://es.wikipedia.org/wiki/Cortafuegos_(inform%C3%A1tica)#Primera_generaci.C3.B3n_.E2.80.93_cortafuegos_de_red:_filtrado_de_paquetes
[131_2]:https://es.wikipedia.org/wiki/Cortafuegos_stateful
[131_3]:https://es.wikipedia.org/wiki/Cortafuegos_(inform%C3%A1tica)#Tercera_generaci.C3.B3n_.E2.80.94_cortafuegos_de_aplicaci.C3.B3n


# 2. [ACLs](#agenda)
Las [Listas de control de acceso][1] es un mecanismo para determinar los permisos de acceso apropiados a un determinado objeto, dependiendo de ciertos aspectos del proceso que hace el pedido.

[2]:https://es.wikipedia.org/wiki/Lista_de_control_de_acceso

* ><i>"Los clientes insatisfechos son la mejor fuente de aprendizaje."</i><br>
<cite style="display:block; text-align: right">[Bill Gates](https://es.wikipedia.org/wiki/Bill_Gates)</cite>

## 2.1. Aplicaciones ✔
* Sistemas de archivos.
* Sistemas de bases de datos.
* Redes de Computadoras.

## 2.2. Redes de computadoras ✔
* Similares a un Cortafuegos.
* Permiten controlar el flujo del tráfico.
* Su principal objetivo es filtrar tráfico.
* Pero puede categorizar el trafico.


# 3. [UTM](#agenda)
Un [Cortafuegos][1] es un componente de hardware de un sistema informático diseñado para ofrecer multiples funciones en un único dispositivo de red; incluyendo al menos un antivirus, un cortafuegos y un sistema de detección/prevención de intrusos.

[3]:https://es.wikipedia.org/wiki/Unified_Threat_Management

* ><i>"Los clientes insatisfechos son la mejor fuente de aprendizaje."</i><br>
<cite style="display:block; text-align: right">[Bill Gates](https://es.wikipedia.org/wiki/Bill_Gates)</cite>

## 3.2. Servicios ✔
* Cortafuegos - Filtro de contenidos, NAT.
* Antivirus - antispam, antiphishing, antispyware.
* Tuneles - VPN.
* Detección/Prevención de Intrusos (IDS/IPS).

## 3.2. Ventajas ✔
* Flexibilidad
* Bajo costo
* Reduce la complejidad
* Integración Completa

## 3.3. Desventajas ✔
* Único punto de falla
* Puede tener problemas de rendimiento al tener todas las herramientas activas.
* Para algunos servicios requiere suscripción.

---
## Mas Recursos
- [Wiki Mikrotik](https://wiki.mikrotik.com/wiki/Main_Page) (Wiki)
- [LDAP](https://es.wikipedia.org/wiki/Protocolo_ligero_de_acceso_a_directorios) (Wikipedia)
- [NFS](https://es.wikipedia.org/wiki/Network_File_System) (Wikipedia)
- [ufw](https://es.wikipedia.org/wiki/Uncomplicated_Firewall) (Wikipedia)