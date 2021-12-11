import React, {useState} from 'react'
import { Radio, Space } from 'antd';

const TestingBlock = () => {
    const [value, setValue] = useState(1)

    const onChange = e => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    return (
        <>
            <h1>Вопрос</h1>
            <div>
                <Radio.Group onChange={onChange} value={value}>
                    <Space direction="vertical">
                        <Radio value={1}>Option A</Radio>
                        <Radio value={2}>Option B</Radio>
                        <Radio value={3}>Option C</Radio>
                        <Radio value={4}>Option C</Radio>
                    </Space>
                </Radio.Group>
            </div>
        </>
    )
}

export default TestingBlock;