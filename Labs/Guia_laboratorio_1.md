# Telematics
<p><code>Fundamentos de Telemática</code></p>
<p>Creado por <code>Giancarlo Ortiz</code> para explicar los fundamentos de los <code>Sistemas de comunicaciones</code> en los cursos de telemática y redes de computadores.</p>

# Practica de laboratorio 01

## Objetivos 

### Objetivo General
Proporcionar el conocimiento y generar las habilidades necesarias en la configuración y gestión de dispositivos de redes.

### Objetivos Específicos:
- Conocer los números necesarios para configurar y caracterizar los diferentes dispositivos de red. :+1: 

---
## 1. [Configurar el entorno de trabajo](#) ✔
1. Instalar [VSCode][1_1]
2. Instalar [Git][1_2]
3. Crear una cuenta en [github][1_3]
4. Crear el repositorio en Github llamado <code>Redes-dos</code>
5. Instalar la [extension de github][1_4] para VScode
6. Agregar <code>Usuario</code> y <code>Correo</code> globalmente para Git.
7. Clonar el repositorio remoto desde VScode.

```bash
# Para agregar Usuario y Contraseña a GIT
$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com
```

[1_1]:https://code.visualstudio.com/download
[1_2]:https://git-scm.com/download/win
[1_3]:https://github.com/
[1_4]:https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github



## 2. [Preguntas de conocimiento](#) ✔

<ol type="a">
<li>¿Cual es la dirección de red y de broadcast de un host que tiene una ip 192.168.10.10/30 .?</li>
<li>¿Cuantos clientes puede tener la sub red 172.16.0.0/22?.</li>
<li>¿Que clase y tipo de dirección es 10.10.10.0/24?.</li>
<li>¿Que información se puede inferir de la dirección 169.254.255.200/26?.</li>
<li>¿Que información se puede inferir de la dirección 169.254.255.200/26?.</li>
</ol>

## 3. [Caracterización de los adaptadores](#) ✔
|Parámetro||Valor|
|--|:--:|--:|
|Número de adaptadores Físicos|-->|3|
|Número de adaptadores Virtuales|-->|7|
|Tipo de Adaptador principal|-->|Wi-fi|
|Fabricante del Adaptador principal|-->|Liteon Technology Corporation|
|Código MAC del fabricante|-->|3C-A0-67|
|MAC|-->|3C-A0-67-E8-D8-77|

>Nota: Para obtener los parámetros de la red, usaremos los comandos [ipconfig][10], [ifconfig][8], [getmac][9].


## 4. [Caracterización de la red](#) ✔
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


## 5. [Caracterización de la puerta de enlace](#) ✔
|Parámetro|Valor|
|--|--:|
|Número de Entradas en la tabla ARP |11|
|IPv4 Gateway|192.168.254.254|
|MAC Gateway|3C-A0-67-E8-D8-77|
|ISP|Dobleclick Software E Ingeneria|
|[IP Publica][5]|138.0.90.4|
|Sistema Autónomo|AS264646|


>Nota: Para obtener los parámetros de la red, usaremos el comando [arp][11] y algún servicio web/HTTP.


## 6. [Retardo de la red](#) ✔
|Servidor|IP|Tiempo promedio/ms|
|--|--|--|
|DNS Google|8.8.8.8||
|DNS Cloudflare|1.1.1.1||
|OpenDNS|||
|Alternate DNS|||
|DNS Quad9|||
|AdGuard DNS|||

>Nota: Para calcular el retardo de la red, usaremos el protocolo ICMP/[ping][12] con al menos 10 paquetes.


## 7. [Capacidad del canal](#) ✔
|Servidor|Ping/ms|Down/MB|Up/MB|
|--|:--:|--:|--:|
|[speed test][1]|39|96.4|69.2|
|[Netflix][2]|14|78|67|
|[Claro][3]|13|74|31|
|[nperf][4]|6.7|93.6|54.98|

>Nota: Para calcular el retardo de la red, usaremos el protocolo HTTP via servicio WEB.


## 8. [Distancia desde el host](#) ✔
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

## 9. [Diagrama de Red](#) ✔
- Realice un diagrama topológico de la red que le ofrece conectividad a internet.
- Incluya todos los detalles de la red de area local a la que se encuentra conectado.
- Incluya los saltos conocidos incluyendo el equipo de borde de su ISP.

## 10. [Preguntas de conocimiento](#) ✔
1. Cual es la dirección de red y de broadcast de un host que tiene una ip 192.168.10.10/30.
1. Cuantos equipos o.
1. Incluya los saltos conocidos incluyendo el equipo de borde de su ISP.



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
- [Protocolo Ipv4](https://es.wikipedia.org/wiki/IPv4) (Wikipedia)
- [Direccionamiento IP](https://es.wikipedia.org/wiki/Direcci%C3%B3n_IP) (Wikipedia)
- [Calculadora IP](https://www.calculator.net/ip-subnet-calculator.html) (Wikipedia)

---
## Evaluación y rúbrica
- Fecha máximo entrega: 05 de Mayo de 2023
- Hora de entrega: 11:59pm	
- Nota máxima: 5.0 
- Número de actividades: 10
- Valor de cada actividad: 0.5
- Ponderación: 20%
- $\color{#DD69DD}{\text{...Carpe Diem}}$