const menuTlacitkoElement = document.querySelector('#menu-tlacitko')
const menuPolozkyElement = document.querySelector('#menu-polozky')
const menuIkonaElement = menuTlacitkoElement.querySelector('i')

const priKliknuti = (event) => {
    const shown = menuPolozkyElement.classList.toggle('show')

    if (shown) {
        menuIkonaElement.classList.remove('fa-bars')
        menuIkonaElement.classList.add('fa-xmark')
    } else {
        menuIkonaElement.classList.add('fa-bars')
        menuIkonaElement.classList.remove('fa-xmark')
    }
}

menuTlacitkoElement.addEventListener('click', priKliknuti)

// alternativy

// 1
// const menuTlacitkoHandler = () => {
//     const shown = menuPolozkyElement.classList.toggle("show")
//     menuIkonaElement.classList.toggle("fa-bars", !shown)
//     menuIkonaElement.classList.toggle("fa-xmark", shown)    
// }

// 2
// const menuTlacitkoHandler = () => {
//     menuPolozkyElement.classList.toggle("show")
//     menuIkonaElement.classList.toggle("fa-bars")
//     menuIkonaElement.classList.toggle("fa-xmark")
// }






