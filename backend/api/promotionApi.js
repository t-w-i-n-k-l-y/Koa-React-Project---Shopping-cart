import { v4 } from 'uuid';

const promotions = new Map();

//create item
export const createPromotion = ({ businessName, promotion, description }) => {
    const promo = {
        id: v4().toString(),
        businessName,
        promotion,
        description,
        lastModifiedDate: new Date()
    }
    // console.log(promo)
    promotions.set(promo.id, promo)
    return promo;
}

//to get details of all the items
export const getPromotions = () => {
    return [...promotions.values()];
}

//get the item details according to the id
export const getPromotion = (id) => {
    const promotion = promotions.get(id);
    return promotion;
}

//update item
export const updatePromotion = (id, { businessName, promotion, description }) => {
    // console.log("this")
    if (!promotions.has(id)) {
        throw new Error(`Not found any promotion with ID ${id}`);
    }
    else{
        const promo = { id, businessName, promotion, description, lastModifiedDate: new Date() };
        promotions.set(promo.id, promo);
        return promo;
    }
    
};

//delete item
export const deletePromotion = (id) => {
    if (!promotions.has(id)) {
        throw new Error(`Not found any item with ID ${id}`);
    }
    promotions.delete(id);
};