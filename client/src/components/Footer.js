import React, { Component } from 'react';
import './css/header.css';
import domain from '../config';
import { isLocalhost } from '../helpers';



class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      unique: 0
    };

  }

  componentDidMount() {
    let viewsUrl = isLocalhost ? `${domain}/api/views` : '/api/views';
    fetch(viewsUrl)
      .then(res => res.json())
      .then(data => {
        this.setState({

          count: data.count,
          unique: data.unique

        })
      })
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
