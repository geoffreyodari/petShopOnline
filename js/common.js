
const cartObjects = ()=>{
    const cart = sessionStorage.getItem("cart")
  try{
     if(cart.length>=0){
        return cart
     }  
  }catch(e){
    return new Array()
  }
}
const cartBadge = (q)=>{
    const quantity = JSON.parse(q);
    document.querySelector(".badge").innerHTML = quantity?.length<100?quantity?.length.toString():"99+";                                                       
}

const getGroupedCartObjects = (c)=>{
    const cartObjects = JSON.parse(c)
    const uniqueCartObjects = [...new Set(cartObjects.map(cartObject=>cartObject.name))]
    const groupedCartObjects =uniqueCartObjects.map(uniqueCartObject=>{
    const product = new Object();
    product.name = uniqueCartObject
    product.quantity = cartObjects.filter(cartObject=>cartObject.name==uniqueCartObject).length
    product.price = cartObjects.find(cartObject=>cartObject.name==uniqueCartObject).price
    product.id = cartObjects.find(cartObject=>cartObject.name==uniqueCartObject).id
    return product
    })
    return groupedCartObjects
}

// cartBadge(cart.length)
cartBadge(cartObjects())