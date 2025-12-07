# Grandes Modelos de Lenguaje (LLMs)

## Intuicion
Un LLM es un Transformer entrenado a gran escala para predecir el siguiente token. Aprende estadisticas y patrones lingüisticos que luego se pueden reutilizar para tareas diversas.

## Puntos tecnicos clave
- Preentrenamiento: predictivo (next-token) sobre corpus masivo.  
- Instruccion/sintonizacion: ajusta el modelo para seguir ordenes (SFT, RLHF).  
- Inference: generacion autoregresiva con estrategias como greedy, top-k, nucleus (top-p), temperature.

## Ejemplo: usar un modelo pequeño con Hugging Face (CPU)
```python
from transformers import AutoTokenizer, AutoModelForCausalLM
import torch

model_id = "gpt2"
tok = AutoTokenizer.from_pretrained(model_id)
model = AutoModelForCausalLM.from_pretrained(model_id)

prompt = "Explica brevemente que es el aprendizaje automatico:"
inputs = tok(prompt, return_tensors="pt")
outputs = model.generate(**inputs, max_new_tokens=40, temperature=0.8, top_p=0.9)
print(tok.decode(outputs[0], skip_special_tokens=True))
```

## Mini ejercicios
1) Cambia `temperature` a 0.1 y luego a 1.2; compara tono y diversidad.  
2) Limita `max_new_tokens` a 10 para observar respuestas concisas.  
3) Escribe con tus palabras que hace `top_p` y en que se diferencia de `top_k`.

## Preguntas de chequeo
- Por que la generacion es token a token y no toda la frase a la vez?  
- Que riesgo hay si el corpus de preentrenamiento tiene sesgos?  
- Que es el "context window" y por que limita tareas largas?

## Resumen
- LLM = Transformer grande entrenado a predecir el siguiente token.  
- La generacion se controla con temperatura y filtros de probabilidad.  
- Modelos preentrenados permiten prototipar sin entrenar desde cero.
