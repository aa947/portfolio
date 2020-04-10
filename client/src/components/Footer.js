import React, { Component } from 'react';
import './css/header.css';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import { FaEye } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { GoEye } from "react-icons/go";
import { GoPerson  } from "react-icons/go";
import 'react-tippy/dist/tippy.css'
import {
  Tooltip,
} from 'react-tippy';





class Footer extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            unique:0
        };

    }

    componentDidMount() {
      fetch('/api/footer').then(res => res.json())
          .then(res => this.setState({ count: res.count, unique: res.unique }  ));

  }

    render() {
        return (
            <React.Fragment>

<footer className="sticky-footer bg-white">
        <div >
          <div className="copyright text-center my-auto">
            <span>Copyright &copy; Ahmad Ali </span> {'\u00A0'}
            <Tooltip
  // options
  title="Welcome to React"
  position="bottom"
  trigger="click"
> 
       <span> <GoEye /> <i> { this.state.count } </i>  </span> </Tooltip> {'\u00A0'}
   <span> <GoPerson /> <i>  { this.state.unique }</i> </span> {'\u00A0'}
          </div>
        </div>
      </footer>
            </React.Fragment>
        );
    }
}

export default Footer;
