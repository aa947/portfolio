import React, { Component } from 'react';
import './css/header.css';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import footer from './Footer';
// import Footer from './Footer';
// import { useParams } from 'react-router-dom';
import axios from 'axios';
// import Parser from 'html-react-parser';
import './css/project_details_css.css';




class Project_details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: " ",
            lang: " ",
            photo: " ",
            video: " ",
            date: " ",
            github_url: " ",
            live_demo: " ",
            intro: " ",
            tasks: " ",
            features: " ",
            inspired_by: " ",
            fontAwesome: " ",
            sorting: 0,
            id : " "

        };
        //this.thumsUp = this.thumsUp.bind(this);

        this.handleChange = this.handleChange.bind(this);
        this.EditProject = this.EditProject.bind(this);

    }

   



    EditProject(event) {
        event.preventDefault();
        let submittedData ={
            name: this.state.name,
            lang: this.state.lang,
            photo: this.state.photo,
            video: this.state.video,
            date: this.state.date,
            github_url: this.state.github_url,
            live_demo: this.state.live_demo,
            intro: this.state.intro,
            tasks: this.state.tasks,
            features: this.state.features,
            inspired_by: this.state.inspired_by,
            fontAwesome: this.state.fontAwesome,
            sorting: parseInt(this.state.sorting),
        }
        
     
        console.log(this.state);
        axios.post('/api/e/' + this.state.id, { submittedData }
        )
            .then((data) => {
               console.log(data.data);
            })
            .catch(err => console.log(err))


    }

    componentDidMount() {
        // params.project_id
        let project_id = this.props.match.params.project_id;
        console.log(project_id)
        fetch('/api/p/' + project_id).then(res => res.json())
            .then((p) => {
                this.setState({
                    name: p.name,
                    lang: p.lang,
                    photo: p.photo,
                    video: p.video,
                    date: p.date,
                    github_url: p.github_url,
                    live_demo: p.live_demo,
                    intro: p.intro,
                    tasks: p.tasks,
                    features: p.features,
                    inspired_by: p.inspired_by,
                    fontAwesome: p.fontAwesome,
                    sorting: p.sorting,
                    id: p._id
                })
            }
            );

    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {


        return (
            <>
                <div className="col-lg-12 mb-12">
                    <div className="card shadow mb-12">
                        <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold text-primary">{this.state.name}</h5>
                            <div className="row"></div>
                            <br />
                            <form onSubmit={this.EditProject}>

                                <div className="form-group">
                                    <label for=""> Name: </label>
                                    <input type="text" className="form-control" name="name" value={this.state.name} placeholder="project Name" onChange={this.handleChange} />
                                </div>

                                <div className="form-group">
                                    <label for="">sorting: </label>
                                    <input type="number" className="form-control" name="sorting" value={this.state.sorting} placeholder="sorting" onChange={this.handleChange} />
                                </div>

                                <div className="form-group">
                                    <label for="lang">lang: </label>
                                    <input type="text" className="form-control" name="lang" value={this.state.lang} placeholder="project lang" onChange={this.handleChange} />
                                </div>

                                <div className="form-group">
                                    <label for="intro"> intro: </label>
                                    <textarea id="" name="intro" className="form-control" placeholder="intro" value={this.state.intro} cols="30" rows="4" onChange={this.handleChange} ></textarea>
                                </div>

                                <div className="form-group">
                                    <label for="intro"> tasks: </label>
                                    <textarea id="" name="tasks" className="form-control" placeholder="tasks" value={this.state.tasks} cols="30" rows="4" onChange={this.handleChange} ></textarea>
                                </div>

                                <div className="form-group">
                                    <label for="intro"> features: </label>
                                    <textarea id="" name="features" className="form-control" placeholder="features" value={this.state.features} cols="30" rows="4" onChange={this.handleChange} ></textarea>
                                </div>

                                {this.state.photo !== " " && (<div className="form-group">
                                    <label for="">photo: </label>
                                    <input type="text" className="form-control" name="photo" value={this.state.photo} placeholder="photo" onChange={this.handleChange} />
                                </div>)}

                                {/* { this.state.photo == " " && (<p></p>) }
                                { this.state.video == " " && (<p></p>) } */}


                                {this.state.video !== " " && (<div className="form-group">
                                    <label for="intro"> video: </label>
                                    <textarea id="" name="video" className="form-control" placeholder="video" value={this.state.video} cols="30" rows="4" onChange={this.handleChange} ></textarea>
                                </div>)}


                                <div className="form-group">
                                    <label for="">date: </label>
                                    <input type="text" className="form-control" name="date" value={this.state.date} placeholder="project date" onChange={this.handleChange} />
                                </div>


                                <div className="form-group">
                                    <label for="">github_url: </label>
                                    <input type="text" className="form-control" name="github_url" value={this.state.github_url} placeholder="github_url" onChange={this.handleChange} />
                                </div>


                                <div className="form-group">
                                    <label for="">live_demo: </label>
                                    <input type="text" className="form-control" name="live_demo" value={this.state.live_demo} placeholder="live_demo" onChange={this.handleChange} />
                                </div>




                                <div className="form-group">
                                    <label for="">fontAwesome: </label>
                                    <input type="text" className="form-control" name="fontAwesome" value={this.state.fontAwesome} placeholder="fontAwesome" onChange={this.handleChange} />
                                </div>

                                <div className="form-group">
                                    <label for="">inspired_by: </label>
                                    <input type="text" className="form-control" name="inspired_by" value={this.state.inspired_by} placeholder="inspired_by" onChange={this.handleChange} />
                                </div>

                                <button type="submit" className="btn btn-primary" onSubmit={this.EditProject} > Submit </button>

                            </form>


                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Project_details;
