#######################################
###            ESTATICO             ###
#######################################
# Laboratorio 3 – Enrutamiento Estatico
# Comandos configuracion CLI MikroTik
# Enrutador principal RM
# Autor: @Gncdev
#--------------------------------------
# Crear una regla de source NAT para permitir que los equipos de la LAN tengan internet (Paso 1)
#--------------------------------------
/ip route add dst-address=10.10.1.0/24 gateway=10.22.1.1
/ip route add dst-address=10.11.1.0/24 gateway=10.22.1.1
/ip route add dst-address=10.22.1.0/24 gateway=10.22.1.1
/ip route add dst-address=10.33.1.0/24 gateway=10.1.1.100