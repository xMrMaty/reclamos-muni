# Proyecto: Santo Domingo Digital
**Desafío 35:** Baja capacidad de respuesta ante reclamos ciudadanos.

**Ramo:** Ingeniería Web y Móvil  
**Entrega:** Parcial 1  

### Equipo de Trabajo
* Matias Ruiz
* Joaquin Castro
* Alvaro Del Pino 
* **Profesora:** Sandra Cano

---

## Enlaces Importantes
* **Aplicación Navegable (Vercel):** [Acceder a la Demo](https://reclamos-muni-git-master-xmrmatys-projects.vercel.app)
* **Repositorio de Código:** [GitHub](https://github.com/xMrMaty/reclamos-muni)

---

## EP 1.1: Requerimientos Funcionales y No Funcionales

Para esta aplicación, definimos dos roles principales: **Ciudadano** (quien ingresa y consulta) y **Funcionario OIRS** (administrador que clasifica, deriva y responde).

### Requerimientos Funcionales (RF)
* **RF1 - Ingreso estructurado:** El sistema debe permitir al Ciudadano ingresar reclamos mediante formularios electrónicos.
* **RF2 - Asignación de identificador único:** El sistema debe generar y asignar automáticamente un número de ingreso único a cada solicitud para permitir su seguimiento.
* **RF3 - Trazabilidad y cambio de estados:** El sistema debe permitir al Funcionario OIRS cambiar el estado de la solicitud (Ej: Ingresado, Derivado, En Análisis, Resuelto) y registrar la fecha de cada cambio para control.
* **RF4 - Derivación interna:** El sistema debe permitir al Funcionario OIRS derivar la solicitud a la unidad técnica municipal correspondiente para su informe o resolución.
* **RF5 - Alertas de plazos de respuesta:** El sistema debe alertar visualmente al Funcionario OIRS cuando un reclamo esté cerca de cumplir el plazo máximo de 20 días corridos para emitir la respuesta.
* **RF6 - Ampliación de plazo:** El sistema debe permitir al Funcionario OIRS registrar una prórroga justificada de hasta 10 días corridos, notificando automáticamente al Ciudadano que la respuesta está en curso.
* **RF7 - Historial ciudadano:** El sistema debe proveer al Ciudadano un panel donde visualice el historial completo y el estado actual de todas sus presentaciones y reclamos.

### Requerimientos No Funcionales (RNF)
* **RNF1 - Rendimiento:** Las transacciones de cambio de estado en el panel del funcionario deben reflejarse en la interfaz en menos de 2 segundos para asegurar fluidez en el entorno de trabajo.
* **RNF2 - Seguridad y Privacidad:** El sistema debe encriptar los datos personales ingresados en los formularios (RUT, teléfono, correo) garantizando el deber de secreto sobre datos provenientes de fuentes no accesibles al público.
* **RNF3 - Usabilidad:** La interfaz debe estar diseñada bajo un enfoque "Mobile-First" para el Ciudadano, asegurando botones de gran tamaño y legibilidad alta, mientras que la vista del Funcionario OIRS debe optimizarse para escritorio (web) con alta densidad de información.

---

## EP 1.2: Justificación del problema y análisis del usuario objetivo

### Justificación
El problema central radica en la pérdida de trazabilidad y la falta de comunicación proactiva. Cuando un ciudadano ingresa un reclamo, la normativa exige una respuesta en un plazo máximo de 20 días corridos, con una extensión posible de 10 días. La frustración ciudadana no siempre nace de la falta de solución, sino de la "caja negra" institucional: el vecino no sabe si su requerimiento fue leído, si está siendo evaluado por una unidad técnica, o si fue olvidado. Digitalizar y transparentar el estado del trámite mitiga esta incertidumbre.

### Análisis del Usuario Objetivo
**Ciudadano:** Posee distintos niveles de alfabetización digital. Necesita interfaces limpias, procesos guiados paso a paso y lenguaje sin tecnicismos legales. Su necesidad principal es saber *"en qué está mi problema"*.
**Funcionario OIRS (Admin):** Maneja un alto volumen de requerimientos diarios. Necesita eficiencia, visualización rápida de cuellos de botella (requerimientos por vencer) y herramientas ágiles para derivar tareas a otras unidades municipales.

---

## EP 1.3: Bocetos de UI/UX (Figma)

El detalle completo de las interfaces y pantallas diseñadas para este proyecto se encuentra en los siguientes enlaces:
* [Prototipo Interactivo en Figma](https://www.figma.com/site/pVRB6Pgecmp1NI24buVUMO/Sin-t%C3%ADtulo?node-id=0-1&t=2b5F6gvnvTXaL0Zb-1) (Haz clic para navegar la aplicación)
* [Galería de Mockups Estáticos](./Mockups/) (Explora las capturas de pantalla en el repositorio)
---

## EP 1.4: Arquitectura de Navegación y Experiencia del Usuario

La arquitectura debe ser coherente y separar estrictamente los accesos según el rol.

| Rol | Rutas Principales | Flujo de Tareas Clave (Task Flow) | Componentes de Navegación |
| :--- | :--- | :--- | :--- |
| **Público** | `/login`, `/register` | Completar registro ➔ Validar RUT ➔ Iniciar sesión | Pantallas completas sin menús de sesión |
| **Ciudadano** | `/home`, `/nuevo-reclamo`, `/mis-reclamos/:id` | Home ➔ Tocar "Nuevo" ➔ Llenar Formulario ➔ Confirmación ➔ Ver historial | Barra de navegación inferior (`IonTabs`) |
| **Admin** | `/admin/dashboard`, `/admin/reclamo/:id` | Dashboard web ➔ Filtrar "Por vencer" ➔ Entrar al detalle ➔ Cambiar estado | Menú lateral persistente (`IonMenu`) |

> **Justificación técnica:** Esta estructura de rutas jerárquicas con React Router protege los endpoints mediante un contexto de autenticación. Utilizar `IonTabs` para móvil mejora la ergonomía del pulgar para el ciudadano, mientras que un `IonMenu` lateral para el administrador en web maximiza el uso de la pantalla horizontal para tablas de datos complejas.

---

## Ejecución Local

Para levantar el entorno de desarrollo local:
```bash
npm install
ionic serve
