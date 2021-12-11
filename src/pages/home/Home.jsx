import React from 'react'
import { Layout } from 'antd';
import LeftMenu from '../../components/LeftMenu';
import MyContent from '../../components/MyContent'; 
import TestingBlock from '../../components/TestingBlock';

import 'antd/dist/antd.css';

const { Header, Footer } = Layout;

function Home() {

    return (
        <Layout>
            <LeftMenu />
            <Layout>
                <MyContent>
                    <TestingBlock/>
                </MyContent>
                <Footer style={{ textAlign: 'center' }}>manuscript.dev ©2021</Footer>
            </Layout>
        </Layout>
    );
}

export default Home;