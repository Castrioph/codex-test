# Transformers Paso a Paso

## Intuicion
Imagina leer un parrafo y decidir que palabras importan para entender la siguiente. La capa de atencion hace justo eso: pesa relaciones entre tokens y mezcla su informacion.

## Arquitectura minima
- Tokenizacion -> embeddings -> bloques repetidos de (Self-Attention + MLP) con residuales y LayerNorm -> proyeccion a logits.
- Parametros clave: numero de cabezas, dimension del embedding, numero de capas.

## Ejemplo: una sola cabeza de atencion en PyTorch
```python
import torch
torch.manual_seed(0)

x = torch.randn(1, 3, 4)  # batch=1, tokens=3, dim=4
W_q = torch.randn(4, 4); W_k = torch.randn(4, 4); W_v = torch.randn(4, 4)

Q = x @ W_q; K = x @ W_k; V = x @ W_v
scores = (Q @ K.transpose(1,2)) / (4 ** 0.5)
weights = scores.softmax(dim=-1)
out = weights @ V
print(out)
```
Que ver: `weights` muestra como cada token presta atencion a los demas.

## Mini ejercicios
1) Cambia el numero de tokens a 6 y observa la matriz de pesos de atencion.  
2) Agrega un residual sencillo: `x + out` y comenta por que ayuda al entrenamiento.  
3) Implementa mascara causal (triangular inferior) para simular generacion autoregresiva.

## Preguntas de chequeo
- Por que dividimos por `sqrt(d_k)` en los scores?  
- Que diferencia hay entre self-attention y cross-attention?  
- Como afecta el tamaño del contexto al coste computacional?

## Resumen
- Un Transformer es atencion + MLP repetidos con residuales y normalizacion.  
- La matriz de pesos de atencion revela que partes del texto se influencian.  
- Con PyTorch puedes inspeccionar rapidamente las tensores y entender el flujo.
