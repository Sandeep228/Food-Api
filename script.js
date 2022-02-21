let form = document.querySelector('form')

form.addEventListener('submit', function(e) {
    e.preventDefault();
    inpValue = e.target.querySelector('input').value
    console.log(inpValue)
    fetchData4mAPI(inpValue)
})

// to get data from api 
async function fetchData4mAPI(inpVal) {
  app_id='05abdf6b';
  app_key = '3253f53908b9a4e45738d1bee27e540f	';
  baseURl = `https://api.edamam.com/search?q=${inpVal}&app_id=${app_id}&app_key=${app_key}`;
  
    result = await fetch(baseURl);
    datas = await result.json()
    console.log(datas)
     genrateHTML(datas.hits);
}

// to show data in form of container in ui
function genrateHTML(results) {
  showINHTML = '';
  results.map(result => {
      showINHTML += `
      <div class="col-3 my-3">
      <div class="card">
          <div class="card-body">
              <img src="${result.recipe.image}" alt="" class='img-fluid'>
              <h6 class=' text-center my-2 text-truncate'>${result.recipe.label}</h6>
              <div class="d-flex justify-content-between align-items-center">
                  <h6 class=' align-self-stretch mx-auto my-auto'>Calories: ${result.recipe.calories.toFixed(2)}</h6>
                  <a href='${result.recipe.url}' class='btn btn-link align-self-stretch'>View Recipe</a>
              </div>
          </div>
      </div>
  </div> 
      `
      document.querySelector('#showRecipe').innerHTML = showINHTML;

  })
}


