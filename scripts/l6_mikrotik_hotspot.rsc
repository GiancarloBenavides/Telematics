###################################
###           HOTSPOT           ###
###################################
# Laboratorio 6 – Gestion de clientes 
# Comandos configuracion CLI MikroTik
# Enrutador hotspot 
# Autor: @Gncdev
#----------------------------------
# Reiniciar el router (Paso 2)
/system reset-configuration no-defaults=yes
#----------------------------------
# Identificar el router (Paso 5)
/system identity set name=RM
#----------------------------------
# Agregar etiquetas a las interfaces (Paso 6)
/interface comment wlan2 comment="WISP"
#----------------------------------
# Crear el bridge para conectar todos los puertos de la LAN (Paso 8)
/interface bridge add name="bridge_lan"
/interface bridge port add bridge=bridge_lan interface=ether2
/interface bridge port add bridge=bridge_lan interface=ether3
/interface bridge port add bridge=bridge_lan interface=ether4
/interface bridge port add bridge=bridge_lan interface=ether5
#----------------------------------
# Crear cliente DHCP - solo router maestro que se conecta a internet (Paso 9)
/ip dhcp-client add interface=wlan1 disabled=no
#----------------------------------
# Direccionamiento de las interfaces  (Paso 10)
/ip address add address=192.168.1.1/24 interface=bridge_lan
/ip address add address=172.16.0.1/16 interface=wlan2
#----------------------------------
# Direccionamiento de las interfaces (Paso 11)
/interface wireless enable wlan2
/interface wireless set wlan2 mode=ap-bridge ssid=Red_Telecoms
#----------------------------------
# Crear el pool de direcciones que servira para asignar en la lan y en el wisp (Paso 12)
/ip pool add name="pool_dhcp_lan" ranges=192.168.1.100-192.168.1.200
/ip pool add name="pool_dhcp_wlan" ranges=172.16.1.1-172.16.15.254
#----------------------------------
# Crear servidor DHCP (Paso 13)
/ip dhcp-server add name="dhcp_lan" interface=bridge_lan address-pool=pool_dhcp_lan disabled=no
/ip dhcp-server add name="dhcp_wlan" interface=wlan2 address-pool=pool_dhcp_wisp disabled=no
/ip dhcp-server network add address=192.168.100.0/24 gateway=192.168.100.1 dns-server=8.8.8.8,2.2.2.2
/ip dhcp-server network add address=172.16.0.0/16 gateway=172.16.1.1 dns-server=8.8.8.8,2.2.2.2
#----------------------------------
# Configurar traducción NAT  (Paso 14)
/ip firewall nat add chain=srcnat action=masquerade out-interface=wlan1
#----------------------------------
# Crear la ruta por defecto - proximo salto (Paso 15)
# ---> option_one
/ip route add gateway=10.20.105.1
# ---> option_two
# /ip route add dst-address=0.0.0.0/0 gateway=10.40.40.1
#----------------------------------
# Crear una copia de recuperación (Paso 16)
/system backup save
# Configurar Hotspot (Paso 1)
/ip hotspot profile add name="hotspot_wisp" hotspot-address=172.16.0.1 dns-name=redtelecoms.com.co html-directory=flash/hotspot http-cookie-lifetime=1d
/ip hotspot user add server=all name="master" password=master
/ip hotspot add name="wisp" interface=wlan1 address-pool=pool_dhcp_wisp profile=hotspot_wisp
/ip hotspot user profile add name="5m" rate-limit=5M/10M mac-cookie-timeout=1d
/ip hotspot user add server=wisp name="user" password=user profile=5m
#----------------------------------