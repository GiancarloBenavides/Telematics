#!/usr/bin/python
###################################
###         ENRUTAMIENTO        ### 
###################################
# Algoritmo de bellman ford
# Mínima distancia
# Autor: @Gncdev
#----------------------------------

def bellman_ford(grafo: dict, source: str) -> tuple:
    ''' Calcular el camino mas corto entre dos nodos de una red. '''
    distancias, previos = dict(), dict()

    # Paso 1: Preparar la distancia y el predecesor para cada nodo
    for nodo in grafo:
        distancias[nodo], previos[nodo] = float('inf'), None
    distancias[source] = 0

    # Paso 2: Relajar los bordes
    for _ in range(len(grafo) - 1):
        for nodo in grafo:
            for vecino in grafo[nodo]:

                # Si las distancias entre el nodo y el vecino es inferior a la actual, almacenarlo
                if distancias[vecino] > distancias[nodo] + grafo[nodo][vecino]:
                    distancias[vecino], previos[vecino] = distancias[nodo] + \
                        grafo[nodo][vecino], nodo

    # Paso 3: Comprobar si hay ciclos de peso negativos
    for nodo in grafo:
        for vecino in grafo[nodo]:
            assert distancias[vecino] <= distancias[nodo] + \
                grafo[nodo][vecino], "Ciclo de peso negativo"

    return distancias, previos
