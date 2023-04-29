# Telematics
<p><code>Fundamentos de Telemática</code></p>
<p>Creado por <code>Giancarlo Ortiz</code> para explicar los fundamentos de los <code>Sistemas de comunicaciones</code> en los cursos de telemática y redes de computadores.</p>


## Caracterización de los adaptadores
|Parámetro||Valor|
|--|:--:|--:|
|Número de adaptadores Físicos|-->|3|
|Número de adaptadores Virtuales|-->|7|
|Tipo de Adaptador principal|-->|Wi-fi|
|Fabricante del Adaptador principal|-->|Liteon Technology Corporation|
|Código MAC del fabricante|-->|3C-A0-67|
|MAC|-->|3C-A0-67-E8-D8-77|

>Nota: Para obtener los parámetros de la red, usaremos los comandos ipconfig, ifconfig, getmac.

## Caracterización de la red
|Parámetro|Valor|
|--|--:|
|__Subnet__|192.168.254.0/24|
|IPv4|192.168.254.104|
|Subnet Mask|255.255.255.0|
|IP Broadcast|192.168.254.255|
|IPv4 Gateway|192.168.254.254|
|Server DHCP|192.168.254.254|
|Server DNS|8.8.8.8|

>Nota: Para obtener los parámetros de la red, usaremos el comando ipconfig o ifconfig.

## Retardo de la red
* Para calcular el retardo de la red, usaremos el protocolo ICMP con al menos 10 paquetes.

|Servidor|IP|Tiempo promedio|
|--|--|--|
|DNS Google|8.8.8.8||
|DNS Cloudflare|1.1.1.1||
|OpenDNS|||
|Alternate DNS|||
|DNS Quad9|||
|AdGuard DNS|||
