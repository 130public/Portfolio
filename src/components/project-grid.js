import React from 'react'
import ProjectCard from "../components/project-card";

class ProjectGrid extends React.Component {
  render() {
    const {nodes} = this.props;
    return (
      <div>
          <ul className="article-list">
            {/* <pre>{JSON.stringify(nodes,null,2)}</pre> */}
            {nodes.map(({ node }) => {
              return (
                <li key={node.slug}>
                  <ProjectCard post={node} />
                </li>
              )
            })}
          </ul>
      </div>
    )
  }
}

export default ProjectGrid