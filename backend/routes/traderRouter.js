import Router from "@koa/router";
import { createTrader, getTrader } from "../api/traderApi.js";

const traderRouter = new Router({
    prefix: '/traders'
})

//POST
traderRouter.post('/create', ctx => {
    let trader = ctx.request.body;
    trader = createTrader(trader);
    ctx.response.status = 201;
    ctx.body = trader;
});

//GET
traderRouter.get('/:id', ctx => {
    const id = ctx.params.id;
    ctx.body = getTrader(id);
});

// following functions are not used--------------------------------------------------
///GET all
// traderRouter.get('/', ctx => {
//     ctx.body = getTraders();
// });

// traderRouter.put('/update/:id',(ctx) => {
//     const id = ctx.params.id;
//     const data = ctx.request.body;
//     ctx.body = updateTrader(id, data);
//     ctx.set('Content-Type', 'application/json');
//     ctx.status = 200;
// });

// traderRouter.delete('/delete/:id',(ctx) => {
//     const id = ctx.params.id;
//     deleteTrader(id);
//     ctx.set('Content-Type', 'application/json');
//     ctx.status = 204;
// });

export default traderRouter;
   