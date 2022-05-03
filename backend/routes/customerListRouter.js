import Router from "@koa/router";
import { createCustomer, getCustomers } from '../api/customerListApi.js';

const customerRouter = new Router({
    prefix: '/customerlist'
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

export default customerRouter;
