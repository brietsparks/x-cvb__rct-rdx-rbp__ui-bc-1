/**
*
* Contribution
*
*/

import React from 'react';
// import styled from 'styled-components';


function Contribution({
  id,
  parent_id
}) {
  return (
    <div>
      <h3>Contribution id: {id}</h3>
      <p>Parent id: {parent_id}</p>
    </div>
  );
}

Contribution.propTypes = {
  id: React.PropTypes.number.isRequired,
};

export default Contribution;
