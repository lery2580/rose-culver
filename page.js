let pageNumber = 0

const pages = [

  { copy: " a Brooklyn-based graphic designer", background:"#edc7a9", circle:"#3e78ed"} ,
  { copy: "Kanye West's biggest fan", background:"#a1fffe", circle:"#e34a47"},
  { copy: " looking for a job at the start of October", background:"#d3c7f3", circle:"#f7fe00"},
  { copy: 'letting you <a href="pdf.pdf">download her PDF</a>' }

]
const nextTag = document.querySelector("footer img.next")
const ouputTag = document.querySelector("h2")
const previousTag = document.querySelector("footer img.prev")
const circleTag = document.querySelector("section div.circle")
const bodyTag = document.querySelector("body")
const randomTag = document.querySelector("footer img.random")

const previous = function(){
    pageNumber = pageNumber -1
    if(pageNumber < 0){
        pageNumber = pages.length -1
    }
    updateSection()
}

const next = function(){

pageNumber = pageNumber +1

if(pageNumber > pages.length -1){
    pageNumber = 0
}
    updateSection()
}

const random = function(){
    pageNumber = Math.floor( Math.random() * pages.length )

    updateSection()
}

const updateSection = function(){

    ouputTag.innerHTML = pages[pageNumber].copy
    circleTag.style.backgroundColor = pages[pageNumber].circle
    bodyTag.style.backgroundColor = pages[pageNumber].background

}

nextTag.addEventListener("click", function(){

next()
})


previousTag.addEventListener("click",function(){
    previous()
})

randomTag.addEventListener('click', function(){
    random()
})

document.addEventListener("keyup", function(event){
   
    console.log(event)

    if(event.key == "ArrowRight"){
        next()
    }

    if(event.key == "ArrowLeft"){
        previous()
    }
})