import { useState,useEffect } from "react"
import { nanoid } from "nanoid";

function OptionTwo({totalPrice,setTotalPrice}) {

  const [options, setOptions] = useState({
    "e-commerce": 5000,
    "Site Vitrine": 1000,   
    "Application": 20000,    
  });
  
 

  function HandleCheck(event){

      const input = event.target;
      const optionPrice = options[input.name]


      if (input.checked) {
        console.log(`Option "${input.name}" est cochée avec un prix de ${optionPrice} €`);
        setTotalPrice(totalPrice + optionPrice)

      } else {
        console.log(`Option "${input.name}" est décochée`);
        setTotalPrice(totalPrice - optionPrice)
      }

  }
  return (
    <div>
      <h2>type de site</h2>
      <ul>
        <li>
          <label htmlFor="e-commerce">e-commerce</label>
          <input type="checkbox" name="e-commerce" id={nanoid(5)} onChange={HandleCheck} />

          <label htmlFor="Site Vitrine">Site Vitrine</label>
          <input type="checkbox" name="Site Vitrine"id={nanoid(5)} onChange={HandleCheck}  />

          <label htmlFor="Application">Application</label>
          <input type="checkbox" name="Application" id={nanoid(5)} onChange={HandleCheck} />
        </li>
      </ul>
    </div>
  )
}
export default OptionTwo