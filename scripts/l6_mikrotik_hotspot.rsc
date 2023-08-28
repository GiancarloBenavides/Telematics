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
# Identificar el router (Paso 5)
/system identity set name=RM
# Agregar etiquetas a las interfaces (Paso 6)
/interface comment wlan2 comment="WISP"
/interface wireless enable wlan2
/interface wireless set wlan2 mode=ap-bridge ssid=Red_Telecoms
# Direccionamiento de las interfaces (Paso 9)
#----------------------------------
/ip address add address=172.16.0.1/16 interface=wlan2
# Crear el pool de direcciones que servira para asignar el wisp (Paso 10)
#----------------------------------
/ip pool add name="pool_dhcp_wisp" ranges=172.16.20.0-172.16.30.0
# Crear servidor DHCP (Paso 11)
#----------------------------------
/ip dhcp-server add name="dhcp_wisp" interface=wlan2 address-pool=pool_dhcp_wisp disabled=no
/ip dhcp-server network add address=172.16.0.0/16 gateway=172.16.1.1 dns-server=8.8.8.8,2.2.2.2
# Configurar traducción NAT
#----------------------------------
/ip firewall nat add chain=srcnat action=masquerade out-interface=wlan1
# Configurar hotspot
#----------------------------------
/ip hotspot profile add name="hotspot_wisp" hotspot-address=172.16.0.1 dns-name=redtelecoms.com.co html-directory=flash/hotspot http-cookie-lifetime=1d
/ip hotspot user add server=all name="master" password=master
/ip hotspot add name="wisp" interface=wlan1 address-pool=pool_dhcp_wisp profile=hotspot_wisp
/ip hotspot user profile add name="5m" rate-limit=5M/10M mac-cookie-timeout=1d
/ip hotspot user add server=wisp name="user" password=user profile=5m
