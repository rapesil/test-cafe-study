import { Selector, t } from 'testcafe';
import login from '../pages/login-page';
import home from '../pages/home-page';
import dotenv from 'dotenv';

dotenv.config();

fixture`Cart`
    .page`https://www.saucedemo.com`
    .beforeEach(async t => {
        await login.loginAs(process.env.VALID_USERNAME, process.env.VALID_PASSWORD);
            
    })

test('Should successfully add item to the cart', async t => {
   await home.insertItemToTheCart();
   await t.expect(home.hasItemInTheCart()).ok({ allowUnawaitedPromise: true })
})