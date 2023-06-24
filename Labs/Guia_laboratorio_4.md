# Telematics
<p><code>Fundamentos de Telemática</code></p>
<p>Creado por <code>Giancarlo Ortiz</code> para explicar los fundamentos de los <code>Sistemas de comunicaciones</code> en los cursos de telemática y redes de computadores.</p>

# Practica de laboratorio 4

## Objetivos 

### Objetivo General
Proporcionar el conocimiento y generar las habilidades necesarias en la configuración y gestión de dispositivos de redes.

### Objetivos Específicos:
- Conocer configuraciones básicas de enrutamiento dinámico con MikroTik. :+1:

---

## Parámetros:
Para todos los efectos:
* la letra G  de se reemplaza por el número de grupo de laboratorio.
* la letra C  de se reemplaza por el ultimo número de cédula del estudiante..


## 1. [Configurar el entorno de trabajo](#) ✔
1. Cree si no existe el repositorio llamado <code>Redes-dos</code>.
1. Crear una carpeta en este repositorio llamado <code>Laboratorio-cuatro</code>.
1. Invite a los compañeros de grupo como colaboradores en este repositorio.
1. Documente cada uno de los items a continuación con capturas de pantalla y código.

>Nota: recuerde que los [parámetros](#parámetros) son validos en todo el laboratorio.

[1_2]:https://github.com/GiancarloBenavides

## 2. [Preguntas reflexivas de ambientación](#) ✔

<ol type="a">
<li>¿Que es y como se configura la ruta por defecto?</li>
<li>¿Que es la distancia administrativa?.</li>
<li>¿Que es una red directamente conectada y cual es su distancia administrativa?.</li>
<li>¿Que es una ruta estática?.</li>
<li>¿Que es una ruta dinámica?.</li>
</ol>

## 3. [Configurar básica MikroTik-01](#) ✔
1. Conecte los equipos a la red eléctrica.
1. [Reinicie][8_1] los dispositivos a la configuración de fabrica.
1. Conecte los equipo mediante un latiguillo a los equipos vecinos.
1. [Acceder][8_2] al dispositivo por el puerto 8291 via Winbox.
1. Cambiar el nombre del dispositivo para identificarlo como <code>R1</code>.
1. Configurar dos [interfaces][8_3] WAN y un [bridge][8_4] para la red LAN.
1. Agregar la dos [dirección][8_5] de la interfaces externas en las redes IPs 10.11.0.0 y 10.22.0.0.
1. Agregar la [dirección][8_5] del bridge (interna) con una IP 192.168.11.1 privada, clase C.
1. Agregar un [Pool][8_6] en el segmento de la LAN que asigne direcciones entre 192.168.1.100-200.
1. Configurar el [DHCP][dhcp] y las rutas estáticas necesarias para lograr conectividad de la red interna con internet.
1. Configurar la [WLAN][wlan] de nombre "REDES_41" para proveer conectividad inalámbrica.

## 4. [Configurar enrutamiento MikroTik-01](#) ✔
1. Agregar las rutas dinámicas necesarias para lograr conexión a internet.
1. Agregar las rutas estáticas necesarias para que los tres router conozcan la ruta a los otros dos.
1. Realizar pruebas de diagnostico [PING][8_7] y [TRACEROUTE][4_4] desde el router a los otros router.
1. Realizar pruebas de diagnostico [PING][4_3] y [TRACEROUTE][4_4] desde un computador conectado via UTP a los otros router.
1. Realizar pruebas de diagnostico [PING][4_3] y [TRACEROUTE][4_4] desde un computador conectado via WIFI a los otros router.
1. Realizar un backup de la configuración del equipo.

## 5. [Configurar básica MikroTik-02](#) ✔
1. Conecte los equipos a la red eléctrica.
1. [Reinicie][8_1] los dispositivos a la configuración de fabrica.
1. Conecte los equipo mediante un latiguillo a los equipos vecinos.
1. [Acceder][8_2] al dispositivo por el puerto 8291 via Winbox.
1. Cambiar el nombre del dispositivo para identificarlo como <code>R2</code>.
1. Configurar dos [interfaces][8_3] WAN y un [bridge][8_4] para la red LAN.
1. Agregar la dos [dirección][8_5] de la interfaces externas en las redes IPs 10.22.0.0 y 10.33.0.0.
1. Agregar la [dirección][8_5] del bridge (interna) con una IP 192.168.22.1 privada, clase C.
1. Agregar un [Pool][8_6] en el segmento de la LAN que asigne direcciones entre 192.168.1.100-200.
1. Configurar el [DHCP][dhcp] y las rutas estáticas necesarias para lograr conectividad de la red interna con internet.
1. Configurar la [WLAN][wlan] de nombre "REDES_42" para proveer conectividad inalámbrica.

## 6. [Configurar enrutamiento MikroTik-02](#) ✔
1. Agregar las rutas dinámicas necesarias para lograr conexión a internet.
1. Agregar las rutas estáticas necesarias para que los tres router conozcan la ruta a los otros dos.
1. Realizar pruebas de diagnostico [PING][8_7] y [TRACEROUTE][4_4] desde el router a los otros router.
1. Realizar pruebas de diagnostico [PING][4_3] y [TRACEROUTE][4_4] desde un computador conectado via UTP a los otros router.
1. Realizar pruebas de diagnostico [PING][4_3] y [TRACEROUTE][4_4] desde un computador conectado via WIFI a los otros router.
1. Realizar un backup de la configuración del equipo.

## 7. [Configurar básica MikroTik-03](#) ✔
1. Conecte los equipos a la red eléctrica.
1. [Reinicie][8_1] los dispositivos a la configuración de fabrica.
1. Conecte los equipo mediante un latiguillo a los equipos vecinos.
1. [Acceder][8_2] al dispositivo por el puerto 8291 via Winbox.
1. Cambiar el nombre del dispositivo para identificarlo como <code>R3</code>.
1. Configurar dos [interfaces][8_3] WAN y un [bridge][8_4] para la red LAN.
1. Agregar la dos [dirección][8_5] de la interfaces externas en las redes IPs 10.33.0.0 y 10.44.0.0.
1. Agregar la [dirección][8_5] del bridge (interna) con una IP 192.168.33.1 privada, clase C.
1. Agregar un [Pool][8_6] en el segmento de la LAN que asigne direcciones entre 192.168.1.100-200.
1. Configurar el [DHCP][dhcp] y las rutas estáticas necesarias para lograr conectividad de la red interna con internet.
1. Configurar la [WLAN][wlan] de nombre "REDES_43" para proveer conectividad inalámbrica.

## 8. [Configurar enrutamiento MikroTik-03](#) ✔
1. Agregar las rutas dinámicas necesarias para lograr conexión a internet.
1. Agregar las rutas estáticas necesarias para que los tres router conozcan la ruta a los otros dos.
1. Realizar pruebas de diagnostico [PING][8_7] y [TRACEROUTE][4_4] desde el router a los otros router.
1. Realizar pruebas de diagnostico [PING][4_3] y [TRACEROUTE][4_4] desde un computador conectado via UTP a los otros router.
1. Realizar pruebas de diagnostico [PING][4_3] y [TRACEROUTE][4_4] desde un computador conectado via WIFI a los otros router.
1. Realizar un backup de la configuración del equipo.

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