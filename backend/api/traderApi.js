import {v4} from 'uuid';

const traders = new Map();

//no password encryption is used
//create profile - trader
export const createTrader = ({name, businessName, email, phone, businessAddress, password}) => {
    const trader = {
        id: v4().toString(),
        name,
        businessName,
        email,
        phone,
        businessAddress,
        password,
        lastModifiedDate: new Date()
    }
    traders.set(trader.id, trader)
    return trader;
}

//get the trader details according to the id
export const getTrader = (id) => {
    const trader = traders.get(id);
    return trader;
}

// following functions are not used--------------------------------------------------
// //to get details of all the traders
// export const getTraders = () => {
//     return [...traders.values()];
// }

// //update profile - trader
// export const updateTrader = (id, {name, businessName, email, phone, businessAddress, password}) => {
//     if(!traders.has(id)) {
//         throw new Error(`Not found any trader with ID ${id}`);
//     }
//     const trader = {id, name, businessName, email, phone, businessAddress, password, lastModifiedDate: new Date()};
//     traders.set(trader.id, trader);
//     return trader;
// };

// //delete account - trader
// export const deleteTrader = (id) => {
//     if(!traders.has(id)) {
//         throw new Error(`Not found any trader with ID ${id}`);
//     }
//     traders.delete(id);
// };