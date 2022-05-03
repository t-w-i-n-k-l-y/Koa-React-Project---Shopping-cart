const cartItems = new Map();

//get items in the cart
export const getCartItems = () => {
    return [...cartItems.values()];
}

//add to cart
export const createCartItem = ({id, name, description, price, quantity, businessName}) => {
    const cartItem = {
        id,
        name, 
        description, 
        price, 
        quantity, 
        businessName,
        lastModifiedDate: new Date()
    }
    // console.log(cartItem)
    cartItems.set(id, cartItem)
    return cartItem;
}

//remove item
export const deleteCartItem = (id) => {
    if(!cartItems.has(id)) {
        // throw new Error(`Not found any item with ID ${id}`);
        console.log(`Not found any item with ID ${id}`)
    }
    cartItems.delete(id);
};

//update item
export const updateCartItem = (id, {name, description, price, quantity, businessName}) => {
    // console.log("this")
    if(!cartItems.has(id)) {
        // throw new Error(`Not found any item with ID ${id}`);
        console.log(`Not found any item with ID ${id}`)
    }
    else{
        const item = {id, name, description, price, quantity, businessName, lastModifiedDate: new Date()};
        cartItems.set(item.id, item);
        return item;
    }
};