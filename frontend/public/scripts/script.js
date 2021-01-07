function showCategories(categoria) {
    
    let prod = document.getElementsByClassName('box-item');
    for (let i = 0; i < prod.length; i++) {
        if (categoria == prod[i].id) {
            prod[i].style.display = "block";
        }
        else{
            prod[i].style.display = "none";
        }
    }
}

function allCategories() {
    let prod = document.getElementsByClassName('box-item')
    for (let i = 0; i < prod.length; i++) {
        prod[i].style.display = "block";
    }
}

function overItem(img) {
    let s = img.width;
    img.width = (s/2);
}

function outItem(img) {
    let s = img.width;
    img.width = (s/2);
}