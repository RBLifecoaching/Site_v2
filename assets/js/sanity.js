(function (global) {
  const PROJECT_ID = 'eqczuptd';
  const DATASET = 'production';
  const API_VERSION = '2024-01-01';

  const API_URL = `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/query/${DATASET}`;
  const CDN_URL = `https://cdn.sanity.io/images/${PROJECT_ID}/${DATASET}`;

  async function fetchQuery(query, params = {}) {
    const url = new URL(API_URL);
    url.searchParams.set('query', query);
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.set(`$${key}`, JSON.stringify(value));
    });
    const res = await fetch(url.toString());
    if (!res.ok) throw new Error(`Sanity fetch failed: ${res.status}`);
    const data = await res.json();
    return data.result;
  }

  function imageUrl(source, options = {}) {
    if (!source || !source.asset || !source.asset._ref) return '';
    const ref = source.asset._ref;
    const [, id, dims, ext] = ref.split('-');
    let url = `${CDN_URL}/${id}-${dims}.${ext}`;
    const query = [];
    if (options.width) query.push(`w=${options.width}`);
    if (options.height) query.push(`h=${options.height}`);
    if (options.fit) query.push(`fit=${options.fit}`);
    query.push('auto=format');
    return url + `?${query.join('&')}`;
  }

  function renderChildren(children, markDefs) {
    return (children || []).map(c => {
      let text = escapeHtml(c.text || '');
      if (Array.isArray(c.marks)) {
        c.marks.forEach(mark => {
          if (mark === 'strong') text = `<strong>${text}</strong>`;
          else if (mark === 'em') text = `<em>${text}</em>`;
          else {
            // Cherche si c'est un lien
            const def = (markDefs || []).find(d => d._key === mark);
            if (def && def._type === 'link') {
              text = `<a href="${escapeHtml(def.href)}" target="_blank" rel="noopener noreferrer">${text}</a>`;
            }
          }
        });
      }
      return text;
    }).join('');
  }

   function renderPortableText(blocks) {
    if (!Array.isArray(blocks)) return '';

    let html = '';
    let inList = false;

    blocks.forEach(b => {
      if (b.listItem !== 'bullet' && inList) {
        html += '</ul>';
        inList = false;
      }

      if (b._type === 'image') {
        html += `<figure class="post-image"><img src="${imageUrl(b, { width: 900 })}" alt="${escapeHtml(b.alt || '')}"></figure>`;
        return;
      }

      if (b._type === 'block') {
        if (b.listItem === 'bullet') {
          if (!inList) { html += '<ul>'; inList = true; }
          html += `<li>${renderChildren(b.children, b.markDefs)}</li>`;
        } else {
          const style = b.style || 'normal';
          const content = renderChildren(b.children, b.markDefs);
          if (style === 'h2') html += `<h2>${content}</h2>`;
          else if (style === 'h3') html += `<h3>${content}</h3>`;
          else html += `<p>${content}</p>`;
        }
      }
    });

    if (inList) html += '</ul>';
    return html;
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function formatDate(iso) {
    return iso ? new Date(iso).toLocaleDateString('fr-FR') : '';
  }

  global.Sanity = { fetchQuery, imageUrl, renderPortableText, escapeHtml, formatDate };

})(window);
