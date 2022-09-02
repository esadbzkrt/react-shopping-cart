import React from 'react';

function Product({product, basket, setBasket}) {

    const basketItem = basket.find(item => item.id === product.id);

    const addBasket= () => {
       const checkBasket =  basket.find(item => item.id === product.id);
         if(checkBasket) {
                checkBasket.amount+= 1;
                setBasket([...basket.filter(item=>item.id!== product.id), checkBasket]);
         }
            else {
                setBasket([...basket, {id: product.id, amount: 1}]);
            }
         }


    const removeBasket = () =>  {
        const currentBasket = basket.find(item => item.id === product.id);
        const basketWithoutCurrent = basket.filter(item => item.id !== product.id);
        currentBasket.amount-=1;
        if(currentBasket.amount === 0) {
            setBasket([...basketWithoutCurrent]);
        }
        else {

            setBasket([...basketWithoutCurrent, currentBasket]);
        }



    }

    return (
        <>
            <div className="product">
                <h5>{product.title}</h5>
                <div className="price">
                    <h5>${product.price}</h5>
                </div>

                <div className="button">
                    <button disabled={!basketItem} onClick={removeBasket}>-</button>
                    <span>{basketItem ? basketItem.amount : 0}</span>
                    <button onClick={addBasket}>+</button>
                </div>

                <style jsx>{`
                  .product {
                    padding: 10px;
                    border: 1px solid #ddd;
                    background: #fff;
                    margin-bottom: 10px;
                  }
                `}</style>
            </div>

        </>

    );
}

export default Product;