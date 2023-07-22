import { useState} from 'react'
const Content = () => {
    const [name, setName] = useState('Abeeb')

    const handleNameChange = ( ) => {
        const names= ['Abeeb', 'Rokeeb', 'Salam','Aisha'];
        const int= Math.floor(Math.random()*3);
        setName(names[int]);
        } 
    const handleClick = ()=>{
            console.log('I clicked')
        }
    const handleClick2= (name) => {
            console.log(`${name} was clicked`)
        }
    const handleClick3= (e) => {
            console.log(e.target.innerText)
        }
        return (
            <main>
            <p> Hello {name} </p>
            <button onClick={handleNameChange}>Change name</button>
            <button onClick={() => handleClick2('Dave')}>Click me</button>
            <button onClick={(e) => handleClick3(e)}>Click it</button>
            </main>)
  
}

export default Content