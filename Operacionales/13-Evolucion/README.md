# Sistemas operacionales
<p><code>Fundamentos de sistemas operativos</code></p>
<p>Creado por <code>Giancarlo Ortiz</code> para explicar los fundamentos de los <code>Sistemas operativos</code></p>

## Agenda
1. Primera generación.
1. Segunda generación.
1. Tercera generación.
1. Cuarta generación.


---
# 1. Antecedentes
* Antes de [1950][1_0].
* Diseño de [arquitecturas de hardware][1_1] con propósitos muy específicos.
* Interacción directa de los [programas][1_2] y el hardware.
* Procesamiento de instrucciones [secuencial][1_3].
* Típico de las [computadoras serie][1_4].
* Programación en [lenguaje maquina][1_5].
* Ejecución en [tiempo Real][1_6].

[1_0]:https://es.wikipedia.org/wiki/Categor%C3%ADa:Ordenadores_de_la_d%C3%A9cada_de_1940
[1_1]:https://es.wikipedia.org/wiki/Arquitectura_de_computadoras
[1_2]:https://es.wikipedia.org/wiki/Programa_inform%C3%A1tico
[1_3]:https://es.wikipedia.org/wiki/Estructuras_de_control#Ejecuci%C3%B3n_secuencial
[1_4]:https://en.wikipedia.org/wiki/Serial_computer
[1_5]:https://es.wikipedia.org/wiki/Lenguaje_de_m%C3%A1quina
[1_6]:https://es.wikipedia.org/wiki/Tiempo_real


## 1.1. Caso de estudio - Z1
* Diseñado en 1937 por [Konrad Zuse][11_1].
* Construido en 1938 por [Konrad Zuse][11_1].
* Primer ordenador programable de [lógica booleana][11_2].
* Permitía números de [punto flotante][11_3] binarios.
* 64 palabras de 22 bits como [memoria de programa][11_4].

[11_1]:https://es.wikipedia.org/wiki/Konrad_Zuse
[11_2]:https://es.wikipedia.org/wiki/%C3%81lgebra_de_Boole
[11_3]:https://es.wikipedia.org/wiki/Coma_flotante
[11_4]:https://es.wikipedia.org/wiki/Memoria_de_solo_lectura


## 1.1.1 Arquitectura básica Z1
![Arquitectura Z1](img/z1_architecture.svg "Arquitectura Z1")


# 2. Primera generación
* Después de [1950][2_0].
* Enfoque típico en la implementación de [sistemas embebidos][2_1].
* Aparece un cargador de programas o [monitor residente][2_2].
* Aparece el [cargador de arranque][2_3].
* Procesamiento [por lotes][2_4] en un [ciclo continuo][2_5].
* Necesario un temporizador o [perro guardian][2_6].
* Se introduce el [buffering][2_7] para almacenamiento temporal.
* Se introduce el [spooling][2_8] para operación simultanea.
* Programación en [lenguaje ensamblador][2_9].
* Ejecución en [tiempo real][2_10].

[2_0]:https://es.wikipedia.org/wiki/Categor%C3%ADa:Ordenadores_de_la_d%C3%A9cada_de_1950
[2_1]:https://es.wikipedia.org/wiki/Sistema_embebido
[2_2]:https://es.wikipedia.org/wiki/Monitor_residente
[2_3]:https://es.wikipedia.org/wiki/Cargador_de_arranque
[2_4]:https://es.wikipedia.org/wiki/Procesamiento_por_lotes
[2_5]:https://es.wikipedia.org/wiki/Bucle_(programaci%C3%B3n)#
[2_6]:https://es.wikipedia.org/wiki/Perro_guardi%C3%A1n_(electr%C3%B3nica)#
[2_7]:https://es.wikipedia.org/wiki/B%C3%BAfer_de_datos
[2_8]:https://es.wikipedia.org/wiki/Spooling
[2_9]:https://es.wikipedia.org/wiki/Lenguaje_ensamblador
[2_10]:https://es.wikipedia.org/wiki/Tiempo_real

# 2.1 Ejemplos de primera generación
* __1951:__ [EDSAC][21_1] - construido en [Cambridge][21_2].    
* __1955:__ [UNIVAC][21_3] - construido por [Remington][21_4].
* __1955:__ [IBM-701][21_5] - construido por [GM][21_6].
* __1956:__ [__GM-NAA I/O__][21_7] - por [GM][21_6] para [IBM-704][21_8].
* __1957:__ [BESYS][21_9] - por [Bell Labs][351_1] para [IBM-704][21_8].
* __1959:__ [SOS][21_10] - por [Share User Group][21_11] para [IBM-704][21_8].

