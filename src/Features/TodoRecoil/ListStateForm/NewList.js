import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { inprogressListState, newListState } from '../ListState/ListState';
const NewList = () => {
  const newList = useRecoilValue(newListState);
  const setInprogress = useSetRecoilState(inprogressListState);
  const handleClick = (id) => () => {
    setInprogress(id);	// truyền id vào
  };
  return (
    <div className='col'>
      <h3>New</h3>
      <ul>
        {newList.map((item) => (
          <li key={item.id}>
            {item.content}
            <button onClick={handleClick(item.id)}>In-Progress</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewList;
