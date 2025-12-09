import {useState, useEffect} from "react";
import Footer from "./Footer";
import Header from "./Header";
import CardList from "./CardList";
import cardData from "../data.json"

function App(){
  const[notes, setNotes]= useState(cardData);
  const[filter, setFilter]= useState("All");

  useEffect(() => {
    const CardDataId = cardData.map((card, index) => ({
      ...card, 
      id: index + Math.random(),
    }));
    setNotes(CardDataId);
  }, [])


function filterCards (filterType){
  setFilter(filterType);
}


function deleteCard (id) {
  console.log("deleted card ", id)
  setNotes(prevNotes => 
   prevNotes.filter((note) => {
      return note.id !== id;
    })
  )
}

function toggleCardState(id){
  console.log("state of card " + id + " changed ")
  setNotes(prevNotes => 
    prevNotes.map((note) => 
    note.id === id ? {...note, isActive: !note.isActive} : note )
  );
}


  return <div className="main-part">
    <Header setFilter={filterCards}/>
    <CardList 
    notes={notes}
    filter={filter}
    onToggle={toggleCardState}
    onDelete={deleteCard}
    />
    <Footer />
  </div>
}

export default App;