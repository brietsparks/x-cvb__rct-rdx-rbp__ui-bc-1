/**
*
* Project
*
*/

import React from 'react';
// import styled from 'styled-components';


function Project({
  id,
  createProjectElements,
  createContributionElements,
  parent_id,
  profile_id,
  projects,
  contributions,
  title,
  summary
}) {
  const childProjects = createProjectElements(projects);
  const childContributions = createContributionElements(contributions);

  const marginLeft = {marginLeft: 40};

  return (
    <div>
      <h3>Project id: {id}</h3>
      <p>Parent id: {parent_id}</p>
      <div style={marginLeft}>
        {childProjects}
      </div>
      <div style={marginLeft}>
        {childContributions}
      </div>
    </div>
  );
}

Project.propTypes = {
  id: React.PropTypes.number.isRequired,
  projects: React.PropTypes.array.isRequired,
  contributions: React.PropTypes.array.isRequired,
  // createProjectElements: React.PropTypes.func.isRequired,
  // createContributionElements: React.PropTypes.func.isRequired
};

export default Project;
