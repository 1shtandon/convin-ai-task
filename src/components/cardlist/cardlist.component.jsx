import Mycard from "../card/card.component";

const CardList = ({ cards }) => {
    return (
        <div>
            {cards.map((card, index) => (
                <Mycard key={index} name={card.name} link={card.link} />
            ))}
        </div>
    );
}

export default CardList;