import React, {useState, useEffect} from 'react'
import axios from 'axios'


const Dog = () => {
const [numofdogs, setnumofdogs] = useState(1);
const [image, setImage] = useState([]);

useEffect((e) => {
    console.log("functional component did update!")
    // setnumofdogs(e.target.value)
})

const getImage = async () => {
    const response = await axios.get(`https://dog.ceo/api/breeds/image/random/${numofdogs}`)
    console.log(response.data.message)
    setImage(response.data.message)
}

useEffect(() => {
    getImage()
}, [])

const handleDogAmount = (e) =>{
setnumofdogs(e.target.value)
}

return(
<div>
    <h3>Dog Search</h3>
    <input type="text" value={numofdogs} onChange={handleDogAmount} placeholder="Number of Dogs" />
    <button onClick={getImage}>Get Dogs</button>
    <br/>
   
   <ul>
  { image.map(element => {
       return <img src={`${element}`} alt="dog" />
  })}
    </ul>
</div>
)
}

export default Dog;