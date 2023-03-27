import { EditOutlined, DeleteOutlined, PlayCircleOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { selectBucketList } from '../../store/Bucket/bucket.selector';
import { Card } from 'antd';
import { redirect, useHref } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCardAction, editCardAction, deleteCardAction } from '../../store/Bucket/bucket.action';
import { useState } from 'react';
import "./card.style.css"
import EditCardForm from '../edit card form/edit-card-form.component';

const { Meta } = Card;


const Mycard = ({ card }) => {
    const { name, link } = card;
    const dispatch = useDispatch();
    const bucketList = useSelector(selectBucketList);

    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const onClickEdit = () => {
        setIsEditModalOpen(true);
    }

    const handleOkEdit = () => {
        setIsEditModalOpen(false);
    }

    const handleCancelEdit = () => {
        setIsEditModalOpen(false);
    }

    const handleDelete = () => {
        console.log(card)
        console.log(bucketList, card.bucketID, card.id);
        dispatch(deleteCardAction(bucketList, card.bucketID, card.id));
    }

    return (
        <div>
            <Card className='card'
                hoverable
                style={{
                    width: 300,
                }}

                actions={[
                    <PlayCircleOutlined key="play" />,

                    <EditOutlined key="edit"
                        onClick={onClickEdit}
                    />,

                    <DeleteOutlined key="delete"
                        onClick={handleDelete}
                    />
                ]}
            >
                <Meta
                    title={name}
                    description={link}
                />
            </Card>
            <EditCardForm
                isModalOpen={isEditModalOpen}
                handleOk={handleOkEdit}
                handleCancel={handleCancelEdit}
                card={card}
            />
        </div>
    );
};
export default Mycard;