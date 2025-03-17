import { useRef, useState } from 'react'
import usetoggle from './usetoggle'
import './App.css'
import Child from './Child'

function App() {
  
  const [isOn, toggle] = usetoggle()

  const [countries, setCountries] = useState([
    "India", "United States", "Canada", "Australia", "Germany", "France", "Brazil", "Japan", "China", "Russia",
    "South Africa", "Italy", "United Kingdom", "Mexico", "Argentina", "Spain", "Netherlands", "Switzerland", "Sweden", "Norway"
  ])

  const [name,setName]=useState()
  const [search, setSearch] = useState('')

  const inputRef=useRef()

  function handleClick(){
    console.log(inputRef.current.value)
  }
  const filteredCountries = countries.filter(country =>
    country.toLowerCase().includes(search.toLowerCase())

    
  );
  return (
    <>
      <input 
        type="text" 
        value={search}
        ref={inputRef}
        onChange={(e) => setSearch(e.target.value)} 
        placeholder="Search countries" 
      />
      <button onClick={handleClick}>search</button>
      <ul>
        {filteredCountries.map((country, index) => (
          <li key={index}>{country}</li>
        ))}
      </ul>
   
      <h1>{name}</h1>

      <Child  SetName={setName} />
    </>

  )
}

export default App
