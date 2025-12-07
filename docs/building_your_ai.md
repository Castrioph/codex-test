# Crear Tu Propia IA (3 Niveles)

## Nivel 1: Asistente puntual
- **Objetivo:** Resolver una tarea concreta (ej. clasificar tickets, responder FAQs).  
- **Stack minimo:** modelo preentrenado + prompt bien diseñado.  
- **Ejemplo rapido:**
```python
prompt = """Eres un asistente de soporte. Clasifica el ticket como bug, mejora o duda.
Ticket: "No puedo iniciar sesion en la app desde ayer"
Clasificacion:"""
```
- **Ejercicios:** redacta 5 prompts para tareas de tu negocio; prueba con un LLM gratuito y mide aciertos.

## Nivel 2: Asistente con conocimiento propio
- **Objetivo:** Inyectar tu base documental.  
- **Stack:** RAG basico (embeddings + indice + LLM).  
- **Minireto:** conecta `docs/` de tu empresa a un index FAISS y responde 5 preguntas reales.

## Nivel 3: Producto con feedback y mejoras
- **Objetivo:** Ciclo completo de producto: telemetria, evaluaciones, versionado de prompts/modelos.  
- **Stack:** RAG + evaluacion automatica + monitoreo.  
- **Mini plan:** 
  1) Define metricas (precision percibida, cobertura, latencia).  
  2) Implementa pruebas de regresion con un set de 50 preguntas.  
  3) Automatiza despliegue (API o Slack bot) y agrega logging.

## Micro preguntas
- Que problema concreto resuelve tu IA y para quien?  
- Que datos tienes hoy y cuales faltan?  
- Como sabras que mejora (metricas y feedback)?

## Resumen
- Empieza simple con prompts; luego agrega tu conocimiento via RAG; finalmente productiza con evaluacion y monitoreo.  
- Cada nivel agrega datos, evaluacion y automatizacion para pasar de demo a producto.
