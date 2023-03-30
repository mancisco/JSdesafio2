const img = document.getElementById('img');

img.addEventListener('click', function () {
    if (this.style.border === '2px solid red') {
        this.style.border = 'none';
    } else {
        this.style.border = '2px solid red';
    }
})
function countSticker(frmSticker) {
    let stk1 = parseInt(frmSticker.sticker1.value);
    let stk2 = frmSticker.sticker2.value;
    let stk3 = frmSticker.sticker3.value;
    if (stk1 === '' || stk2 === '' || stk3 === '') {
        alert('completa todos los input del formulario');
        return false;
    }
    stk2 = parseInt(stk2);
    stk3 = parseInt(stk3);
    let total = stk1 + stk2 + stk3;
    if (total > 10) {
        alert('no puedes comprar mas de 10 stickers');
        return false;
    }
    alert('compraste ' + total + ' stickers');
    console.log(total);
    return false;
}







