const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');;
const equalBtn = document.querySelector('.btn-equal');
const clearBtn = document.querySelector('.btn-clear');
const exponentBtn = document.querySelector('.btn-exponent');
const eraseBtn = document.querySelector('.btn-erase');


for(let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
        let number = btns[i].getAttribute('data-num')
        screen.value += number
    })
}

equalBtn.addEventListener('click', function() {
    if(screen.value === '') {
        alert('input values')
    } else if (screen.value.includes('^')) {
        // console.log(screen.value.indexOf('^'))
        let base = screen.value.substring(0, screen.value.indexOf('^'))
        let exponent = screen.value.substring(screen.value.indexOf('^') + 1, screen.value.length)
        screen.value = Math.pow(base,exponent)
    } else {
        let value = eval(screen.value)
        screen.value = value;
    }
})

clearBtn.addEventListener('click', function() {
    screen.value = '';
})

eraseBtn.addEventListener('click', function() {
    let toErase = screen.value.substring(0)
    screen.value = toErase.slice(0, -1)
})


