import React from 'react'
import { Layout } from 'antd';
import LeftMenu from '../../components/LeftMenu';
import MyContent from '../../components/MyContent';
import Table from './Table';

import 'antd/dist/antd.css';

const { Header, Footer } = Layout;

const Questions = () => {

    return (
        <Layout>
            <LeftMenu />
            <Layout>
                <MyContent>
                    <Table />
                </MyContent>
                <Footer style={{ textAlign: 'center' }}>manuscript.dev ©2021</Footer>
            </Layout>
        </Layout>
    );
}

export default Questions;