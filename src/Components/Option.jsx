import { useState,useEffect } from "react"
import { nanoid } from "nanoid";

function Option({totalPrice,setTotalPrice}) {

  const [options, setOptions] = useState({
    "One page": 5,
    "2 page": 10,   
    "3 page": 20,   
    "4 page": 30,   
  });
  const [note,setNote] = useState("")
  const [notesList, setNotesList] = useState([])
 

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

  function handleNote(event){
   event.preventDefault();
   if (note.trim() !== "") {
    setNotesList([...notesList, note]);
    setNote("");
  }
  }

  function deleteNote(index) {
  
    const newNotesList = notesList.filter((_, i) => i !== index);
   
    setNotesList(newNotesList);
  }

  return (
    <div>
      <h2>Nombre de pages</h2>
      <ul>
        <li>
          <label htmlFor="One page">One page</label>
          <input type="checkbox" name="One page" id={nanoid(5)} onChange={HandleCheck} />

          <label htmlFor="2 page">2 page</label>
          <input type="checkbox" name="2 page"id={nanoid(5)} onChange={HandleCheck}  />

          <label htmlFor="3 page">3 page</label>
          <input type="checkbox" name="3 page" id={nanoid(5)} onChange={HandleCheck} />

          <label htmlFor="4 page">4  page</label>
          <input type="checkbox" name="4 page" id={nanoid(5)} onChange={HandleCheck} />
        </li>
        <li>
        <p>{notesList.map((note, index) => 
        <span key={index}>
        {note}
        <br/>
        <button onClick={() => deleteNote(index)}>X</button>
        </span>
        )}</p>
        </li>
      </ul>
      <div>
      <form action="" onSubmit={handleNote}>
        <label htmlFor="note">Note :</label>
        <input 
        type="text" 
        name="note" 
        id={nanoid(5)} 
        value={note}
        onChange={(e) => setNote(e.target.value)}
        />
        <button type="submit">Ajouter cette note à cette option</button>
      </form>
      </div>
    </div>
  )
}
export default Option