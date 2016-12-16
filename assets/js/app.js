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
        const recipes = d.data.recipes;

        recipes.pop();

        const template = recipes.map((recipe) => {
          return `
            <figure class="recipe">
              <a class="recipe__image-link" href="https://www.americastestkitchen.com/recipes/${recipe.slug}">
                <img class="recipe__image js-lazy" data-src="http:${recipe.photo.image_url}" data-alt="http:${recipe.photo.alt}"/>
              </a>
              <figcaption class="recipe__data">
                <a class="recipe__link" href="https://www.americastestkitchen.com/recipes/${recipe.slug}">
                  <h3 class="recipe__title">${recipe.title}</h3>
                </a>
              </figcaption>
            </figure>`
        }).join('');

        document.querySelector('.recipes__cards').innerHTML = template;

        const lazyload = [...document.querySelectorAll('.js-lazy')];

    		lazyload.forEach(el => {

    			const img = document.createElement('img');
    			const src = el.getAttribute('data-src');

    			img.onload = () => {

    				el.src = `${src}`;
            el.style.paddingBottom = 0;

    				requestAnimationFrame(() => el.style.opacity = 1);
    			}

    			img.src = src;
    		})
      },
      dataType: 'json'
    });
  }

  const form = document.querySelector('.js-form');
  const input = document.querySelector('.js-input');
  const clear = document.querySelector('.js-clear');

  form.addEventListener('submit', searchThis);

  input.addEventListener('keyup', _ => {
    input.value.length > 0 ? show(clear) : hide(clear);
  });

  clear.addEventListener('click', _ => {
    input.value = '';
    hide(clear);
  });

  function searchThis(e) {
    if (input.value.trim() === '') return;

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
