import React from "react";
import Image from "./Image.jsx";
import Detail from "./Detail.jsx";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <Detail detailInfo={props.id}/>
        <h2 className="name">{props.name}</h2>
        <Image src={props.img}/>
      </div>
      <div className="bottom">
        <Detail detailInfo={props.email}/>
        <Detail detailInfo={props.tel}/>
      </div>
    </div>
  );
}

export default Card;
