const d = document;

export function actualizarCarroDeCompras(){
    const $table = d.getElementById("table-carro");
    const $total = d.getElementById("total");

    // Obtener carroDeCompras desde LocalStorage
    //------------------------------------------

    let newArrayCarroDeCompras = NuevoArraySinItemsRepetidos()

    //--- BUSCAR TABLA Y AÑADIR ELEMENTO---------
    
    $table.innerHTML = `
    <tr>
        <th>Producto</th>
        <th>Precio</th>
        <th>Cantidad</th>
        <th>Sub-total</th>
        <th></th>
    </tr>
    `
    
    let fragment = document.createDocumentFragment()
    let totalAPagar = 0
    if (newArrayCarroDeCompras.length != 0){
        for (let i=0; i < newArrayCarroDeCompras.length; i++){
            let tr = d.createElement("tr")
            tr.innerHTML = `
            <td class="item">${newArrayCarroDeCompras[i].nombre}</td>
            <td class="valor">$${newArrayCarroDeCompras[i].valor}</td>
            <td class="btn-eliminar cantidad" ><svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ><path fill-rule="evenodd" d="M5.72 5.72a.75.75 0 011.06 0L12 10.94l5.22-5.22a.75.75 0 111.06 1.06L13.06 12l5.22 5.22a.75.75 0 11-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 01-1.06-1.06L10.94 12 5.72 6.78a.75.75 0 010-1.06z"/></svg><input type="number" value="${+newArrayCarroDeCompras[i].cantidad}" class="inputCantidad" min=0></td>   
            <td class="subtotal">$${+newArrayCarroDeCompras[i].cantidad*+newArrayCarroDeCompras[i].valor}</td>
            <td class="btn-eliminar"><svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ><path fill-rule="evenodd" d="M5.72 5.72a.75.75 0 011.06 0L12 10.94l5.22-5.22a.75.75 0 111.06 1.06L13.06 12l5.22 5.22a.75.75 0 11-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 01-1.06-1.06L10.94 12 5.72 6.78a.75.75 0 010-1.06z"/></svg></td>
            `
            fragment.appendChild(tr);

            totalAPagar += +newArrayCarroDeCompras[i].cantidad*+newArrayCarroDeCompras[i].valor
        }  

        $table.appendChild(fragment)

    } else {
        console.log("ARRAY VACIO CARRO COMPRAS")
    }
    if ($total != null){
        $total.innerText = totalAPagar
    }

    
}


export function botonEliminar(e){
    if (localStorage.getItem('itemsListCarroDeCompras') != undefined){
        let getCarroDeComprasLS = JSON.parse(localStorage.getItem('itemsListCarroDeCompras'))
        let arrayCarroDeComprasLS = Object.values(getCarroDeComprasLS)
        // console.log(e)
        if (e.target.nodeName == "svg" && e.target.parentElement.classList[0] == "btn-eliminar"){
            let itemName = e.target.parentElement.parentElement.firstElementChild.innerText
            // console.log('itemName: '+itemName)
            // console.log('findIndex: '+arrayCarroDeComprasLS.findIndex(el => el.nombre == itemName))
            let index = arrayCarroDeComprasLS.findIndex(el => el.nombre == itemName )
            
            // newArrayCarroDeCompras = newArrayCarroDeCompras.push(arrayCarroDeComprasLS[index]) 
            // console.log('index: '+index)
            // console.log(newArrayCarroDeCompras)
            arrayCarroDeComprasLS.splice(index, 1)
            // console.log(JSON.stringify(Object.assign({}, arrayCarroDeComprasLS)))
            localStorage.setItem('itemsListCarroDeCompras', JSON.stringify(Object.assign({}, arrayCarroDeComprasLS)))
    
            actualizarCarroDeCompras()
            e.stopImmediatePropagation();
    
        }   
        else if (e.target.nodeName == "path" && e.target.parentElement.parentElement.classList[0] == "btn-eliminar"){
            let itemName = e.target.parentElement.parentElement.parentElement.firstElementChild.innerText
            // console.log('itemName: '+itemName)
            // console.log('findIndex: '+arrayCarroDeComprasLS.findIndex(el => el.nombre == itemName ))
            let index = arrayCarroDeComprasLS.findIndex(el => el.nombre == itemName )
            // arrayCarroDeComprasLS.splice(Number(el.numeroEnLista) - 1, 1)
            // console.log('index: '+index)
            arrayCarroDeComprasLS.splice(index, 1)
            // console.log(JSON.stringify(Object.assign({}, arrayCarroDeComprasLS)))
            localStorage.setItem('itemsListCarroDeCompras', JSON.stringify(Object.assign({}, arrayCarroDeComprasLS)))
    
            actualizarCarroDeCompras()
            e.stopImmediatePropagation();
        }
    }        
}

