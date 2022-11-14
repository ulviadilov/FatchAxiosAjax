let place = document.querySelector(".container .row")


fetch("https://api.tvmaze.com/shows")
.then(res => res.json())
.then(datas =>{
    console.log(datas);
    for (let i = 0; i < datas.length; i++) {
        let img =document.createElement("img")
        place.innerHTML += `<div class ="col-3"><div class="card px-2" style="width: 18rem;">
        <img src="${datas[i].image.medium}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${datas[i].name}</h5>
          <p class="card-text">Premiere: ${datas[i].premiered}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">IMDB rating ${datas[i].rating.average}</li>
          <li class="list-group-item">Genre: ${datas[i].genres[0]}</li>
          <li class="list-group-item">Langague: ${datas[i].language}</li>
        </ul>
        <div class="card-body">
          <a href="${datas[i].officialSite}" class="card-link btn btn-primary" target="_blank">Go to website</a>
          <a href = "./SecondPage.html" class ="btn btn-success" >Go to details</a>
        </div>
      </div>
      </div>`    
    }
    
})

