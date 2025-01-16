import React from 'react';
import PropTypes from 'prop-types';
import NewList from './ListStateForm/NewList';
import InProgressList from './ListStateForm/InProgressList';
import CompletedList from './ListStateForm/CompletedList';
import NewActionInput from './components/Form';

TodoRecoil.propTypes = {
    
};

function TodoRecoil(props) {
    return (
        <>
        <header className='App-header'>
          <h1>To-do List</h1>
            </header>
            <NewActionInput />

        <div className='content'>
          <NewList />
          <InProgressList />
          <CompletedList />
        </div></>
    );
}

export default TodoRecoil;