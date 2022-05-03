import Router from "@koa/router";
import { createCartItem, getCartItems, deleteCartItem, updateCartItem } from '../api/cartApi.js';

const cartRouter = new Router({
    prefix: '/cart'
})

//GET all
cartRouter.get('/', ctx => {
    ctx.body = getCartItems();
});

//POST
cartRouter.post('/create', ctx => {
    let item = ctx.request.body;
    item = createCartItem(item);
    ctx.response.status = 201;
    ctx.body = item;
});

//DELETE
cartRouter.delete('/delete/:id',(ctx) => {
    const id = ctx.params.id;
    deleteCartItem(id);
    ctx.set('Content-Type', 'application/json');
    ctx.status = 204;
});

//PUT
cartRouter.put('/update/:id',(ctx) => {
    const id = ctx.params.id;
    const data = ctx.request.body;
    ctx.body = updateCartItem(id, data);
    ctx.set('Content-Type', 'application/json');
    ctx.status = 200;
});

export default cartRouter;