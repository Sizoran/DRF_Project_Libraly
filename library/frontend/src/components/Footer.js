import React from "react";


function Footer(props) {
  return <h1>Привет, {props.name}</h1>;
}

const element = <Footer name="Какой-то Footer" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);