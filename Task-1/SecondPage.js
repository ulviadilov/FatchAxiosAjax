let a =localStorage.getItem("number")

let place = document.querySelector(".container")

fetch("https://api.tvmaze.com/shows")
.then(res => res.json())
.then(datas =>{
    console.log(a);
})