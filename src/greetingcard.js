/*
1. JSX is a syntax extension for Javascript used in React to describe what the ui should look like.
   JSX is used because it allows one to write HTML code directly within the JavaScript, it also wraps multiple elements into one parent making them more readable.

2. Props are unmutable inputs passed to a component from it's parent while
   State is mutable data maintained within a component.

3. Hooks in React are functions that allow the use of state and other react features in functional components. They include useState, for managing state and useEffect for sideeffects like fetching data.
*/

//4. Mini Task: Greeting card.
import React from 'react';

function GreetingCard({ name, age, school, address }) {
  return (
    <div style={{ border: '1px solid black', margin: '10px', padding: '10px', backgroundColor: 'orange' }}>
      <h2>Hello, {name}!</h2>
      <p>Age: {age}</p>
      <p>School: {school}</p>
      <p>Address: {address}</p>
    </div>
  );
}

export default GreetingCard;