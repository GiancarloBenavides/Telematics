#!/usr/bin/python
###################################
###         ENRUTAMIENTO        ### 
###################################
# Algoritmo de Dijkstra
# Mínima distancia
# Autor: @Gncdev
#----------------------------------
def dijkstra(grafo: dict, salida) -> tuple:
    ''' Calcular el camino mas corto entre dos nodos de una red. '''
    distancias, previos = {}, {}
    resultado = []

    for nodo in grafo:
        distancias[nodo] = float("inf")
        previos[nodo] = None
    distancias[salida] = 0

    Q = [nodo for nodo in grafo]

    while Q:
        u = min(Q, key=distancias.get)
        Q.remove(u)
        resultado.append(u)

        for vecino in grafo[u]:
            if vecino in Q and distancias[vecino] > distancias[u] + grafo[u][vecino]:
                distancias[vecino] = distancias[u] + grafo[u][vecino]
                previos[vecino] = u

    return resultado, distancias, previos
