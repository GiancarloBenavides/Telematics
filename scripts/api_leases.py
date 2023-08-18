#!/usr/bin/python

### Para usar instalar paquete pip
# https://pypi.org/project/RouterOS-api/
# pip install RouterOS-api
import routeros_api

connection = routeros_api.RouterOsApiPool('192.168.10.1', username='admin', password='admin')
api = connection.get_api()
leases = api.get_resource('/ip/dhcp-server/lease')
leases_list = leases.get()
num_contratos = len(leases.get())
direcciones = []
estado = []

# Guardar las direcciones y estados de los clientes
for contrato in leases_list:
    direcciones.append(contrato["address"])
    estado.append(contrato["status"])

# Imprimir los resultados en consola
print(f"| {'Cliente'.ljust(17)} | Estado  |")
print(f"-"*30)
for item in range(num_contratos):
    print(f"| {direcciones[item]:>17} |  {estado[item]:>6} |")