import React,{useState} from 'react'
import "./style.css"
import Menu from "./menuApi"
import MenuCard from './menuCard'


const Restaurant = () => {
    const [menuData, setMenuData] = useState(Menu)
const filterItem = (category)=>{
   const updatedList = Menu.filter((curr)=>{
       return curr.category === category
   })

   setMenuData(updatedList)
}

    return (
        <React.Fragment>
        <nav className="navbar">
        <div className="btn-group">
        <button className="btn-group__item"  onClick={()=>filterItem("breakfast")}>Breakfast</button>
        <button className="btn-group__item" onClick={()=>filterItem("lunch")}>lunch</button>
        <button className="btn-group__item" onClick={()=>filterItem("evening")}>Snacks</button>
        <button className="btn-group__item" onClick={()=>filterItem("dinner")}>Dinner</button>
        <button className="btn-group__item" onClick={()=>setMenuData(Menu)}>All</button>

        </div>
        </nav>


        <MenuCard menuData = {menuData}/>
        </React.Fragment>


       
    )
}

export default Restaurant
