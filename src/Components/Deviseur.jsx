import React, { useState } from "react";
import Option from "./Option";
import OptionTwo from "./OptionTwo";

function Deviseur() {
    const [totalPrice, setTotalPrice] = useState(0);

    return (
        <div>
            <h1>Deviseur</h1>
            <Option totalPrice={totalPrice} setTotalPrice={setTotalPrice} />
            <OptionTwo totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>
            <h3>{totalPrice} $</h3>
        </div>
    );
}

export default Deviseur;
