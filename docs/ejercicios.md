# Ejercicios y proyectos

Usa este archivo para registrar resultados, métricas y aprendizajes de cada ejercicio.

## Checklist de ejercicios
- [ ] Definir un problema propio de IA y su métrica (ver `01_bases_ia.md`).
- [ ] Analizar un dataset abierto y mapear features/etiquetas (ver `02_terminologia_y_conceptos.md`).
- [ ] Comparar regresión logística vs. Random Forest en Iris (ver `03_fundamentos_modelos.md`).
- [ ] Entrenar el script `experimentos/iris_basico.py` y capturar la matriz de confusión.
- [ ] Repetir el experimento con `RandomForestClassifier` y añadir `StandardScaler`.
- [ ] Diseñar y probar dos prompts distintos para extracción de entidades con un LLM.
- [ ] Implementar un script simple que llame a un endpoint de LLM con manejo de errores.

## Plantilla para documentar experimentos
```
### Experimento <nombre>
- Objetivo:
- Datos:
- Modelo y configuración:
- Métricas:
- Observaciones:
- Próximos pasos:
```

## Ideas de mini-proyectos
1. **Clasificador de texto corto:** spam/ham o sentimiento con `scikit-learn`.
2. **Clasificador de imágenes pequeño:** usa CIFAR-10 o Fashion-MNIST con una CNN simple.
3. **Dashboard de métricas:** visualiza accuracy/F1 a lo largo de experimentos usando `matplotlib` o `plotly`.
