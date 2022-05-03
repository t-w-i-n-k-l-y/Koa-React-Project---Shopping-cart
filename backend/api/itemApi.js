import {v4} from 'uuid';

const items = new Map();

//create item 
export const createItem = ({name, description, price, quantity, businessName}) => {
    const item = {
        id: v4().toString(),
        name, 
        description, 
        price, 
        quantity, 
        businessName,
        lastModifiedDate: new Date()
    }
    // console.log(item)
    items.set(item.id, item)
    return item;
}

//to get details of all the items 
export const getItems = () => {
    return [...items.values()];
}

//get the item details according to the id
export const getItem = (id) => {
    const item = items.get(id);
    return item;
}

//update item
export const updateItem = (id, {name, description, price, quantity, businessName }) => {
    // console.log("this")
    if(!items.has(id)) {
        throw new Error(`Not found any item with ID ${id}`);
    }
    else{
        const item = {id, name, description, price, quantity, businessName, lastModifiedDate: new Date()};
        items.set(item.id, item);
        return item;
    }
};

//delete item
export const deleteItem = (id) => {
    if(!items.has(id)) {
        throw new Error(`Not found any item with ID ${id}`);
    }
    items.delete(id);
};