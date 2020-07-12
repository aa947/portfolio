import React, { Component } from 'react';
import './css/header.css';



class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.visitors.count,
      unique: props.visitors.unique
    };

  }

  render() {
    return (
      <React.Fragment>
        <footer className="sticky-footer bg-white">
          <div>
            <div className="copyright text-center my-auto">
              <span>Copyright &copy; Ahmad Ali </span> {'\u00A0'}
              <span title="visits number"><i className="fas fa-eye">  {this.state.count === 0 ? 'loading' : this.state.count}</i>  </span> {'\u00A0'}
              <span title="number of unique visitors"><i className="fas fa-user"> {this.state.unique === 0 ? 'loading' : this.state.unique}</i>  </span>{'\u00A0'}
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
