# Aprovecha modelos existentes

En este módulo verás cómo usar modelos preentrenados y aplicar ingeniería de prompts.

## Opciones de modelos
- **Modelos abiertos de lenguaje (LLM):** GPT-NeoX, LLaMA, Mistral (requieren GPU o endpoints hospedados).
- **APIs SaaS:** OpenAI, Anthropic, Cohere, Hugging Face Inference API.
- **Modelos de visión:** CLIP, Segment Anything, YOLO.
- **Modelos de audio:** Whisper para transcripción, MMS para idioma.

## Flujo para usar un modelo hospedado
1. Define el caso de uso y el output esperado (texto, clasificación, extracción de datos).
2. Evalúa políticas de uso y privacidad del proveedor.
3. Diseña un **prompt** claro: rol, contexto, instrucciones, formato de salida.
4. Implementa llamadas a la API con controles de tiempo y reintentos.
5. Monitorea calidad: tasa de aciertos, coste, latencia y feedback de usuarios.

### Plantilla de prompt
```
Eres un asistente especializado en <tarea>.
Contexto: <datos o reglas importantes>.
Instrucciones: <lista de pasos o restricciones>.
Formato de salida: <JSON, lista, tabla, etc.>.
```

### Ejemplo ilustrativo (extracción de entidades)
```
Eres un analista de noticias. Devuelve un JSON con personas, organizaciones y ubicaciones.
Texto: "<noticia>"
Formato: {"personas":[],"organizaciones":[],"lugares":[]}
```

## Estrategias de prompts interactivos
- **Cadena de pensamiento ligera:** pide que razone paso a paso pero limite longitud.
- **Ejemplos en contexto:** agrega 2-3 ejemplos etiquetados que muestren el formato exacto.
- **Verificación automática:** pide que valide consistencia antes de responder ("comprueba que todas las listas sean únicas").
- **Rúbrica de calidad:** añade criterios de éxito (cobertura, precisión, tono) y auto-calificación de 1-5.

## Ejercicios
1. Elige una API de LLM y crea un prompt que extraiga entidades de noticias. Pruébalo con 3 ejemplos y compara resultados.
2. Diseña un prompt para evaluación automática de tareas (rúbrica en bullet points) y valida consistencia en 5 ejemplos.
3. Implementa un pequeño script que reciba texto y devuelva un análisis resumido usando un endpoint hospedado (respetando límites de tokens y privacidad).
4. **Extensión interactiva:** diseña un experimento A/B con dos prompts distintos y registra latencia y calidad percibida.

## Checklist de despliegue responsable
- [ ] ¿Se almacenan o anonimizan los datos sensibles antes de enviarlos a la API?
- [ ] ¿Hay límites de costo y alertas configuradas?
- [ ] ¿Existe un plan de fallback si el modelo o endpoint falla?
- [ ] ¿Documentaste ejemplos de prompts prohibidos o no admitidos?
