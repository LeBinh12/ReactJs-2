import AlbumFeatures from './Features/Album';
import TodoFeature from './Features/Todo';
import React, { useEffect } from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import ListPage from './Features/Todo/Page/ListPage';
import NotFound from './Components/NotFound';
import productsApi from './Api/productApi';
import CounterFeature from './Features/Couter';
import style from 'styled-components'
import Header from './Components/Header';
import { Button } from '@mui/material';
import { useSnackbar } from 'notistack';


/*
Props tức là dữ liệu truyền từ dữ liệu tk cha xuống con, và nó thể thay đổi đc ở tk con
*/

function App() {
  //------------------------------ Phần học ------------------------------

  useEffect(() => {
    const fetchProduct = async () => { 
      const productListId = await productsApi.get(1);
      const productList = await productsApi.getAll();
      console.log(productListId);
    }

    fetchProduct();
  },[]);

  const { enqueueSnackbar } = useSnackbar();

  const ShowNoti = () => { 
      enqueueSnackbar('Fell',{variant: 'error'})
  }

  return (
    <div className="App">
      <Header>
      </Header>
      <Button onClick={ShowNoti}>
          Shownoti
        </Button>
      {/*
           Khác nhau giữa Link và NavLink là khi chọn NavLink thì nó sẽ tự động tạo className để nhận biệt xem 
          Bạn đang chọn cái gì để dễ dàng thiết kế

          Về phần Switch thì nhưng phiên bản cũ có thể sai nhưng sau này phiên bản v6 trở lên nó đã thay thế
          bằng <Routes> chức năng nó cũng như switch, cùng 1 thời điểm nó chỉ render route đầu tiên khớp với URL


          Trong React Router v6, Redirect đã bị thay thế bằng Navigate, và cũng không có exact trong Routes
           vì nó đã hỗ trợ hết
      */}

      <Routes>
        <Route
          path="/"
          element={<CounterFeature />}
        />
        <Route
          path="/todos/*"
          element={<TodoFeature />}
        />
        <Route
          path="/albums"
          element={<AlbumFeatures />}
        />

        {/* Cách để handle ra trường hợp NotFound */}
        <Route
          path="*"
          element={<NotFound></NotFound>}
        />
      </Routes>
    </div>
  );

  //------------------------------ Phần tự tìm hiểu --------------------------------
  // const person = [
  //   {
  //     mssv: '0022410512',
  //     name: 'Lê Phước Bình',
  //     profession: '1',
  //     color: 'red',
  //   }, {
  //     mssv: '0022410513',
  //     name: 'Lê Phước Bình 2',
  //     profession: '2',
  //     color: 'blue',
  //   }
  // ]
  // const profession = [{
  //   id: '1',
  //   name: 'Information technology',
  // }, {
  //   id: '2',
  //   name: 'Math teacher'
  // }

  // ];
  // const colorList = [
  //   {
  //     color: 'red',
  //     description: 'Bỉ ngạn đỏ hồi ức đao thương'
  //   },
  //   {
  //     color: 'yellow',
  //     description: 'Bỉ ngạn vàng 3 mũi chín trăm ngàn'
  //   },
  //   {
  //     color: 'blue',
  //     description: 'Bỉ xanh hi vọng tương lai gặp lại'
  //   },
  // ];

  // // Phần tự tìm hiểu::::
  // function Getprofession(id) {
  //   const result = profession.find((item) => item.id === id);

  //   return result ? result.name : 'Không có dữ liệu này';
  // }

  // function GetColor(color) {
  //   // Đây là xét theo điều kiện bth
  //   colorList.map(colors => (
  //       colors.color === color &&
  //         <>
  //         <ColorBox color={color.color}/>
  //         <p>{color.description}</p>
  //     </>
  //   ))
  // }
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       {
  //         person.map(people => (
  //           <>
  //             <p>Mã số sinh viên: {people.mssv}</p>
  //             <p>Tên sinh viên: {people.name}</p>
  //             <p>Ngành nghề: {Getprofession(people.profession)}</p>
  //             <div>
  //               <h3>Ý nghĩa các màu hoa 'Bỉ Ngạn'</h3>
  //               {GetColor(people.color)}
  //             </div>
  //           </>
  //         ))

  //       }
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //       </a>

  //       {/* Render Array */}

  //       <h3>Ý nghĩa các màu hoa 'Bỉ Ngạn'</h3>

  //       <section>
  //       {colorList.map(colorBiNgan => (
  //         <>
  //           <ColorBox color={colorBiNgan.color} />
  //           <p>{colorBiNgan.description}</p>
  //         </>

  //       ))}
  //       </section>
  //     </header>
  //   </div>
  // );
}

export default App;
