# Retrieval Augmented Generation (RAG)

## Intuicion
En lugar de confiar solo en lo que el modelo recuerda, RAG busca documentos relevantes y los entrega al LLM como contexto fresco. Asi reduces alucinaciones y actualizas conocimiento sin reentrenar.

## Flujo basico
1) Indexar documentos con un vectorizador (embeddings).  
2) Consultar: generar embedding de la pregunta, recuperar k documentos mas similares.  
3) Construir el prompt con esos fragmentos y pedir la respuesta al LLM.  
4) (Opcional) Re-rank o filtrar para mejorar precision.

## Ejemplo minimo con FAISS + Hugging Face embeddings
```python
import faiss, numpy as np
from sentence_transformers import SentenceTransformer

docs = ["Python es un lenguaje", "Transformers usan atencion", "La IA aprende de datos"]
model = SentenceTransformer("all-MiniLM-L6-v2")
emb = model.encode(docs, normalize_embeddings=True)

index = faiss.IndexFlatIP(emb.shape[1])
index.add(emb.astype(np.float32))

query = "Como funciona la atencion en transformers?"
qv = model.encode([query], normalize_embeddings=True).astype(np.float32)
scores, idx = index.search(qv, k=2)
print("Documentos recuperados:", [docs[i] for i in idx[0]])
```

## Mini ejercicios
1) Cambia `k` y observa si mejora la relevancia.  
2) Agrega un paso de filtro: descarta documentos cuya similitud sea < 0.3.  
3) Escribe con tus palabras donde insertarias la respuesta del LLM en este flujo.

## Preguntas de chequeo
- Por que normalizamos embeddings antes de indexar?  
- Que ventaja tiene RAG frente a volver a entrenar el modelo?  
- Que riesgo hay si los documentos recuperados son irrelevantes?

## Resumen
- RAG = recuperar + generar: contexto fresco para el LLM.  
- Un index vectorial (FAISS, Elasticsearch) acelera la busqueda semantica.  
- La calidad de los documentos recuperados determina la calidad de la respuesta.
