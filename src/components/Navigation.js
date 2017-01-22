import React, { Component } from 'react';
// import { Dropdown } from 'react-bootstrap';
// import NavItem from '../../components/widgets/NavItem';
// import Profile from './Profile';

class Navigation extends Component {

    componentDidMount() {
        // const { menu } = this.refs;
        // $(menu).metisMenu();
    }

    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Project name</a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Action</a></li>
                                    <li><a href="#">Another action</a></li>
                                    <li><a href="#">Something else here</a></li>
                                    <li role="separator" className="divider"></li>
                                    <li className="dropdown-header">Nav header</li>
                                    <li><a href="#">Separated link</a></li>
                                    <li><a href="#">One more separated link</a></li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="../navbar/">Default</a></li>
                            <li><a href="../navbar-static-top/">Static top</a></li>
                            <li className="active"><a href="./">Fixed top <span className="sr-only">(current)</span></a></li>
                        </ul>
                    </div>
                </div>
                { /*
                    <ul className="nav metismenu" id="side-menu" ref="menu">
                        <li className="nav-header">
                            <Profile user={this.props.user} onLogout={this.props.onLogout} />
                            <div className="logo-element">SV</div>
                        </li>
                        <NavItem to='/main'><i className="fa fa-th-large" /> <span className="nav-label">Main view</span></NavItem>
                        <NavItem to='/products'><i className="fa fa-cube" /> <span className="nav-label">Products</span></NavItem>
                        <NavItem to='/users'><i className="fa fa-users" /> <span className="nav-label">User</span></NavItem>
                        <NavItem to='/roles'><i className="fa fa-lock" /> <span className="nav-label">Role</span></NavItem>
                        <NavItem to='/delivery-methods'><i className="fa fa-motorcycle" /> <span className="nav-label">Delivery Method</span></NavItem>
                        <NavItem to='/stores'><i className="fa fa-shopping-cart" /> <span className="nav-label">Store</span></NavItem>
                        <NavItem to='/transactions'><i className="fa fa-dollar" /> <span className="nav-label">Transaction</span></NavItem>
                    </ul>
                    */
                }
            </nav>
        );
    }
};

export default Navigation
