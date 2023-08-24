import { useState } from "react";
import styled from "styled-components";

const Avatar = styled.img`
border: 10px solid black;


`

console.log('apodklf');


function User({ color, name, avatar, counter }) {
  const [calculatedName, setCalculatedName] = useState(name);

  const newName = `${calculatedName} Es genial!`;

  function onClick() {
    setCalculatedName("pikachu");

    console.log(`hola ${name} esto es un click!`);
  }

  return (
    <div className="User" onClick={onClick}>
      <Avatar src={avatar} title={name} />
      <p>
        hemos dado click en {newName} por {counter}{" "}
      </p>
    </div>
  );
}

export default User;