[21_1]:https://es.wikipedia.org/wiki/EDSAC
[21_2]:https://es.wikipedia.org/wiki/Universidad_de_Cambridge
[21_3]:https://es.wikipedia.org/wiki/UNIVAC_1103
[21_4]:https://es.wikipedia.org/wiki/Remington_Rand
[21_5]:https://es.wikipedia.org/wiki/IBM_701
[21_6]:https://es.wikipedia.org/wiki/General_Motors
[21_7]:https://es.wikipedia.org/wiki/GM-NAA_I/O
[21_8]:https://es.wikipedia.org/wiki/IBM_704
[21_9]:https://en.wikipedia.org/wiki/BESYS
[21_10]:https://es.wikipedia.org/wiki/SHARE_Operating_System
[21_11]:https://en.wikipedia.org/wiki/SHARE_(computing)#


# 3. Segunda generación
* Después de [1960][3_0] apoyados en [CI][3_1].
* Enfocado en [mainframes][3_2]. 
* Mas de un programa disponible o [multi-programación][3_3].
* Diseño de [transferencia de control][3_4] y [cambio de contexto][3_5]
* Arquitecturas [multi-procesador][3_6].
* Programación en [lenguajes de bajo nivel][3_7].
* Ejecución en [tiempo compartido][3_8].

[3_0]:https://es.wikipedia.org/wiki/Categor%C3%ADa:Ordenadores_de_la_d%C3%A9cada_de_1960
[3_1]:https://es.wikipedia.org/wiki/Circuito_integrado
[3_2]:https://es.wikipedia.org/wiki/Unidad_central
[3_3]:https://es.wikipedia.org/wiki/Multiprogramaci%C3%B3n
[3_4]:https://es.wikipedia.org/wiki/Estructuras_de_control#Transferencia_de_control
[3_5]:https://es.wikipedia.org/wiki/Cambio_de_contexto
[3_6]:https://es.wikipedia.org/wiki/Multiprocesador
[3_7]:https://es.wikipedia.org/wiki/Lenguaje_de_bajo_nivel
[3_8]:https://es.wikipedia.org/wiki/Tiempo_compartido_(inform%C3%A1tica)#


# 3.1. Caso de estudio - Multics


# 4. Tercera generación
* Después de [1970][4_0].
* Enfocado en [mainframes][3_2] y [computadoras personales][4_1].
* Diseño del sistema por [módulos][4_2].
* Sistemas de multiples [modos de operación][4_3].
* Sistemas [multi-usuario][4_4].
* Listas de [control de acceso][4_5].
* Problemas de rendimiento.
* Baja estandarización.
* Programación [lenguajes de medio nivel][3_7] compilados.


[4_0]:https://es.wikipedia.org/wiki/Anexo:Cronolog%C3%ADa_de_los_sistemas_operativos#1970
[4_1]:https://es.wikipedia.org/wiki/Computadora_personal
[4_2]:https://es.wikipedia.org/wiki/Programaci%C3%B3n_modular
[4_3]:
[4_4]:https://es.wikipedia.org/wiki/Multiusuario
[4_5]:https://es.wikipedia.org/wiki/ACL
[4_6]:

# 4.1. CP/M


# 5. Cuarta generación
* Después de [1980][5_0] apoyados en [LSI][5_1].
* Shell interactivo GUI.
* Gestores de ventanas.
* Gestión de redes y procesamiento distribuido.
* interfaces de programación estándar.
* Programación en C y otros [lenguajes de medio nivel][36].

# 5.1. Unix


---
* Procesamiento [por lotes][22] en un [ciclo continuo][23].
* Hoy típico de [sistemas embebidos][26].
* Necesario un temporizador o [perro guardian][29].









---
[21_]:https://es.wikipedia.org/wiki/Cargador_de_arranque
[26]:https://es.wikipedia.org/wiki/Sistema_embebido
[29]:https://es.wikipedia.org/wiki/Perro_guardi%C3%A1n_(electr%C3%B3nica)#


## 1.1. Caso de estudio - Arduino

