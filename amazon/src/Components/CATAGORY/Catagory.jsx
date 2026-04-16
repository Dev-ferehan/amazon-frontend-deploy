import React from 'react'
import CatagoryCard from './CatagoryCard'
import { CatagoryInfo } from './CatagoryInfo'
import Classes from './catagory.module.css'
const Catagory = () => {
  return (
<section className={Classes.catagory_container}> 
    {
CatagoryInfo.map((info)=>{
    return <CatagoryCard data={info}/>,
     <CatagoryCard data={info}/>

}) 
   }

</section>  
  )
}

export default Catagory
