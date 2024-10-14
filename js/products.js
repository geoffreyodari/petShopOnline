const row = document.querySelector(".row");
// sessionStorage.setItem("cart",JSON.stringify([]))

const productsCard = (products)=>{
  const  productCards = products.map(
    product=>
    `<div class="col-md-3 col-sm-6">
        <div class="card">
            <img src="https://via.placeholder.com/300" class="card-img-top" alt="Product Image">
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.price}</p>
                <button class="btn btn-primary" onClick=addToCart(${product.id})>
                    <i class="fas fa-cart-plus"></i> Add to Cart
                </button>
            </div>
        </div>
      </div>`).join("")
    return productCards;
}

const products = async(row)=>{
    const data = await fetch("./../products.json");
    const productList= await data.json();
    sessionStorage.setItem("productList",JSON.stringify(productList));
    row.innerHTML=productsCard(productList)
}

products(row)

// const cartBadge = (quantity)=>{
//     console.log(quantity)
//     document.querySelector(".badge").innerHTML = quantity<100?quantity.toString():"99+"                                                       
// }

const addToCart = (id)=>{
   //const cartList = sessionStorage.getItem("cart");
   const cart = JSON.parse(cartObjects())
   const productList = sessionStorage.getItem("productList");
   const products = (JSON.parse(productList));
   const selectedProduct = products.find(product=>product.id==id)
   cart.push(selectedProduct)
   sessionStorage.setItem("cart",JSON.stringify(cart))
   cartBadge(cartObjects())
}


