document.addEventListener('DOMContentLoaded', _ => {

  $.ajax({
    url: 'https://www.americastestkitchen.com/api/v4/token',
    data: '',
    headers: {
      "Authorization": "Basic " + btoa('atk' + ":" + 'ezBD2AwjQos63EZbpCUeYAtt')
    },
    success: function(d) {
      hitHomepage();
    }
  });

  function hitHomepage() {
    $.ajax({
      url: 'https://www.americastestkitchen.com/api/v4/atk/homepage?site_key=atk',
      data: '',
      success: function(d) {
        const recipes = d.data.data.recipes

        recipes.pop();

        const template = recipes.map((recipe) => {
          return `
            <figure class="recipe">
              <a class="recipe__image-link" href="https://www.americastestkitchen.com/recipes/${recipe.slug}">
                <img class="recipe__image" src="http:${recipe.photo.image_url}" alt="${recipe.photo.alt}" />
              </a>
              <figcaption class="recipe__data">
                <a class="recipe__link" href="https://www.americastestkitchen.com/recipes/${recipe.slug}">
                  <h3 class="recipe__title">${recipe.title}</h3>
                </a>
              </figcaption>
            </figure>`
        }).join('');

        document.querySelector('.recipes').innerHTML = template;
      },
      dataType: 'json'
    });
  }

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
