import React,{useState} from 'react';
import PropTypes from 'prop-types';
ColorBox.propTypes = {
    
};

function ColorBox(props) {

    const [color, setColor] = useState('white');

    return (
        <div>
            {color}

            <button onClick={() => setColor('black')}>Chọn màu đen</button>
            <button onClick={() => setColor('white')}>Chọn màu trắng</button>
        </div>
    );
}

export default ColorBox;