let pageNumber = 0


const nextTag = document.querySelector("footer img.next")
const ouputTag = document.querySelector("h2")


const next = function(){

pageNumber = pageNumber +1

if(pageNumber > 10){
    pageNumber = 1
}
    updateSection()
}

const updateSection = function(){

    ouputTag.innerHTML = pageNumber

}

nextTag.addEventListener("click", function(){

next()
})

