import Router from "@koa/router";
import {createCustomer, getCustomers, getCustomer } from '../api/customerApi.js';

const customerRouter = new Router({
    prefix: '/customers'
})

///GET all
customerRouter.get('/', ctx => {
    ctx.body = getCustomers();
});

//POST
customerRouter.post('/create', ctx => {
    let customer = ctx.request.body;
    customer = createCustomer(customer);
    ctx.response.status = 201;
    ctx.body = customer;
});

//GET
customerRouter.get('/:id', ctx => {
    const id = ctx.params.id;
    ctx.body = getCustomer(id);
});


// following functions are not used--------------------------------------------------
//PUT - update
// customerRouter.put('/update/:id',(ctx) => {
//     const id = ctx.params.id;
//     const data = ctx.request.body;
//     ctx.body = updateCustomer(id, data);
//     ctx.set('Content-Type', 'application/json');
//     ctx.status = 200;
// });

// //DELETE
// customerRouter.delete('/delete/:id',(ctx) => {
//     const id = ctx.params.id;
//     deleteCustomer(id);
//     ctx.set('Content-Type', 'application/json');
//     ctx.status = 204;
// });

export default customerRouter;
   