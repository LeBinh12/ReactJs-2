import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './Components/TodoList';

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {


    const initTodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new'

        },
        {
            id: 2,
            title: 'Sleep',
            status: 'completed'

        },
        {
            id: 3,
            title: 'Code',
            status: 'new'

        },
    ];

    const [todoList, setTodoList] = useState(initTodoList); 

    const [filteredStatus, setFilteredStatus] = useState('all');

    const handleTodoList = (todo, index) => {
        //taoj ra 1 mangx mowi
        const newTodoList = [...todoList];

        console.log(todo, index);
        
        //thay doi

        newTodoList[index] = {
            ...newTodoList[index],
            status: newTodoList[index].status === 'new' ? 'completed' : 'new',
        }

        // cap nhat todo list

        setTodoList(newTodoList);
    }

    const handleShowAllClick = () => {
        setFilteredStatus('all');
    }
    const handleShowCompletedClick = () => { 
        setFilteredStatus('completed');
    }
    const handleShowNewClick = () => {
        setFilteredStatus('new');
    }

    const renderedTodoList = todoList.filter(todo => filteredStatus === 'all'
        || filteredStatus === todo.status);
    
    console.log(renderedTodoList);

    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={renderedTodoList} onTodoClick={handleTodoList} />


            <button onClick={handleShowAllClick} >Show All</button>
            <button onClick={handleShowCompletedClick} >Show Completed</button>
            <button onClick={handleShowNewClick} >Show New</button>

        </div>
    );
}

export default TodoFeature;