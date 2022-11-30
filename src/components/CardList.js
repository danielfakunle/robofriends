import React from "react";
import Card from './Card'

const CardList = ({robots}) => {
  const cardsArray = robots.map((user,i) => {
    return <Card key = {i} id = {robots[i].id} name = {robots[i].name} email = {robots[i].email}/>
  })
  return(
    
    <div>
      {cardsArray}
    </div>
  );
}
// The key property in each card component should not change and be unique. A good value would be an id

export default CardList;