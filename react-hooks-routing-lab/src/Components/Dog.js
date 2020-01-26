import React, {useState, useEffect} from 'react'
import axios from 'axios'
import useInputHooks from '../hooks/useInputHooks'


const Dog = () => {
const [numofdogs, setnumofdogs] = useInputHooks(1);
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

return(
    
<div>
    <h3>Dog Search</h3>
    <button onClick={getImage}>Get Dogs</button>
    <br/>
   
   <ul>
  
     <img src={`${image}`} alt="dog" key={image}/>
  
    </ul>

</div>
)
}

export default Dog;