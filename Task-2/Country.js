place = document.querySelector(".container .row")

fetch("https://restcountries.com/v3.1/all")
.then(res => res.json())
.then(datas =>{
    console.log(datas);
    for (let i = 0; i < datas.length; i++) {      
        place.innerHTML += `<div class ="col-3"><div class="card" style="width: 18rem; height: 400px">
        <img src="${datas[i].flags.png}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${datas[i].name.common}</h5>
        </div>
        <ul>
          <li class="list-group-item">Region: ${datas[i].region}</li>
          <li class="list-group-item">Sub region: ${datas[i].subregion}</li>
          <li class="list-group-item">Area :${datas[i].area}</li>
        </ul>
        <div class="card-body">
          <a href="${datas[i].maps.googleMaps}" class="card-link btn btn-primary">Maps</a>
        </div>
      </div>
      </div>` 
    }
})