export function NuevoArraySinItemsRepetidos(){
    let newArrayCarroDeCompras = []

    if (localStorage.getItem('itemsListCarroDeCompras') != undefined){
    let getCarroDeComprasLS = JSON.parse(localStorage.getItem('itemsListCarroDeCompras'))
    // console.log(getCarroDeComprasLS)
    let arrayCarroDeComprasLS = Object.values(getCarroDeComprasLS)

    if (arrayCarroDeComprasLS.length != 0){
        let nombreItems = []
        let itemsUnicos = []
        for (let i=0; i < arrayCarroDeComprasLS.length; i++){
            // console.log(arrayCarroDeComprasLS[i].nombre)
            nombreItems.push(arrayCarroDeComprasLS[i].nombre)
        }

        nombreItems = new Set(nombreItems)
        itemsUnicos = [...nombreItems]
        // console.log(itemsUnicos)

        for (const i in itemsUnicos) {
            // console.log(arrayCarroDeComprasLS.findIndex(el => el.nombre == itemsUnicos[i]))
            // console.log(arrayCarroDeComprasLS.filter(el => el.nombre == itemsUnicos[i]).length)
            newArrayCarroDeCompras.push(arrayCarroDeComprasLS.filter(el => el.nombre == itemsUnicos[i])[0])
            newArrayCarroDeCompras[i].cantidad += arrayCarroDeComprasLS.filter(el => el.nombre == itemsUnicos[i]).length - 1

            // console.log("NEWARRAYYY: ", newArrayCarroDeCompras)

            if (newArrayCarroDeCompras[i].cantidad <= 0){
                newArrayCarroDeCompras[i].cantidad = 0
            }
        }
        localStorage.setItem('itemsListCarroDeCompras', JSON.stringify(Object.assign({}, newArrayCarroDeCompras)))
        // console.log("Items Repetidos: " + itemsRepetidos) 
        // console.log("NombreItems: " + nombreItems)   
        // console.log("Items Unicos: " + itemsUnicos)     
    
        } else {
            console.log("ARRAY VACIO CARRO COMPRAS")
        }
        // console.log("newArrayCarroDeCompras:  ",newArrayCarroDeCompras)
        return newArrayCarroDeCompras
    } else {
        return newArrayCarroDeCompras
    }
}


export function actualizarCantidadCarroDeCompras(e){
    if (e.target.className == 'inputCantidad'){
        e.preventDefault()
        console.log(e.target.value)
        let getCarroDeComprasLS = JSON.parse(localStorage.getItem('itemsListCarroDeCompras'))
        let arrayCarroDeComprasLS = Object.values(getCarroDeComprasLS)
        let itemName = e.target.parentElement.parentElement.firstElementChild.innerText
        console.log(itemName)
        let index = arrayCarroDeComprasLS.findIndex(el => el.nombre == itemName )
        arrayCarroDeComprasLS[index].cantidad = +e.target.value
        console.log("NUEVO VALOR INPUT A LS: ", arrayCarroDeComprasLS[index])
        console.log(arrayCarroDeComprasLS)
        localStorage.setItem('itemsListCarroDeCompras', JSON.stringify(Object.assign({}, arrayCarroDeComprasLS)))

        actualizarCarroDeCompras()
    }
    
    
}
export function numberObjectLS(e){
    if (e.target.parentElement.className == 'card'){
        console.log(e)
        localStorage.setItem('idItemClickOnHome', e.target.parentElement.getAttribute('productNumber'))
    }

    if (e.target.className == 'card'){
        localStorage.setItem('idItemClickOnHome', e.target.getAttribute('productNumber'))

    }
    
}

export function stock(){
    let items = {
        1: {
            'id': '001',
            'nombre': 'Polera Hippie',
            'stock': 10,
            'precio': 30,
            'img': './assets/img/ropa1.jpg'
        },
        2: {
            'id': '002',
            'nombre': 'Polerón tricolor',
            'stock': 12,
            'precio': 20,
            'img': './assets/img/ropa2.jpg'
        },
        3: {
            'id': '003',
            'nombre': 'Vestido negro',
            'stock': 15,
            'precio': 32,
            'img': './assets/img/ropa3.jpg'
        },
        4: {
            'id': '004',
            'nombre': 'Chaqueta vestido brown   ',
            'stock': 9,
            'precio': 25,
            'img': './assets/img/ropa4.jpg'
        },
        5: {
            'id': '005',
            'nombre': 'Polera Neo',
            'stock': 7,
            'precio': 20,
            'img': './assets/img/ropa5.jpg'
        },
        6: {
            'id': '006',
            'nombre': 'Polerón tricolor texture',
            'stock': 11,
            'precio': 42,
            'img': './assets/img/ropa6.jpg'
        },
        7: {
            'id': '007',
            'nombre': 'Vestido negro Neo',
            'stock': 4,
            'precio': 35,
            'img': './assets/img/ropa7.jpg'
        },
        8: {
            'id': '008',
            'nombre': 'Chaqueta vestido green',
            'stock': 6,
            'precio': 50,
            'img': './assets/img/ropa8.jpg'
        },
        9: {
            'id': '009',
            'nombre': 'Polera roja',
            'stock': 6,
            'precio': 20,
            'img': './assets/img/ropa9.jpg'
        },
        10: {
            'id': '010',
            'nombre': 'Polera negra',
            'stock': 6,
            'precio': 15,
            'img': './assets/img/ropa10.jpg'
        }
    }
    localStorage.setItem('itemsListStock', JSON.stringify(items))


}

// export function mostrarXresponsive(){
//     let media500px = matchMedia("(max-width: 500px)")
//     if (media500px.matches){
//         let btnEliminarResponsive = document.getElementsByClassName("svgResponsiveX")

//         for (let el of btnEliminarResponsive){
//             console.log(el)
//             el.style.display = "block"
//         }
        
//     }
// }
