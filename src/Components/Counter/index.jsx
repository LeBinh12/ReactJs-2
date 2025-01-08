import { useState } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

Counter.propTypes = {
    
};

function Counter(props) {

    const [ count, setCount ] = useState(0);

    return (
        <div>
            {count}
            <button onClick={() => setCount(x => x+1)}>Tăng giá trị lên 1</button>
        </div>
    );
}





export default Counter;