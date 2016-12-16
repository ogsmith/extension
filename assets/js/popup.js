document.addEventListener('DOMContentLoaded', _ => {

  const form = document.querySelector('.js-form');
  const input = document.querySelector('.js-input');

  form.addEventListener('submit', searchThis);

  function searchThis(e) {
    if (input.value.trim() === '') return;

    const query = input.value
    const url = `https://www.americastestkitchen.com/search?q=${query}`;

    chrome.tabs.update(null, {
        url: url
    });
  }

});
