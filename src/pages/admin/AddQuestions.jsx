import React from 'react'
import { Layout } from 'antd';
import LeftMenu from '../../components/LeftMenu';
import MyContent from '../../components/MyContent';
import MyForm from './MyForm';


import 'antd/dist/antd.css';

const { Header, Footer } = Layout;

const AddQuestions = () => {

    return (
        <Layout>
            <LeftMenu />
            <Layout>
                <MyContent>
                    <MyForm />
                </MyContent>
                <Footer style={{ textAlign: 'center' }}>manuscript.dev ©2021</Footer>
            </Layout>
        </Layout>
    );
}

export default AddQuestions;