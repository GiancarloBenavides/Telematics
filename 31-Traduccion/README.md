# Telematics
<p><code>Fundamentos de Telemática</code></p>
<p>Creado por <code>Giancarlo Ortiz</code> para explicar los fundamentos de los <code>Sistemas de comunicaciones</code> en los cursos de telemática y redes de computadores.</p>

## Traducción
La traducción de direcciones de red es un estándar de Internet que permite a los hosts en redes de área local utilizar un conjunto de direcciones IP para comunicaciones internas y otro conjunto de direcciones IP para comunicaciones externas. 

## Agenda
1. [Traducción de origen](#1-traducción-de-origen).
1. [Traducción de destino](#2-traducción-de-destino).

<br>

---
# 1. [Traducción de origen](#agenda)
El [srcnat][1] se realiza en paquetes que se originan en una red local de direccionamiento privado y están dirigidos a una red publica; En este caso una regla de NAT reemplaza la dirección de origen privada de un paquete IP que sale a la red publica con una nueva dirección IP pública a medida que este viaja a través del router.

[1]:https://es.wikipedia.org/wiki/Traducci%C3%B3n_de_direcciones_de_red

* ><i>"No dejes que el ruido de la opinion de los demás calle tu voz interior."</i><br>
<cite style="display:block; text-align: right">[Steve Jobs](https://es.wikipedia.org/wiki/Steve_Jobs)</cite>

## 1.1. Enmascaramiento ✔
Si desea ocultar la LAN privada detrás de una dirección publica proporcionada por el proveedor de internet o ISP, debe usar la función de traducción (enmascaramiento) de dirección de red de origen del router. El enmascaramiento cambiará la dirección IP de origen y el puerto de los paquetes originados en la red privada a la dirección pública actual del router cuando el paquete se encamina a través de él; si el  ISP cambia la ip la tabla de traducción NAT se borra y se inicia una nueva.

```bash
# En MikroTik...
# WAN es la interface que conecta a la red publica
/ip firewall nat add chain=srcnat action=masquerade out-interface=WAN
```

# 2. [Traducción de destino](#agenda)
El [dstnat][2] se realiza en paquetes cuyo destino es una red local de direccionamiento privado y fueron originados en una red publica; En este caso una regla de NAT reemplaza la dirección de destino publica de un paquete IP que entra a la red privada con una nueva dirección IP privada a medida que este viaja a través del router.

[1]:https://es.wikipedia.org/wiki/Redirecci%C3%B3n_de_puertos

* ><i>"Las cosas no se hacen siguiendo caminos distintos para que no sean iguales, sino para que sean mejores."</i><br>
<cite style="display:block; text-align: right">[Elon Musk](https://es.wikipedia.org/wiki/Elon_Musk)</cite>

## 2.1. Mapeo de puertos ✔
Si desea dirigir las solicitudes de un determinado puerto a una máquina interna (a veces denominada apertura de un puerto, asignación de puertos), puede hacerlo agregando una regla NAT al cortafuegos.

```bash
# En MikroTik...
# WAN es la interface que conecta a la red publica
/ip firewall nat add chain=dstnat dst-port=80 action=dst-nat protocol=tcp to-address=192.168.1.10 to-port=8080 
```

---
## Mas Recursos
- [Wiki MikroTik](https://wiki.mikrotik.com/wiki/Main_Page) (Wiki)
- [Traducción de direcciones de red](https://es.wikipedia.org/wiki/Traducci%C3%B3n_de_direcciones_de_red) (Wiki)
- [Reenvío de puertos](https://es.wikipedia.org/wiki/Redirecci%C3%B3n_de_puertos) (Wiki)