import React from 'react';
import {moneyFormat} from "../helpers";

function BasketItem({item, product}) {
    return (
        <span>
            <span className="basketItem">
                {product.title.slice(0, 25) + "..."} x {item.amount}<div/>
                <span className="price">
                    {moneyFormat(product.price * item.amount)}


                </span>
            </span>
            <style jsx>{`
                .basketItem {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 10px;
                }

                .price {
                    color: #666;
                }
            `}</style>
        </span>
    );
}

export default BasketItem;