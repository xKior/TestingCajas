# ToDo_Testing

## Descripción
Repositorio con la interfaz ToDo (frontend) y pruebas planificadas/implementadas para caja negra, caja blanca y caja gris. Incluye ejemplos de tests unitarios (Jest), de integración (mock de fetch), e2e (Cypress) y pruebas de rendimiento básicas.

---

## Flujo

🧩 1. Pruebas de Caja Negra

ID	Caso de prueba	Entrada	Resultado esperado	Resultado obtenido	Estado
BB-01	Crear tarea con datos válidos	Título: “Estudiar JS”, Descripción: “Repasar funciones”, Prioridad: Alta	La tarea se muestra en la tabla con estado “Pendiente”	—	Pendiente
BB-02	Crear tarea sin título	Título vacío	Aparece mensaje de error indicando que el título es obligatorio	—	Pendiente
BB-03	Crear tarea con fecha de vencimiento inválida	Fecha: “32/13/2025”	El sistema no permite crear la tarea	—	Pendiente
ID	Caso de prueba	Entrada	Resultado esperado
BB-04	Editar tarea existente	Cambiar prioridad a “Media”	Se actualiza correctamente en la tabla
BB-05	Editar tarea no existente (ID inválido)	ID: 9999	Muestra mensaje “Error al cargar el todo”
ID	Caso de prueba	Entrada	Resultado esperado
BB-06	Eliminar tarea existente	ID: 2	La tarea desaparece de la tabla y muestra mensaje “Tarea eliminada exitosamente”
BB-07	Cancelar eliminación	Clic en “Cancelar” en confirmación	No se elimina la tarea
BB-08	Eliminar tarea inexistente	ID: 999	Muestra mensaje de error “Error al eliminar la tarea”
ID	Caso de prueba	Entrada	Resultado esperado
BB-09	API disponible	URL válida (https://todoapitest.todolist.com/Todos)	Se muestran todas las tareas
BB-10	API no disponible	URL incorrecta o caída	Muestra mensaje “Error de conexión con la API”
ID	Caso de prueba	Entrada	Resultado esperado
BB-09	API disponible	URL válida (https://todoapitest.todolist.com/Todos)	Se muestran todas las tareas
BB-10	API no disponible	URL incorrecta o caída	Muestra mensaje “Error de conexión con la API”
⚙️ 2. Pruebas de Caja Blanca

Pruebas de Caja Blanca
Objetivo: verificar la lógica interna del código JavaScript, flujos, estructuras y funciones. (Aquí sí analizamos el código fuente).

🔹 2.1. Función loadTodos()

Tipo: Camino básico

Camino 1: API responde con code === 200 → ejecuta renderTodos().

Camino 2: API responde con error → muestra Error al cargar los todos.

Camino 3: fetch lanza excepción → muestra Error de conexión con la API.

Cobertura deseada: 100% de ramas (if/else).

🔹 2.2. Función renderTodos()

Verificar condición if (todos.length === 0):

Caso 1: lista vacía → muestra mensaje “No hay tareas”

Caso 2: lista con datos → genera filas dinámicamente.

Validar escape de HTML en títulos (escapeHtml).

🔹 2.3. Función createTodo()

Simular respuestas de la API:

result.code === 201 → mensaje de éxito, recarga lista.

result.code !== 201 → muestra error personalizado.

Error de red → muestra “Error de conexión”.

🔹 2.4. Función updateTodo() y deleteTodo()

Probar todos los try...catch y condiciones response.ok.

Validar que el modal se cierre (closeModal()) tras éxito.

Confirmar que se refresque la tabla (loadTodos()).

🔹 2.5. Validaciones internas

Inputs required (todoTitle) deben impedir envío vacío.

Conversión de dueAt a ISO (new Date().toISOString()) correcta.

Llamadas a showMessage() se ejecutan con el color correcto según type.

⚫ 3. Pruebas de Caja Gris

ID	Caso de prueba	Tipo	Descripción	Resultado esperado
CG-01	Crear tarea → Verificar renderizado	Integración (UI + JS + API)	Crear tarea y validar que aparezca en la tabla (usa createTodo() + loadTodos())	Tarea se muestra correctamente en tabla
CG-02	Editar → Verificar actualización	Integración (UI + JS)	Editar prioridad y comprobar que se actualiza el color del tag de prioridad	Color cambia de gris a azul/rojo según prioridad
CG-03	Eliminar → Validar DOM + API	Integración	Eliminar tarea, verificar que desaparezca del DOM y de la API	Fila eliminada y API responde con 200
CG-04	Error de red simulado	Integración negativa	Desactivar conexión y cargar página	Se muestra mensaje de “Error de conexión con la API”
CG-05	Validar render HTML escapado	Seguridad (XSS)	Crear tarea con <script>alert(1)</script>	El texto se muestra literal, no ejecuta script (por escapeHtml())
🧠 Resumen general

Tipo de prueba	Qué evalúa	Nivel
Caja negra	Validar que las funcionalidades visibles (UI + API) funcionen correctamente	Externa
Caja blanca	Validar el flujo interno del JS (ramas, errores, funciones)	Interna
Caja gris	Combina UI y lógica interna, ideal para pruebas de integración	Mixta
---

## 📁 Estructura de carpetas
ToDo_Testing
├── src/
├── tests/
├── cypress/
├── docs/
├── coverage.html
└── README.md
---
## 🛠️ Lenguaje y versión usados
- Frontend: HTML + JavaScript (vanilla).  
- Node / herramientas de pruebas: Node.js >= 14, npm.  
- Test runner: Jest (unit/integration), Cypress (e2e).
Cómo ejecutar los tests
Unit + Integration (Jest)
npm run test
# o
npx jest

E2E (Cypress)
npx cypress open
# o en CI
npx cypress run

Prueba de rendimiento (básica)
node tests/perf/load_test.js
