# Terminología y conceptos esenciales

## Datos
- **Dataset:** colección de ejemplos etiquetados o no etiquetados.
- **Features (características):** variables de entrada; pueden ser numéricas, categóricas, texto o imágenes.
- **Etiquetas (labels):** valores objetivo en tareas supervisadas.
- **Split:** división en `train`, `valid` y `test` para estimar generalización.
- **Leakage:** cuando información del futuro o de la etiqueta se filtra en el entrenamiento.

### Mini ejercicio guiado
Completa esta tabla en tu cuaderno para el dataset que elijas:

| Dataset | Tipo de problema | Features clave | Etiqueta | Riesgo de leakage |
|---------|------------------|----------------|----------|-------------------|
|         |                  |                |          |                   |

## Modelos
- **Parámetros:** valores que el algoritmo aprende (pesos de una red, coeficientes de una regresión lineal).
- **Hiperparámetros:** configuraciones externas al entrenamiento (learning rate, profundidad de árbol, número de épocas).
- **Regularización:** técnicas para evitar overfitting (L1/L2, dropout, early stopping).
- **Capacidad del modelo:** qué tan flexible es para ajustarse a los datos; demasiada capacidad lleva a overfitting.

> 🎯 **Reto rápido**: señala un hiperparámetro que impacte la capacidad de tu modelo elegido y describe cómo lo ajustarías.

## Entrenamiento y evaluación
- **Función de pérdida:** qué intenta minimizar el modelo (ej. entropía cruzada, MSE).
- **Métrica:** cómo medimos éxito; puede diferir de la pérdida (accuracy, F1, ROC-AUC, BLEU).
- **Validación cruzada (k-fold):** reutilizar datos para evaluar estabilidad del modelo.
- **Seed:** semilla para reproducibilidad.
- **Curvas de aprendizaje:** gráficas de pérdida/métrica vs épocas para detectar underfitting/overfitting.

### Checklist de evaluación
- [ ] ¿La métrica elegida penaliza los errores que más importan al negocio?
- [ ] ¿Comparaste el modelo contra una línea base simple?
- [ ] ¿Mediste varianza con validación cruzada o múltiples seeds?

## Inferencia y despliegue
- **Latencia:** tiempo de respuesta en producción.
- **Throughput:** volumen de peticiones procesadas.
- **Monitoreo:** alertas por deriva de datos, caída de métricas o errores.
- **Guardrails:** reglas simples que evitan respuestas inseguras o fuera de política.

### Diagrama de despliegue mínimo
```
Cliente -> API -> Modelo -> Logs/Métricas -> Monitoreo
             |--> Reintentos/Timeouts
```

## Ejercicio práctico
1. Elige un conjunto de datos abierto (ej. Iris, Titanic, MNIST) y escribe:
   - ¿Qué tipo de problema es?
   - ¿Qué features y etiquetas usarías?
   - ¿Qué métrica considerarías?
2. Define dos riesgos éticos o de sesgo en ese dataset.
3. Dibuja las curvas de aprendizaje esperadas para underfitting y overfitting; anota cómo actuarías en cada caso.
