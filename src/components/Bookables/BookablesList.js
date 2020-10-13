import React, { useState } from "react";
import data from "../../static.json";

export default function BookablesList() {
  const { bookables } = data;

  const group = "Rooms";

  const bookablesInGroup = bookables.filter((b) => b.group === group);

  const [bookableIndex, setBookableIndex ] = useState(0)


  function nextBookable(){
    setBookableIndex( (i) => (bookableIndex + 1) % bookablesInGroup.length)
  }


  return (
    <ul className="bookables">
      {bookablesInGroup.map((b, i) => (
        <li key={b.title} className={i === bookableIndex ? "selected" : null}>
          <button onClick={() => setBookableIndex(i)} className="btn">{b.title}</button>
        </li>
      ))}

      <div>
        <button className="btn" onClick={nextBookable}>Next</button>
      </div>
    </ul>
  );
}
