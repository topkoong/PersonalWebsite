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
        const { title, technology, description } = this.props.project;
        return (
            <div className="row">
                <Link to="/project">Back to project</Link>
                <h3>{title}</h3>
                <h2>{technology}</h2>
                <p>{description}</p>
            </div>
        );
    }
}
// ownProps is the prop obj that is going to ProjectDetail component up top.
function mapStateToProps({ projects }, ownProps){
    return { project: projects[ownProps.match.params._id] };
}

export default connect(mapStateToProps, { fetchProject })(ProjectDetail);
