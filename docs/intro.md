# Introduccion a la Inteligencia Artificial

Contenido de prueba.
# Introduccion a la Inteligencia Artificial

Bienvenido. Vamos a entender la IA de forma progresiva: primero de manera intuitiva, luego con la parte tecnica justa para construir cosas reales.

## Que es IA (version corta)
- **Idea intuitiva:** Programas que aprenden patrones a partir de datos y toman decisiones sin reglas fijas escritas a mano.
- **Version tecnica suave:** IA abarca tecnicas como aprendizaje automatico (ML), aprendizaje profundo (DL) y modelos generativos. Todas ajustan parametros internos minimizando un error medido en datos.

## Por que importa
- Automatiza tareas repetitivas y creativas.
- Ayuda a razonar con grandes volumenes de informacion.
- Permite crear productos nuevos: asistentes, sistemas de recomendacion, chatbots, motores de busqueda enriquecidos, etc.

## Ejemplo rapido en Python
Entrenamos un clasificador minimo para distinguir mensajes "spam" de "ham" con scikit-learn.

```python
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.linear_model import LogisticRegression

texts = ["gana premios ahora", "reunion a las 10", "oferta limitada", "vamos a comer?"]
labels = [1, 0, 1, 0]  # 1 = spam, 0 = no spam

vectorizer = CountVectorizer()
X = vectorizer.fit_transform(texts)

model = LogisticRegression()
model.fit(X, labels)

prob = model.predict_proba(vectorizer.transform(["oferta nueva"]))[0, 1]
print(f"Probabilidad de spam: {prob:.2f}")
```

Que ocurre aqui:
1) Convertimos texto a bolsa de palabras (numeros).  
2) Ajustamos una regresion logistica que aprende pesos por palabra.  
3) Consultamos la probabilidad de que un mensaje sea spam.

## Mini ejercicio interactivo
1) Cambia las frases de entrenamiento y observa como cambia la probabilidad.  
2) Agrega mas frases neutras (no spam) y mira si el modelo se vuelve mas conservador.  
3) Explica con tus palabras que hace `CountVectorizer`.  
4) Reto corto: reemplaza `LogisticRegression` por `LinearSVC` y compara la salida.

## Preguntas de chequeo
- Que diferencia hay entre una regla IF escrita a mano y el modelo anterior?
- Por que necesitamos datos etiquetados?
- Que pasaria si entrenas solo con dos ejemplos?

## Resumen
- IA = sistemas que aprenden patrones desde datos en lugar de reglas rigidas.  
- En minutos puedes entrenar un modelo basico con pocas lineas.  
- La clave esta en como representas los datos (features) y en medir el error para ajustarse.
