import logo from './logo.svg';
import './App.css';
import ColorBox from './Component/Color';
/*
Props tức là dữ liệu truyền từ dữ liệu tk cha xuống con, và nó thể thay đổi đc ở tk con
*/

function App() {

  //------------------------------ Phần học ------------------------------
  const name = 'Lê Phước Bình';
  const age = '20';
  const student = {
    name: 'Information Technology'
  };
  const colorList = [
    'red',
    'blue',
    'green',
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Họ tên: {name} - {age} tuổi</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>

        {/* Condition cách 1*/
          age >= 18 ? <p> trên 18</p> : <p> Dưới 18 </p>

          /* Condition cách 2*/
        } {
          age >= 18 &&
          <>
            <p> trên 18</p>
            <p> trên 18</p>
            <p> trên 18</p>

          </>
        } {
          age <= 18 &&
          <>
            <p> Dưới 18</p>
            <p> Dưới 18</p>
            <p> Dưới 18</p>

          </>
        }
        


        

        {/* Render object */
          <p>Ngành học: {student.name}</p>
        }
        {/* Render Array */}



        <h3>Ý nghĩa các màu hoa 'Bỉ Ngạn'</h3>

        <section>
          {colorList.map(colorBiNgan => (
            <>
              <li Key={colorBiNgan}>{colorBiNgan}</li>
              <ColorBox color={colorBiNgan} />
            </>
                  
          ))}
        </section>
      </header>
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
