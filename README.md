# Ruta de aprendizaje de IA

Guia pedagogica para aprender Inteligencia Artificial desde cero hasta nivel avanzado, con ejemplos en Python y ejercicios cortos.

Este repositorio se trabaja con el modelo **gpt-5.1-codex-max** y sirve como bitácora para aprender sobre IA usando la propia IA: cada cambio y explicación se apoya en asistentes que ayudan a iterar, documentar y probar conceptos rápidamente.

## Estructura principal (en `docs/`)
1. [Introduccion a la IA](docs/intro.md)
2. [Fundamentos matematicos](docs/fundamentals.md)
3. [Redes neuronales desde cero](docs/neural_networks.md)
4. [Deep Learning: CNNs, RNNs, Transformers](docs/deep_learning.md)
5. [Transformers paso a paso](docs/transformers.md)
6. [Grandes Modelos de Lenguaje (LLMs)](docs/llms.md)
7. [RAG](docs/rag.md)
8. [Fine-tuning y entrenamiento personalizado](docs/fine_tuning.md)
9. [Crear tu propia IA (3 niveles)](docs/building_your_ai.md)
10. [Proyectos finales](docs/projects.md)
11. [Guia de ejercicios](docs/exercises.md) + historial previo en `docs/ejercicios.md`

> Nota: No se crearon nuevas carpetas por restricciones de permisos; los capitulos viven en `docs/` con nombres claros.

## Como empezar
1. Crea un entorno: `python -m venv .venv && .\\.venv\\Scripts\\activate` (Windows) o `source .venv/bin/activate` (Linux/Mac).  
2. Lee `docs/intro.md` y ejecuta los ejemplos.  
3. Avanza en orden; cada archivo incluye ejercicios rapidos.  
4. Registra tus pruebas en `docs/exercises.md` o en `docs/ejercicios.md`.

## Lector web opcional
Sirve el repo y abre la vista HTML:
```
python -m http.server 8000
```
Luego entra a `http://localhost:8000/web/` para navegar los markdowns.

Disfruta el camino y documenta tus experimentos.
