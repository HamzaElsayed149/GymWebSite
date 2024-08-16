import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Programs() {
  let [Categories,setCategories]= useState([])

  let [Items,setItems]= useState([])
  
  useEffect(() => {
    getCategories()

  getItems()
  },[])

  async  function getCategories() {
    let {data} =   await axios({
      method: 'get', 
      url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
      headers: {
        'x-rapidapi-key': '9310e396cdmsh5efad16ab3dadefp178a4fjsnec33a00b75e4',
  'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
      }
    })
    setCategories(data)    
    }

      async  function getItems() {
       let {data} =   await  axios({
        method: 'get', 
        url: 'https://exercisedb.p.rapidapi.com/exercises',
        params: {
          limit: '10',
          offset: '0'
        },
        headers: {
          'x-rapidapi-key': '9310e396cdmsh5efad16ab3dadefp178a4fjsnec33a00b75e4',
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
        }
      })
       
       setItems(data)
     console.log(data);
       }  
   
       async  function getSpecific (Cat) {
        let url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${Cat}`
        let {data} =   await  axios({
          method: 'get', 
          url,
          headers: {
            'x-rapidapi-key': '9310e396cdmsh5efad16ab3dadefp178a4fjsnec33a00b75e4',
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
          }
        }) 
        setItems(data)
      console.log(data);
        }  
        async function search(id) {
          if (id === '') {
              getItems();
              return;
          }
      
          let url = `https://exercisedb.p.rapidapi.com/exercises/name/${id}`;
          let { data } = await axios({
              method: 'get',
              url,
              headers: {
                  'x-rapidapi-key': '9310e396cdmsh5efad16ab3dadefp178a4fjsnec33a00b75e4',
                  'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
              }
          });
          
          setItems(data);
          console.log(data);
      }
      
  return (
    <div className="container">
    <h1 className=' position-relative py-3'>Programs </h1>
<input className='input-group-text ' placeholder='Search Exercises' type="text"onChange={(e)=>search(e.target.value)}  />
    <div className=" row py-3 mb-5">
    <div className="col-md-2">
        <h4 className=' colored position-relative mb-3'>Categories</h4>
        <div className='d-sm-flex d-md-block justify-content-between align-items-center ps-2'>

        <h6 className='hover pe-3' onClick={getItems}>All</h6>
        {Categories?.map(Cat=>
                      <div key={Cat} className="col-md-3 my-2 pe-3">
                        <h6 className='click  mb-2' onClick={(e)=>getSpecific(Cat)}>{Cat.toUpperCase()}</h6>
</div>)}
    </div>
    </div>

    <div className="col-md-10 d-flex">
<div className="row">

      {Items?.map(item=>
      <Link key={item.id}  to={`/Details/`+item.id} className="col-md-3 my-2 text-decoration-none text-black">
             <div >
                <div className='d-flex bg-light justify-content-center align-items-center p-3 rounded-4 flex-column'>
                  <img height='300px' className='w-100 mb-4' src={item.gifUrl} alt="" />
                  <h6 className='fs-3 text-text-black-50'>{item.name.split(" ").splice(0,2).join(" ")}</h6>
                  <h5 className='mb-3'>Target: <span className='colored'>{item.target}</span></h5>

                </div>
</div>
      </Link>
         )}


         
  
  </div>
  </div>
  </div>
  </div>

  )
}
