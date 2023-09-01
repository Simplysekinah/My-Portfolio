let hom = document.getElementById("hom")
let home = document.getElementById("home")
let abo = document.getElementById("abo")
let about = document.getElementById("about")
let ser = document.getElementById("ser")
let Servicesholder = document.getElementById("Services-holder")









hom.addEventListener("click", ()=>{
    home.scrollIntoView({behavior: 'smooth'})
})

abo.addEventListener("click", ()=>{
    about.scrollIntoView({behavior: 'smooth'})
})
ser.addEventListener("click", ()=>{
    Servicesholder.scrollIntoView({behavior: 'smooth'})
})