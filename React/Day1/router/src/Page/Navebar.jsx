import React from 'react'
import {  NavLink } from 'react-router-dom'



function Navebar() {
  return (

    <div className='bg-pink-600 justify-between flex'>
<div className='text-xl font-bold'> MyLogo </div>


     <div  >
     
    
        
        
        
        
    <NavLink to='/' className={({isActive})=>isActive ? 'bg-amber-300':""}>
    Home
    </NavLink>
    <NavLink to='/About'className={({isActive})=>isActive ? 'bg-green-500':""}>About</NavLink>
    <NavLink to='/Content' className={({isActive})=>isActive ? 'bg-blue-400':""}>Content</NavLink>
     


      
       
    
    </div>
    
    
    </div>
   
  )
}

export default Navebar



// import React from 'react'
// import { NavLink } from 'react-router-dom'

// function Navebar() {
//   return (
//     <div>
//       <div className='bg-red-300 flex gap-4 justify-center p-3'>

//         <NavLink 
//           to='/' 
//           className={({isActive}) => 
//             isActive ? "text-amber-600 font-bold" : "text-black"
//           }
//         >
//           Home
//         </NavLink>

//         <NavLink 
//           to='/About'
//           className={({isActive}) => 
//             isActive ? "text-amber-600 font-bold" : "text-black"
//           }
//         >
//           About
//         </NavLink>

//         <NavLink 
//           to='/Content'
//           className={({isActive}) => 
//             isActive ? "text-amber-600 font-bold" : "text-black"
//           }
//         >
//           Content
//         </NavLink>

//       </div>
//     </div>
//   )
// }

// export default Navebar