function foo() {
    return foo();
}


function setTime() {
    console.log("inicia proceso")
    setTimeout(() => {
        console.log("mitad de proceso")
    }, 2000)
    console.log("fin proceso")
}


function setTimeDos() {
    const btn = document.querySelector(".btn");
    
    btn.addEventListener('click', () => {
        Toastify({
            text: "3000",
            duration: 3000,
            gravity: 'top',
            position: 'center',
            style: {
                background: 'linear-gradient(to right, #1500ff, #320052)'
            }    
        }).showToast(),

    setTimeout(() => {
        Toastify({
            text: "6000",
            duration: 6000,
            gravity: 'top',
            position: 'center',
            style: {
                background: 'linear-gradient(to right, #ff00bb,  #c70000)'
            }    
        }).showToast()
    })
    });
}

function setTimeTres() {   
    const divList = document.querySelectorAll('.div2');

    function removeClass(className) {
        divList.forEach((div) => {
            div.classList.remove(className)
        });
    }

    function addClass(className) {
        divList.forEach((div) => {
            div.classList.add(className)
        });
    }

    const btn2 = document.querySelector('.btn2');
    btn2.addEventListener('click', () => {
        setTimeout(()=> {
            addClass('div3')
        }, 2500);
        setTimeout(() => {
            removeClass('div3')
        }, 5000)
    });

    const btn3 = document.querySelector('.btn3');
    btn3.addEventListener('click', () => {
        setInterval(()=> {
            addClass('div4')
        }, 50);
        setInterval(() => {
            removeClass('div4')
        }, 100)
    });

    const btn4 = document.querySelector('.btn4');
    btn4.addEventListener('click', () => {
        addClass('div3'),
        divList.forEach((div) => {
            for (let letra of "Hola Mundo!") {
                setTimeout(() => {
                    div.innerHTML += letra
                }, 2000)
            }
        })
    })
}

setTimeDos();
setTimeTres()

