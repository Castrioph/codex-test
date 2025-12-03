# Bases de IA

Este módulo ofrece una visión general de la IA, sus ramas y el ciclo de vida típico de un proyecto.

## ¿Qué es IA?
- **IA simbólica:** reglas explícitas, motores de inferencia y lógicas formales.
- **Aprendizaje automático (ML):** modelos que aprenden patrones a partir de datos.
- **Aprendizaje profundo (DL):** redes neuronales profundas que escalan con datos y cómputo.

## Flujo típico de un proyecto de IA
1. **Definir el problema y la métrica:** ejemplo: clasificar correos como spam con métrica `F1`.
2. **Recolección y análisis de datos:** origen de datos, balance de clases, calidad y sesgos.
3. **Preparación y limpieza:** manejo de valores faltantes, normalización, división en train/val/test.
4. **Selección de modelo:** lineales, árboles, redes neuronales, modelos generativos o de lenguaje.
5. **Entrenamiento:** ajustar hiperparámetros, regularizar, controlar overfitting.
6. **Evaluación:** métricas adecuadas, validación cruzada, interpretación de resultados.
7. **Despliegue:** empaquetado, monitoreo, retroalimentación y retraining.

## Buenas prácticas transversales
- Documentar supuestos y decisiones de diseño.
- Separar datos de entrenamiento, validación y prueba.
- Registrar experimentos (configuración, métricas, semilla aleatoria).
- Incorporar revisiones de seguridad y privacidad.

## Ejercicio rápido
- Redacta en tu cuaderno un problema que quieras resolver con IA y define:
  - Tipo de salida (clasificación, regresión, generación).
  - Métrica de éxito.
  - Riesgos o límites éticos.
