import {useState,useEffect} from 'react'
import axios from 'axios'


function App() {
  const api="http://localhost:3001"
  const [users,setUsers]=useState([])
  const [name,setName]=useState("")
  const [age,setAge]=useState(0)
  const [email,setEmail]=useState("")
  useEffect(()=>{
    axios.get(`${api}/`)
    .then(res => { setUsers(res.data)})
  },[users])
const createUser=()=>{
  if(name && age && email){
  axios.post(`${api}/createUser`,{
    name,age,email})
  .then(res => { console.log(res.data) })
}}

return(
  <>
  {/* {users.map(user=>{
    return(
      <div key={user._id}>
        <ul>
          <li>{user.name}</li>
          <li>{user.age}</li>
          <li>{user.email}</li>
        </ul>
      </div>
    )
  })} */}
    {users.map(({_id,name,age,email})=>{
    return(
      <div key={ _id}>
        <ul>
          <li>{name}</li>
          <li>{age}</li>
          <li>{email}</li>
        </ul>
      </div>
    )
  })}
   <div> 
    <input type="text" placeholder='Name' onChange={e=>setName(e.target.value)}/>
    <input type="number" placeholder='Age' onChange={e=>setAge(e.target.value)}/>
    <input type="text" placeholder='Email' onChange={e=>setEmail(e.target.value)} />
    <button onClick={createUser}>Create User</button>
  </div>

 

  hekk</>

)
  
}

export default App
