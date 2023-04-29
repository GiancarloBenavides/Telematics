# Telematics
<p><code>Fundamentos de Telemática</code></p>
<p>Creado por <code>Giancarlo Ortiz</code> para explicar los fundamentos de los <code>Sistemas de comunicaciones</code> en los cursos de telemática y redes de computadores.</p>

# Practica de laboratorio 01

## Método de trabajo
La valoración continua del desempeño académico estima convenientemente los resultados del proceso de enseñanza-aprendizaje y aporta realimentación de las competencias adquiridas, lo que es crucial para mejorar el proceso y finalmente contribuir positivamente en el desarrollo de la futura vida profesional de los estudiantes.

De conformidad con lo anterior se ha diseñado el trabajo de este laboratorio; donde cada una de las actividades evalúa conceptos fundamentales relacionados con el desarrollo de la cátedra e incluidos en la programación temática de la asignatura. 

## Reglas de juego
1. Lea cuidadosamente la totalidad de las indicaciones de este documento, procure leer y analizar todas las actividades antes de iniciar con el desarrollo del laboratorio. 
2. Inicie el desarrollo de cada uno de los ítems propuestos usando las herramientas que ofrece la plataforma propuesta y siga en orden el desarrollo de cada uno de los pasos propuestos en la guía.
3. En el desarrollo de la sesión, se proponen textos y videos de referencia; se recomienda la revisión cuidadosa de este material en el orden que se propone.
4. Recuerde que el profesor o los estudiantes podrán en el tiempo que dure el taller hacer preguntas, aclaraciones o correcciones de las actividades que se considere.
5. Algunas prácticas de laboratorio pueden durar más de una sección, pero no es necesario enviar o guardar los desarrollos parciales.
6. Por tratarse de una herramienta colaborativa en línea, el profesor y tus compañeros pueden colaborar con el desarrollo de las actividades y revisar simultáneamente los avances.
7. En lo posible no descargues el documento antes de finalizar la actividad.
8. Una vez finalizadas todas las actividades comparte el correo del repositorio al correo del tutor.


## Objetivos

### Objetivo General
Proporcionar el conocimiento y generar las habilidades necesarias en la configuración y gestión de dispositivos de redes.

### Objetivos Específicos:
- Conocer los diferentes dispositivos de redes según el entorno de aplicabilidad.
- Conocer la configuración y despliegue de protocolos de asignación de direccionamiento IP.
- Conocer la configuración, afinamiento y puesta en marcha de firewall’s sobre los dispositivos de redes.
- Desplegar un hotspot, su portal cautivo y políticas de control de ancho de banda
- Conocer la configuración y despliegue de redes privadas virtuales sobre dispositivos de red.

---

## 1. Caracterización de los adaptadores
|Parámetro||Valor|
|--|:--:|--:|
|Número de adaptadores Físicos|-->|3|
|Número de adaptadores Virtuales|-->|7|
|Tipo de Adaptador principal|-->|Wi-fi|
|Fabricante del Adaptador principal|-->|Liteon Technology Corporation|
|Código MAC del fabricante|-->|3C-A0-67|
|MAC|-->|3C-A0-67-E8-D8-77|

>Nota: Para obtener los parámetros de la red, usaremos los comandos [ipconfig][10], [ifconfig][8], [getmac][9].


## 2. Caracterización de la red
|Parámetro|Valor|
|--|--:|
|__Subnet__|192.168.254.0/24|
|IPv4|192.168.254.104|
|Subnet Mask decimal|24|
|Subnet Mask octetos|255.255.255.0|
|Número de direcciones de Host|254|
|Rango de direcciones de Host|192.168.254.1-254|
|IP Broadcast|192.168.254.255|
|Server DHCP|192.168.254.254|
|Server DNS|8.8.8.8|

>Nota: Para obtener los parámetros de la red, usaremos el comando [ipconfig][10] o [ifconfig][8].


## 3. Caracterización de la puerta de enlace
|Parámetro|Valor|
|--|--:|
|Número de Entradas en la tabla ARP |11|
|IPv4 Gateway|192.168.254.254|
|MAC Gateway|3C-A0-67-E8-D8-77|
|ISP|Dobleclick Software E Ingeneria|
|[IP Publica][5]|138.0.90.4|
|Sistema Autónomo|AS264646|


>Nota: Para obtener los parámetros de la red, usaremos el comando [arp][11] y algún servicio web/HTTP.


## 4. Retardo de la red
|Servidor|IP|Tiempo promedio/ms|
|--|--|--|
|DNS Google|8.8.8.8||
|DNS Cloudflare|1.1.1.1||
|OpenDNS|||
|Alternate DNS|||
|DNS Quad9|||
|AdGuard DNS|||

>Nota: Para calcular el retardo de la red, usaremos el protocolo ICMP/[ping][12] con al menos 10 paquetes.


## 5. Capacidad del canal
|Servidor|Ping/ms|Down/MB|Up/MB|
|--|:--:|--:|--:|
|[speed test][1]|39|96.4|69.2|
|[Netflix][2]|14|78|67|
|[Claro][3]|13|74|31|
|[nperf][4]|6.7|93.6|54.98|

>Nota: Para calcular el retardo de la red, usaremos el protocolo HTTP via servicio WEB.


## 6. Distancia desde el host
|Servidor|Ping/ms|Numero de Saltos|
|--|:--:|--:|
|google.com|14|10|
|GMail.com|15|9|
|YouTube.com|14|10|
|dns.google|15|9|
|aws.amazon.com|154|17|
|portal.azure.com|13|11|
|login.live.com|88|22|
|Facebook.com|120|11|
|c.ns.WhatsApp.net|151|12|
|claro.com.co|151|12|
|platzi.com|122|11|
|rappi.com.co|184|30|

>Nota: Para calcular el retardo de la red, usaremos el comando ICMP/[tracert][13].


---

[1]:https://www.speedtest.net/es
[2]:https://fast.com/es/#
[3]:http://speedtest.claro.net.co/
[4]:https://www.nperf.com/es/
[5]:https://www.cual-es-mi-ip.net/

[8]:https://man7.org/linux/man-pages/man8/ifconfig.8.html
[9]:https://learn.microsoft.com/es-es/windows-server/administration/windows-commands/getmac
[10]:https://learn.microsoft.com/es-es/windows-server/administration/windows-commands/ipconfig
[11]:https://learn.microsoft.com/es-es/windows-server/administration/windows-commands/arp
[12]:https://learn.microsoft.com/es-es/windows-server/administration/windows-commands/ping
[13]:https://learn.microsoft.com/es-es/windows-server/administration/windows-commands/tracert


---
## Mas Recursos
- [Teoría de grafos](https://es.wikipedia.org/wiki/Teor%C3%ADa_de_grafos) (Wikipedia)