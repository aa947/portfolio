
import React, { Component } from 'react';
import axios from 'axios';


import { Link } from 'react-router-dom';

class projectsToEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {

            inputEmail: '',
            inputName: '',
            inputMessage: '',
            projects: []


        };

        this.sendMessage = this.sendMessage.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeMessage = this.handleChangeMessage.bind(this);

    }

    sendMessage(event) {
        event.preventDefault();
        console.log(this.state);
        axios.post('/api/sendMessage', this.state)
            .then(res => console.log(res))
            .catch(err => console.log(err))


    }

    handleChangeName(event) {
        this.setState({ inputName: event.target.value })
    }

    handleChangeEmail(event) {
        this.setState({ inputEmail: event.target.value })
    }

    handleChangeMessage(event) {
        this.setState({ inputMessage: event.target.value })
    }

    componentDidMount() {
        fetch('/api/projects').then(res => res.json())
            .then(projects => this.setState({ projects: projects }, () => console.log('fetched...', projects)));
    }

    render() {
        let projects = this.state.projects;

        return (

            <>
                <div>
                    {projects.map((p)=> {
                        return(
                            <div>
                                {p.name}  <Link  to={{ pathname: "/api/edit_project/" + p._id, project_id: p._id }}> Edit </Link>
                            </div>
                        );
                    })}
                </div>
            </>
        );
    }
}

export default projectsToEdit;
