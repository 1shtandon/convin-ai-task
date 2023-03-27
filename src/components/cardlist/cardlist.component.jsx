import Mycard from "../card/card.component";
import "./cardlist.style.css";

const CardList = ({ cards }) => {
    return (
        <div className="cardlist">
            {cards.map((card, index) => (
                <Mycard key={index} card={card} className="cards"/>
            ))}
        </div>
    );
}

export default CardList;