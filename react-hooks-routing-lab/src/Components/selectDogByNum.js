import React, {useState, useEffect} from 'react'
import axios from 'axios'
import useInputHooks from '../hooks/useInputHooks'


const SelectDogByNum = () => {
const [numofdogs, setnumofdogs] = useInputHooks(1);
const [image, setImage] = useState([]);

// useEffect(() => {
//     console.log("functional component did update!")
// })

const getImage = async () => {
    const response = await axios.get(`https://dog.ceo/api/breeds/image/random/${numofdogs}`)
    console.log(response.data.message)
    setImage(response.data.message)
}

useEffect(() => {
    getImage()
}, [])



return(
    
<div>
    <h3>Dog Search By Number</h3>
    <input type="number" min="1" max="10" value={numofdogs} onChange={setnumofdogs} />
    <button onClick={getImage}>Get Dogs</button>
    <br/>
   
   <ul>
  { image.map(element => {
       return <img src={`${element}`} alt="dog" key={element}/>
  })}
    </ul>

</div>
)
}

export default SelectDogByNum;