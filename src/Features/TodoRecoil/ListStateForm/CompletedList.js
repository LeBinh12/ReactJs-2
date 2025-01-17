import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { completedListState, newListState } from '../ListState/ListState';

const CompletedList = () => {
  const completedList = useRecoilValue(completedListState);

  return (
    <div className='col'>
      <h3>Completed</h3>
      <ul>
        {completedList.map((item) => (
          <li key={item.id}>
            {item.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompletedList;
