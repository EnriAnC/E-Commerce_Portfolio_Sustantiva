// longitud de svgs
// var path = document.querySelectorAll('path');
// console.log(path)

// path.forEach((element)=>{
//     var length = element.getTotalLength();

//     console.log(length)
// })


//Quitarle el enlace al svg dentro de una etiqueta <a></a>
const $svg = document.querySelectorAll("svg")

$svg.forEach(e=>{
    const hrefOriginal = e.parentElement.href
    // e.previousSibling.previousSibling.offsetParent.href = "#"
    e.addEventListener("mouseover", (el)=>{
        el.relatedTarget.parentElement.href = "javascript:void(0)"
        // e.parentElement.href = "#"
    })
    e.addEventListener("mouseleave", el=>{
        el.relatedTarget.parentElement.href = hrefOriginal
    })
})

