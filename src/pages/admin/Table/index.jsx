import React from 'react'
import { useQuestions } from '../../../hooks/useQuestions';
import { Table, Tooltip, Button } from 'antd';

import { collection, onSnapshot, query, orderBy, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../../base';

const MyTable = () => {
    const [questions] = useQuestions();

    console.log(questions);

    const handleDel = async (id) => {
        console.log(id);
        const docRef = doc(db, "questions", id);
        console.log(docRef);
        await deleteDoc(docRef );

        // db.collection('questions')
        //     .doc(channelId)
        //     .collection('posts')
        //     .doc(id).delete().then(() => {
        //         console.log("Document successfully deleted!");
        //     }).catch((error) => {
        //         console.error("Error removing document: ", error);
        //     });
    }

    const columns = [
        {
            title: 'Вопрос',
            dataIndex: 'question',
            key: 'question',
            render: question => <Tooltip placement="topLeft" title={question}>{question}</Tooltip>,
            ellipsis: {
                showTitle: false,
            },
        },
        {
            title: 'Категория',
            dataIndex: 'category',
            key: 'category',
            render: category => <span>{category}</span>,
            width: 110,
        },
        {
            title: 'Ответы',
            dataIndex: 'answers',
            key: 'answers',
            render: answers => answers.map((answer, index) => <Tooltip placement="left" key={index} title={answer}><div>{answer}</div></Tooltip>),
            ellipsis: true
        },
        {
            title: 'Действия',
            dataIndex: '_id',
            key: 'action',
            render: (_id) => {
                return (<Button type="primary" danger onClick={() => handleDel(_id)}>Удалить</Button>)
            },
            width: 120,
        },
    ];



    return (
        <Table columns={columns} dataSource={questions} />
    )
}

export default MyTable;
