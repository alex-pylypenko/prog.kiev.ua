
let products = [];
let cart = [];
let arrStorage = [];


class Products {
    constructor(brand, name, price, picture) {
        this.brand = brand;
        this.name = name;
        this.price = price;
        this.picture = picture;
    }

    get productAdd() {
        return `${this.brand} ${this.name} ${this.price}`;
    }
};

class Users {
    constructor(name) {
        this.name = name;
    }
}

let user = new Users('Alex');


let addProduct = e => {
    
    e.preventDefault();
    let htmlStr = ``;

    let prod = new Products($('#brand').val(), $('#name').val(), +$('#price').val(), $('#picture').val());

    //if (!prod.brand || !prod.name || !prod.price || !prod.picture) {
    //    alert('Fill all fields');
    //    return;
    //}

    arrStorage.push(prod.productAdd);

    htmlStr +=
        `<div class="single_product">
            <img src="${prod.picture}" class="image_">
            <br><br>
            ${prod.brand}
            ${prod.name}
            <br><br>
            ${prod.price}$
            <br><br>
            <button class="add_to_cart">Add to cart</button>
        </div>`;

    if (products.length < 8) {
        products.push(htmlStr);
    } else {
        alert("You can have only 8 products");
    }

    $('#brand, #name, #price, #picture').val('');
    $('div.wrapper div.products').html(products);

    
};

let renderSingleProduct = function (arrStorage, index) {
    let htmlStr = ``;
    htmlStr +=
    `
        <li>${arrStorage[index]}       
        <button class="remove-btn">X</button>
        </li>
    `;
    cart.push(htmlStr);
    $('div.wrapper div.cart ol').html(cart);
}


let addToCart = e => {
    if (cart.length < 1) {
        $('span').html(`${user.name}, you are going to buy:`);
    }

    if ($(e.target).hasClass('add_to_cart')) {
        let productToAddIndex = $(e.target).parents('div').index();
        renderSingleProduct(arrStorage, productToAddIndex);
    }
};

let deleteProduct = e => {
    if ($(e.target).hasClass('remove-btn')) {
        let productToRemoveIndex = $(e.target).parents('li').index();
        cart.splice(productToRemoveIndex, 1);
        $('div.wrapper div.cart ol').html(cart);
    }
};



$('#submitBtn').on('click', addProduct);
$('div.wrapper div.products').on('click', addToCart);
$('div.wrapper div.cart ol').on('click', deleteProduct);





/*

let products = [];
let cart = [];



let renderProducts = products => {
    let htmlStr = ``;
    for (let index in products) {
        htmlStr +=        
        `<div class="single_product">
            <img src="${products[index].picture}" class="image_">
            <br><br>
            ${products[index].brand}
            ${products[index].name}
            <br><br>
            ${products[index].price}$
            <br><br>
            <button class="add_to_cart">Add to cart</button>
        </div>`;       
    }
    $('#brand, #name, #price, #picture').val('');
    $('div.wrapper div.products').html(htmlStr);
    if ($('div.wrapper div.products').length) {
        $('div.wrapper').show();
    } else {
        $('div.wrapper').hide();
    }
};




let addProduct = e => {
    e.preventDefault();
    let productObject = {
        brand: $('#brand').val(),
        name: $('#name').val(),
        price: +$('#price').val(),
        picture: $('#picture').val()
    };
    //if (!productObject.brand || !productObject.name || !productObject.price || !productObject.picture) {
    //   alert('Fill all fields');
    //    return;
    //}
    if (products.length < 8) {
        products.push(productObject);
    } else {
        alert("You can have only 8 products");
    }
    renderProducts(products);
};


let renderSingleProduct = function (products, index) {
    let htmlStr = ``; 
    htmlStr +=
    `
        <li>${products[index].brand}
        ${products[index].name}
        ${products[index].price}
        <button class="remove-btn">X</button>
        </li>
    `;
    cart.push(htmlStr);   
    $('div.wrapper div.cart ol').html(cart);
}


let addToCart = e => {
    if ($(e.target).hasClass('add_to_cart')) {
        let productToAddIndex = $(e.target).parents('div').index();
        renderSingleProduct(products, productToAddIndex);
    }
};

let deleteProduct = e => {
    if ($(e.target).hasClass('remove-btn')) {
        let productToRemoveIndex = $(e.target).parents('li').index();
        cart.splice(productToRemoveIndex, 1);
        $('div.wrapper div.cart ol').html(cart);
    }
};



$('#submitBtn').on('click', addProduct);
$('div.wrapper div.products').on('click', addToCart);
$('div.wrapper div.cart ol').on('click', deleteProduct);

*/