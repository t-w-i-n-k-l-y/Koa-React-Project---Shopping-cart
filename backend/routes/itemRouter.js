import Router from "@koa/router";
import {createItem, getItem, getItems, updateItem, deleteItem} from '../api/itemApi.js';

const itemRouter = new Router({
    prefix: '/items'
})

///GET all
itemRouter.get('/', ctx => {
    ctx.body = getItems();
});

//POST
itemRouter.post('/create', ctx => {
    let item = ctx.request.body;
    item = createItem(item);
    ctx.response.status = 201;
    ctx.body = item;
});

//GET
itemRouter.get('/:id', ctx => {
    const id = ctx.params.id;
    ctx.body = getItem(id);
});

//PUT - update
itemRouter.put('/update/:id',(ctx) => {
    const id = ctx.params.id;
    const data = ctx.request.body;
    // console.log(id.toString())
    // console.log(data)
    ctx.body = updateItem(id, data);
    ctx.set('Content-Type', 'application/json');
    ctx.status = 200;
});

//DELETE
itemRouter.delete('/delete/:id',(ctx) => {
    const id = ctx.params.id;
    deleteItem(id);
    ctx.set('Content-Type', 'application/json');
    ctx.status = 204;
});

export default itemRouter;
   