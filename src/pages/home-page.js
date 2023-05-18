import { Selector, t } from 'testcafe';

class HomePage {

    async insertItemToTheCart() {
        var product = Selector('[data-test="add-to-cart-sauce-labs-backpack"]')

        await t.expect(product.visible).ok({ timeout: 5000 });
        await t.click(product)
    }

    async hasItemInTheCart() {
        const cart_one_item = Selector('.shopping_cart_badge')
        return await cart_one_item.visible
    }
}

export default new HomePage();