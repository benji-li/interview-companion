//add a floating rectangle that says "yeer"
const badge = document.createElement('p');
badge.classList.add('color-secondary-text', 'type--caption');
badge.textContent = `⏱️ yeer`;
// make it float in the middle of the page
badge.style.position = "fixed";
badge.style.top = "50%";
badge.style.left = "50%";
badge.style.transform = "translate(-50%, -50%)";
document.body.appendChild(badge);


/*const article = document.querySelector('article');

// `document.querySelector` may return null if the selector doesn't match anything.
if (article) {
  const text = article.textContent;

  const wordMatchRegExp = /[^\s]+/g;
  const words = text.matchAll(wordMatchRegExp);
  // matchAll returns an iterator, convert to array to get word count
  const wordCount = [...words].length;
  const readingTime = Math.round(wordCount / 200);
  const badge = document.createElement('p');
  // Use the same styling as the publish information in an article's header
  badge.classList.add('color-secondary-text', 'type--caption');
  badge.textContent = `⏱️ yeer`;

  // Support for API reference docs
  const heading = article.querySelector('h1');
  // Support for article docs with date
  const date = article.querySelector('time')?.parentNode;

  // https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement
  (date ?? heading).insertAdjacentElement('afterend', badge);
}*/