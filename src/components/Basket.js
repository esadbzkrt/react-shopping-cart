import React from 'react';
import BasketItem from './BasketItem';
import {moneyFormat} from "../helpers";

function Basket({setBasket, total, basket, products}) {

    const resetBasket = () => {
        setBasket([]);
    };

    return (
        <div className="basketContainer">
            <span className="header">

            <h5>Sepetinizde {basket.length} ürün var.</h5>
            <button className="reset" onClick={resetBasket}>Sıfırla</button>
            </span>


            {basket.map(item => (
                <BasketItem key={item.id} item={item} product={products.find(p => p.id === item.id)}/>
            ))}
            <div className="total">

                <span>Toplam: </span>
                <span>{"$" + moneyFormat(total)}</span>
            </div>

            <style jsx>{`
              .basketContainer {
                padding: 10px;
                border: 1px solid #ddd;
                background: #fff;
                margin-bottom: 10px;
                width: 24%;
              }
              .header .reset {
                background: #fff;
                border: 1px solid #ddd;
                border-radius: 5px;
                cursor: pointer;
                
              }
            `}</style>
        </div>
    );
}

export default Basket;