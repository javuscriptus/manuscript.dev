
import { Layout } from 'antd';

const { Content } = Layout;


const MyContent = ({ children }) => {

    return (
        <Content style={{ margin: '24px 16px 0' }}>
            <div className="site-layout-background" style={{ padding: 24, backgroundColor: "#fff" }}>
                {children}
            </div>
        </Content>
    )
}

export default MyContent;