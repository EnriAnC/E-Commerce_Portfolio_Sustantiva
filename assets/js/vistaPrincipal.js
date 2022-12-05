export function itemsEnVistaPrincipal(){
    const $carruselInventario = document.getElementsByClassName("carrusel-inventario")
    console.log($carruselInventario)
    if ($carruselInventario.length != 0){
        const itemsListLS= JSON.parse(localStorage.getItem('itemsListStock'))
        const arrayItemsListLS = Object.values(itemsListLS)

        let fragment = document.createDocumentFragment()
        let divRow1 = document.createElement('div')
        let divRow2 = document.createElement('div')
        divRow1.className = 'itemsNuevos'
        divRow2.className = 'itemsNuevos'

        arrayItemsListLS.forEach((item, index)=>{
            console.log(item, index)
            if(index < 4){
                divRow1.innerHTML += `
                <a id="${item.id}" productNumber = ${+index + 1} href="./pages/productos/productos.html" class="card">
                    <img src="${item.img}" alt="">
                    <p>${item.nombre}<br>$${item.precio}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                        <use xlink:href="#add-circle">
                    </svg>
                </a>
                `
            }
        })
        divRow1.innerHTML += divRow1.innerHTML + divRow1.innerHTML
        fragment.appendChild(divRow1)

        arrayItemsListLS.forEach((item, index)=>{
            console.log(item, index)
            if(index < 8 && index >= 4){
                divRow2.innerHTML += `
                <a id="${item.id}" productNumber = ${+index + 1} href="./pages/productos/productos.html" class="card">
                    <img src="${item.img}" alt="">
                    <p>${item.nombre}<br>$${item.precio}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                        <use xlink:href="#add-circle">
                    </svg>
                </a>
                `
            }
        })
        divRow2.innerHTML += divRow2.innerHTML + divRow2.innerHTML
        fragment.appendChild(divRow2)

        $carruselInventario[0].appendChild(fragment)
    }
    
    
}