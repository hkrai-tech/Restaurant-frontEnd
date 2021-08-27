import React from 'react'


const MenuCard = ({menuData}) => {
    return (
        <div> 
        <section className="main-card--container">
            {menuData.map((curr)=>{
                return(
                    <React.Fragment>
                    <div className="card-container" key={curr.id}>
                <div className="card">
                    <div className = "card-body">
                        <span className="card-number card-circle subtle" >{curr.id}</span>
                        <span className="card-author subtle">{curr.name}</span>
                        <h2 className="card-title">{curr.name}</h2>
                        <span className="card-description subtle">
                        {curr.description}
                    </span>
                    <div className="card-read">Read</div>
                    </div>
                   <img src={curr.image} alt="images" className="card-media" />

                    <span className="card-tag  subtle">Order Now</span>
                </div>
            </div>
            </React.Fragment>
            )
            })}
            </section>
            </div> 
    )
}

export default MenuCard
