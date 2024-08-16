import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom';

export default function Details() {
    let [details,setDetails]= useState({})
    let {id} = useParams()
    
    async  function getDetails() {
        let url = `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`

        let {data} =   await  axios({
         method: 'get', 
         url,
         headers: {
           'x-rapidapi-key': '826a4576c9msh3775dc7d2848240p116aa3jsnedc881c95995',
     'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
         }
       })
        
       setDetails(data)
 
        }  
        console.log(details);
        
        useEffect(() => {
            getDetails()
          },[])
  return (
<div className="container py-5 mt-5">
<div className="row ">
        <div className="col-md-4">
        <img src={details?.gifUrl} className="w-100 rounded-2" alt="" />
        </div>
        <div className="col-md-8 pt-1 text-md-center">
<h2 className='mb-3 fs-1 colored text-capitalize bold'>{details?.name}</h2>
<p className='text--50 mb-3'>Target: <span className='colored'>{details?.target}</span></p>
<p className='text--50 mb-3'>Equipment: <span className='colored'>{details?.equipment}</span></p>

{details.secondaryMuscles && details.secondaryMuscles.length > 0 && (
                        <div  >
                            <h4>Secondary Muscles:</h4>
                            <ul className='d-flex justify-content-around' >
                                {details.secondaryMuscles.map((muscle, index) => (
                                    <li className='colored' key={index}>{muscle}</li>
                                ))}
                            </ul>
                        </div>
                    )}
<p className=' mb-3 fs-5'>{details?.instructions}</p>

        </div>
      </div>

</div>   )
}
