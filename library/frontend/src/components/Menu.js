import React from 'react';


function Menu(props) {
  return <h1>Привет, {props.name}</h1>;
}

const element = <Menu name="Какое-то меню" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
