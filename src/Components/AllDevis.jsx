import { useState } from "react"
import Deviseur from "./Deviseur"
import { nanoid } from "nanoid";


function AllDevis() {


 const [devis, setDevis] = useState([])


    function NewDevis(){ 
            setDevis([...devis, <Deviseur key= {nanoid()} />]);
    }

  return (
    <>
        <button onClick={NewDevis}>Ajouter un devis</button>
        {devis}
    </>
  )
}
export default AllDevis