const row = document.querySelector(".cart-row");
const subTotal=document.querySelector("#sub-total");

// const uniqueCartObjects = [...new Set(cartObjects.map(cartObject=>cartObject.name))]
// const groupedCartObjects =uniqueCartObjects.map(uniqueCartObject=>{
//     const product = new Object();
//     product.name = uniqueCartObject
//     product.quantity = cartObjects.filter(cartObject=>cartObject.name==uniqueCartObject).length
//     product.price = cartObjects.find(cartObject=>cartObject.name==uniqueCartObject).price
//     return product
//     })

const shoppingCartTable = (cart)=>{
    const  productCards = cart.map(
      product=>
      `
        <tr>
            <td>${product.name}</td>
            <td>${product.quantity}</td>
            <td>${product.price}</td>
            <td>${(product.price*product.quantity).toFixed(2)}</td>
            <td>
                <button class="btn btn-danger btn-sm" onClick=removeItemsFromCart(${product.id})>
                    <i class="fas fa-trash-alt"></i> Remove
                </button>
            </td>
        </tr>
    `).join("")


    subTotal.innerHTML = cart.length>0?(cart.map(product=>product.price*product.quantity).reduce((a,b)=>a+b)).toFixed(2):0



      row.innerHTML= productCards;
  }

const removeItemsFromCart = (c)=>{
    const initialCartObjects = JSON.parse(cartObjects())
    const remainingCartObjects = initialCartObjects.filter(initialCartObject=>initialCartObject.id!=c)
    sessionStorage.setItem("cart",JSON.stringify(remainingCartObjects))
    console.log(sessionStorage.getItem("cart"))
    shoppingCartTable(getGroupedCartObjects(cartObjects()))
    cartBadge(cartObjects())
 
}

shoppingCartTable(getGroupedCartObjects(cartObjects()))
