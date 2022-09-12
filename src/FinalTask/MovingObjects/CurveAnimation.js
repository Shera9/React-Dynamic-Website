import React from 'react'
// import { useTransition, animated } from 'react-spring'
import './CurveAnimation.css';


const CurveAnimation = () => { 

    const Animate = () =>{
        let container = document.querySelector('.curve-container');
        container.classList.toggle('open')
    }
  return (
      <div className='container pb-2'>
      <h1 className='fs-4 text-center my-3 '>Curve Animation</h1>
    <div className='container-main'>
      <div className="curve-container" >
  <div className="box" onClick={Animate}>
 
  </div>
</div>
    </div>
    </div>
  )
}

export default CurveAnimation
