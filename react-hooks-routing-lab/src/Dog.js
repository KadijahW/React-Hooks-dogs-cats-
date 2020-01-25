import React, {useState, useEffect} from 'react'
import axios from 'axios'
import useInputHooks from './hooks/useInputHooks'


const Dog = () => {
const [numofdogs, setnumofdogs] = useInputHooks(1);
const [breeds, setbreeds] = useInputHooks('')
const [image, setImage] = useState([]);

useEffect(() => {
    console.log("functional component did update!")
})

const getImage = async () => {
    const response = await axios.get(`https://dog.ceo/api/breeds/image/random/${numofdogs}`)
    console.log(response.data.message)
    setImage(response.data.message)
}

useEffect(() => {
    getImage()
}, [])

// const handleDogAmount = (e) => {
// setnumofdogs(e.target.value)
// }

// const handleDogBreed = e => {
//     setbreeds(e.target.value)
// }

return(
<div>
    <h3>Dog Search</h3>
    <input type="text" min="1" max="10" value={numofdogs} onChange={setnumofdogs} placeholder="Number of Dogs" />
    <input type="text" value={breeds} onChange={setbreeds} placeholder="Enter Breed" />
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

export default Dog;