import React, { useEffect, useState } from 'react'

import { Layout, Menu } from 'antd';
import {
    CheckCircleOutlined,
    QuestionCircleOutlined,
    BulbOutlined
} from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

const { SubMenu } = Menu;
const { Sider } = Layout;

const LeftMenu = () => {
    const [selected, setSelected] = useState('1')

    const location = useLocation()

    // TODO: 
    // * Перенести все пункты меню в firebase и рендерить их с сервера
    const menuConfig = [
        {
            key: '1',
            to: '/',
            name: 'Главная',
            group: 'main'
        },
        {
            key: '2',
            to: '/',
            name: 'Всё',
            group: 'tests'
        },
        {
            key: '3',
            to: '/',
            name: 'HTML',
            group: 'tests'
        },
        {
            key: '4',
            to: '/',
            name: 'CSS',
            group: 'tests'
        },
        {
            key: '5',
            to: '/',
            name: 'JS',
            group: 'tests'
        },
        {
            key: '6',
            to: '/',
            name: 'REACT',
            group: 'tests'
        },
        {
            key: '8',
            to: '/',
            name: 'frontend',
            group: 'interview'
        },
        {
            key: '12',
            to: '/admin/add',
            name: 'Добавить вопрос',
            group: 'admin'
        },
        {
            key: '13',
            to: '/admin',
            name: 'Список вопросов',
            group: 'admin'
        },
        {
            key: '14',
            to: '/admin/menu',
            name: 'Управлению меню',
            group: 'admin'
        },
    ]

    const renderMenuItem = ({ key, to, name }) => {
        return <Menu.Item key={key}><Link to={to}>{name}</Link></Menu.Item>
    }

    useEffect(() => {
        const menuKey = menuConfig.find((i) => i.to === location.pathname).key;
        setSelected(menuKey)
    }, [location.pathname])


    // TODO:
    // * Если открыт пункт меню находящийся в sub, то sub не сворачивается

    return (
        <Sider breakpoint="lg">
            <div className="logo">manuscript.dev</div>
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={[selected]}
                selectedKeys={[selected]}
            >
                {renderMenuItem(menuConfig[0])}
                <SubMenu key="sub1" icon={<CheckCircleOutlined />} title="Тестирование">
                    {menuConfig.filter((i) => i.group === 'tests').map((i) => renderMenuItem(i))}
                </SubMenu>
                <SubMenu key="sub2" icon={<QuestionCircleOutlined />} title="Собес">
                    {menuConfig.filter((i) => i.group === 'interview').map((i) => renderMenuItem(i))}
                </SubMenu>
                <SubMenu key="sub3" icon={<></>} title="Админка">
                    {menuConfig.filter((i) => i.group === 'admin').map((i) => renderMenuItem(i))}
                </SubMenu>
            </Menu>
        </Sider>
    )
}

export default LeftMenu;