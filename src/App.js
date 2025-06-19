import React from 'react';
import GreetingCard from './greetingcard';

function App() {
  return (
    <div>
      <GreetingCard name="Apio Faith" age={20} school="Women's Institute of Technology and Innovation." address="Bukoto" />
      <GreetingCard name="Nazifa Nawamwena" age={21} school="London College, Lugazi." address="Kanjokya" />
      <GreetingCard name="Akello Scovia" age={22} school="Daffodils Elementary School." address="Swangz Avenue" />
    </div>
  );
}

export default App;