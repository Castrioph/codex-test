# Fine-tuning y Entrenamiento Personalizado

## Intuicion
Tomas un modelo preentrenado y lo ajustas a tus datos para que hable tu dominio (soporte, legal, medico) sin entrenar desde cero.

## Modalidades comunes
- **SFT (Supervised Fine-Tuning):** pares instruccion-respuesta.  
- **LoRA/QLoRA:** adapta solo matrices pequeñas (adapters) y ahorra memoria.  
- **Instruccion + RLHF/RLAIF:** refina el estilo usando preferencias humanas o de otro modelo.

## Ejemplo: LoRA rapido con PEFT (pseudo)
```python
from peft import LoraConfig, get_peft_model
from transformers import AutoModelForCausalLM

base = AutoModelForCausalLM.from_pretrained("gpt2")
config = LoraConfig(r=8, lora_alpha=16, target_modules=["c_attn"])
model = get_peft_model(base, config)

# luego entrenas con tu dataloader y optimizador habitual
```

## Mini ejercicios
1) Enumera tres ventajas de LoRA sobre un fine-tuning completo.  
2) Diseña un dataset de 20 pares pregunta-respuesta de tu dominio.  
3) Explica con tus palabras que es el "r" en LoRA y como afecta la capacidad.

## Preguntas de chequeo
- Que metricas usarias para evaluar el modelo ajustado?  
- Como evitarias el sobreajuste en un dataset pequeno?  
- Que aspectos legales/de privacidad debes cuidar al usar datos propios?

## Resumen
- Fine-tuning adapta un modelo a tu dominio con menos datos y coste.  
- LoRA permite entrenar partes pequeñas y enchufarlas al modelo base.  
- Define datos limpios y metricas claras antes de ajustar.
