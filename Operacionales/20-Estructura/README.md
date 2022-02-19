# Sistemas operacionales
<p><code>Fundamentos de sistemas operativos</code></p>
<p>Creado por <code>Giancarlo Ortiz</code> para explicar los fundamentos de los <code>Sistemas operativos</code></p>

## Agenda
1. [Componentes gestión](#1-componentes_de_gestión).
1. [Segunda generación](#2-segunda-generación).
1. [Tercera generación](#3-tercera-generación).
1. [Cuarta generación](#4-cuarta-generación).


---
# 1. Componentes de gestión
* Gestor de usuarios y permisos.
* Gestor de almacenamiento.
* Gestor de memoria.
* Gestor de entrada salida.
* Gestor de redes.


# 1 Usuarios y permisos.
* Crear, modificar y eliminar usuarios.
* Asignar roles a los usuarios.
* Asignar permisos a los roles y usuarios 


## 1.1. Algunos ejemplos Linux
| Comando |	Descripción | Comando |	Descripción |
|:---:|---|:---:|---|
| [useradd][man1] | Agrega un nuevo usuario | groupadd | Agrega un nuevo grupo de trabajo |
| [userdel][man2] | Borra un usuario | groupdel | Borra un grupo de trabajo |
| passwd | Permite cambiar la contraseña | adduser | Agrega usuarios a un grupo |
| id | Muestra datos de identificación del usuario | deluser | Elimina usuarios a un grupo |

[man1]:/?qf=useradd&af=0&sf=0&of=Ubuntu&tf=2
[man2]:https://man.cx/userdel(8)/es

### 1.2. Caso de uso
```ps
sudo useradd –g "operativos" –d /home/developer –m –s /bin/bash developer
sudo groupadd "operativos"
sudo useradd –g "operativos" –d /home/developer –m –s /bin/bash developer
nano /etc/passwd
```


# 2. Almacenamiento
* Agregar y eliminar dispositivos del sistema de archivos.
* Crear, leer, modificar y eliminar directorios.
* Crear, leer, modificar y eliminar archivos.
* Modificar propiedades de directorios y archivos.


## 2.1. Algunos ejemplos Linux
| Comando |	Descripción |
|---|---|
| mount	 | Monta un dispositivo almacenamiento |
| umount | Desmonta un dispositivo almacenamiento |
| mkfs | Da formato a un dispositivo |
| mkdir | Crea un directorio |
| rmdir | Borra directorios vacíos |
| rm | Borra archivos de un directorio |
| cp | Copia archivos entre directorios |
| mv | Mueve archivos y directorios |
| find | Busca archivos en un directorio |



---
## Mas Recursos
- [Sistema operativo](https://es.wikipedia.org/wiki/Sistema_operativo) (Wikipedia)
- [Historia de los SO](https://es.wikipedia.org/wiki/Historia_de_los_sistemas_operativos) (Wikipedia)
- [Lista de SO](https://es.wikipedia.org/wiki/Anexo:Sistemas_operativos) (Wikipedia)
- [Cronología de los SO](https://es.wikipedia.org/wiki/Anexo:Cronolog%C3%ADa_de_los_sistemas_operativos) (Wikipedia)
- [Comparación de SO](https://es.wikipedia.org/wiki/Anexo:Comparaci%C3%B3n_de_sistemas_operativos) (Wikipedia)
- [Usage share of operating systems](https://en.wikipedia.org/wiki/Usage_share_of_operating_systems) (Wikipedia)