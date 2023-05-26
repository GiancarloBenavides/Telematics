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

## Parámetros:
Para todos los efectos:
* la letra G  de se reemplaza por el número de grupo de laboratorio.
* la letra C  de se reemplaza por el ultimo número de cédula del estudiante.


## 1. [Configurar el entorno de trabajo](#) ✔
1. Cree si no existe el repositorio [__"REDES-2"__][1_2] en su cuenta de github.
1. Agregue un archivo llamado [__"laboratorio_2.md"__][1_2] a este repositorio.
1. Invite a los compañeros de grupo como colaboradores en este repositorio.
1. Documente cada uno de los items a continuación con capturas de pantalla y código .

>Nota: recuerde que los [parámetros](#parámetros) son validos en todo el laboratorio.

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
1. Configurar la direccionamiento LAN con una IP privada, clase C para lograr conectividad con la red interna.
1. Configurar el [DHCP][dhcp] para que asigne 20 direcciones IP entre [G](#parámetros).200-[G](#parámetros).220.
1. Configurar la [WLAN][wlan] de nombre y [PSK](psk) "REDES_4[G](#parámetros)" para lograr conectividad inalámbrica.
1. Realizar pruebas [PING][4_3] a DNS Cloudflare desde el dispositivo.
1. Realizar pruebas [PING][4_3] a DNS Cloudflare desde el computador conectado por UTP.
1. Realizar pruebas [TRACEROUTE][4_4] a DNS Google desde el router.
1. Realizar pruebas [TRACEROUTE][4_4] a DNS Google desde el Computador conectado por UTP.
1. Realizar pruebas [TRACEROUTE][4_4] a DNS Google desde un dispositivo conectado por WIFI.
1. Habilitar la gestión remota del dispositivo desde cualquier IP.
1. Realizar un backup de la configuración del equipo.

>Router: [TP-LINK][4_5] -> reiniciar: [Con el Router encendido dejamos presionado el botón reset durante 10 segundos hasta  LED SYS/PWR parpadee rápidamente][4_1] acceder: [conectar con la cadena admin:admin@tplinkwifi.net][4_2]

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
1. Configurar la direccionamiento LAN con una IP privada, clase B para lograr conectividad con la red interna.
1. Configurar el [DHCP][dhcp] para que asigne 50 direcciones IP entre [GG](#parámetros).150-[GG](#parámetros).200.
1. Reservar una IP fija en la red interna para la MAC del un computador (Servidor).
1. Configurar la [WLAN][wlan] de nombre y [PSK](psk) "REDES_4[G](#parámetros)" para lograr conectividad inalámbrica.
1. Realizar pruebas [PING][4_3] a la puerta de enlace desde el computador conectado por UTP (Servidor).
1. Realizar pruebas [PING][4_3] a la puerta de enlace desde el computador conectado por WIFI (Cliente).
1. Realizar pruebas [PING][6_3] a la puerta de enlace desde un teléfono Movil conectado por WIFI.
1. Listar los dispositivos por tipo que aparecen en "DHCP Information".
1. Mapear el puerto 80 del router para que redirija a un servicio [Python][6_4] en un computador.
1. Verificar que se puede acceder al servicio (pagina web) desde los dos clientes (móvil y PC).
1. Habilitar la gestión remota del dispositivo desde cualquier IP.
1. Realizar un backup de la configuración del equipo.

>ONT: [HUAWEI][6_5] -> reiniciar:[Con el Router encendido dejamos presionado el botón reset durante 2 segundos hasta  hasta que los LEDs se apaguen][6_1] acceder: [conectar con la cadena user:twtvu@192.168.1.1][6_2]

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
1. [Acceder][8_2] al dispositivo por el puerto 8291 via Winbox.
1. Cambiar el nombre del dispositivo para identificarlo.
1. Cambiar la contraseña del usuario "admin" a "Redes_2".
1. Configurar las [interfaces][8_3] y el [bridge][8_4] (conmutador) para dos redes (Interna y externa).
1. Agregar la [dirección][8_5] de la interfaz externa en el segmento necesario para acceder a internet.
1. Agregar la [dirección][8_5] del bridge (interna) con una IP privada, clase A.
1. Agregar un [Pool][8_6] en el segmento de la LAN que asigne direcciones entre [GG](#parámetros).100-[GG](#parámetros).200.
1. Configurar el [DHCP][dhcp] y las rutas estáticas necesarias para lograr conectividad de la red interna con internet.
1. Configurar la [WLAN][wlan] de nombre y [PSK](psk) "REDES_4[G](#parámetros)" para lograr conectividad inalámbrica.
1. Realizar pruebas de diagnostico [PING][8_7] y [TRACEROUTE][4_4] desde el router.
1. Realizar pruebas de diagnostico [PING][4_3] y [TRACEROUTE][4_4] desde un computador conectado via UTP.
1. Realizar pruebas de diagnostico [PING][4_3] y [TRACEROUTE][4_4] desde un computador conectado via WIFI.
1. Realizar un backup de la configuración del equipo.

>ROUTER: [MikroTik][8_5] -> reiniciar:[Con el botón de reset presionado encendemos el equipo. Dejamos presionado el botón reset durante 2-3 segundos hasta que veamos parpadear alguno de los LEDs de servicio][8_1] Acceder:[instale winbox y acceda por la pestaña "Neighbors" Login:admin y Password:admin][8_2]

## 9. [Diagrama de Red](#) ✔
- Realice un diagrama topológico de cada uno de los casos de estudio.
- Incluya todos los detalles de la red de area local a la que se encuentra conectado.
- Incluya los saltos conocidos incluyendo el equipo de borde de su ISP.

## 10. [Preguntas de conocimiento](#) ✔
1. ¿Que diferencias hay entre cada una de las implementaciones? (Ventajas y Desventajas)
1. ¿Que diferencias existe en el retardo via WIFI vs el retardo via UTP? (Justifique)
1. ¿Cual es la puerta de enlace a internet? ¿Cual es la ruta por defecto? En el punto (8)
1. ¿Existe diferencia en las trazas hacia los DNS en internet, para cada medio de transmisión y dispositivo? (Justifique)

[psk]:https://es.wikipedia.org/wiki/Pre-shared_key
[dhcp]:https://es.wikipedia.org/wiki/Protocolo_de_configuraci%C3%B3n_din%C3%A1mica_de_host
[wlan]:https://es.wikipedia.org/wiki/Red_de_%C3%A1rea_local_inal%C3%A1mbrica
[4_1]:https://www.tp-link.com/ar/support/faq/497/
[4_2]:https://static.tp-link.com/res/down/doc/TL-WR840N(ES)_V2_QIG.pdf
[4_3]:https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/ping
[4_4]:https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/tracert
[4_5]:https://www.tp-link.com/co/home-networking/wifi-router/tl-wr840n/
[6_1]:https://consumer.huawei.com/co/support/content/es-us15855743/
[6_2]:https://forum.huawei.com/enterprise/es/%C2%BFc%C3%B3mo-iniciar-sesi%C3%B3n-en-ont-de-huawei/thread/636939-100243
[6_3]:https://play.google.com/store/apps/details?id=com.lipinic.ping&hl=es_419&gl=US
[6_4]:https://docs.python.org/3.10/library/http.server.html
[6_5]:https://support.huawei.com/enterprise/es/access-network/echolife-hg8546m-pid-21465065
[8_1]:https://wiki.mikrotik.com/wiki/Manual:Reset
[8_2]:https://wiki.mikrotik.com/wiki/Manual:Winbox
[8_3]:https://wiki.mikrotik.com/wiki/Manual:Interface/Ethernet
[8_4]:https://wiki.mikrotik.com/wiki/Manual:Interface/Bridge
[8_5]:https://wiki.mikrotik.com/wiki/Manual:IP/Address
[8_6]:https://wiki.mikrotik.com/wiki/Manual:IP/Pools
[8_7]:https://wiki.mikrotik.com/wiki/Manual:Tools/Ping
[8_8]:https://wiki.mikrotik.com/wiki/Manual:Troubleshooting_tools

---
## Mas Recursos
- [Wiki Mikrotik](https://wiki.mikrotik.com/wiki/Main_Page) (Wiki)
- [Video-Curso Mikrotik](https://www.youtube.com/watch?v=SLAPzl-LSc0&list=PLf0g2cV4iCkH19_UhaVt0vDn1f9ObumjF) (Wiki)
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