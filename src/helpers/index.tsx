export type column = {
  title: String;
  fieled: String;
};

export type checkoutItem = {
  name: String;
  description: String;
  price: number;
  count: number;
};

export type ProductItem = {
    name: String;
    description: String;
    price: number;
    inventoryCount: number;
  };

export type CartItem = {
  name: String;
  description: String;
  price: number;
  count: number;
} 

export const addToCart = (product: CartItem) => {
  const cart: CartItem[] = [];
  const localStorageCart = localStorage.getItem('cart')
  if(!localStorageCart)
    {
    const initCartItem: CartItem = {name: product.name, description: product.description, price: product.price, count: 1}
    cart.push(initCartItem)
    localStorage.setItem('cart', JSON.stringify(cart))
  }
  else {
    const userCart = JSON.parse(String(localStorage.getItem('cart')));

    let shoppingCart: CartItem[] =  userCart as unknown as CartItem[]

    let productItem = shoppingCart.find(item => item.name === product?.name)

    if(productItem){
      const countIncrease = productItem?.count + 1;
      productItem.count =  countIncrease
      let finalshoppingCart = shoppingCart?.map(item => item.name !== product.name ? item : productItem)
      localStorage.removeItem('cart')
      localStorage.setItem('cart',JSON.stringify(finalshoppingCart))
    } else {
      const initCartItem: CartItem = {name: product.name, description: product.description, price: product.price, count: 1}
      shoppingCart.push(initCartItem)
      localStorage.removeItem('cart')
      localStorage.setItem('cart',JSON.stringify(shoppingCart))
    }
  }
}

export const removeItem = (product: CartItem) => {
    const userCart = JSON.parse(String(localStorage.getItem('cart')));
    let shoppingCart =  userCart as unknown as CartItem[]
    let founditem = shoppingCart.find(item => item.name = product.name)
    if(founditem){
      founditem.count--
      if(founditem.count <= 0){
        let finalshoppingCart = shoppingCart?.filter(item => item.name !== product.name)
        localStorage.removeItem('cart')
        localStorage.setItem('cart',JSON.stringify(finalshoppingCart))
      }
      else{
        let finalshoppingCart = shoppingCart?.map(item => item.name !== product.name ? item : founditem)
        localStorage.removeItem('cart')
        localStorage.setItem('cart',JSON.stringify(finalshoppingCart))
      }
    }
    else{
      return
    }
}
  
