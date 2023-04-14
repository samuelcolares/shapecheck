const Main = {
    init: function () {
        this.cacheSelectors();
        this.bindEvents();

    },

    cacheSelectors: function () {
        this.checkboxes = document.querySelectorAll('input[type=checkbox]')
        this.grande = document.getElementById('grande')
        this.natural = document.getElementById('natural')
        this.seco = document.getElementById('seco')
        this.img = document.querySelector('img')
    },

    bindEvents: function () {
        this.checkboxes.forEach(boxes => {
            boxes.addEventListener('change', (e) => {
                this.Events.checkToggles.bind(this)(e.target)
                boxes.nextElementSibling.nextElementSibling.classList.toggle('color')
                boxes.nextElementSibling.style.backgroundColor = 'greenYellow'
            })
        })
    },

    Events: {
        checkToggles: function (toggled) {
            if (this.grande.checked && this.natural.checked && this.seco.checked) {
                if (this.grande === toggled) {
                    this.natural.checked = false
                    this.natural.nextElementSibling.nextElementSibling.classList.remove('color')
                }

                if (this.natural === toggled) {
                    this.seco.checked = false
                    this.seco.nextElementSibling.nextElementSibling.classList.remove('color')
                }

                if (this.seco === toggled) {
                    this.grande.checked = false
                    this.grande.nextElementSibling.nextElementSibling.classList.remove('color')
                }
            }
            if (this.grande.checked && this.natural.checked) {
                this.img.src = 'img/togordo.png'
            }
            if (this.grande.checked && this.seco.checked) {
                this.img.src = 'img/coleman.png'
            }
            if (this.natural.checked && this.seco.checked) {
                this.img.src = 'img/haylan.png'
            }

            if (!this.grande.checked && !this.natural.checked && !this.seco.checked) {
                this.img.src = ''
            }
        }
    },

}

Main.init();