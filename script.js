
/*
Aseguito della chiamata dell'endPoint BIRRE stampiamo le card di ogni birra prezzo, nome, stelline, l'immagine.
*/

const endPoint = 'https://api.sampleapis.com/beers/ale'
const loader = document.querySelector(".loader-container")
const container = document.querySelector(".container")

axios.get(endPoint)
  .then(response => {
    loader.classList.add('d-none')
    container.classList.remove('d-none')
    container.innerHTML = ''
    response.data.forEach(birra => printCard(birra))
  })

  //FUNCTIONS
  function printCard(birra){
    const {price, name, rating, image} = birra;
    const {average} = rating
    const averageRound = Math.round(average)
    console.log(averageRound)
    // <i class="fa-solid fa-star"></i>
    let stars = ''
    for(let i = 1; i <= 5; i++){
      const status = i <= averageRound ? 'solid' : 'regular' 
      stars += `<i class="fa-${status} fa-star"></i>`
    }
    container.innerHTML += ` <div class="card m-3" style="width: 12rem;">
    <img class="imgbirra" src="${image}" aria-placeholder="card-img-top" alt="${name}" onerror="this.src='placeholder.png'">
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <p class="card-text">${price}</p>
      <div id="rating">
        ${stars}
      </div>
    </div>
  </div>`
  }