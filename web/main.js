const docs = [
  { title: 'Bases de IA', path: '../docs/01_bases_ia.md' },
  { title: 'Terminología y conceptos', path: '../docs/02_terminologia_y_conceptos.md' },
  { title: 'Fundamentos de modelos', path: '../docs/03_fundamentos_modelos.md' },
  { title: 'Crea tu primer modelo', path: '../docs/04_crea_tu_primer_modelo.md' },
  { title: 'Aprovecha modelos existentes', path: '../docs/05_aprovecha_modelos.md' },
  { title: 'Checklist y ejercicios', path: '../docs/ejercicios.md' },
].map((doc) => ({
  ...doc,
  id: doc.path
    .split('/')
    .pop()
    .replace(/\.md$/, '')
}));

const list = document.getElementById('doc-list');
const content = document.getElementById('content');
const statTitle = document.getElementById('stat-title');
const startBtn = document.getElementById('start-btn');
const searchInput = document.getElementById('search-input');
const currentTitle = document.getElementById('current-title');
const openSource = document.getElementById('open-source');
const copyLinkBtn = document.getElementById('copy-link');

let activeDoc = docs[0];

function setActive(doc) {
  statTitle.textContent = doc.title;
  currentTitle.textContent = doc.title;
  openSource.href = doc.path;
  [...list.children].forEach((li) => {
    li.querySelector('button').classList.toggle('active', li.dataset.id === doc.id);
  });
}

async function loadDoc(doc) {
  activeDoc = doc;
  window.location.hash = doc.id;
  setActive(doc);
  content.textContent = 'Cargando contenido...';
  try {
    const res = await fetch(doc.path);
    if (!res.ok) throw new Error('No se pudo cargar el archivo');
    const md = await res.text();
    content.innerHTML = marked.parse(md, { breaks: true });
  } catch (error) {
    content.innerHTML = `<p>No pudimos cargar este módulo. Verifica que ejecutas un servidor local y que el archivo existe.</p><p>Error: ${error.message}</p>`;
  }
}

function createListItem(doc, index) {
  const item = document.createElement('button');
  item.textContent = `${index + 1}. ${doc.title}`;
  item.className = 'doc-item';
  item.dataset.title = doc.title;
  item.addEventListener('click', () => loadDoc(doc));
  const li = document.createElement('li');
  li.dataset.id = doc.id;
  li.appendChild(item);
  return li;
}

function renderList(filter = '') {
  list.innerHTML = '';
  const filtered = docs.filter((doc) =>
    doc.title.toLowerCase().includes(filter.toLowerCase())
  );

  if (filtered.length === 0) {
    const empty = document.createElement('p');
    empty.className = 'muted';
    empty.textContent = 'No hay módulos que coincidan con tu búsqueda.';
    list.appendChild(empty);
    return;
  }

  filtered.forEach((doc, index) => {
    const li = createListItem(doc, index);
    list.appendChild(li);
  });
}

function loadFromHash() {
  const id = window.location.hash.replace('#', '');
  const doc = docs.find((d) => d.id === id);
  if (doc) {
    loadDoc(doc);
  } else {
    loadDoc(docs[0]);
  }
}

function copyLink() {
  const url = `${window.location.origin}${window.location.pathname}#${activeDoc.id}`;
  navigator.clipboard.writeText(url).then(() => {
    copyLinkBtn.textContent = 'Copiado ✓';
    setTimeout(() => {
      copyLinkBtn.textContent = 'Copiar enlace';
    }, 1600);
  }).catch(() => {
    copyLinkBtn.textContent = 'No se pudo copiar';
  });
}

renderList();
loadFromHash();
startBtn.addEventListener('click', () => loadDoc(docs[0]));
searchInput.addEventListener('input', (event) => renderList(event.target.value));
copyLinkBtn.addEventListener('click', copyLink);
window.addEventListener('hashchange', loadFromHash);
