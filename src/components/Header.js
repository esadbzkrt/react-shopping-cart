import React from 'react';
import {moneyFormat} from "../helpers";

function Header({total, money}) {


    return (
        <div className="header">
           <h5> Harcamak için ${moneyFormat((money - total))} paranız var. </h5>


            <style jsx>{`
              .header {
                position: sticky;
                top:0;
                background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 0%, rgb(0, 136, 255) 100%);
                padding: 10px;
                color: #fff;
                display: flex;
                justify-content: space-between;
                align-items: center;
              }
            `}</style>
        </div>

    );
}

export default Header;