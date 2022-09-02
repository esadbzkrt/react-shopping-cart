import React from 'react';

function Product({product, total, money, basket, setBasket}) {

    const basketItem = basket.find(item => item.id === product.id);

    const addBasket = () => {
        const checkBasket = basket.find(item => item.id === product.id);
        if (checkBasket) {
            checkBasket.amount += 1;
            setBasket([...basket.filter(item => item.id !== product.id), checkBasket]);
        } else {
            setBasket([...basket, {id: product.id, amount: 1}]);
        }
    }


    const removeBasket = () => {
        const currentBasket = basket.find(item => item.id === product.id);
        const basketWithoutCurrent = basket.filter(item => item.id !== product.id);
        currentBasket.amount -= 1;
        if (currentBasket.amount === 0) {
            setBasket([...basketWithoutCurrent]);
        } else {

            setBasket([...basketWithoutCurrent, currentBasket]);
        }

    }

    return (
        <>
            <div className="product">
                <img src={product.image} alt={product.title}/>
                <h5>{product.title}</h5>
                <div className="price">
                    <h5>${product.price}</h5>
                </div>

                <div className="actions">
                    <button className="dropButton" disabled={!basketItem} onClick={removeBasket}>-</button>
                    <span className="amount">{basketItem ? basketItem.amount : 0}</span>
                    <button className="addButton" disabled={(total + product.price) > money} onClick={addBasket}>+
                    </button>
                </div>

                <style jsx>{`
                  .product {
                    padding: 10px;
                    border: 1px solid #ddd;
                    background: #fff;
                    margin-bottom: 10px;
                    width: 24%;
                  }

                  .product img {
                    width: 100%;

                  }

                  .product h5 {
                    font-size: 14px;
                    margin: 10px 0;
                  }

                  .product .actions {
                    display: flex;
                    align-items: center;
                  }

                  .product .price {
                    font-size: 20px;
                  }

                  .actions button {
                    height: 40px;
                    padding: 0 10px;
                    flex: 1;
                    cursor: pointer;
                  }
                  
                  .actions button:disabled {
                    background: #ddd;
                    cursor: not-allowed;
                  }

                  .actions .amount {
                    width: 30px;
                    text-align: center;
                    border: 1px solid #ddd;
                    height: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 17px;
                    font-weight: bold;
                    color: gray;
                  }

                  .actions .dropButton {
                    background: red;
                    font-size: 20px;
                    font-weight: 500;
                    color: #fff;
                    width: 30px;
                    height: 30px;
                    border-radius: 5px 0 0 5px;
                  }

                  .actions .addButton {
                    background: green;
                    font-size: 20px;
                    font-weight: 500;
                    color: #fff;
                    width: 30px;
                    height: 30px;
                    border-radius: 0 5px 5px 0;
                  }

                `}</style>
            </div>

        </>

    );
}

export default Product;