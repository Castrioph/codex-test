# Terminología y conceptos esenciales

## Datos
- **Dataset:** colección de ejemplos etiquetados o no etiquetados.
- **Features (características):** variables de entrada; pueden ser numéricas, categóricas, texto o imágenes.
- **Etiquetas (labels):** valores objetivo en tareas supervisadas.
- **Split:** división en `train`, `valid` y `test` para estimar generalización.

## Modelos
- **Parámetros:** valores que el algoritmo aprende (pesos de una red, coeficientes de una regresión lineal).
- **Hiperparámetros:** configuraciones externas al entrenamiento (learning rate, profundidad de árbol, número de épocas).
- **Regularización:** técnicas para evitar overfitting (L1/L2, dropout, early stopping).

## Entrenamiento y evaluación
- **Función de pérdida:** qué intenta minimizar el modelo (ej. entropía cruzada, MSE).
- **Métrica:** cómo medimos éxito; puede diferir de la pérdida (accuracy, F1, ROC-AUC, BLEU).
- **Validación cruzada (k-fold):** reutilizar datos para evaluar estabilidad del modelo.
- **Seed:** semilla para reproducibilidad.

## Inferencia y despliegue
- **Latencia:** tiempo de respuesta en producción.
- **Throughput:** volumen de peticiones procesadas.
- **Monitoreo:** alertas por deriva de datos, caída de métricas o errores.

## Ejercicio práctico
1. Elige un conjunto de datos abierto (ej. Iris, Titanic, MNIST) y escribe:
   - ¿Qué tipo de problema es?
   - ¿Qué features y etiquetas usarías?
   - ¿Qué métrica considerarías?
2. Define dos riesgos éticos o de sesgo en ese dataset.
