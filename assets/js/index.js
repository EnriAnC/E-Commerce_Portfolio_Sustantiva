import { abrirModalCarro, abrirModalInicioSesion } from "./activarModales.js";
import { botonAñadir }from "./add-action.js"
import { actualizarCantidadCarroDeCompras, actualizarCarroDeCompras, botonEliminar, stock, numberObjectLS } from "./carro-compras.js";
import { itemsEnVistaPrincipal } from "./vistaPrincipal.js";


// if (matchMedia("(max-width: 500px)").matches){
//     console.log("matchmedia!")
    
// }
document.addEventListener("DOMContentLoaded", e=>{
    // localStorage.setItem('itemsListCarroDeCompras', JSON.stringify())
    itemsEnVistaPrincipal();
    actualizarCarroDeCompras();
    abrirModalCarro();
    abrirModalInicioSesion();
    botonAñadir();
    stock();

    document.addEventListener("click", (e)=>{
        // e.preventDefault()
        console.log(e)
        botonEliminar(e);
        // actualizarCantidadCarroDeCompras(e)
        numberObjectLS(e)
    })
    document.addEventListener("change", e=>{
        console.log(e)
        actualizarCantidadCarroDeCompras(e)
        
    })
    
    
})

