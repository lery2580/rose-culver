let pageNumber = 0



const nextTag = document.querySelector("footer img.next")
const ouputTag = document.querySelector("h2")

const updateSection = function(){

}

const next = function(){
pageNumber = pageNumber +1
}


nextTag.addEventListener("click", function(){

    
    pageNumber = pageNumber + 1

    ouputTag.innerHTML = pageNumber
})