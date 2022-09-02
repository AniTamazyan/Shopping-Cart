let carts = document.querySelectorAll(".addCart");

let products = [
    {
        name: "Խաբիր ինձ",
        tag: "Խաբիր ինձ",
        price: 5990,
        incart: 0
    },
    {
        name: "Կիսաճանապարհին",
        tag: "Կիսաճանապարհին",
        price: 3000,
        incart: 0
    },
    {
        name: "Հնչերանգ",
        tag: "Հնչերանգ",
        price: 1350,
        incart: 0
    },
    {
        name: "Երկու դերանուն",
        tag: "Երկու դերանուն",
        price: 1350,
        incart: 0
    },
    {
        name: "Ակադեմիան և կայսրությունն",
        tag: "Ակադեմիան և կայսրությունն",
        price: 5990,
        incart: 0
    },
    {
        name: "Տունս",
        tag: "Տունս",
        price: 4500,
        incart: 0
    }
];

for(let i = 0; i < carts.length; i++){
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
    })
}

function cartNumbers(product){
   
    let productNumbers = localStorage.getItem("cartNumbers");
    
    productNumbers = Number(productNumbers);
    if(productNumbers){
        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector(".cart span").textContent = productNumbers + 1;
    } else {
        localStorage.setItem("cartNumbers", 1);
        document.querySelector(".cart span").textContent = 1;
    }

    setItems(product);
}

function setItems(product){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    
    if(cartItems != null){
        cartItems[product.tag].incart += 1;
    } else {
        product.incart = 1;
        cartItems ={
            [product.tag]: product
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function loadCartNumber(){
    let productNumbers = localStorage.getItem("cartNumbers");
    if(productNumbers){
        document.querySelector(".cart span").textContent = productNumbers;
    }
}
loadCartNumber();