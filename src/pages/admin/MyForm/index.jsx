import React from 'react'
import { Form, Input, Button, TreeSelect, message, Switch } from 'antd';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../../../base'
import FormItem from '../../../components/FormItem'

const MyForm = () => {
    const [form] = Form.useForm();

    const onFinish = async (data) => {
        console.log('Success:', data);

        // Очищаем форму
        form.resetFields()

        // message.success('Вопрос успешно добавлен!');
        const key = "addQuestion";
        message.loading({ content: 'Загрузка...', key });
        setTimeout(() => {
            message.success({ content: 'Вопрос успешно добавлен!', key, duration: 5 });
        }, 1000);

        // Ищем среди заполненных полей, поля answer
        const answers = [];
        for (let i in data) {
            i.includes('answer') && answers.push(data[i]);
        }

        // Передаем в firebase заполненные поля
        try {
            await addDoc(collection(db, 'questions'), {
                timestamp: serverTimestamp(),
                category: data.category,
                question: data.question,
                answers: answers
            })
        } catch (error) {
            alert(error)
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <div style={{ width: '50%' }}>
                    <Form
                        layout="vertical"
                        form={form}
                        labelCol={{
                            span: 24,
                        }}
                        wrapperCol={{
                            span: 24,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item label="Категория" name="category">
                            <TreeSelect
                                treeData={[
                                    { title: 'Тестирование', value: 'tests', children: [{ title: 'HTML', value: 'html' }, { title: 'CSS', value: 'css' }, { title: 'JS', value: 'js' }, { title: 'REACT', value: 'react' }] },
                                    { title: 'Собес', value: 'interview', children: [{ title: 'Frontend', value: 'frontend' }, { title: 'Backend', value: 'backend' }, { title: 'Верстальщик', value: 'html-markup' }, { title: 'Тестировщик', value: 'tester' }] },
                                ]}
                            />
                        </Form.Item>

                        <Form.Item
                            label="Вопрос"
                            name="question"
                            rules={[
                                {
                                    required: true,
                                    message: 'Обязательно к заполнению!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        {/* TODO: 
                            * Переделать генерацию через массив 
                        */}
                        {[1, 2, 3, 4].map((number) => <FormItem type="answer" key={`answer_${number}`} number={number}/>)}

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Добавить вопрос
                            </Button>
                        </Form.Item>
                    </Form>
                
            </div>
        </>
    )
}

export default MyForm;
