import React from 'react'
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom'
import Pagination from './Pagination';

class ProjectList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            projects: props.projects,
            pageOfItems: []
        }
    }

    onChangePage = (pageOfItems) => {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }

    render() {
        return (
            <div className="project-list section">
                {this.state.projects && this.state.pageOfItems.map(project => {
                    return (
                        <Link to={'/project/' + project.id} key={project.id}>
                            <ProjectSummary project={project} />
                        </Link>
                    )
                })}
                <Pagination items={this.state.projects} onChangePage={this.onChangePage} />
            </div>
        )
    }
}

export default ProjectList
