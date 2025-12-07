# Redes Neuronales Desde Cero

## Intuicion
Una red es una funcion compuesta de operaciones lineales y activaciones no lineales. Cada neurona pesa entradas, las suma y aplica una funcion (por ejemplo ReLU o sigmoide).

## Version tecnica breve
Salida de una capa densa: `h = f(Wx + b)` donde `W` es matriz de pesos, `b` sesgo y `f` activacion. El entrenamiento ajusta `W` y `b` minimizando una perdida usando gradiente descendente.

## Ejemplo: MLP minimo en NumPy
```python
import numpy as np

np.random.seed(0)

X = np.random.randn(4, 2)       # 4 ejemplos, 2 features
y = np.array([[1], [0], [1], [0]])  # etiquetas binarias

W1 = np.random.randn(2, 3) * 0.1
b1 = np.zeros((1, 3))
W2 = np.random.randn(3, 1) * 0.1
b2 = np.zeros((1, 1))

def sigmoid(z): return 1 / (1 + np.exp(-z))
def forward(X):
    h = sigmoid(X @ W1 + b1)
    o = sigmoid(h @ W2 + b2)
    return h, o

def train(lr=0.5, steps=500):
    global W1, b1, W2, b2
    for _ in range(steps):
        h, o = forward(X)
        loss = ((o - y) ** 2).mean()
        # backprop simple
        d_o = 2 * (o - y) * o * (1 - o)
        d_W2 = h.T @ d_o / len(X)
        d_b2 = d_o.mean(axis=0, keepdims=True)
        d_h = d_o @ W2.T * h * (1 - h)
        d_W1 = X.T @ d_h / len(X)
        d_b1 = d_h.mean(axis=0, keepdims=True)
        W2 -= lr * d_W2; b2 -= lr * d_b2
        W1 -= lr * d_W1; b1 -= lr * d_b1
    return loss

print("loss final:", train())
```

## Mini ejercicios
1) Cambia la activacion `sigmoid` por `np.maximum(0, z)` (ReLU) y observa la perdida.  
2) Agrega una segunda capa oculta duplicando `W1`/`b1` y replicando el backprop.  
3) Explica en 3 frases el flujo forward -> loss -> backward -> update.

## Preguntas de chequeo
- Por que necesitamos una activacion no lineal?  
- Que pasa si inicializas todos los pesos en cero?  
- Como cambia el gradiente si usas perdida de entropia cruzada?

## Resumen
- Una red densa se construye con multiplicaciones y activaciones.  
- Backprop deriva cada peso usando la regla de la cadena.  
- Con NumPy puedes experimentar y ver los gradientes sin cajas negras.
