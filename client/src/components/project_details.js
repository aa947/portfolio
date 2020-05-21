import React, { Component } from 'react';
import './css/header.css';
import Footer from './Footer';
import axios from 'axios';
import './css/project_details_css.css';
import { toast } from 'react-toastify';



class Project_details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: {
                comments: []
            },
            inputComment: ''
        };

        this.thumsUp = this.thumsUp.bind(this);
        this.handleChangeComment = this.handleChangeComment.bind(this);
        this.addComment = this.addComment.bind(this);
    }

    thumsUp() {
        fetch('/api/like/' + this.state.project._id)
            .then(res => res.json())
            .then((ress) => {
                let temp = this.state.project.likes;
                fetch('/api/p/' + this.state.project._id).then(res => res.json())
                    .then((project) => {
                        // console.log(project)
                        this.setState({ project })
                        if (temp == this.state.project.likes) {
                            return toast.error("You have liked this project before", {
                                position: toast.POSITION.TOP_CENTER,
                                autoClose: 10000
                            })
                        } else {
                            toast.success("Thank You, your like Added !", {
                                position: toast.POSITION.TOP_CENTER,
                                autoClose: 10000
                            })
                        }
                    }
                    )
            });
    }

    addComment(event) {
        event.preventDefault();
        // console.log(this.state);
        if (this.state.inputComment == "") {
            toast.error('please inter a comment', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: false
            })
            return false;
        }
        axios.post('/api/comment/' + this.state.project._id, { inputComment: this.state.inputComment })
        .then((data) => {
                fetch('/api/p/' + this.state.project._id).then(res => res.json())
                    .then((project) => {
                        // console.log(project)
                        this.setState({ project })
                        this.setState({ inputComment: '' })
                    })
            })
            .catch(err => console.log(err))
    }


    handleChangeComment(event) {
        this.setState({ inputComment: event.target.value })
    }


    componentDidMount() {
        // params.project_id
        let project_id = this.props.match.params.project_id;
        //console.log(project_id)
        fetch('/api/p/' + project_id).then(res => res.json())
            .then((project) => {
                //console.log(project)
                this.setState({ project })
            }
            );

    }

    render() {

        return (
            <React.Fragment>
                <div className="col-lg-12 mb-12">
                    <div className="card shadow mb-12">
                        <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold text-primary">{this.state.project.name}</h5>
                            <div className="row">
                                <div className="col md-8" > <br /> <p> project: {this.state.project.name} </p>
                                    <p> Languages used: {this.state.project.lang} </p>
                                    <div className="row"><a href="#" onClick={this.thumsUp}  ><button className="btn btn-primary" style={{ marginBottom: "5px" }} title="view on Github" >Like {'\u00A0'}<i class="fas fa-thumbs-up "></i> {'\u00A0'}<span>({this.state.project.likes}) </span> {'\u00A0'} </button> </a>{'\u00A0'}
                                        <a href={this.state.project.github_url} target='_blank' >  <button className="btn btn-success" style={{ marginBottom: "5px" }}> View on Github {'\u00A0'}<i class="fab fa-github"></i> </button> </a> {'\u00A0'}
                                        <a href={this.state.project.live_demo} target='_blank' > <button className="btn btn-info" style={{ marginBottom: "5px" }}> live demo {'\u00A0'} <i class="fas fa-desktop"></i> </button></a>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="card-body">
                            <div> <p><span className="m-0 font-weight-bold text-primary"> details: </span>  <div dangerouslySetInnerHTML={{ __html: this.state.project.intro }} /> </p> </div>

                            <div> <p> <span className="m-0 font-weight-bold text-primary">tasks: </span>  <div dangerouslySetInnerHTML={{ __html: this.state.project.tasks }} /> </p> </div>
                            <div> <p><span className="m-0 font-weight-bold text-primary">features: </span>  <div dangerouslySetInnerHTML={{ __html: this.state.project.features }} /> </p> </div>
                            <div> <p> <span className="m-0 font-weight-bold text-primary">inspired_by: </span> {this.state.project.inspired_by} </p> </div>
                            <div> <p> <span className="m-0 font-weight-bold text-primary">date: </span>  {this.state.project.date} </p> </div>
                        </div>
                    </div>
                </div>

                <br />

                <div className="col-lg-12 mb-12">
                    <div className="card shadow mb-12">
                        <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold text-primary">sample:</h5>
                        </div>
                        <div className="card-body">

                            {this.state.project.photo && (
                                <img
                                    src={this.state.project.photo} width="100%" height="100%"
                                    alt={this.state.project.name}
                                />)}

                            {this.state.project.video && (<div className="container" style={{ width: "100%" }} dangerouslySetInnerHTML={{ __html: this.state.project.video }} />)}
                        </div>
                    </div>
                </div>

                <br />
                <div className="col-lg-12 mb-12">
                    <div className="card shadow mb-12">
                        <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold text-primary">Comments ({(this.state.project.comments || []).length}) :</h5>
                        </div>
                        <div className="card-body">


                            {(this.state.project.comments || []).map((cc) => {
                                return (
                                    <div > <p> <i class="fas fa-chevron-right"></i> {cc} </p> </div>
                                );
                            })}

                            <form onSubmit={this.addComment}>
                                <div className="row">

                                    <input className="form-control form-control-lg col-md-9  lg-8" type="text" name="inputComment" value={this.state.inputComment} onChange={this.handleChangeComment} placeholder="add acomment or leave inspiration" /> {'\u00A0'}    <button type="submit" onSubmit={this.addComment} className="btn btn-primary col-md-2 lg-2" > Add comment </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>    
                <br />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Project_details;
