import React from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { inprogressListState, completedListState } from '../ListState/ListState';

const InProgressList = () => {
  const inProgressList = useRecoilValue(inprogressListState);
  const setCompleted = useSetRecoilState(completedListState);
  const handleClick = (id) => () => {
    setCompleted(id);
  };

  return (
    <div className='col'>
      <h3>In-Progress</h3>
      <ul>
        {inProgressList.map((item) => (
          <li key={item.id}>
            {item.content}
            <button onClick={handleClick(item.id)}>Completed</button>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default InProgressList;
