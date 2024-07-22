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
    _id: String
  };

export type CartItem = {
  name: String;
  description: String;
  price: number;
  count: number;
} 


export const addToCart = (product: ProductItem) => {
  const cart: ProductItem[] = [];
  const localStorageCart = localStorage.getItem('cart')
  if(!localStorageCart)
    {
    const initCartItem: ProductItem = {name: product.name, description: product.description, _id:product._id, price: product.price, inventoryCount: 1}
    cart.push(initCartItem)
    localStorage.setItem('cart', JSON.stringify(cart))
  }
  else {
    const userCart = JSON.parse(String(localStorage.getItem('cart')));

    let shoppingCart: ProductItem[] =  userCart as unknown as ProductItem[]

    let productItem = shoppingCart.find(item => item.name === product?.name)

    if(productItem){
      const countIncrease = productItem?.inventoryCount + 1;
      productItem.inventoryCount =  countIncrease
      let finalshoppingCart = shoppingCart?.map(item => item.name !== product.name ? item : productItem)
      localStorage.removeItem('cart')
      localStorage.setItem('cart',JSON.stringify(finalshoppingCart))
    } else {
      const initCartItem: ProductItem = {name: product.name, description: product.description, price: product.price, _id:product._id , inventoryCount: 1}
      shoppingCart.push(initCartItem)
      localStorage.removeItem('cart')
      localStorage.setItem('cart',JSON.stringify(shoppingCart))
    }
  }
}

export const removeItem = (product: ProductItem) => {
    const userCart = JSON.parse(String(localStorage.getItem('cart')));
    const shoppingCart =  userCart as unknown as ProductItem[]
    let foundItem = shoppingCart.find(item => item.name === product.name)
    if(foundItem){
      foundItem.inventoryCount--
      if(foundItem.inventoryCount <= 0)
        {
        const finalshoppingCart = shoppingCart?.filter(item => item.name !== product.name)
        localStorage.removeItem('cart')
        localStorage.setItem('cart',JSON.stringify(finalshoppingCart))
      }
      else{
        const finalshoppingCart = shoppingCart?.map(item => item.name !== product.name ? item : foundItem)
        localStorage.removeItem('cart')
        localStorage.setItem('cart',JSON.stringify(finalshoppingCart))
      }
    }
    else{
      return
    }
}

export const arraysAreEqual = (arr1: ProductItem[], arr2: ProductItem[]) => {
  if (arr1.length !== arr2.length) return false;
  
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i].name !== arr2[i].name ||
        arr1[i].description !== arr2[i].description ||
        arr1[i].price !== arr2[i].price ||
        arr1[i].inventoryCount !== arr2[i].inventoryCount) {
      return false;
    }
  }
  
  return true;
}

  
