import React from 'react';

function BasketItem({item,product}) {
    return (
        <div>
            {product.title} x {item.amount} = $ {product.price * item.amount}
        </div>
    );
}

export default BasketItem;