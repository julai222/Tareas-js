import uuid

tareas = []

def agregar_tarea(nombre, fecha_entrega, persona):
    tarea = {
        "id": str(uuid.uuid4()),  
        "nombre": nombre,
        "fecha_entrega": fecha_entrega,
        "persona": persona
    }
    tareas.append(tarea)
    print("Tarea agregada con éxito.")

def eliminar_tarea(id_tarea):
    global tareas
    tareas = [t for t in tareas if t["id"] != id_tarea]
    print("Tarea eliminada si existía.")

def mostrar_tareas():
    if not tareas:
        print("No hay tareas registradas.")
        return
    for tarea in tareas:
        print(f"ID: {tarea['id']}, Nombre: {tarea['nombre']}, Fecha: {tarea['fecha_entrega']}, Persona: {tarea['persona']}")

def menu():
    while True:
        print("\n1. Agregar tarea")
        print("2. Eliminar tarea")
        print("3. Mostrar tareas")
        print("4. Salir")
        opcion = input("Elige una opción: ")

        if opcion == "1":
            nombre = input("Nombre de la tarea: ")
            fecha = input("Fecha de entrega: ")
            persona = input("Persona asignada: ")
            agregar_tarea(nombre, fecha, persona)
        elif opcion == "2":
            id_tarea = input("ID de la tarea a eliminar: ")
            eliminar_tarea(id_tarea)
        elif opcion == "3":
            mostrar_tareas()
        elif opcion == "4":
            break
        else:
            print("Opción no válida, intenta de nuevo.")

menu()