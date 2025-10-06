# ToDo_Testing

## Descripción
Repositorio con la interfaz ToDo (frontend) y pruebas planificadas/implementadas para caja negra, caja blanca y caja gris. Incluye ejemplos de tests unitarios (Jest), de integración (mock de fetch), e2e (Cypress) y pruebas de rendimiento básicas.

---

## Flujo

| Fase | Actividad | Técnica | Tiempo | Entregable Específico |
|---:|---|---|---:|---|
| 1 | Implementación Base | - |  • Código fuente con CRUD • Estructura de datos |
| 2 | Testing Caja Negra | Caja Negra | • Tabla de particiones • 15 casos de prueba • Valores límite |
| 3 | Testing Caja Blanca | Código fuente  | • Diagrama de flujo • Reporte de cobertura >85% • Caminos no probados |
| 4 | Testing Caja Gris | Combinación | • Pruebas de integración • Validación de estados • Pruebas de rendimiento |
| 5 | Documentación
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
