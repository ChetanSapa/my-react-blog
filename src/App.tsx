import React from 'react';
import './App.css';
import {Link, Route, Switch, withRouter} from "react-router-dom";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import UsersContainer from "./components/Users/UsersContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
import {LoginPage} from "./components/Login/LoginPage";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";
import {AppStateType} from "./redux/redux-store";
import {UserPage} from "./components/Users/UsersContainer";
import 'antd/dist/antd.css'
import {Breadcrumb, Layout, Menu} from 'antd';
import {LaptopOutlined, UserOutlined} from '@ant-design/icons';
import {Header} from "./components/Header/Header";

const {SubMenu} = Menu;
const {Content, Footer, Sider} = Layout;

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    initializeApp: () => void
}

const SuspendedDialogs = withSuspense(DialogsContainer)
const SuspendedProfile = withSuspense(ProfileContainer)

class App extends React.Component<MapPropsType & DispatchPropsType> {
    catchAllUnhandedErrors = (e: PromiseRejectionEvent) => {
        alert('SomeError occured')
    }

    componentDidMount() {
        this.props.initializeApp()
        window.addEventListener('unhandledrejection', this.catchAllUnhandedErrors)
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandedErrors)
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <Layout>
                <Header/>
                <Content style={{padding: '0 50px'}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        {/*<Breadcrumb.Item>Home</Breadcrumb.Item>*/}
                        {/*<Breadcrumb.Item>List</Breadcrumb.Item>*/}
                        {/*<Breadcrumb.Item>App</Breadcrumb.Item>*/}
                    </Breadcrumb>
                    <Layout className="site-layout-background" style={{padding: '24px 0'}}>
                        <Sider className="site-layout-background" width={200}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{height: '100%'}}
                            >
                                <SubMenu key="sub1" icon={<UserOutlined/>} title="My profile">
                                    <Menu.Item key="1"><Link to={'/Profile'}>Profile</Link></Menu.Item>
                                    <Menu.Item key="2"><Link to={'/Dialogs'}>Dialogs</Link></Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" icon={<LaptopOutlined/>} title="Developers">
                                    <Menu.Item key="5"><Link to={'/developers'}>Developers</Link></Menu.Item>
                                </SubMenu>
                                {/*<SubMenu key="sub3" icon={<NotificationOutlined/>} title="subnav 3">*/}
                                {/*    <Menu.Item key="9">option9</Menu.Item>*/}
                                {/*    <Menu.Item key="10">option10</Menu.Item>*/}
                                {/*    <Menu.Item key="11">option11</Menu.Item>*/}
                                {/*    <Menu.Item key="12">option12</Menu.Item>*/}
                                {/*</SubMenu>*/}
                            </Menu>
                        </Sider>
                        <Content style={{padding: '0 24px', minHeight: 280}}>
                            <Switch>
                                <Route path={'/dialogs'}
                                       render={() => <SuspendedDialogs/>}/>
                                <Route path={'/profile/:userId?'}
                                       render={() => <SuspendedProfile/>}/>
                                <Route path={'/developers'}
                                       render={() => <UserPage/>}/>
                                <Route path={'/login'} render={() => <LoginPage/>}/>
                            </Switch>
                        </Content>
                    </Layout>
                </Content>
                <Footer style={{textAlign: 'center'}}>Dr. Feelgood ©2021 Created by Who & Co.</Footer>
            </Layout>)
        // return (<div className='app-wrapper'>
        //         <HeaderComponent/>
        //         <Navbar/>
        //         <div className='app-wrapper-content'>
        //             <Route path={'/dialogs'}
        //                    render={() => <SuspendedDialogs/>}/>
        //             <Route path={'/profile/:userId?'}
        //                    render={() => <SuspendedProfile/>}/>
        //             <Route path={'/users'}
        //                    render={() => <UserPage/>}/>
        //             <Route path={'/login'} render={() => <LoginPage/>}/>
        //         </div>
        //     </div>
        // );
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);