import React from 'react'
import gym1 from'../../Assets/gym-interior-with-equipments-2.jpg'
import gym2 from'../../Assets/pngimg.com - bodybuilding_PNG101.png'
import gym3 from'../../Assets/pngimg.com - bodybuilding_PNG69.png'


import { motion } from "framer-motion"
import { Link } from 'react-router-dom'

export default function Home() {
 
  return (
        <div className=' mt-4'>
          <div className="container">
              <div className="row  mb-5">
                <div className="col-md-5 mb-5 text-center text-md-start  d-flex flex-column justify-content-center">
                  <h2>Make Your</h2>
                  <h1 className='colored fw-bolder '>Body Shape</h1>
                  <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi optio provident culpa obcaecati facilis? Nihil architecto ab asperiores sed, aspernatur commodi nemo. Sapiente quis, quae modi debitis rem nesciunt pariatur.</p>
<Link className='btn btn-colored' to={'/Programs'}>Start</Link>                    </div>
                <div className="col-md-7 mb-5">
                  <img className='w-100 rounded-4' src={gym1} alt="" />
                </div>
                <h2 className='text-center'>Why Choose Us</h2>

                <motion.div  initial={{ scale: 0 }}
  animate={{ rotate: 360, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 200,
    damping: 10
  }} className="col-md-4  my-2 ">
            <div className='d-flex bg-colored justify-content-center align-items-center p-3 rounded-4  flex-column'>
            <i class="fa-solid fa-dumbbell fs-3 mb-2"></i>            <h5 className='mb-0 fw-bold mb-2 '>Muscles Building</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nobis corrupti mollitia iste necessitatibus amet molestias odio. Deserunt voluptatibus, cum laborum debitis voluptas.</p>
            </div>
          </motion.div>
          <motion.div  initial={{ scale: 0 }}
  animate={{ rotate: 360, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 200,
    damping: 10
  }} className="col-md-4  my-2 ">
            <div className='d-flex bg-colored justify-content-center align-items-center p-3 rounded-4  flex-column'>
            <i class="fa-solid fa-dumbbell fs-3 mb-2"></i>            <h5 className='mb-0 fw-bold mb-2 '>Muscles Building</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nobis corrupti mollitia iste necessitatibus amet molestias odio. Deserunt voluptatibus, cum laborum debitis voluptas.</p>
            </div>
          </motion.div>
          <motion.div  initial={{ scale: 0 }}
  animate={{ rotate: 360, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 200,
    damping: 10
  }} className="col-md-4  my-2 ">
            <div className='d-flex bg-colored justify-content-center align-items-center p-3 rounded-4  flex-column'>
            <i class="fa-solid fa-dumbbell fs-3 mb-2"></i>            <h5 className='mb-0 fw-bold mb-2 '>Muscles Building</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nobis corrupti mollitia iste necessitatibus amet molestias odio. Deserunt voluptatibus, cum laborum debitis voluptas.</p>
            </div>
          </motion.div>
    
              </div>

      
                <div className="row py-5 mb-5">
              <div className="col-md-6 bg-light d-flex p-5 align-items-center flex-column flex-lg-row ">
              <div className="col-md-6 colored py-5 d-flex flex-column justify-content-center align-items-center text-md-center text-sm-start ">
                <h3 className='fs-1'>Special Offer</h3>
              <h5 className= ' fs-3 mb-3 '>Save 20%</h5>
              <Link className='btn btn-colored fw-bold rounded-4 me-3  px-5 py-2 shadow-sm' to={'/Programs'}>Start</Link>                  

            </div>
              <div className=" col-md-12 col-lg-6">
                <img className='w-100 pt-3' src={gym3} alt="" />
                </div>
              </div>
              <div className="col-md-6 bg-colored d-flex  align-items-center  flex-column flex-lg-row">
              <div className="col-md-6   py-5 d-flex flex-column justify-content-center align-items-center text-md-center text-sm-start">
              <h3 className='fs-1'>Special Offer</h3>
              <h5 className='fs-3 mb-3'>Save 20%</h5>
              <Link className='fw-bold rounded-4  btn btns colored bg-white  me-3  px-5 py-2 shadow-sm' to={'/Programs'}>Start</Link>                  

        
              </div>

              <div className="col-md-12 col-lg-6"><img className='w-100 pt-3'src={gym2}  alt="" /></div>

              </div>
        </div>

          </div>

        </div>

  )
}
