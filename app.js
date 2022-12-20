let dinozavr = document.querySelector('.dinozavr');
let block = document.querySelector('.block');


// sakrash

function jump() {
    if (dinozavr.classList != 'jump') {
        dinozavr.classList.add('jump')
    }
    setTimeout(() => {
        dinozavr.classList.remove('jump')
    }, 500)
}

// yutqazganini bilish

let tekshiruv = setInterval(function() {
    let dinozavrTop = parseInt(window.getComputedStyle(dinozavr).getPropertyValue('top'));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    if (blockLeft < 20 && blockLeft > 0 && dinozavrTop >= 130) {
        dinozavr.style.animation = 'none';
        // dinozavr.style.display = 'none';
        block.style.animation = 'none';
        // block.style.display = 'none';
        alert("tegdimi chumo");
    }
}, 10)