import { t } from 'testcafe';

class LoginPage {

    constructor() {

    }

    async loginAs(user, pass) {
        await t.typeText('#user-name', user);
        await t.typeText('#password', pass);
        await t.click('#login-button');
        return this;
    }
};

export default new LoginPage();