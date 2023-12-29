import { useEffect, useState } from 'react'
import './App.css'
import { getAllUserAPI } from './Services/allAPI'

function App() {

  const [bgcolor,setbgcolor] = useState('#86b1d6')
  const [allUsers,setAllUsers] = useState()
  const [randomUser,setRandomUser] = useState()

  useEffect(()=>{
    randomUserGenerator()
  },[])
    

  const randomUserGenerator = async()=>{
    const result = await getAllUserAPI()
    const randomColors = '#' + Math.random().toString(16).slice(2,8)
    setbgcolor(randomColors)
    if(result.status){
      // console.log(result.data.users);
      setAllUsers(result.data.users)
      const ruser = allUsers[Math.floor(Math.random()*30)]
      console.log(ruser);
      setRandomUser(ruser)
    }
    else{
      console.log("API Failed");
      setAllUsers([])
    }
  }

  return (
    <>
      <div style={{width:'100%',height:'100vh'}} className='d-flex flex-column justify-content-center align-items-center' >
        <h2 className='fs-2 mb-5'>Random User on Fetch</h2>
        <div className='shadow rounded p-3 d-flex justify-content-between align-content-center p-5' style={{backgroundColor:`${bgcolor}`,width:'700px'}}>

          <div className='d-flex justify-content-center align-items-center flex-column'>
            <img style={{borderRadius:'50%',width:'150px'}} className='border mb-3' src={randomUser?randomUser.image:null} alt="" />
            <h5>{randomUser?`${randomUser.firstName} ${randomUser.lastName}`:null}</h5>
            <p>{randomUser?randomUser.gender:null}</p>

            <div style={{width:'250px'}} className="d-flex justify-content-between align-items-center">
              <div>
                <h6 className='mb-4'><span className='fw-bolder'>Date of Birth</span><br />{randomUser?randomUser.birthDate:null}</h6>
                <h6><span className='fw-bolder'>Weight</span><br />{randomUser?randomUser.weight:null} kg</h6>
              </div>

              <div>
                <h6 className='mb-4'><span className='fw-bolder'>Age</span><br />{randomUser?randomUser.age:null}</h6>
                <h6><span className='fw-bolder'>Height</span><br />{randomUser?randomUser.height:null} cm</h6>
              </div>
            </div>
          </div>

          <div>
            <h5 className='mb-4'><span className='fw-bolder'>Home Address</span><br />{randomUser?randomUser.address.address:null}</h5>
            <h5 className='mb-4'><span className='fw-bolder'>Mobile Phone</span><br />{randomUser?randomUser.phone:null}</h5>
            <h5 className='mb-4'><span className='fw-bolder'>Company</span><br />{randomUser?randomUser.company.name:null}</h5>
            <h5 className='mb-4'><span className='fw-bolder'>Job Title</span><br />{randomUser?randomUser.company.title:null}</h5>
            <h5 className='mb-4'><span className='fw-bolder'>Email</span><br />{randomUser?randomUser.email:null}</h5>
          </div>
        </div>
        <button onClick={randomUserGenerator} className='btn btn-info mt-4 text-light'>Press to start/Refresh</button>
      </div>
    </>
  )
}

export default App
