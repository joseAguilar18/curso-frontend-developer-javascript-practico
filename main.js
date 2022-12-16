const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');


menuEmail.addEventListener('mouseover', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoCompras);


console.log(desktopMenu);

function toggleDesktopMenu(){
    shoppingCartContainer.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){    
    shoppingCartContainer.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
    
}

function toggleCarritoCompras(){
    mobileMenu.classList.add('inactive');
    shoppingCartContainer.classList.toggle('inactive');    
    desktopMenu.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'CellPhone',
    price: 600,
    image: 'https://images.pexels.com/photos/14666028/pexels-photo-14666028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

renderProducts(productList);

function renderProducts(array){
    /* Insertando elementos al DOM desde JavaScript*/
    for (const product of productList) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerHTML = product.name;
    
        /* Insertando el nombre y el precio del producto en el contenedor div sin clase*/
        productInfoDiv.appendChild(productName);
        productInfoDiv.appendChild(productPrice);
    
        const productInfoFigure = document.createElement('figure');
        const imgCart = document.createElement('img');
        imgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        productInfoFigure.appendChild(imgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        document.querySelector('.cards-container').appendChild(productCard);
    }
}
