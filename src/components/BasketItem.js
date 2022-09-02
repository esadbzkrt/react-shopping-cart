import React from 'react';
import {moneyFormat} from "../helpers";

function BasketItem({item,product}) {
    return (
        <div>
            {product.title} x {item.amount} = $ {moneyFormat(product.price * item.amount)}
        </div>
    );
}

export default BasketItem;