import { useDispatch, useSelector } from "react-redux";
import { Modal, Form, Select, Input, Button } from "antd";
import { editCardAction } from "../../store/Bucket/bucket.action";
import { useState } from "react";
import { selectBucketList } from "../../store/Bucket/bucket.selector";


const EditCardForm = ({ isModalOpen, handleOk, handleCancel, card }) => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const bucketList = useSelector(selectBucketList);

    const onFinish = (values) => {
        if(values.bucketid === undefined)
            values.bucketid = card.bucketID;
        
        if(values.cardname === undefined)
            values.cardname = card.name;

        if(values.cardlink === undefined)
            values.cardlink = card.link;
        console.log(values);
        dispatch(editCardAction(bucketList, card.bucketID, card.id, values.cardname, values.cardlink, values.bucketid));
        handleOk();
    };

    return (
        <Modal
            title="Edit Card"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[null]}
        >
            <Form form={form} onFinish={onFinish} >
                <Form.Item label="Card Name" name="cardname">
                    <Input
                        placeholder="Enter Card Name"
                        defaultValue={card.name}
                        value={card.name}
                    />
                </Form.Item>
                <Form.Item label="Link" name="cardlink">
                    <Input
                        placeholder="Enter Link"
                        defaultValue={card.link}
                        value={card.link}
                    />
                </Form.Item>
                <Form.Item label="Bucket" name="bucketid" defaultValue={card.bucketID}>
                    <Select>
                        {bucketList.map((bucket) => {
                            return (
                                < Select.Option value={bucket.id} > {bucket.name}
                                </Select.Option>                                
                            )
                        })}
                    </Select>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Modal >
    );


};

export default EditCardForm;


