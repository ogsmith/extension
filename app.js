document.addEventListener('DOMContentLoaded', _ => {

  const form = document.querySelector('.search');
  const input = document.querySelector('.search__input');
  const clear = document.querySelector('.search__clear');

  form.addEventListener('submit', searchThis);

  input.addEventListener('keyup', _ => {
    input.value.length > 0 ? show(clear) : hide(clear);
  })

  clear.addEventListener('click', _ => {
    input.value = '';
    hide(clear)
  });

  function searchThis(e) {
    const query = input.value
    const url = `https://www.americastestkitchen.com/search?q=${query}`;

    chrome.tabs.update(null, {
        url: url
    });
  }

  function show(el) {
    el.classList.remove('hidden');
  }

  function hide(el) {
    el.classList.add('hidden');
  }

});
