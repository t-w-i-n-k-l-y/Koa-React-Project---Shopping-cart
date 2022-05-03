const wishListItems = new Map();

//get items in the cart
export const getWishListItems = () => {
    return [...wishListItems.values()];
}

//add to cart
export const createWishListItems = ({ id, name, description, price, quantity, businessName }) => {
    const wishListItem = {
        id,
        name,
        description,
        price,
        quantity,
        businessName,
        lastModifiedDate: new Date()
    }
    // console.log(wishListItem)
    wishListItems.set(id, wishListItem)
    return wishListItem;
}

//remove item
export const deleteWishListItem = (id) => {
    if (!wishListItems.has(id)) {
        // throw new Error(`Not found any item with ID ${id}`);
        console.log(`Not found any item with ID ${id}`)
    }
    wishListItems.delete(id);
};

//update item
export const updateWishListItem = (id, {name, description, price, quantity, businessName}) => {
    // console.log("this")
    if(!wishListItems.has(id)) {
        // throw new Error(`Not found any item with ID ${id}`);
        console.log(`Not found any item with ID ${id}`)
    }
    else{
        const item = {id, name, description, price, quantity, businessName, lastModifiedDate: new Date()};
        wishListItems.set(item.id, item);
        return item;
    }
};