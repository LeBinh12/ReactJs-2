import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './CouterSilce';

CounterFeature.propTypes = {
    
};

function CounterFeature(props) {
    const counter = useSelector(state => state.count);
    const dispatch = useDispatch()

    const handleIncreaseClick = () => { 
        const action = increase();
        dispatch(action);   
    }

    const handleDecreaseClick = () => { 
        const action = decrease();
        dispatch(action);   
    }

    return (
        <div>
            Count: {counter}
            <div>
                <button onClick={handleIncreaseClick}>Add 1</button>
                <button onClick={handleDecreaseClick}>Tru 1</button>
            </div>
        </div>
    );
}

export default CounterFeature;