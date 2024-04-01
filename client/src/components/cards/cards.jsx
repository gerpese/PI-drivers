import './cards.styles.css'
import Card from "../card/card";

//function Cards ({allUsers}){
//	return ()
//}

const Cards = ({allDrivers}) => {
	
	const driversList = allDrivers;


	return (
		<div className="card-list">
		    <Card />
			<Card />
			<Card />
			<Card />
		</div>
	)
}

export default Cards;