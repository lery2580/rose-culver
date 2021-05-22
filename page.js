let pageNumber = 0

const pages = [

    "brooklyn design",
    "kanye west",
    "october",
    "download my pdf"
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

    ouputTag.innerHTML = pages[pageNumber]

}

nextTag.addEventListener("click", function(){

next()
})


previousTag.addEventListener("click",function(){
    previous()
})
