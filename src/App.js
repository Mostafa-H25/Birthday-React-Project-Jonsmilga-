import data from './data' 
import React, {useState} from 'react'

function App() {
  const [people, setpeople] = useState(data);
  return (
    <main>
      <section className='container'>
        <h3>Birthday Reminider</h3>
        <h3>{people.length} Birthdays Today</h3>
        {people.map((person) => {
          return (
            <article key={person.id} className='person'>
              <img src={person.image} alt={person.name} />
              <div>
                <h4>{person.name}</h4>
                <p>{person.age}</p>
              </div>
            </article>
        )})}
        <button onClick={() => setpeople([])}>Clear All</button>
      </section>
      
    </main>
  )
};
  

export default App;