<table>
	<tr >
	    <td rowspan="9"> <img src="img/arduino_uno.png" alt="Arduino Uno"> </td>
	    <td colspan="2" style="text-align: center;">
            <a href="https://es.wikipedia.org/wiki/Arduino_Uno">
                <b>Arduino UNO</b>
            </a>
        </td>
	</tr>
    <tr >
	    <td>Procesador:</td>
	    <td><a href="https://es.wikipedia.org/wiki/Atmega328">ATmega328</a> </td>
	</tr>
    <tr >
	    <td>Velocidad:</td>
	    <td>16 Mhz</td>
	</tr>
    <tr >
	    <td>Memoria principal:</td>
	    <td>2 KB 
            <a href="https://es.wikipedia.org/wiki/SRAM">SRAM</a>
        </td>
	</tr>
    <tr >
	    <td>Memoria programa:</td>
	    <td>32 KB 
            <a href="https://es.wikipedia.org/wiki/Memoria_flash">Flash</a>
        </td>
	</tr>
    <tr >
	    <td>Voltaje:</td>
	    <td>5 V</td>
	</tr>
        <tr >
	    <td>Potencia:</td>
	    <td>100 mW</td>
	</tr>
    <tr >
	    <td>Comunicación:</td>
	    <td><small>
            <a href="https://es.wikipedia.org/wiki/Universal_Serial_Bus">USB</a> -
            <a href="https://es.wikipedia.org/wiki/Universal_Asynchronous_Receiver-Transmitter">UART</a>
            <a href="https://es.wikipedia.org/wiki/Serial_Peripheral_Interface">SPI</a> -
            <a href="https://es.wikipedia.org/wiki/I%C2%B2C">I²C</a></small>
        </td>
	</tr>
</table>


## 1.1.1 Arquitectura Arduino
![Arquitectura Arduino](img/arduino_architecture.svg "Arquitectura Arduino")

## 1.1.2 flujo de programación 




## 1.1.3 flujo de ejecución 




## 1.1.3 Memoria
![Arquitectura Arduino](img/arduino_memory.svg "Memory Arduino")








# 3. Segunda generación

# 4. Tercera generación

# 5. Cuarta generación



* __Usuarios:__ personas que desarrollan, mantienen y utilizan el sistema.
* __Infraestructura:__ la red que permite compartir la información y los recursos entre dispositivos.
* [__Software:__][11] procedimientos lógicos utilizados para transformar y extraer información.
* [__Hardware:__][12] equipo físico utilizado para procesar y almacenar la información.
* __Datos:__ representación de la información.

[11]:https://es.wikipedia.org/wiki/Software
[12]:https://es.wikipedia.org/wiki/Hardware


## 1.3. Capas en un SI
![mapa de procesos](img/is_layers.png)


# 2. Sistema de procesamiento digital
Es una maquina que se puede programar para realizar secuencias e operaciones lógicas o aritméticas, que organizadas convenientemente permiten realizar tareas de complejidad cada ves mayor.

[__Hardware:__][12]
* Componentes procesamiento.
* Componentes de almacenamiento.
* Componentes de control.

[__Software:__][11]
* Sistema operativo.
* Utilidades.
* Aplicaciones.


## 2.1. Estructura del hardware - Teoría de autómatas
![mapa de procesos](img/automata_theory.png)


### 2.1.1. Elementos de procesamiento un sistema digital
* [__CPU:__][13] Unidad central de procesamiento.
* [__FPU:__][14] Unidad de coma flotante.
* [__ALU:__][15] Unidad aritmético lógica.
* [__DSP:__][16] Unidad de procesamiento de señales.

[13]:https://es.wikipedia.org/wiki/Unidad_central_de_procesamiento
[14]:https://es.wikipedia.org/wiki/Unidad_de_coma_flotante
[15]:https://es.wikipedia.org/wiki/Unidad_aritm%C3%A9tica_l%C3%B3gica
[16]:https://es.wikipedia.org/wiki/Procesador_de_se%C3%B1ales_digitales


### 2.1.2. Elementos de almacenamiento en un sistema digital
* [__HDD__][171]/[__SSD:__][172] Memoria persistente
* [__MM:__][18] Memoria principal
* [__L1/L2/L3:__][19] Cache
* [__GPR:__][20] Registros

[171]:https://es.wikipedia.org/wiki/Unidad_de_disco_duro
[172]:https://es.wikipedia.org/wiki/Unidad_de_estado_s%C3%B3lido
[18]:https://es.wikipedia.org/wiki/Memoria_principal
[19]:https://es.wikipedia.org/wiki/Cach%C3%A9_(inform%C3%A1tica)#
[20]:https://es.wikipedia.org/wiki/Registro_(hardware)#


