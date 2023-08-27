###################################
###            BASIC            ### 
###################################
# Laboratorio 5 – Enrutamiento OSPF
# Comandos configuracion CLI MikroTik
# Enrutador principal RM
# Autor: @Gncdev
#----------------------------------
# Identificar el router (Paso 5)
/system identity set name=RM
# Agregar etiquetas a las interfaces (Paso 6)
#----------------------------------
/interface comment ether1 comment="WAN M"
/interface comment ether2 comment="WAN 2"
/interface comment ether3 comment="INTERNET"
/interface comment ether4 comment="LAN"
/interface comment ether5 comment="LAN"
# Crear el bridge para conectar todos los puertos de la LAN (Paso 8)
#----------------------------------
/interface bridge add name="bridge_lan"
/interface bridge port add bridge=bridge_lan interface=ether4
/interface bridge port add bridge=bridge_lan interface=ether5
# Direccionamiento de las interfaces (Paso 9)
#----------------------------------
/ip address add address=10.100.1.1/24 interface=ether1
/ip address add address=10.2.1.100/24 interface=ether2
/ip address add address=192.168.100.1/24 interface=bridge_lan
# Crear el pool de direcciones que servira para asignar DHCP (Paso 10)
#----------------------------------
/ip pool add name="pool_dhcp_lan" ranges=192.168.100.100-192.168.100.200
# Crear servidor DHCP (Paso 11)
#----------------------------------
/ip dhcp-server add name="dhcp_lan" interface=bridge_lan address-pool=pool_dhcp_lan disabled=no
/ip dhcp-server network add address=192.168.100.0/24 gateway=192.168.100.1 dns-server=8.8.8.8,2.2.2.2
# Crear cliente DHCP - solo router maestro que se conecta a internet
#----------------------------------
/ip dhcp-client add interface=ether3 disabled=no
# Crear un direccionamiento estatico para el servidor web (Paso 12 y 13)
#----------------------------------
/ip dhcp-server lease add address=192.168.100.10 client-id="RM-master" server=dhcp_lan mac-address=[/ip dhcp-server lease get number=0 mac-address]
# Habilitar cache DNS - no es necesario en redes pequeñas
#----------------------------------
/ip dns set servers=8.8.8.8,2.2.2.2 allow-remote-requests=yes
# Crear una regla de source NAT para permitir que los equipos de la LAN tengan internet (Paso 14)
#----------------------------------
/ip firewall nat add chain=srcnat action=masquerade out-interface=ether3
# Crear una regla de destination NAT para permitir que los equipos de la WAN accedan a un servidor en la LAN (Paso 15)
#----------------------------------
/ip firewall nat add chain=dstnat dst-port=9000 protocol=tcp action=dst-nat to-address=192.168.100.10 to-port=8080
# Crear la ruta por defecto - proximo salto (Paso 16)
#----------------------------------
# ---> option_one
/ip route add gateway=10.20.105.1
# ---> option_two
# /ip route add dst-address=0.0.0.0/0 gateway=10.40.40.1