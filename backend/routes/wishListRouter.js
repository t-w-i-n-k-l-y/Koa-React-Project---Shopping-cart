import Router from "@koa/router";
import { createWishListItems, getWishListItems, deleteWishListItem, updateWishListItem } from '../api/wishListApi.js';

const wishListRouter = new Router({
    prefix: '/wishlist'
})

//GET all
wishListRouter.get('/', ctx => {
    ctx.body = getWishListItems();
});

//POST
wishListRouter.post('/create', ctx => {
    let item = ctx.request.body;
    item = createWishListItems(item);
    ctx.response.status = 201;
    ctx.body = item;
});

//DELETE
wishListRouter.delete('/delete/:id',(ctx) => {
    const id = ctx.params.id;
    deleteWishListItem(id);
    ctx.set('Content-Type', 'application/json');
    ctx.status = 204;
});

//PUT
wishListRouter.put('/update/:id',(ctx) => {
    const id = ctx.params.id;
    const data = ctx.request.body;
    ctx.body = updateWishListItem(id, data);
    ctx.set('Content-Type', 'application/json');
    ctx.status = 200;
});

export default wishListRouter;