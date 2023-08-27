###################################
###            OSPF             ###
###################################
# Laboratorio 5 – Enrutamiento OSPF
# Comandos configuracion CLI MikroTik
# Enrutador principal RM
# Autor: @Gncdev
#----------------------------------
bw_in_bps=100 * 1024 * 1024
cost = 100000000/bw_in_bps
#----------------------------------
# Crear una interface de loopback - un bridge sin puertos asignados (Paso 1-i)
#----------------------------------
/interface bridge add name="loopback"
# Asignar una ip a la interface de loopback (Paso 1-ii)
#----------------------------------
# ---> option_one
/ip address add address=10.255.255.100/32 interface=loopback
# ---> option_two
# /ip address add address=10.255.255.100 network=10.255.255.100 interface=loopback
# Crear una instancia de OSPF con la interface de loopback (Paso 2)
#----------------------------------
/routing ospf instance set 0 router-id=10.255.255.100
# Agregar las interfaces por donde se va a conpartir rutas OSPF (Paso 3)
#----------------------------------
/routing ospf interface add interface=ether1 cost=10 priority=0
/routing ospf interface add interface=ether2 cost=100 priority=1
# Agregar las redes que se van a compartir (Paso 4)
#----------------------------------
/routing ospf network add network=10.2.1.0/24 area=backbone
/routing ospf network add network=10.100.1.0/24 area=backbone

