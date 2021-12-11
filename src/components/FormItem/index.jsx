import React from 'react'
import { Form, Input } from 'antd';

const FormItem = ({number, type}) => {

// type:
// * answer 
// * question 

    return (
        <Form.Item
            label="Ответ"
            name={`${type}_${number}`}
            rules={[
                {
                    required: true,
                    message: 'Пожалуйста заполните поле!',
                },
            ]}
        >
            <Input />
        </Form.Item>
    )
}

export default FormItem;
