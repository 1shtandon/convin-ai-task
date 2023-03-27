import HistoryCard from "../../components/history-card/history-card.componenet";
import { useSelector, useDispatch } from "react-redux";
import { selectHistoryList } from "../../store/History/history.selector";
import { deleteHistory } from "../../store/History/history.action";
import { Button } from "antd";
import "./history.style.css";
const History = () => {
    const historyList = useSelector(selectHistoryList);
    const dispatch = useDispatch();
    return (
        <div className="history">
            <h1>History</h1>
            {/* button to clear histoy */}
            <Button danger onClick={() => dispatch(deleteHistory(historyList))}>Delete History</Button>

            <div className="history-list">
                {
                    historyList.map((card) => (
                        <HistoryCard className="history-card"
                            key={card.id}
                            cardId={card.cardId}
                            name={card.name}
                            link={card.link}
                            bucketID={card.bucketID}
                            time={card.time}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default History;