import React, { useEffect, useState } from 'react'

const Admin = () => {
  const [data,setData] = useState([])
  useEffect(()=>{
    fetch("http://localhost:8080/getAllUsers",{
      method:"GET",
    })
      .then((res)=> res.json())
      .then((data)=>{
        console.log(data.data,"userData")
        setData(data.data);
      })
  },[])
  return (
    <div className='mt-5'>
      {data?.map((i,index)=>{
        return(<>
          <h4>User {index}</h4>
          <p>username:{i.username} <br/>fname:{i.firstName}<br/> lname:{i.lastName}<br/> email:{i.email} <br/> mobile:{i.mobile} <br/> tid:{i.tid}</p> <hr/>
        </>)
      })}
    </div>
  )
}

export default Admin