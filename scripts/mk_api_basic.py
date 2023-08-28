#!/usr/bin/python

### Para usar instalar paquete pip
# https://pypi.org/project/RouterOS-api/
# pip install RouterOS-api
import routeros_api


config={
    "name":"RM"
    "lan":"192.168.100.0",
    "mask":"24",
    "host":"1",
    "port";2,

}

/system identity set name=RM

/interface bridge add name=bridge_lan
/interface bridge port add bridge=bridge_lan interface=ether4
/interface bridge port add bridge=bridge_lan interface=ether5

/interface list add name="LAN"
/interface list member add interface="bridge_lan" list="LAN"
/interface comment ether4 comment="LAN"
/interface comment ether5 comment="LAN"
/interface list add name="WAN 2"
/interface list member add interface="ether2" list="WAN 2"
/interface comment ether2 comment="WAN 2"
/interface list add name="WAN M"
/interface list member add interface="ether1" list="WAN M"
/interface comment ether1 comment="WAN M"
/interface list add name="INTERNET"
/interface list member add interface="ether3" list="INTERNET"
/interface comment ether3 comment="WAN M"

/ip address add address=10.100.1.1/24 interface=ether1
/ip address add address=10.2.1.100/24 interface=ether2
/ip address add address=192.168.100.1/24 interface=bridge_lan
/ip pool add name=pool_dhcp_lan ranges=192.168.100.100-192.168.100.200

/ip dhcp-server add name=dhcp_lan interface=bridge_lan address-pool=pool_dhcp_lan disabled=no
/ip dhcp-server network add address=192.168.100.0/24 gateway=192.168.100.1 dns-server=8.8.8.8,2.2.2.2
/ip dhcp-client add interface=ether3 disabled=no

/ip dhcp-server lease add address="192.168.100.10" client-id="RM-master" server="dhcp_lan" mac-address=[/ip dhcp-server lease get number=0 mac-address]

#/ip dhcp-server lease make-static numbers=0 
#/ip dhcp-server lease set address="192.168.100.10" client-id="RM-master" numbers=0 

/ip dns set servers=8.8.8.8,2.2.2.2 allow-remote-requests=yes

/ip firewall nat add chain=srcnat action=masquerade out-interface="ether3"
/ip firewall nat add chain=dstnat dst-port=80 protocol=tcp action=dst-nat to-address="192.168.100.10" to-port=8080
/ip route add dst-address="0.0.0.0/0" gateway="10.40.40.1" #########################


##############################
###         OSPF           ### 
##############################

/interface bridge add name="loopback"
/ip address add address="10.255.255.100/32" interface="loopback"
/ip address add address="10.255.255.100" network="10.255.255.100" interface="loopback"

/routing ospf instance set 0 router-id="10.255.255.100"

bw_in_bps=100 * 1024 * 1024
Cost = 100000000/bw_in_bps

/routing ospf interface add interface=ether1 cost=10 priority=0
/routing ospf interface add interface=ether2 cost=100 priority=1

/routing ospf network add network=10.2.1.0/24 area=backbone
/routing ospf network add network=10.100.1.0/24 area=backbone
