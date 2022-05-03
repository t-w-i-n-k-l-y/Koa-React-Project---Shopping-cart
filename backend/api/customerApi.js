import {v4} from 'uuid';

const customers = new Map();

//no password encryption is used
//create profile - customer
export const createCustomer = ({firstName, lastName, email, phone, address, password}) => {
    const customer = {
        id: v4().toString(),
        firstName,
        lastName,
        email,
        phone,
        address,
        password,
        lastModifiedDate: new Date()
    }
    // console.log(customer)
    customers.set(customer.id, customer)
    return customer;
}

//to get details of all the customers
export const getCustomers = () => {
    return [...customers.values()];
}

//get the customer details according to the id
export const getCustomer = (id) => {
    const customer = customers.get(id);
    return customer;
}


// following functions were not used--------------------------------------------------
// //update profile - customer
// export const updateCustomer = (id, {firstName, lastName, email, phone, address, password}) => {
//     if(!customers.has(id)) {
//         throw new Error(`Not found any customer with ID ${id}`);
//     }
//     const customer = {id, firstName, lastName, email, phone, address, password, lastModifiedDate: new Date()};
//     customers.set(customer.id, customer);
//     return customer;
// };

// //delete account - customer
// export const deleteCustomer = (id) => {
//     if(!customers.has(id)) {
//         throw new Error(`Not found any customer with ID ${id}`);
//     }
//     customers.delete(id);
// };