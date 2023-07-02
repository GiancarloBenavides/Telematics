def bellman_ford(graph, source):
    distance, predecessor = dict(), dict()

    # Paso 1: Preparar la distancia y el predecesor para cada nodo
    for node in graph:
        distance[node], predecessor[node] = float('inf'), None
    distance[source] = 0

    # Paso 2: Relajar los bordes
    for _ in range(len(graph) - 1):
        for node in graph:
            for neighbour in graph[node]:
                
                # If the distance between the node and the neighbour is lower than the current, store it
                if distance[neighbour] > distance[node] + graph[node][neighbour]:
                    distance[neighbour], predecessor[neighbour] = distance[node] + graph[node][neighbour], node

    # Paso 3: Comprobar si hay ciclos de peso negativos
    for node in graph:
        for neighbour in graph[node]:
            assert distance[neighbour] <= distance[node] + graph[node][neighbour], "Negative weight cycle."
 
    return distance, predecessor