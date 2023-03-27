import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import './history-card.style.scss';

const { Meta } = Card;

const HistoryCard = (card) => {
    const { cardId, name, link, bucketID, time } = card;
    console.log(card);
    const navigate = useNavigate();
    return (
        <Card className="history-card"
            hoverable
            title={name}
            bordered={false}
            style={{
                width: 300,
            }}
            onClick={() => navigate(`/bucket/${bucketID}`)}
        >
            <Meta
                title={link}
                description={time}
            />

        </Card>
    );
};

export default HistoryCard;