// posts using createElement, delete button, and localStorage persistence
let form = document.querySelector('form');
let postsContainer = document.querySelector('.posts');

// load saved posts
let saved = localStorage.getItem('oops_posts');
let posts = saved ? JSON.parse(saved) : [];

function save() { localStorage.setItem('oops_posts', JSON.stringify(posts)); }

function createPostElement(post) {
  let wrap = document.createElement('div');
  wrap.className = 'post w-1/4 mb-4 rounded-lg overflow-hidden';

  let bar = document.createElement('div');
  bar.className = 'bar flex items-center bg-slate-200 p-2 gap-2';

  let imgDp = document.createElement('img');
  imgDp.src = post.dp;
  imgDp.className = 'w-12 h-12 rounded-full';

  let meta = document.createElement('div');
  let h3 = document.createElement('h3');
  h3.className = 'text-xl font-semibold text-black/50';
  h3.textContent = post.name;
  let p = document.createElement('p');
  p.className = 'text-md text-black/60';
  p.textContent = post.caption || '';

  meta.appendChild(h3);
  meta.appendChild(p);

  let del = document.createElement('button');
  del.textContent = 'Delete';
  del.className = 'ml-auto bg-red-500 text-white px-2 py-1 rounded';
  del.addEventListener('click', () => {
    let idx = posts.findIndex(x => x.id === post.id);
    if (idx > -1) {
      posts.splice(idx, 1);
      save();
      renderAll();
    }
  });

  bar.appendChild(imgDp);
  bar.appendChild(meta);
  bar.appendChild(del);

  let imgWrap = document.createElement('div');
  imgWrap.className = 'mainImg overflow-hidden';
  let img = document.createElement('img');
  img.src = post.img;
  img.alt = '';
  img.className = 'w-full h-full object-fit';
  imgWrap.appendChild(img);

  wrap.appendChild(bar);
  wrap.appendChild(imgWrap);
  return wrap;
}

function renderAll() {
  postsContainer.innerHTML = '';
  posts.slice().reverse().forEach(p => postsContainer.appendChild(createPostElement(p)));
}

form.addEventListener('submit', e => {
  e.preventDefault();
  let dp = form.dp.value.trim() || 'https://i.pinimg.com/736x/c2/d0/44/c2d044ec175408b8a2ca38bdbee3d428.jpg';
  let name = form.name.value.trim();
  let img = form.post.value.trim();
  let caption = form.caption.value.trim();
  if (!name || !img) return alert('Name and image required');

  posts.push({ id: Date.now(), dp, name, img, caption });
  save();
  renderAll();
  form.reset();
});

renderAll();
