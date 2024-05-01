const TravelPlanCard = (props) => {
    return (
        <>
            <div key={props.plan.id} className="travel-container">
                <img src={props.plan.image} alt="destination image" />
                <div className="info-container">
                    <h2>{props.plan.destination}</h2>
                    <p>{props.plan.description}</p>
                    <p><span>Price:</span> {props.plan.totalCost}€</p>
                    <div className="label-container">
                        {props.plan.totalCost <= 350 && <p className="label great-deal">Great Deal</p>}
                        {props.plan.totalCost >= 1500 && <p className="label premium">Premium</p>}
                        {props.plan.allInclusive && <p className="label premium">All-inclusive</p>}
                    </div>
                    <button onClick={() => setList([...travelList.slice(0, index), ...travelList.slice(index + 1)])} className="delete-button">Delete</button>
                </div>
            </div>
        </>
    )
}

export default TravelPlanCard;