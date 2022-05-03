import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import customerRouter from './routes/customerRouter.js';
import traderRouter from './routes/traderRouter.js';
import itemRouter from './routes/itemRouter.js';
import cartRouter from './routes/cartRouter.js'
import wishListRouter from './routes/wishListRouter.js';
import customerListRouter from './routes/customerListRouter.js';
import promotionRouter from './routes/promotionRouter.js';

const app = new Koa();

app.use(bodyParser())
var options = {
    origin: '*'
};

app.use(cors(options));

// register routes
app.use(customerRouter.routes())
    .use(customerRouter.allowedMethods())
app.use(traderRouter.routes())
    .use(traderRouter.allowedMethods())
app.use(itemRouter.routes())
    .use(itemRouter.allowedMethods())
app.use(cartRouter.routes())
    .use(cartRouter.allowedMethods())
app.use(wishListRouter.routes())
    .use(wishListRouter.allowedMethods())
app.use(customerListRouter.routes())
    .use(customerListRouter.allowedMethods())
app.use(promotionRouter.routes())
    .use(promotionRouter.allowedMethods()) 
    
const PORT = 8000
app.listen(PORT);
console.log('Application is running on port ' + PORT);