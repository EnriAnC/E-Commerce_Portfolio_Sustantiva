import { actualizarCarroDeCompras } from "./carro-compras.js";

const d = document;
export function botonAñadir(){
    // Obtener el boton de añadir
    const $addCircleSVG = d.getElementsByTagName('svg')

    
    // for (let item of $svgHTML)
    
    
    for (let e of $addCircleSVG){
        // console.log(e)
        if (e.parentNode.className == "card"){
            e.addEventListener("click", el=>{
                el.preventDefault()
                let { i, carroDeCompras } = obtenerCarroDeComprasLS()
                
                // console.log(el.target.parentNode.parentNode.outerHTML)
                // idItems.push(el.target.parentNode.parentNode.id)
                if (el.target.nodeName == "use"){
                    carroDeCompras[i] = {
                        "id": el.target.parentNode.parentNode.id,
                        "nombre": el.target.parentNode.previousElementSibling.outerText.split('\n')[0],
                        "valor": el.target.parentNode.previousElementSibling.outerText.split('$')[1],
                        "cantidad": 1,
                    }
                }
                if (el.target.nodeName == "svg"){
                    carroDeCompras[i] = {
                        "id": el.target.parentNode.parentNode.id,
                        "nombre": el.target.previousElementSibling.outerText.split('\n')[0],
                        "valor": el.target.previousElementSibling.outerText.split('$')[1],
                        "cantidad": 1,
                    }
                }
                i++
                console.log(carroDeCompras)
                localStorage.setItem('itemsListCarroDeCompras', JSON.stringify(carroDeCompras))
                actualizarCarroDeCompras();
            })
        }
    }
}



export function obtenerCarroDeComprasLS(i = 0, carroDeCompras = {}){
    if (localStorage.getItem('itemsListCarroDeCompras') != undefined){
        carroDeCompras = JSON.parse(localStorage.getItem('itemsListCarroDeCompras'))
        // console.log(Object.values(carroDeCompras).length)
        i = Number(Object.values(carroDeCompras).length)
        // console.log(i)
    }
    return { i, carroDeCompras }
}