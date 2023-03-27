import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

import CardList from "../cardlist/cardlist.component";
import { selectBucketById } from "../../store/Bucket/bucket.selector";
import { Button } from "antd";
import AddCardForm from "../add card form/add-card-form.component";

const BucketPreview = () => {
    const { bucketId } = useParams();
    console.log(bucketId);
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

        <>
            <h1>{bucket.name}</h1>
            <AddCardForm
                isModalOpen={isAddModalOpen}
                handleOk={handleOkAdd}
                handleCancel={handleCancelAdd}
            />

            <CardList cards={bucket.cards} />
            <Button type="primary" onClick={onClickAdd} >
                Add Card
            </Button>
        </>

    );
};

export default BucketPreview;