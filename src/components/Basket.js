import React from 'react';
import BasketItem from './BasketItem';
import {moneyFormat} from "../helpers";

function Basket({total,basket,products}) {
    return (
        <div>
            <h5>Sepetinizde {basket.length} ürün var.</h5>
            {basket.map(item => (
                <BasketItem key={item.id} item={item} product={products.find(p => p.id === item.id)}/>
            ))}
            <h4>Sepet tutarı: ${moneyFormat(total)}</h4>
        </div>
    );
}

export default Basket;