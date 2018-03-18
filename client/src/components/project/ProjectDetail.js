import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProject } from '../../actions';
import { Link } from 'react-router-dom';

class ProjectDetail extends Component {

    componentDidMount() {
        this.props.fetchProject(this.props.match.params._id);
    }

    render() {
        if (!this.props.project) {
            return <div>Loading...</div>;
        }
        const { title, technology, description, creator, datePosted } = this.props.project;
        return (
            <div>
                <div className="row">
                    <div className="col s12 m9">
                        <h3>{title}</h3>
                        <h5>Technologies used: {technology}</h5>
                        <div className="card story">
                            <div className="card-content">
                                <span className="card-title">{new Date(datePosted).toLocaleDateString()}</span>
                                {description}
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m3">
                        <div className="card center-align">
                            <div className="card-content">
                                <span className="card-title">{this.props.auth.displayName}</span>
                                <img className="circle responsive-img" src={this.props.auth.image}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row col s12">
                    <div className="col s6 offset-s1">
                        <Link to="/project">Back to project</Link>
                    </div>
                </div>
            </div>
        );
    }
}
// ownProps is the prop obj that is going to ProjectDetail component up top.
function mapStateToProps({ projects, auth }, ownProps){
    return { auth, project: projects[ownProps.match.params._id] };
}

export default connect(mapStateToProps, { fetchProject })(ProjectDetail);
