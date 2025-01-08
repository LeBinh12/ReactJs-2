import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DetailPage from './Page/DetailPage';
import ListPage from './Page/ListPage';
import NotFound from '../../Components/NotFound';

function TodoFeature(props) {

/* 
        Trong v6 thì chúng ta không cần gán lại link của tk ch nữa 
        Và để truyền tham số lên link thì ở Route của tk ch bạn phải có \* ở cuối path để nó gán giá trị
        nếu bạn muốn truyền theo kiểu http://localhost:3000/todos/page=1&size=10
        thì ta chỉ cần sử dụng link cha sao /todos?page=${page}&size=${size}
*/
    return (
        <div>
            
            <Routes>
                {/* Định nghĩa route cho danh sách todo */}
                <Route path='/' element={<ListPage />} />

                {/* Định nghĩa route cho chi tiết todo */}
                <Route path=':todoId' element={<DetailPage />} />

                <Route path='*' element={<NotFound></NotFound>}/>
            </Routes>
        </div>
    );
}

export default TodoFeature;
