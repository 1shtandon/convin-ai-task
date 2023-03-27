import { EditOutlined, DeleteOutlined, PlayCircleOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { selectBucketList } from '../../store/Bucket/bucket.selector';
import { Card, Modal } from 'antd';
import { useDispatch } from 'react-redux';
import { deleteCardAction } from '../../store/Bucket/bucket.action';
import { useState } from 'react';
import "./card.style.css"
import EditCardForm from '../edit card form/edit-card-form.component';
import { addToHistory } from '../../store/History/history.action';

const { Meta } = Card;


const Mycard = ({ card }) => {
    const { cardId , name, link , bucketID} = card;
    console.log(card)
    const dispatch = useDispatch();
    const bucketList = useSelector(selectBucketList);

    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        dispatch(addToHistory(card));
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };



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

    // check if link is youtube link
    const isYoutubeLink = (link) => {
        if (link.includes('youtube.com') || link.includes('youtu.be')) {
            return true;
        }
        return false;
    }

    const modifyLink = (link) => {
        if (isYoutubeLink(link)) {
            if (link.includes('youtu.be')) {
                const videoId = link.match(/youtu\.be\/([^?]+)/)[1];
                return `https://www.youtube.com/embed/${videoId}`;
            }
            else {
                const videoId = link.split('v=')[1];
                console.log(videoId);
                return `https://www.youtube.com/embed/${videoId}`;
            }
        }
        return link;
    }

    return (
        <div>
            <Card className='card'
                hoverable
                style={{
                    width: 300,
                }}

                actions={[
                    <PlayCircleOutlined key="play"
                        onClick={showModal}

                    />,

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

                <Modal
                    className='modal'
                    title="Media Player"
                    open={isModalVisible}
                    onCancel={handleCancel}
                    footer={[null]}
                    width="50%"
                    bodyStyle={{height: "30em"}}
                >
                    <iframe width="100%" height="100%" src={modifyLink(link)} title="media player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                </Modal>
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