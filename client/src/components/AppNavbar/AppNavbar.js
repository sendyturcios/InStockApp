import React from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink } from 'mdbreact';
import { withRouter } from 'react-router-dom';
import "./AppNavbar.css";


class AppNavbar extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        collapse: false,
        isWideEnough: false,
      };
  this.onClick = this.onClick.bind(this);
}
  onClick() { 
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  onClickLogout = (e) => {
    e.preventDefault();
    this.props.setUserLoggedIn(false)
    console.log(this.props.history)
    let path = `/login`;
    this.props.history.push(path)
  }

  render() {
    
    return (
      <div id="nav">
        <header>          

            <Navbar color="transparent" dark expand="md" fixed="top" scrolling>
              
                    <NavbarBrand href="/">
                      <strong>Home</strong>
                    </NavbarBrand>
      
                  {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
                  <Collapse isOpen={this.state.collapse} navbar>
                    
                    <NavbarNav left>
      
                          <NavItem >
                            <NavLink to="/about">About</NavLink>
                          </NavItem>

                          <NavItem>
                            {(this.props.userLoggedIn)
                            ? <NavLink to="/login" onClick={this.onClickLogout}>Logout</NavLink>
                            : <NavLink to="/login">Vendor Login</NavLink>} 
                          </NavItem>

                          
      
                          <NavItem >
                            <NavLink to="/signup" >Create Account</NavLink>
                          </NavItem>
                      
                    </NavbarNav>
                    
                  </Collapse>

            </Navbar>


         
        </header>
      
      </div>


    );
  }
}

//Here the AppNavbar component was 'wrapped' with the 'withRouter' method of
//the 'react-router-dom' package in order to allow this component to access the 'history' object
//The AppNavbar component doesn't have direct access tot he 'history' object bc it
//doesn't live inside the 'Switch' component that is declared within the 'App.js' file
//Wrapping AppNavbar in this way allows the component to thus access the histroy object
//and then change path to redirect to the 'login' page after selecting the 'logout' button

export default withRouter(AppNavbar);






