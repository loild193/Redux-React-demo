import React from 'react'
import PropTypes from 'prop-types'

import './Hobbylist.css'

function HobbyList(props) {
  const { hobbyList, activeId, onHobbyClick } = props;

  const handleClick = (hobby) => {
    if (onHobbyClick) {
      onHobbyClick(hobby)
    }
  }

  return (
    <div>
      <ul className="hobby-list">
        {
          hobbyList.map(hobby => (
            <li 
              key={hobby.id}
              className={activeId === hobby.id ? 'active' : ''}
              onClick={() => handleClick(hobby)}
            >
              { hobby.title }
            </li>  
          ))
        }
      </ul>    
    </div>
  )
}

HobbyList.propTypes = {
  hobbyList: PropTypes.array,
  activeId: PropTypes.number,
  onHobbyClick: PropTypes.func,
}

HobbyList.defaultProps = {
  hobbyList: [],
  activeId: null,
  onHobbyClick: null,
}

export default HobbyList

