import './App.css';
import {useState, useEffect} from "react";
import Header from "./components/Header";
import Product from "./components/Product";
import Basket from "./components/Basket";
import products from "./products.json";

function App() {

    const [money, setMoney] = useState(1000);
    const [basket, setBasket] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {

        setTotal(basket.reduce((acc, item) => {
            return acc + (item.amount * (products.find(product => product.id === item.id).price));
        }, 0));

    }, [basket]);

    return (
        <div>

            <Header setBasket={setBasket} total={total} money={money}/>
            <Basket total={total} products={products} basket={basket}/>

            <div className="container products">
                    {products.map(product => (
                        <Product
                            key={product.id}
                            basket={basket}
                            total={total}
                            money={money}
                            setBasket={setBasket}
                            product={product}
                        />
                    ))}
                </div>
        </div>
    );
}

export default App;