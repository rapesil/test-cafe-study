import login  from '../pages/login-page'
import { Selector, t } from 'testcafe';
import dotenv from 'dotenv';

dotenv.config();

fixture`Sauce Demo Login`
    .page`https://www.saucedemo.com`;


test('Login successfully', async t => {
    await login.loginAs(process.env.VALID_USERNAME, process.env.VALID_PASSWORD)

    await t.expect(t.eval(() => window.location.pathname)).eql('/inventory.html');
});

test('Wrong password', async t => {
    await login.loginAs(process.env.VALID_USERNAME, 'wrong_pass')

    await t.expect(t.eval(() => window.location.pathname)).eql('/');
    await t
        .expect(Selector('[data-test="error"]').innerText)
        .eql('Epic sadface: Username and password do not match any user in this service')
});

test('Lock out user', async t => {
    await login.loginAs(process.env.USERNAME_BLOCK, process.env.VALID_PASSWORD)

    await t.expect(t.eval(() => window.location.pathname)).eql('/');
})