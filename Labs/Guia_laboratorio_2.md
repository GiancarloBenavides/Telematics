# Telematics
<p><code>Fundamentos de Telemática</code></p>
<p>Creado por <code>Giancarlo Ortiz</code> para explicar los fundamentos de los <code>Sistemas de comunicaciones</code> en los cursos de telemática y redes de computadores.</p>

# Practica de laboratorio 02

## Objetivos 

### Objetivo General
Proporcionar el conocimiento y generar las habilidades necesarias en la configuración y gestión de dispositivos de redes.

### Objetivos Específicos:
- Conocer los números necesarios para configurar el direccionamiento de una red de area local. :+1: 

---
## 1. [Configurar el entorno de trabajo](#) ✔
1. Cree si no existe el repositorio [__"REDES-2"__][1_2] en su cuenta de github.
1. Agregue un archivo llamado [__"laboratorio_2.md"__][1_2] a este repositorio.
1. Invite a los compañeros de grupo como colaboradores en este repositorio.
1. Documente cada uno de los items a continuación.


[1_2]:https://github.com/GiancarloBenavides

## 2. [Preguntas reflexivas de ambientación](#) ✔

<ol type="a">
<li>¿Como se llama la interfaz donde se conecta los cables UTP.?</li>
<li>¿Que significa POE IN y POE OUT en una interfaz?.</li>
<li>¿Que utilidad tiene la interfaz USB en los Enrutadores?.</li>
<li>¿Que utilidad tiene la interfaz SFP en los Enrutadores?.</li>
<li>¿Que tipos de interface Ethernet se pueden encontrar en los Enrutadores?.</li>
</ol>

## 3. [Caracterizar el CPE TP-LINK](#) ✔
|Parámetro||Valor|
|--|:--:|--:|
|Marca|-->||
|Referencia|-->||
|Velocidad de la CPU|-->||
|Tamaño de la memoria RAM|-->||
|Sistema Operativo|-->||
|Tipo de WIFI|-->||
|Voltaje DC|-->||

## 4. [Configurar básica de CPE TP-LINK](#) ✔
1. Conecte los equipos a la red eléctrica.
1. [Reiniciar][4_1] el dispositivo a la configuración de fabrica.
1. Conectar el equipo mediante un patchcord (latiguillo) al equipo y a internet.
1. [Acceder][4_2] al dispositivo via protocolo http desde el navegador web.
1. Cambiar el nombre del dispositivo para identificarlo.
1. Configurar la direccionamiento WAN para lograr conectividad con la red externa.
1. Configurar la direccionamiento LAN y DHCP para lograr conectividad con la red interna.
1. Configurar la seguridad WLAN para lograr conectividad inalámbrica.
1. Habilitar la gestión remota del dispositivo desde cualquier IP.
1. Realizar pruebas [PING][4_3] a DNS Cloudflare desde el dispositivo.
1. Realizar pruebas [PING][4_3] a DNS Cloudflare desde el computador conectado por UTP.
1. Realizar pruebas [TRACEROUTE][4_4] a DNS Google desde el router.
1. Realizar pruebas [TRACEROUTE][4_4] a DNS Google desde el Computador conectado por UTP.
1. Realizar pruebas [TRACEROUTE][4_4] a DNS Google desde un dispositivo conectado por WIFI.
1. Realizar un backup de la configuración del equipo.

>Router: [TP-LINK][4_5] -> reiniciar: [Con el Router encendido dejamos presionado el botón reset durante 10 segundos hasta  LED SYS/PWR parpadee rápidamente][4_1] acceder: [conectar con la admin:admin@tplinkwifi.net][4_2]

[4_1]:https://www.tp-link.com/ar/support/faq/497/
[4_2]:https://static.tp-link.com/res/down/doc/TL-WR840N(ES)_V2_QIG.pdf
[4_3]:https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/ping
[4_4]:https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/tracert
[4_5]:https://www.tp-link.com/co/home-networking/wifi-router/tl-wr840n/

## 5. [Caracterizar la ONT HUAWEI](#) ✔
|Parámetro||Valor|
|--|:--:|--:|
|Marca|-->||
|Referencia|-->||
|Velocidad de la CPU|-->||
|Tamaño de la memoria RAM|-->||
|Sistema Operativo|-->||
|Tipo de WIFI|-->||
|Voltaje DC|-->||

