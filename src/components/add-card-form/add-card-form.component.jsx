import { useDispatch, useSelector } from "react-redux";
import { Modal, Form, Select, Input, Button } from "antd";
import { addCardAction } from "../../store/Bucket/bucket.action";
import { useState } from "react";
import { selectBucketList } from "../../store/Bucket/bucket.selector";

const AddCardForm = ({ isModalOpen, handleOk, handleCancel }) => {
    const [form] = Form.useForm();
    const [inputValue, setInputValue] = useState('');
    const [linkValue, setLinkValue] = useState('');
    const [bucketToAssign, setBucketToAssign] = useState(-1);
    const dispatch = useDispatch();
    const bucketList = useSelector(selectBucketList);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleLinkChange = (e) => {
        setLinkValue(e.target.value);
    }

    const handleBucketChange = (e) => {
        setBucketToAssign(e.target.value);
        console.log(e.target.value, bucketToAssign);
    }

    const onFinish = (values) => {
        dispatch(addCardAction(bucketList, values.bucketid, values.cardname, values.cardlink));
        handleOk();
    };


    return (


        <Modal
            title="Add Card"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[null]}
        >
            <Form form={form} onFinish={onFinish} >
                <Form.Item label="Card Name" name="cardname">
                    <Input
                        placeholder="Enter Card Name"
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                </Form.Item>
                <Form.Item label="Link" name="cardlink">
                    <Input
                        placeholder="Enter Link"
                        value={linkValue}
                        onChange={handleLinkChange}
                    />
                </Form.Item>
                <Form.Item label="Bucket" name="bucketid">
                    <Select>
                        {bucketList.map((bucket) => {
                            return (
                                <Select.Option value={bucket.id}>{bucket.name}</Select.Option>
                            );
                        }
                        )}
                        onChange = {handleBucketChange}
                    </Select>
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 20,
                        span: 8,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Modal>

    );

};

export default AddCardForm;