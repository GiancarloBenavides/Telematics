# Telematics
<p><code>Fundamentos de Telemática</code></p>
<p>Creado por <code>GncDev</code> para explicar los fundamentos de los <code>Sistemas de comunicaciones</code> en los cursos de telemática y redes de computadores.</p>

# Practica de laboratorio 06 - Hotspot

## Objetivos 

### Objetivo General
Proporcionar el conocimiento y generar las habilidades necesarias en la configuración y gestión de dispositivos de redes.

### Objetivos Específicos:
- Conocer configuraciones básicas de un Hotspot con MikroTik. :+1:

---

## Parámetros:
Para todos los efectos:
* la letra G  de se reemplaza por el número de grupo de laboratorio.
* la letra C  de se reemplaza por el ultimo número de cédula del estudiante..


## 1. [Configurar el entorno de trabajo](#) ✔
1. Cree si no existe el repositorio llamado <code>Redes-dos</code>.
1. Crear una carpeta en este repositorio llamado <code>Laboratorio-seis</code>.
1. Invite a los compañeros de grupo como colaboradores en este repositorio.
1. Documente cada uno de los items a continuación con capturas de pantalla y código.

>Nota: recuerde que los [parámetros](#parámetros) son validos en todo el laboratorio.

[1_2]:https://github.com/GiancarloBenavides

## 2. [Preguntas reflexivas de ambientación](#) ✔

<ol type="a">
<li>¿Como funcionan los puntos de acceso?</li>
<li>¿Como se controla el ancho de banda en una isp?.</li>
<li>¿Que son las wisp en el contexto de las telecomunicaciones?.</li>
<li>¿Que diferencias hay entre LAN y WLAN?. (Ventajas y Desventajas)</li>
<li>¿Que diferencias hay entre los modos de funcionamiento de un AP?.</li>

</ol>

## 3. [Configuración básica MikroTik](#) ✔
1. Conecte los equipos a la red eléctrica.
1. [Reinicie][3_1] los dispositivos a la configuración de fabrica.
1. Conecte la ultima interfaz [RJ45][rj45] del router al PC de configuración.
1. [Acceder][3_2] al dispositivo por el puerto 8291 via WinBox.
1. Cambiar el nombre del dispositivo para [identificarlo][3_3].
1. Etiquetar las [interfaces][3_4] a utilizar (1 WAN, 1 LAN y 1 WLAN).
1. Conecte las interfaces [Ethernet][3_5] etiquetadas a los equipos vecinos.
1. Agregar un [bridge][3_6] y sus interfaces para la red LAN.
1. Agregar un [cliente DHCP][3_7] para recibir direccionamiento de la WAN y conectarse a internet.
1. Agregar el direccionamiento para las dos redes internas LAN
    1. Agregar la [dirección][5_1] de la interfaz que conecta con el puente en el segmento IP 192.168.1.0/24.
    1. Agregar la [dirección][5_1] de la interfaz que conecta con la WLAN en el segmento 172.16.0.0/20.
1. Habilitar un [AP client][5_2] o punto de acceso inalámbrico.
1. Crear un [Pool][5_3] para la LAN y otro para la WLAN.
1. Crear servidores [DHCP][5_4] y agregar la información que enviara a los PC conectados a la LAN y WLAN. 
1. Crear una regla [source NAT][5_5] en el cortafuegos para enmascarar la ip de origen.
1. Agregar la [ruta por defecto][5_7] 0.0.0.0/0.
1. Realizar un [backup][5_8] de la configuración del equipo.


## 4. [Configurar Hotspot MikroTik](#) ✔
1. Agregar un perfil para el servidor Hotspot.
1. Agregar un usuario local con todos los permisos.
1. Agregar un servidor Hotspot.
1. Agregar un perfil para un usuario limitado.
1. Agregar un usuario limitado.
1. Realizar pruebas de diagnostico para todos los usuarios configurados.


## 5. [Diagrama de Red](#) ✔
- Realice un diagrama topológico de cada uno de los casos de estudio.
- Incluya todos los detalles de la red de area local a la que se encuentra conectado.
- Incluya los saltos conocidos incluyendo el equipo de borde de su ISP.

## 6. [Preguntas de conocimiento](#) ✔
1. ¿Que aplicaciones tiene el servidor Hotspot de MikroTik? 
1. ¿Que diferencia hay entre un Hotspot y el punto de acceso inalámbrico?
1. ¿Es posible configurar un Hotspot via Ethernet? (como)
1. ¿Que variables se puede controlar a un cliente del Hotspot? (identifique)

[psk]:https://es.wikipedia.org/wiki/Pre-shared_key
[dhcp]:https://es.wikipedia.org/wiki/Protocolo_de_configuraci%C3%B3n_din%C3%A1mica_de_host
[wlan]:https://es.wikipedia.org/wiki/Red_de_%C3%A1rea_local_inal%C3%A1mbrica

[rj45]:https://es.wikipedia.org/wiki/RJ-45
[ping]:https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/ping
[tracert]:https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/tracert
[web]:https://www.downloadcrew.com/download/35276/devd
[fwd]:https://es.wikipedia.org/wiki/Redirecci%C3%B3n_de_puertos

[3_1]:https://wiki.mikrotik.com/wiki/Manual:Reset
[3_2]:https://wiki.mikrotik.com/wiki/Manual:Winbox
[3_3]:https://wiki.mikrotik.com/wiki/Manual:System/identity
[3_4]:https://wiki.mikrotik.com/wiki/Manual:Interface
[3_5]:https://wiki.mikrotik.com/wiki/Manual:Interface/Ethernet
[3_6]:https://wiki.mikrotik.com/wiki/Manual:Interface/Bridge
[3_7]:https://wiki.mikrotik.com/wiki/Manual:Wireless_AP_Client

[5_1]:https://wiki.mikrotik.com/wiki/Manual:IP/Address
[5_2]:https://www.gvgmall.com/software/p201806201359246931.html?urd=FHVIP10
[5_3]:https://wiki.mikrotik.com/wiki/Manual:IP/Pools
[5_4]:https://wiki.mikrotik.com/wiki/Manual:IP/DHCP_Server
[5_5]:https://wiki.mikrotik.com/wiki/Manual:IP/Firewall/NAT#Source_NAT
[5_7]:https://wiki.mikrotik.com/wiki/Manual:IP/Route#Default_route
[5_8]:https://wiki.mikrotik.com/wiki/Manual:System/Backup

[8_1]:https://es.wikipedia.org/wiki/Loopback
[8_2]:https://wiki.mikrotik.com/wiki/Manual:Routing/OSPF#Instance
[8_3]:https://wiki.mikrotik.com/wiki/Manual:Routing/OSPF#Interface
[8_4]:https://wiki.mikrotik.com/wiki/Manual:Routing/OSPF#Network
[8_5]:https://wiki.mikrotik.com/wiki/Manual:Tools/Ping
[8_6]:https://wiki.mikrotik.com/wiki/Manual:Troubleshooting_tools

---
## Mas Recursos
- [Wiki MikroTik](https://wiki.mikrotik.com/wiki/Main_Page) (MikroTik - Wiki)
- [Hotspot en MikroTik](https://wiki.mikrotik.com/wiki/Manual:IP/Hotspot) (MikroTik - Wiki)
- [Balanceador de carga PCC en MikroTik](https://wiki.mikrotik.com/wiki/Manual:PCC) (MikroTik - Wiki)
- [Hotspot + Balanceador de carga PCC en MikroTik](https://wiki.mikrotik.com/wiki/Manual:Hotspot_with_PCC) (MikroTik - Wiki)
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