import React from "react";
import Card from "./Card";

function CardList({notes, filter, onToggle, onDelete}){
const filteredNotes = notes.filter(card => {
    if (filter === "Active") {
      return card.isActive;
    } else if (filter === "Inactive") {
      return !card.isActive;
    }
    return true;
  });
  return (
     <div className="card-data">
        {filteredNotes.map((info, index) =>
         <Card 
            key={index}
            id={info.id}
            logo={info.logo} 
            name={info.name}
            description={info.description}
            state={info.isActive}
            onChecked = {onDelete}
            onToggle = {onToggle}/>

)}
        </div>
  )
}

export default CardList;