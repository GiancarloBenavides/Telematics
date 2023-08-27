#######################################
###              BASIC              ### 
#######################################
# Laboratorio 3 – Enrutamiento Estatico
# Comandos configuracion CLI MikroTik
# Enrutador principal RM
# Autor: @Gncdev
#--------------------------------------
# Reiniciar el router (Paso 2)
/system reset-configuration no-defaults=yes
# Identificar el router (Paso 5)
/system identity set name=RM
# Agregar etiquetas a las interfaces (Paso 6)
#--------------------------------------
/interface comment ether1 comment="WAN M"
/interface comment ether2 comment="WAN 2"
/interface comment ether4 comment="LAN"
/interface comment ether5 comment="LAN"
/interface comment ether3 comment="INTERNET"
# Crear el bridge para conectar todos los puertos de la LAN (Paso 8)
#--------------------------------------
/interface bridge add name="bridge_lan"
/interface bridge port add bridge=bridge_lan interface=ether4
/interface bridge port add bridge=bridge_lan interface=ether5
# Direccionamiento de las interfaces (Paso 9)
#--------------------------------------
/ip address add address=10.1.1.1/24 interface=ether1
/ip address add address=10.22.1.100/24 interface=ether2
/ip address add address=192.168.1.1/24 interface=bridge_lan
# Crear el pool de direcciones que servira para asignar DHCP (Paso 10)
#--------------------------------------
/ip pool add name="pool_dhcp_lan" ranges=192.168.1.100-192.168.1.200
# Crear servidor DHCP (Paso 11)
#--------------------------------------
/ip dhcp-server add name="dhcp_lan" interface=bridge_lan address-pool=pool_dhcp_lan disabled=no
/ip dhcp-server network add address=192.168.1.0/24 gateway=192.168.1.1 dns-server=8.8.8.8,2.2.2.2
# Crear cliente DHCP - solo router maestro que se conecta a internet
#--------------------------------------
/ip dhcp-client add interface=ether3 disabled=no
# Crear la ruta por defecto - proximo salto (Paso 12)
#--------------------------------------
# ---> option_one
/ip route add gateway=10.16.16.1
# ---> option_two
# /ip route add dst-address=0.0.0.0/0 gateway=10.40.40.1
#######################################
###            ESTATICO             ### 
#######################################
# Crear una regla de source NAT para permitir que los equipos de la LAN tengan internet (Paso 1)
#--------------------------------------
/ip firewall nat add chain=srcnat action=masquerade out-interface=ether3
# Crear una regla de source NAT para permitir que los equipos de la LAN tengan internet (Paso 1)
#--------------------------------------
/ip route add dst-address=10.10.1.0/24 gateway=10.22.1.1
/ip route add dst-address=10.11.1.0/24 gateway=10.22.1.1
/ip route add dst-address=10.22.1.0/24 gateway=10.22.1.1
/ip route add dst-address=10.33.1.0/24 gateway=10.1.1.100