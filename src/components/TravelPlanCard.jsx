import { useState } from "react";

const TravelPlanCard = (props) => {
    const [travelList, setList] = useState(props.apartments)

    return (
        <>
            {
                travelList.map((element, index) => {
                    return (
                        <div key={element.id} className="travel-container">
                            <img src={element.image} alt="destination image" />
                            <div className="info-container">
                                <h2>{element.destination}</h2>
                                <p>{element.description}</p>
                                <p><span>Price:</span> {element.totalCost}€</p>
                                <div className="label-container">
                                    {element.totalCost <= 350 && <p className="label great-deal">Great Deal</p>}
                                    {element.totalCost >= 1500 && <p className="label premium">Premium</p>}
                                    {element.allInclusive && <p className="label premium">All-inclusive</p>}
                                </div>
                                <button onClick={() => {
                                    setList([...travelList.slice(0, index), ...travelList.slice(index + 1)])
                                }} className="delete-button">Delete</button>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default TravelPlanCard;