### 2.1.3. Elementos de control en un sistema digital
* [__Chipset:__][20] Registros
* [__Firmware:__][20]


## 2.2. Periféricos
Dispositivos auxiliares e independientes que se encuentran conectados por una interface al hardware interno de un sistema de procesamiento digital.

* ><i>"La única forma de aprender un nuevo lenguaje de programación es escribir programas en él."</i><br>
<cite style="display:block; text-align: right">[Dennis Ritchie](https://es.wikipedia.org/wiki/Dennis_Ritchie)</cite>


## 2.3. Estructura del software - Teoría del núcleo
![mapa de procesos](img/kernel_theory.png "Teoría del núcleo")


### 2.3.1. Elementos de software se un sistema digital
* [__Scheduler:__][21] Planificador de tareas 
* [__Driver:__][22] Controladores de dispositivo
* [__Library:__][23] Bibliotecas
* [__Shell:__][24] Interpretes de comandos
* [__API:__][25] Interfaces de programación

[21]:https://es.wikipedia.org/wiki/Planificador
[22]:https://es.wikipedia.org/wiki/Controlador_de_dispositivo
[23]:https://es.wikipedia.org/wiki/Biblioteca_(inform%C3%A1tica)#
[24]:https://en.wikipedia.org/wiki/Shell_(computing)#
[25]:https://es.wikipedia.org/wiki/Interfaz_de_programaci%C3%B3n_de_aplicaciones


### 2.3.2. Utilidades en un sistema digital
* [__Assembler:__][26] Ensambladores
* [__Compiler:__][27] Compiladores
* [__Linker:__][28] Enlazadores
* [__Interpreter:__][29] Interpretes

[26]:https://es.wikipedia.org/wiki/Ensamblador
[27]:https://es.wikipedia.org/wiki/Compilador
[28]:https://es.wikipedia.org/wiki/Enlazador
[29]:https://es.wikipedia.org/wiki/Int%C3%A9rprete_(inform%C3%A1tica)#


### 2.3.3. Aplicaciones en un sistema digital
| Tipo | Propietario | Libre |
|--|--:|:--|
| Procesador de Textos | [Word][31] | Writer - Words |
| Hoja de Calculo | Excel | [Calc][32] - Sheets |
| Presentaciones | [PowerPoint][33] | Stage |
| Sistemas de gestión DB | Access | Base - [Kexi][34] |
| Dibujo Vectorial | [Corel Draw][35] | Inkscape - Karbon |
| Edición de imágenes| Photoshop | Gimp - [Krita][36] |

[31]:https://es.wikipedia.org/wiki/Microsoft_Word
[32]:https://es.wikipedia.org/wiki/LibreOffice_Calc
[33]:https://es.wikipedia.org/wiki/Microsoft_PowerPoint
[34]:https://en.wikipedia.org/wiki/Kexi
[35]:https://es.wikipedia.org/wiki/CorelDRAW
[36]:https://es.wikipedia.org/wiki/Krita


# 3. Sistemas Operativos
 Es una colección de software que administra los recursos del sistema proporcionando servicios comunes para otros programas de la computadora.

* ><i>"Un concepto clave en todos los sistemas operativos es el de proceso. Un proceso es básicamente un programa en ejecución."</i><br>
<cite style="display:block; text-align: right">[Andrew Tanenbaum](https://es.wikipedia.org/wiki/Andrew_S._Tanenbaum)</cite>



## 3.1 Otras definiciones para SO
* El software y/o firmware que hace utilizable al hardware __(Deitel, 2004)__. [<sup>[1]</sup>][311]
* Es un programa que controla la ejecución de los programas de aplicación y que actúa como interfaz entre las aplicaciones de usuarios y el hardware __(Satllings, 2017)__. [<sup>[2]</sup>][312]
* Es un programa que actúa como intermediario entre el usuario y el hardware. El primer objetivo es la comodidad, el segundo la eficiencia __(Silberschatz, 2021)__. [<sup>[3]</sup>][313]
* Es un programa que tiene encomendada una serie de funciones diferentes cuyo objetivo es simplificar el manejo y utilización de la computadora; haciéndolo seguro y eficiente __(Carballeira, 2021)__. [<sup>[4]</sup>][314]

---
<small>[1]: [Deitel, H. M., Deitel, P. J., & Choffnes, D. R. (2004). Operating systems. Pearson/Prentice Hall.][311]
[2]: [Stallings, W. (2017). Operating systems: Internals and design principles (9th ed.). Pearson Education.][312]
[3]: [Silberschatz, A., Galvin, P. B., & Gagne, G. (2021). Operating System Concepts (10th ed.). John Wiley & Sons.][313]
[4]: [Garcia Carballeira, F., Perez Costoya, F., & Carretero Perez, J. (2021). Sistemas Operativos: Una Vision Aplicada. 3 Ed.: Volumen I. Independently Published.][314]
</small>

[311]:https://www.amazon.com/-/es/Harvey-M-Deitel/dp/0131828274
[312]:https://www.amazon.com/-/es/William-Stallings/dp/0134670957
[313]:https://www.amazon.com/-/es/Abraham-Silberschatz/dp/1119800366
[314]:https://www.amazon.com/-/es/Abraham-Silberschatz/dp/1119800366


## 3.2 Objetivos SO
* [__Comodidad:__][321] Funcionar como una interfaz entre el usuario y el hardware facilitando su aprovechamiento.
* [__Eficiencia:__][322] Administrar los recursos físicos y lógicos del sistema informático de forma eficiente.
* [__Capacidad de evolución:__][323] Permitir la introducción de nuevas características al sistema sin afectar la experiencia.

[321]:https://es.wikipedia.org/wiki/Experiencia_de_usuario
[322]:https://es.wikipedia.org/wiki/Eficiencia_algor%C3%ADtmica
[323]:https://es.wikipedia.org/wiki/Escalabilidad


## 3.3 Funciones SO
* Asignar recursos a los usuarios y programas.
* Recuperar los recursos asignados y desocupados.
* Permitir el dialogo interactivo de los usuarios con el sistema.
* Asegurar la confidencialidad de la información.
* Garantizar que los programas no interfieran entre sí.
* Detectar y tratar errores.
* Llevar historial de uso.


## 3.4 Calidad SO
* Son aplicables los principios de la [calidad del software][341] 
* Modelo [ISO/IEC 25000][342]

![mapa de procesos](img/software_quality.png "Calidad del Software")

[341]:https://es.wikipedia.org/wiki/Calidad_de_software
[342]:https://es.wikipedia.org/wiki/ISO/IEC_25000


# 3.5. Ejemplos
* [__Unix:__][351] programado en C de los [laboratorios Bell][351_1].
* [__Windows:__][352] programado en C, C++ de [Microsoft][352_1].
* [__macOS:__][353] programado en C, Objetive-C de [Apple][353_1].
* [__Ubuntu:__][354] programado en C, C++ de [Canonical][354_1].
* [__Android:__][355] programado en C, Java de [Google][355_1].
* [__FreeRTOS:__][356] programado en C de [AWS][356_1].

![mapa de procesos](img/os_examples.png "Sistemas operativos")

[351]:https://es.wikipedia.org/wiki/Unix
[352]:https://es.wikipedia.org/wiki/Microsoft_Windows
[353]:https://es.wikipedia.org/wiki/MacOS
[354]:https://es.wikipedia.org/wiki/Ubuntu
[355]:https://es.wikipedia.org/wiki/Android
[356]:https://en.wikipedia.org/wiki/FreeRTOS

[351_1]:https://es.wikipedia.org/wiki/Bell_Labs
[352_1]:https://es.wikipedia.org/wiki/Microsoft_Windows
[353_1]:https://es.wikipedia.org/wiki/Apple
[354_1]:https://es.wikipedia.org/wiki/Canonical
[355_1]:https://es.wikipedia.org/wiki/Google
[356_1]:https://es.wikipedia.org/wiki/Amazon_Web_Services


---
## Mas Recursos
- [Calidad de software](https://es.wikipedia.org/wiki/Calidad_de_software) (Wikipedia)
- [Sistema operativo](https://es.wikipedia.org/wiki/Sistema_operativo) (Wikipedia)
- [Comparación de sistemas operativos](https://es.wikipedia.org/wiki/Anexo:Comparaci%C3%B3n_de_sistemas_operativos) (Wikipedia)
- [Usage share of operating systems](https://en.wikipedia.org/wiki/Usage_share_of_operating_systems) (Wikipedia)

<https://github.com/arduino/ArduinoCore-avr/tree/master/bootloaders>