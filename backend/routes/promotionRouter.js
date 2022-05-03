import Router from "@koa/router";
import {createPromotion, getPromotion, getPromotions, updatePromotion, deletePromotion} from '../api/promotionApi.js';

const promotionRouter = new Router({
    prefix: '/promotions'
})

///GET all
promotionRouter.get('/', ctx => {
    ctx.body = getPromotions();
});

//POST
promotionRouter.post('/create', ctx => {
    let item = ctx.request.body;
    item = createPromotion(item);
    ctx.response.status = 201;
    ctx.body = item;
});

//GET
promotionRouter.get('/:id', ctx => {
    const id = ctx.params.id;
    ctx.body = getPromotion(id);
});

//PUT - update
promotionRouter.put('/update/:id',(ctx) => {
    const id = ctx.params.id;
    const data = ctx.request.body;
    // console.log(id.toString())
    // console.log(data)
    ctx.body = updatePromotion(id, data);
    ctx.set('Content-Type', 'application/json');
    ctx.status = 200;
});

//DELETE
promotionRouter.delete('/delete/:id',(ctx) => {
    const id = ctx.params.id;
    deletePromotion(id);
    ctx.set('Content-Type', 'application/json');
    ctx.status = 204;
});

export default promotionRouter;
   