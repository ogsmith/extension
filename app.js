document.addEventListener('DOMContentLoaded', _ => {

  const form = document.querySelector('.search');
  const input = document.querySelector('input[type="search"]');

  form.addEventListener('submit', searchThis);

  function searchThis(e) {
    const query = input.value
    const url = `https://www.americastestkitchen.com/search?q=${query}`;

    chrome.tabs.update(null, {
        url: url
    });
  }

});
