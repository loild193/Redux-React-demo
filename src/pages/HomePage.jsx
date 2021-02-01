import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux';
import HobbyList from '../components/Home/HobbyList';
import { addNewHobby, setActiveHobby } from '../actions/hobby';

const randomNumber = () => {
  return 1000 + Math.trunc(Math.random() * 9000);
}

function HomePage(props) {
  const hobbyList = useSelector(state => state.hobby.list);
  const activeId = useSelector(state => state.hobby.activeId)
  const dispatch = useDispatch();

  console.log(hobbyList)

  const handleAddHobbyClick = () => {
    // Random a hobby object with id + title
    const newId = randomNumber();
    const newHobby = {
      id: newId,
      title: `Hobby ${newId}`,
    }
    console.log(newHobby)

    // Dispatch action to add to store
    const action = addNewHobby(newHobby);
    dispatch(action);
  }

  const handleHobbyClick = (hobby) => {
    const action = setActiveHobby(hobby);
    dispatch(action);
  }

  return (
    <div className="home-page">
      <h1>Tran Thu Ha</h1>

      <button onClick={handleAddHobbyClick}>Random hobby</button>

      <HobbyList 
        hobbyList={hobbyList}
        activeId={activeId}
        onHobbyClick={handleHobbyClick}
      />
    </div>
  )
}

HomePage.propTypes = {

}

export default HomePage

