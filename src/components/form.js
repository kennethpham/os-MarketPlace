import React from "react";
import axios from "axios";
import { Form, Row, Col, Button } from "react-bootstrap";

class Forms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          name: "",
          projectName: "",
          link: "",
          description: "",
          technology: "",
          database: "",
          submit: false
        };

        this.handleName = this.handleName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleProjectName = this.handleProjectName.bind(this);
        this.handleLink = this.handleLink.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handleDatabase = this.handleDatabase.bind(this);
        this.handleTechnology = this.handleTechnology.bind(this);
    }
    handleName(e) {
        this.setState({
            name: e.target.value
        });
    }
    
    handleSubmit(e) {
        e.preventDefault();
        const token = `${process.env.REACT_APP_MY_KEY}`;
        console.log(token);
        console.log(this.state.name);
        const Info = {
            title: `${this.state.projectName}`,
            body:
                "Name: " +
                `${this.state.name}` +
                "\n" +
                "Project description: " +
                `${this.state.description}` +
                "\n" +
                "Project repo: " +
                `${this.state.link}` +
                "\n" +
                "Languages or Frameworks the project use: " +
                `${this.state.technology}` +
                "\n" +
                "Database: " +
                `${this.state.database}`
        };
        console.log(Info);
        axios        
          .post("https://api.github.com/repos/kennethpham/os-MarketPlace/issues",
           Info,{headers: { Authorization: "Bearer " + token }})
              .then(res => console.log(res))
              .catch(err => console.log(err));
    
    }
    handleProjectName(e) {
        this.setState({
            projectName: e.target.value
        })
    }

    handleLink(e) {
        this.setState({
            link: e.target.value
        })
    }

    handleDescription(e) {
        this.setState({
            description: e.target.value
        })
    }

    handleTechnology(e) {
        this.setState({
            technology: e.target.value
        })
    }

    handleDatabase(e) {
        this.setState({
            database: e.target.value
        })
    }

    render(){
        return(
    <div className="form">
    <Form onSubmit={this.handleSubmit}>
        <Form.Group as={Row} controlId="name">
            <Form.Label column sm="2">Name</Form.Label>
            <Col sm="10">
                <Form.Control required type="name" placeholder="Your name" 
                    value={this.state.name} onChange={this.handleName}/>
            </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="project">
            <Form.Label column sm="2">Project's Name </Form.Label>
            <Col sm="10">
                <Form.Control
                    required
                    type="projectName"
                    placeholder="Name of the project"
                    onChange={this.handleProjectName}
                />
            </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="repo">
            <Form.Label column sm="2">Repositories Link</Form.Label>
            <Col sm="10">
                <Form.Control
                    required
                    type="link"
                    placeholder="Link to the project's repository"
                    onChange={this.handleLink}
                />
            </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="description">
            <Form.Label column sm="2"> Project Description </Form.Label>
            <Col sm="10">
                <Form.Control
                    required
                    type="description"
                    placeholder="Short description of the project"
                    onChange={this.handleDescription}
                />
            </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="framework">
            <Form.Label column sm="2"> Languages or Frameworks </Form.Label>
            <Col sm="10">
                <Form.Control
                    required
                    type="technology"
                    placeholder="What languages or frameworks does the project use?"
                    onChange={this.handleTechnology}
                />
            </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="Database">
            <Form.Label column sm="2"> Database </Form.Label>
            <Col sm="10">
                <Form.Control
                    type="database"
                    placeholder="What kind of database does the project use? Put N/A otherwise"
                    onChange={this.handleDatabase}
                />
            </Col>
        </Form.Group>
        <div className="button">
            <Button variant="primary" type="submit">Submit Project</Button>
        </div>
        
    </Form>
    </div>
        )
    }
}

export default Forms;