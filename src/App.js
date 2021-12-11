import React, { useState } from 'react'

import './App.css';
import data from './data/data.json';
import 'antd/dist/antd.css';
import { Layout} from 'antd';
import LeftMenu from './components/LeftMenu';
import MyContent from './components/MyContent';

import base from './base';


const { Header, Footer } = Layout;

function App() {
  console.log(data)

  return (
    <div className="App">
      {/* <Layout>
        <LeftMenu />
        <Layout>
          <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
          <MyContent/>
          <Footer style={{ textAlign: 'center' }}>manuscript.dev ©2021</Footer>
        </Layout>
      </Layout> */}
    </div >
  );
}

export default App;
