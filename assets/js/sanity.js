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
 function renderPortableText(blocks) {
  if (!Array.isArray(blocks)) return '';

  return blocks.map(b => {
    if (b._type === 'block') {
      // On regarde si c'est un titre ou un paragraphe normal
      const style = b.style || 'normal';
      
      if (style === 'h2') {
        return `<h2>${(b.children || []).map(c => c.text).join('')}</h2>`;
      }
      if (style === 'h3') {
        return `<h3>${(b.children || []).map(c => c.text).join('')}</h3>`;
      }
      
      // Par défaut, on garde le paragraphe
      return `<p>${(b.children || []).map(c => c.text).join('')}</p>`;
    }
    return '';
  }).join('');
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

  global.Sanity = {
    fetchQuery,
    imageUrl,
    renderPortableText,
    escapeHtml,
    formatDate
  };

})(window);
