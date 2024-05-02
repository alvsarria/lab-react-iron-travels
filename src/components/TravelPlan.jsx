import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";
import "./TravelPlan.css"

const TravelPlan = () => {
    return (
        <>
            <TravelPlanCard apartments={travelPlansData} />
        </>
    )
};

export default TravelPlan;