# Aprovecha modelos existentes

En este módulo verás cómo usar modelos preentrenados y aplicar ingeniería de prompts.

## Opciones de modelos
- **Modelos abiertos de lenguaje (LLM):** GPT-NeoX, LLaMA, Mistral (requieren GPU o endpoints hospedados).
- **APIs SaaS:** OpenAI, Anthropic, Cohere, Hugging Face Inference API.
- **Modelos de visión:** CLIP, Segment Anything, YOLO.

## Flujo para usar un modelo hospedado
1. Define el caso de uso y el output esperado (texto, clasificación, extracción de datos).
2. Evalúa políticas de uso y privacidad del proveedor.
3. Diseña un **prompt** claro: rol, contexto, instrucciones, formato de salida.
4. Implementa llamadas a la API con controles de tiempo y reintentos.
5. Monitorea calidad: tasa de aciertos, coste, latencia y feedback de usuarios.

## Plantilla de prompt
```
Eres un asistente especializado en <tarea>.
Contexto: <datos o reglas importantes>.
Instrucciones: <lista de pasos o restricciones>.
Formato de salida: <JSON, lista, tabla, etc.>.
```

## Ejercicios
1. Elige una API de LLM y crea un prompt que extraiga entidades de noticias. Pruébalo con 3 ejemplos y compara resultados.
2. Diseña un prompt para evaluación automática de tareas (rúbrica en bullet points) y valida consistencia en 5 ejemplos.
3. Implementa un pequeño script que reciba texto y devuelva un análisis resumido usando un endpoint hospedado (respetando límites de tokens y privacidad).
