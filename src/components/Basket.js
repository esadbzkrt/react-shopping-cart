import React from 'react';
import BasketItem from './BasketItem';

function Basket({total,basket,products}) {
    return (
        <div>
            <h5>Sepetinizde {basket.length} ürün var.</h5>
            {basket.map(item => (
                <BasketItem key={item.id} item={item} product={products.find(p => p.id === item.id)}/>
            ))}
            <h4>Sepet tutarı: ${total.toFixed(2)}</h4>
        </div>
    );
}

export default Basket;