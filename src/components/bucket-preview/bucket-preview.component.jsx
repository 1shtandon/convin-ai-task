import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

import CardList from "../cardlist/cardlist.component";
import { selectBucketById } from "../../store/Bucket/bucket.selector";
import { Button } from "antd";
import AddCardForm from "../add card form/add-card-form.component";
import "./bucket-preview.styles.css"

const BucketPreview = () => {
    const { bucketId } = useParams();
    const bucket = useSelector(selectBucketById(bucketId));
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const onClickAdd = () => {
        setIsAddModalOpen(true);
    }

    const handleOkAdd = () => {
        setIsAddModalOpen(false);
    }

    const handleCancelAdd = () => {
        setIsAddModalOpen(false);
    }

    return (

        <div className="content-area">
            <h1 className="bucket-name" >{bucket.name}</h1>
            <AddCardForm
                isModalOpen={isAddModalOpen}
                handleOk={handleOkAdd}
                handleCancel={handleCancelAdd}
            />
            <Button type="primary" onClick={onClickAdd} className="add-card-btn">
                Add Card
            </Button>
            <CardList cards={bucket.cards} className="cardlist" />

        </div>

    );
};

export default BucketPreview;