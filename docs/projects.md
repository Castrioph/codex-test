# Proyectos Finales y Ejercicios

## Ideas de proyectos
- **Buscador con RAG:** indexa articulos de tu dominio y responde preguntas.  
- **Detector de sentimiento:** fine-tuning ligero con LoRA sobre reseñas.  
- **Asistente de codigo:** usa un LLM y pruebas de regresion para sugerir snippets seguros.

## Estructura sugerida de cada proyecto
1) Problema y metricas.  
2) Datos y limpieza.  
3) Modelo/base (preentrenado) y ajustes.  
4) Evaluacion automatica + pruebas manuales.  
5) Despliegue sencillo (API o CLI) y monitoreo.

## Mini ejercicios
- Redacta el README de tu proyecto con objetivos y metricas.  
- Define 10 prompts de evaluacion automatica y guárdalos en `exercises/evals.md`.  
- Implementa un script de inferencia y pruebalo con 5 ejemplos reales.

## Preguntas de chequeo
- Como sabras que tu proyecto esta listo para usuarios finales?  
- Que riesgos eticos o de seguridad debes documentar?  
- Que logs necesitas para depurar errores en produccion?

## Resumen
- Proyectos = problema claro + datos + evaluacion + despliegue.  
- Empieza con alcance pequeño y agrega complejidad solo cuando las metricas lo pidan.
