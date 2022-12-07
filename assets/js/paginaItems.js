import { obtenerCarroDeComprasLS } from "./add-action.js";

const d = document;

d.addEventListener("click", e=>{
    console.log(e)
    agregarItemACarro(e)
})
d.addEventListener("DOMContentLoaded", ()=>{
    paginaPorItem()
})
// window.addEventListener("popstate", ()=>{
//     if (location.href.endsWith('1')) {
//         if (confirm('Click OK to go to 2')) {
//             history.pushState({}, null, `?item=${localStorage.getItem('idItemClickOnHome') - 1}`)
//         }
//     }
// })
export function paginaPorItem(){
    // Traer datos desde LS
    const $main = document.getElementsByClassName("main")
    console.log($main)
    const itemsListLS= JSON.parse(localStorage.getItem('itemsListStock'))
    const itemPageReturnLS = localStorage.getItem('idItemClickOnHome')
    console.log(itemPageReturnLS)
    console.log(itemsListLS)
    const itemsListArrayObject = Object.values(itemsListLS)
    console.log(itemsListArrayObject)

    // se retorna el número y se le resta 1 para que la primera posicion sea [0]
    let posicionProducto = itemPageReturnLS - 1
    
    // Enlace de página
    history.pushState(null, "", `?item=${itemPageReturnLS}`);

    // Contenido de página
    let div = document.createElement('div');
    div.className = 'producto'
    div.innerHTML = `
    <img src="../.${itemsListArrayObject[posicionProducto].img}">
    <div class="descripcion">
        <h3 id=${itemsListArrayObject[posicionProducto].id}>${itemsListArrayObject[posicionProducto].nombre}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis officia expedita dignissimos excepturi assumenda rem facilis.</p>
        <div class="alig-precio-opcion">
            <p id="precio">$${itemsListArrayObject[posicionProducto].precio}</p>
            <div class="opciones">
                <label for="cantidad">Cantidad</label>
                <input type="number" name="cantidad" id="cantidad" placeholder="0" min=0>
                <button>Añadir al carro</button>
            </div>
        </div>
    </div>
    `
    $main[0].appendChild(div)    
}

export function agregarItemACarro(e){
    if (e.target.innerText == 'Añadir al carro'){
        e.preventDefault()
        let { i, carroDeCompras } = obtenerCarroDeComprasLS()
        
        // console.log(e.target.parentNode.parentNode.parentNode.firstElementChild.id)
        // console.log(e.target.parentNode.parentNode.parentNode.firstElementChild.outerText)
        // console.log(e.target.parentNode.parentNode.firstElementChild.outerText.split('$')[1])
        carroDeCompras[i] = {
            "id": e.target.parentNode.parentNode.parentNode.firstElementChild.id,
            "nombre": e.target.parentNode.parentNode.parentNode.firstElementChild.outerText,
            "valor": e.target.parentNode.parentNode.firstElementChild.outerText.split('$')[1],
            "cantidad": Number(e.target.previousElementSibling.value),
        }
        i++
        console.log(carroDeCompras)
        localStorage.setItem('itemsListCarroDeCompras', JSON.stringify(carroDeCompras))
    }
}


