# Fundamentos de modelos y entrenamiento

## Modelos clásicos
- **Regresión lineal/logística:** base para tareas de regresión o clasificación binaria.
- **Árboles y bosques (Random Forest, Gradient Boosting):** robustos con datos tabulares.
- **SVM:** efectivos en espacios de alta dimensión con kernels.

## Redes neuronales
- **Perceptrón multicapa (MLP):** capas densas, útiles para datos tabulares y señales.
- **CNN:** convoluciones para imágenes y datos con estructura espacial.
- **RNN/Transformers:** secuencias de texto, audio o series temporales.

## Entrenamiento supervisado típico
1. Inicializa parámetros (pesos al azar controlado con semilla).
2. Propagación hacia adelante -> cálculo de pérdida.
3. Backpropagation -> cálculo de gradientes.
4. Actualización de pesos (optimizadores como SGD, Adam).
5. Repetir por épocas, evaluando en validación.

## Consideraciones prácticas
- **Normalización de entradas:** mejora estabilidad numérica.
- **Batching:** reduce varianza del gradiente y acelera entrenamiento.
- **Early stopping y checkpoints:** previenen overfitting y facilitan recuperación.
- **Data augmentation:** sintetiza ejemplos en visión y texto.
- **Escalabilidad:** usa GPU/TPU, vectoriza operaciones, distribuye entrenamiento cuando sea necesario.

## Ejercicio guiado
- Toma el dataset Iris con `scikit-learn` y prueba dos modelos: logística y Random Forest.
- Compara accuracy y F1 en validación; documenta cuál generaliza mejor y por qué.
- Registra parámetros y resultados en una tabla simple.
