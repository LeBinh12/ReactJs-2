import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.scss';


TodoList.propTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
    todoList: [],
    onTodoClick: null,
}

function TodoList(props) {

    const { todoList, onTodoClick } = props;

    const handleTodoListClick = (todo, index) => {
        if (!onTodoClick) return;
        onTodoClick(todo, index);
    }


    return (
        <ul className='todo-list'>
            {todoList.map((todo, index) => (
                <li key={todo.id}
                    className={classNames({
                        'todo-item': true,
                        completed: todo.status === 'completed'
                    })} // nếu completed thỏa điều kiện trên thi mới xuất hiện className có tên là todo-item
                        // còn những dữ liệu không thỏa điều kiện thì sẽ khoog dùng className đó

                    onClick={() => handleTodoListClick(todo,index)}
                >
                    
                    {todo.title}    

                </li>
            ))}
        </ul>
    );
}

export default TodoList;