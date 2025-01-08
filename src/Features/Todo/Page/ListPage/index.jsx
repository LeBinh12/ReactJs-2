import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from '../../Components/TodoList';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import TodoForm from '../../Components/TodoForm';

ListPage.propTypes = {
    
};


// trong reachjs v6 chungs ta khoong cần sử dụng 'useHistory, useMatch'
//  thay vào đó chúng ta có thể dùng useNavigate cho dễ dàng hơn

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

    const navigation = useNavigate();

    const [todoList, setTodoList] = useState(initTodoList); 

    const [filteredStatus, setFilteredStatus] = useState(() => {
        const params = queryString.parse(location.search);
        // console.log(params.status);
        return params.status || 'all';
    });


    // lệnh này dùng để khi người dùng loadpage thì dữ liệu hiện tại trên page vẫn được giữ lại và nó không load
    useEffect(() => {
        const params = queryString.parse(location.search);
        setFilteredStatus(params.status || 'all');
    }, [location.search]);

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

        const queryParams = { status: 'all' };
        
        navigation({
            path: '/',
            search: queryString.stringify(queryParams)
        })
    }
    const handleShowCompletedClick = () => { 
        setFilteredStatus('completed');

        const queryParams = { status: 'completed' };
        
        navigation({
            path: '/',
            search: queryString.stringify(queryParams)
        })
    }
    const handleShowNewClick = () => {
        setFilteredStatus('new');

        const queryParams = { status: 'new' };
        
        navigation({
            path: '/',
            search: queryString.stringify(queryParams)
        })
    }
    // chức năng này chỉ thay đổi khi todoList hoặc filteredStatus thay đổi giá trị đầu vào
    const renderedTodoList = useMemo(() => {
        return todoList.filter(todo => filteredStatus === 'all'
                        || filteredStatus === todo.status);
    }, [todoList, filteredStatus]) 
    
    console.log(renderedTodoList);

    const handleTodoFormSubmit = (values) => {
        console.log('Form: ', values);
    }

    return (
        <div>
            <h2>Hello Todo</h2>
            <TodoForm onsubmit={handleTodoFormSubmit} />

            <h3>Todo List</h3>
            <TodoList todoList={renderedTodoList} onTodoClick={handleTodoList} />
            <button onClick={handleShowAllClick} >Show All</button>
            <button onClick={handleShowCompletedClick} >Show Completed</button>
            <button onClick={handleShowNewClick} >Show New</button>

        </div>
    );
}

export default ListPage;