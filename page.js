let pageNumber = 0

const pages = [

  { copy: " a Brooklyn-based graphic designer"} ,
  { copy: "Kanye West's biggest fan"},
  { copy: " looking for a job at the start of October"},
  { copy: 'letting you <a href="pdf.pdf">download her PDF</a>' }

]
const nextTag = document.querySelector("footer img.next")
const ouputTag = document.querySelector("h2")
const previousTag = document.querySelector("footer img.prev")


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

const updateSection = function(){

    ouputTag.innerHTML = pages[pageNumber].copy

}

nextTag.addEventListener("click", function(){

next()
})


previousTag.addEventListener("click",function(){
    previous()
})
