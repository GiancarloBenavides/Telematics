# Sistemas operacionales
<p><code>Fundamentos de sistemas operativos</code></p>
<p>Creado por <code>Giancarlo Ortiz</code> para explicar los fundamentos de los <code>Sistemas operativos</code></p>

## Estructura
Un SO es complejo y solo puede entenderse dividiendo su operación en piezas funcionales mas pequeñas, definiendo cuidadosamente entradas, salidas de cada proceso.

## Agenda
1. [Multi-tarea](#1-multi-tarea).
1. [Jerarquía de Memoria](#2-jerarquía-de-memoria).
1. [Protección de memoria](#3-protección-de-memoria).
1. [Cuarta generación](#4-cuarta-generación).

<br>

---
# 1. Multi-tarea
La [multi-tarea][1_0] es la característica de los SO que permite que varios procesos o aplicaciones se ejecuten aparentemente al mismo tiempo, compartiendo uno o más procesadores.

* ><i>"Al aumentar nuestra capacidad de obtener, procesar y distribuir información, la demanda de procesamiento de información cada vez más complejo crece incluso con más celeridad."</i><br>
<cite style="display:block; text-align: right">[Andrew S. Tanenbaum](https://es.wikipedia.org/wiki/Andrew_S._Tanenbaum)</cite>

[1_0]:https://es.wikipedia.org/wiki/Multitarea


# 1.1. Requisitos mínimos
* Gestión del hardware.
* Permitir seleccionar entre tareas listas para ejecutar.
* Decidir que procesos pueden interrumpir la ejecución de tareas.
* Asignar memoria a las tareas que lo demandan.
* Permitir acceso a los dispositivos a aquellas tareas que lo requieren.

## 1.2. Gestión del hardware
* [Gestor de dispositivos (entrada/salida)][1_1].
* [Gestor de memoria][1_2].
* [Gestor de procesamiento][1_3]. 

[1_1]:https://es.wikipedia.org/wiki/Arquitectura_del_sistema_de_E/S
[1_2]:https://es.wikipedia.org/wiki/Gesti%C3%B3n_de_memoria
[1_3]:https://es.wikipedia.org/wiki/Proceso_(inform%C3%A1tica)#

## 1.3. Diagrama de estados
![diagrama de estado](img/process_state.svg)

## 1.4. Componentes relacionados
* [__Scheduler:__][21] Planificador de tareas.
* [__Driver:__][22] Controladores de dispositivo.
* [__MMU:__][23] Unidad de gestión de memoria.
* [__PCB :__][24] Bloque de control del proceso.

[21]:https://es.wikipedia.org/wiki/Planificador
[22]:https://es.wikipedia.org/wiki/Controlador_de_dispositivo
[23]:https://es.wikipedia.org/wiki/Unidad_de_gesti%C3%B3n_de_memoria
[24]:https://es.wikipedia.org/wiki/Bloque_de_control_del_proceso

## 1.4 Maquina Extendida
![mapa de procesos](img/extended_machine.svg)

# 2. Jerarquía de memoria
La [jerarquía de memoria][2_0] es la organización piramidal de la memoria en niveles de acceso para optimizar el rendimiento y el costo basándose en el principio de cercanía de referencias.

* ><i>"Una buena ingeniería de software requiere la diferenciación entre la especificación y la implementación."</i><br>
<cite style="display:block; text-align: right">[Andrew S. Tanenbaum](https://es.wikipedia.org/wiki/Andrew_S._Tanenbaum)</cite>

[2_0]:https://es.wikipedia.org/wiki/Jerarqu%C3%ADa_de_memoria

## 2.1. 

# 3. Protección de memoria
La [protección de memoria][3_0] es un método para controlar que las tareas que se ejecutan en multi-tarea no interfieran entre si evitando que un proceso acceda a la memoria que no le ha sido asignada.

* ><i>"Al aumentar nuestra capacidad de obtener, procesar y distribuir información, la demanda de procesamiento de información cada vez más complejo crece incluso con más celeridad."</i><br>
<cite style="display:block; text-align: right">[Andrew S. Tanenbaum](https://es.wikipedia.org/wiki/Andrew_S._Tanenbaum)</cite>

[3_0]:https://es.wikipedia.org/wiki/Protecci%C3%B3n_de_memoria



# 1. Gestión del software
* Gestor de usuarios y permisos.
* Gestor de almacenamiento.
* Gestor de redes.





# 1 Usuarios y permisos.
* Crear, modificar y eliminar usuarios.
* Asignar roles a los usuarios.
* Asignar permisos a los roles y usuarios 




### 1.1. Algunos ejemplos <img title="Linux" width="12" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"/>

| Comando |	Descripción |
|:---|:---|
| [useradd][man_1] | Agrega un nuevo usuario |
| [userdel][man_2] | Borra un usuario |
| [passwd][man_3]  | Permite cambiar la contraseña |
| [id][man_4] | Muestra identificación del usuario |
| [groupadd][man_5] | Agrega un nuevo grupo de trabajo |
| [groupdel][man_6] | Borra un grupo de trabajo |
| [adduser][man_7] | Agrega usuarios a un grupo |
| [deluser][man_8] | Elimina usuarios a un grupo |


# 2. Almacenamiento
* Agregar y eliminar dispositivos del sistema de archivos.
* Crear, leer, modificar y eliminar directorios.
* Crear, leer, modificar y eliminar archivos.
* Modificar propiedades de directorios y archivos.


## 2.1. Algunos ejemplos <img title="Linux" width="12" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"/>

| Comando |	Descripción |
|---|---|
| [mount][man_9] | Monta un dispositivo almacenamiento |
| [umount][man_10] | Desmonta un dispositivo almacenamiento |
| [mkfs][man_11] | Da formato a un dispositivo |
| [mkdir][man_12] | Crea un directorio |
| [rmdir][man_13] | Borra directorios vacíos |
| [rm][man_14] | Borra archivos de un directorio |
| [cp][man_15] | Copia archivos entre directorios |
| [mv][man_16] | Mueve archivos y directorios |
| [find][man_17] | Busca archivos en un directorio |

[man_1]:http://www.polarhome.com/service/man/?qf=useradd&af=0&sf=0&of=Ubuntu&tf=2
[man_2]:http://www.polarhome.com/service/man/?qf=userdel&af=0&sf=0&of=Ubuntu&tf=2
[man_3]:http://www.polarhome.com/service/man/?qf=passwd&af=0&sf=0&of=Ubuntu&tf=2
[man_4]:http://www.polarhome.com/service/man/?qf=id&af=0&sf=0&of=Ubuntu&tf=2
[man_5]:http://www.polarhome.com/service/man/?qf=groupadd&af=0&sf=0&of=Ubuntu&tf=2
[man_6]:http://www.polarhome.com/service/man/?qf=groupdel&af=0&sf=0&of=Ubuntu&tf=2
[man_7]:http://www.polarhome.com/service/man/?qf=adduser&af=0&sf=0&of=Ubuntu&tf=2
[man_8]:http://www.polarhome.com/service/man/?qf=deluser&af=0&sf=0&of=Ubuntu&tf=2

[man_9]:http://www.polarhome.com/service/man/?qf=mount&af=0&sf=0&of=Ubuntu&tf=2
[man_10]:http://www.polarhome.com/service/man/?qf=umount&af=0&sf=0&of=Ubuntu&tf=2
[man_11]:http://www.polarhome.com/service/man/?qf=mkfs&af=0&sf=0&of=Ubuntu&tf=2
[man_12]:http://www.polarhome.com/service/man/?qf=mkdir&af=0&sf=0&of=Ubuntu&tf=2
[man_13]:http://www.polarhome.com/service/man/?qf=rmdir&af=0&sf=0&of=Ubuntu&tf=2
[man_14]:http://www.polarhome.com/service/man/?qf=rm&af=0&sf=0&of=Ubuntu&tf=2
[man_15]:http://www.polarhome.com/service/man/?qf=cp&af=0&sf=0&of=Ubuntu&tf=2
[man_16]:http://www.polarhome.com/service/man/?qf=mv&af=0&sf=0&of=Ubuntu&tf=2
[man_17]:http://www.polarhome.com/service/man/?qf=find&af=0&sf=0&of=Ubuntu&tf=2

### 1.2. Caso de uso
```ps
sudo useradd –g "operativos" –d /home/developer –m –s /bin/bash developer
sudo groupadd "operativos"
sudo useradd –g "operativos" –d /home/developer –m –s /bin/bash developer
nano /etc/passwd

adduser {{username}}

 - Create a new user with a default home directory and prompt the user to set a password:
   adduser {{username}}

 - Create a new user without a home directory:
   adduser --no-create-home {{username}}

 - Create a new user with a home directory at the specified path:
   adduser --home {{path/to/home}} {{username}}

 - Create a new user with the specified shell set as the login shell:
   adduser --shell {{path/to/shell}} {{username}}

 - Create a new user belonging to the specified group:
   adduser --ingroup {{group}} {{username}}


```





---
## Mas Recursos
- [Sistema operativo](https://es.wikipedia.org/wiki/Sistema_operativo) (Wikipedia)
- [Historia de los SO](https://es.wikipedia.org/wiki/Historia_de_los_sistemas_operativos) (Wikipedia)
- [Lista de SO](https://es.wikipedia.org/wiki/Anexo:Sistemas_operativos) (Wikipedia)
- [Cronología de los SO](https://es.wikipedia.org/wiki/Anexo:Cronolog%C3%ADa_de_los_sistemas_operativos) (Wikipedia)
- [Comparación de SO](https://es.wikipedia.org/wiki/Anexo:Comparaci%C3%B3n_de_sistemas_operativos) (Wikipedia)
- [Usage share of operating systems](https://en.wikipedia.org/wiki/Usage_share_of_operating_systems) (Wikipedia)