## 6. [Configurar básica de ONT HUAWEI](#) ✔
1. Conecte los equipos a la red eléctrica.
1. [Reinicie][6_1] los dispositivos a la configuración de fabrica.
1. Conecte los equipo mediante un patchcord (latiguillo) al equipo y a internet.
1. [Acceder][6_2] al dispositivo via protocolo http desde el navegador web.
1. Configurar la direccionamiento LAN y DHCP para lograr conectividad con la red interna.
1. Reservar una IP Fija en la red interna para la MAC del un computador (Servidor).
1. Configurar la seguridad WLAN para lograr conectividad inalámbrica.
1. Habilitar la gestión remota del dispositivo desde cualquier IP.
1. Realizar pruebas [PING][4_3] a la puerta de enlace desde el computador conectado por UTP (Servidor).
1. Realizar pruebas [PING][4_3] a la puerta de enlace desde el computador conectado por WIFI (Cliente).
1. Realizar pruebas [PING][6_3] a la puerta de enlace desde un teléfono Movil conectado por WIFI.
1. Listar los dispositivos por tipo que aparecen en "DHCP Information".
1. Mapear el puerto 80 del router para que redirija a un servicio [Python][6_4] en un computador.
1. Verificar que se puede acceder al servicio (pagina web) desde los dos clientes (móvil y PC).
1. Realizar un backup de la configuración del equipo.

>ONT: [HUAWEI][6_5] -> reiniciar:[Con el Router encendido dejamos presionado el botón reset durante 2 segundos hasta  hasta que los LEDs se apaguen][4_1]

[6_1]:https://consumer.huawei.com/co/support/content/es-us15855743/
[6_2]:https://forum.huawei.com/enterprise/es/%C2%BFc%C3%B3mo-iniciar-sesi%C3%B3n-en-ont-de-huawei/thread/636939-100243
[6_3]:https://play.google.com/store/apps/details?id=com.lipinic.ping&hl=es_419&gl=US
[6_4]:https://docs.python.org/3.10/library/http.server.html
[6_5]:https://support.huawei.com/enterprise/es/access-network/echolife-hg8546m-pid-21465065

## 7. [Caracterizar el router MikroTik](#) ✔
|Parámetro||Valor|
|--|:--:|--:|
|Marca|-->||
|Referencia|-->||
|Velocidad de la CPU|-->||
|Tamaño de la memoria RAM|-->||
|Sistema Operativo|-->||
|Tipo de WIFI|-->||
|Voltaje DC|-->||

## 8. [Configurar básica de router MikroTik](#) ✔
1. Conecte los equipos a la red eléctrica.
1. [Reinicie][8_1] los dispositivos a la configuración de fabrica.
1. Conecte los equipo mediante un patchcord (latiguillo) al equipo y a internet.
1. Cambiar el nombre del dispositivo para identificarlo.
1. Cambiar la contraseña de acceso como administrador. 
1. Configurar la direccionamiento WAN para lograr conectividad con la red externa.
1. Configurar la direccionamiento LAN y DHCP para lograr conectividad con la red interna.
1. Configurar la seguridad WLAN para lograr conectividad inalámbrica.
1. Habilitar la gestión remota del dispositivo desde cualquier IP.
1. Realizar pruebas de diagnostico PING y traceroute desde el equipo.
1. Realizar un backup de la configuración del equipo.

>__Reset Mikrotik:__ [Con el botón de reset presionado encendemos el equipo. Dejamos presionado el botón reset durante 2-3 segundos hasta que veamos parpadear alguno de los LEDs de servicio][1_1]

[8_1]:https://wiki.mikrotik.com/wiki/Manual:Reset

## 9. [Diagrama de Red](#) ✔
- Realice un diagrama topológico de cada uno de los casos de estudio.
- Incluya todos los detalles de la red de area local a la que se encuentra conectado.
- Incluya los saltos conocidos incluyendo el equipo de borde de su ISP.

## 10. [Preguntas de conocimiento](#) ✔
1. ¿Cuál es el retardo esperado para tu red según la tecnología contratada?
1. ¿Coincide el retardo medido con el esperado para tu red según la tecnología contratada? ¿Por qué?
1. ¿Por qué varia la capacidad del canal en las distintas pruebas realizadas?
1. ¿Cuál de los servicios DNS es mejor para configurar mi LAN?
1. ¿Como podría medir la disponibilidad de ni conexión a internet?


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