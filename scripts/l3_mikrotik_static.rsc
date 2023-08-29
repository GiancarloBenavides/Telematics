#######################################
###            ESTATICO             ###
#######################################
# Laboratorio 3 – Enrutamiento Estatico
# Comandos configuracion CLI MikroTik
# Enrutador principal RM
# Autor: @Gncdev
#--------------------------------------
# Crear rutas hacia cada una de las redes conectadas (Paso 1)
# Por la interface ether2 hacia 10.22.1.1
/ip route add dst-address=10.10.1.0/24 gateway=10.22.1.1
/ip route add dst-address=10.11.1.0/24 gateway=10.22.1.1
/ip route add dst-address=10.22.1.0/24 gateway=10.22.1.1
# Por la interface ether1 hacia 10.1.1.100
/ip route add dst-address=10.33.1.0/24 gateway=10.1.1.100
#--------------------------------------