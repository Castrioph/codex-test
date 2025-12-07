# Fundamentos Matematicos Esenciales

## Idea intuitiva
Las redes aprenden ajustando numeros (pesos). Para hacerlo necesitamos tres piezas: algebra lineal (vectores y matrices), calculo basico (derivadas para saber como mover los pesos) y probabilidad (para medir incertidumbre).

## Version tecnica breve
- Vectores y matrices: almacenan datos y pesos; la multiplicacion matriz-vector es la operacion base de una red.
- Derivada: indica que tan sensible es el error a cada peso (gradiente).
- Regla de la cadena: permite propagar derivadas a traves de capas.

## Ejemplo en Python: gradiente a mano
```python
import numpy as np

# y = (w*x - y_true)^2  con x=2, y_true=5
x, y_true = 2.0, 5.0
w = 0.5

def loss(w):
    return (w * x - y_true) ** 2

def grad(w):
    return 2 * (w * x - y_true) * x  # derivada de la funcion de costo

for step in range(5):
    g = grad(w)
    w = w - 0.1 * g
    print(f"step {step}: w={w:.3f}, loss={loss(w):.3f}")
```
Observa como la derivada guia la actualizacion de `w` para reducir el error.

## Mini ejercicios
1) Cambia `x` y `y_true` y verifica si el peso converge a `y_true/x`.  
2) Dibuja en papel la funcion de perdida y el vector gradiente.  
3) Implementa la misma idea pero con dos pesos `w1`, `w2` y entrada `[x1, x2]`.

## Preguntas de chequeo
- Por que la derivada se multiplica por `x` en el ejemplo?  
- Que ocurre si el learning rate es 1.0?  
- Como se conecta la regla de la cadena con varias capas?

## Resumen
- Algebra lineal + derivadas + probabilidad son el kit minimo.  
- El gradiente dice hacia donde mover los pesos para reducir el error.  
- Practicar calculando derivadas simples acelera entender el backprop real.
