# Crea tu primer modelo

En este módulo entrenarás un clasificador sencillo en Python con `scikit-learn`.

## Preparación del entorno
1. Crea y activa un entorno virtual:
   ```bash
   python -m venv .venv
   source .venv/bin/activate  # En Windows: .venv\\Scripts\\activate
   ```
2. Instala dependencias mínimas:
   ```bash
   pip install scikit-learn pandas numpy matplotlib
   ```

## Script base (clasificación Iris)
Guarda el siguiente script como `experimentos/iris_basico.py` (crea la carpeta si no existe):
```python
import pathlib

import matplotlib.pyplot as plt
import pandas as pd
from sklearn.datasets import load_iris
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report, ConfusionMatrixDisplay

# Semilla para reproducibilidad
RANDOM_STATE = 42

# Carga de datos
iris = load_iris(as_frame=True)
df = iris.frame

X = df[iris.feature_names]
y = df["target"]

# Separación de datos
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=RANDOM_STATE, stratify=y
)

# Definición y entrenamiento del modelo
model = LogisticRegression(max_iter=200, n_jobs=-1, multi_class="auto")
model.fit(X_train, y_train)

# Evaluación
preds = model.predict(X_test)
print("\nReporte de clasificación:\n", classification_report(y_test, preds, target_names=iris.target_names))

# Matriz de confusión
ConfusionMatrixDisplay.from_estimator(model, X_test, y_test, display_labels=iris.target_names)
plt.tight_layout()
output = pathlib.Path("experimentos/iris_confusion.png")
plt.savefig(output)
print(f"Guardada figura en {output}")
```

## Ejercicios
1. **Reproduce el script** y verifica la matriz de confusión generada.
2. Cambia el modelo a `RandomForestClassifier` y compara F1.
3. Añade estandarización con `StandardScaler` y observa impacto en regresión logística.
4. Documenta resultados en `docs/ejercicios.md` (tabla comparativa de métricas).
