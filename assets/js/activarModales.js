import { actualizarCarroDeCompras } from "./carro-compras.js";

export function abrirModalCarro(){
    const $cartIcon = document.getElementById("cartIcon");
    const $ventanaModal = document.getElementById("ventana-modal");
    // console.log($ventanaModal)
    
    if ($ventanaModal != null){
        $cartIcon.addEventListener("click", e=>{
            e.preventDefault()
            actualizarCarroDeCompras()
            $ventanaModal.classList.toggle("active")
        })
    } else {
        console.log("Estás en el carro de compras")
    }


}
export function abrirModalInicioSesion(){
    const $cartIcon = document.getElementById("userIcon");
    const $ventanaModal = document.getElementById("inicio-sesion-modal");
    // console.log($ventanaModal)
    
    if ($ventanaModal != null){
        $cartIcon.addEventListener("click", e=>{
            e.preventDefault()
            actualizarCarroDeCompras()
            $ventanaModal.classList.toggle("active")
        })
    } else {
        console.log("Estás en el carro de compras")
    }


}