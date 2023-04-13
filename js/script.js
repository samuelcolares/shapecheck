const checkboxes = document.querySelectorAll('input[type=checkbox]')
const grande = document.getElementById('grande')
const natural = document.getElementById('natural')
const seco = document.getElementById('seco')
const img = document.querySelector('img')

checkboxes.forEach(boxes => {
    boxes.addEventListener('change', (e) => {
        teste(e.target)
        boxes.nextElementSibling.nextElementSibling.classList.toggle('color')
        boxes.nextElementSibling.style.backgroundColor = 'greenYellow'
    })
})


function teste(int) {
    if (grande.checked && natural.checked && seco.checked) {
        if (grande === int) {
            natural.checked = false
            natural.nextElementSibling.nextElementSibling.classList.remove('color')
        }

        if (natural === int) {
            seco.checked = false
            seco.nextElementSibling.nextElementSibling.classList.remove('color')
        }

        if (seco === int) {
            grande.checked = false
            grande.nextElementSibling.nextElementSibling.classList.remove('color')
        }
    }
    if (grande.checked && natural.checked) {
        img.src = 'img/togordo.png'    
    }
    if (grande.checked && seco.checked) {
        img.src = 'img/coleman.png'    
    }
    if (natural.checked && seco.checked) {
        img.src = 'img/haylan.png'    
    }

    if (!grande.checked && !natural.checked && !seco.checked){
        img.src = ''  
    }
}