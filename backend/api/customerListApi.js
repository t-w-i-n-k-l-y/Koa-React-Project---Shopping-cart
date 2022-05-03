const customers = new Map();

export const createCustomer = ({id, firstName, lastName, email, phone, address, password, lastModifiedDate}) => {
    const customer = {
        id,
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