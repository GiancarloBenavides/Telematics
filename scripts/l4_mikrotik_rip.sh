###################################
###             RIP             ###
###################################
# Laboratorio 4 – Enrutamiento RIP
# Comandos configuracion MikroTik
# Enrutador principal RM
# Autor: @Gncdev
#----------------------------------
# Agregar las interfaces que publicaran mensajes Rip (1-i)
#----------------------------------
routing rip interface add interface=ether1 receive=v1-2 send=v
routing rip interface add interface=ether2 receive=v1-2 send=v
# Configurar Rip (1-ii)
#----------------------------------
routing rip set redistribute-connected=yes
# Agregar las redes que se van a compartir (2)
#----------------------------------
/routing rip network add network=10.22.1.0/24
/routing rip network add network=10.1.1.0/24

