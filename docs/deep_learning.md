# Deep Learning: CNNs, RNNs, Transformers

## Intuicion
- **CNN:** detectan patrones espaciales (ej. bordes en imagen) usando filtros compartidos.  
- **RNN:** procesan secuencias paso a paso, recordando contexto.  
- **Transformers:** procesan toda la secuencia a la vez usando atencion para ponderar relaciones.

## Version tecnica breve
- CNN: convolucion 2D + no linealidad + pooling. Pesos compartidos reducen parametros.  
- RNN: `h_t = f(W_h h_{t-1} + W_x x_t)`. Problema: gradientes pueden desaparecer.  
- Transformer: `Attention(Q,K,V) = softmax(QK^T / sqrt(d)) V`. Permite paralelismo y capturar dependencias largas.

## Ejemplo: atencion escalar mini
```python
import numpy as np

q = np.array([[1, 0]], dtype=float)      # consulta
K = np.array([[1, 0], [0, 1]], float)    # claves
V = np.array([[10], [50]], float)        # valores

scores = q @ K.T / np.sqrt(2)            # similaridad
weights = np.exp(scores) / np.exp(scores).sum(axis=1, keepdims=True)
out = weights @ V
print("pesos:", weights, "salida:", out)
```
Este mini ejemplo muestra como la atencion mezcla valores segun la similitud con la consulta.

## Mini ejercicios
1) Cambia `q` a `[0,1]` y explica por que el output cambia hacia 50.  
2) Implementa una capa convolucional 1D en NumPy para serie de 1 canal y un filtro de tamano 3.  
3) Describe un caso en el que usarias RNN en lugar de Transformer (pista: dispositivos con poca memoria).

## Preguntas de chequeo
- Que ventaja clave tiene la atencion frente a la recurrencia?  
- Por que los filtros convolucionales se comparten en toda la imagen?  
- Que problema solucionan las capas de normalizacion (LayerNorm/BatchNorm)?

## Resumen
- CNN, RNN y Transformers son bloques basicos del DL moderno.  
- La atencion asigna pesos a relaciones relevantes en la secuencia.  
- Experimentar con versiones reducidas aclara la intuicion antes de usar frameworks grandes.
