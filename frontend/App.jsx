import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CreateCustomer from './components/customer/CreateCustomer';
import CreateTrader from './components/trader/CreateTrader';
import Customer from './components/customer/Customer';
import Trader from './components/trader/Trader';
import AllCustomers from './components/trader/AllCustomers';
import CreateItem from './components/trader/CreateItem';
import ViewInventory from './components/trader/ViewInventory';
import EditItem from './components/trader/EditItem';
import ViewItems from './components/customer/ViewItems';
import WishList from './components/customer/WishList';
import Cart from './components/customer/Cart';
import CustomerList from './components/trader/CustomerList';
import AddPromotion from './components/trader/AddPromotion';
import PromotionList from './components/trader/PromotionList';
import Promotions from './components/customer/Promotions';
import EditPromotion from './components/trader/EditPromotion';

const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' exact element={<Home />}></Route>
            
            {/* Customer */}
            <Route path='/customerCreate' exact element={<CreateCustomer />}></Route>
            <Route path='/customer' exact element={<Customer />}></Route>
            <Route path='/items' exact element={<ViewItems />}></Route>
            <Route path='/wishlist' exact element={<WishList />}></Route>
            <Route path='/cart' exact element={<Cart />}></Route>
            <Route path='/promotions' exact element={<Promotions />}></Route>

            {/* Trader */}
            <Route path='/traderCreate' exact element={<CreateTrader />}></Route>
            <Route path='/trader' exact element={<Trader />}></Route>
            <Route path='/allcustomers' exact element={<AllCustomers />}></Route>
            <Route path='/itemCreate' exact element={<CreateItem />}></Route>
            <Route path='/inventory' exact element={<ViewInventory />}></Route>
            <Route path='/editItem/:id' exact element={<EditItem />}></Route>
            <Route path='/customerlist' exact element={<CustomerList />}></Route>
            <Route path='/promotionCreate' exact element={<AddPromotion />}></Route>
            <Route path='/promotionlist' exact element={<PromotionList />}></Route>
            <Route path='/editPromotion/:id' exact element={<EditPromotion />}></Route>

        </Routes>
    </BrowserRouter>
)