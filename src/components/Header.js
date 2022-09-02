import React from 'react';

function Header({setBasket,total, money}) {

    const resetBasket = () => {
        setBasket([]);
    };
    return (
        <div>
           <h5> Harcamak için ${(money - total).toFixed(2)} paranız var. </h5>
            <button onClick={resetBasket}>Sıfırla</button>
        </div>

    );
}

export default Header;