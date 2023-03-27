import { EditOutlined, DeleteOutlined, PlayCircleOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { selectBucketList } from '../../store/Bucket/bucket.selector';
import { Card } from 'antd';
import { redirect, useHref } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCardAction, editCardAction, deleteCardAction } from '../../store/Bucket/bucket.action';


const { Meta } = Card;


const Mycard = ({ name, link }) => {
    const dispatch = useDispatch();
    const bucketList = useSelector(selectBucketList);

    return (
        <Card
            hoverable
            style={{
                width: 300,
            }}

            actions={[
                <PlayCircleOutlined key="play" />,

                <EditOutlined key="edit" />,

                <DeleteOutlined key="delete" />
            ]}
        >
            <Meta
                title={name}
                description={link}
            />
        </Card>
    );
};
export default Mycard;