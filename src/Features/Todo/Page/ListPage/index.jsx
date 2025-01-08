import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from '../../Components/TodoList';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

ListPage.propTypes = {
    
};

function ListPage(props) {
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

    const location = useLocation();

    const [todoList, setTodoList] = useState(initTodoList); 

    const [filteredStatus, setFilteredStatus] = useState(() => {
        const params = queryString.parse(location.search);
        // console.log(params.status);
        return params.status || 'all';
    });

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

export default ListPage;