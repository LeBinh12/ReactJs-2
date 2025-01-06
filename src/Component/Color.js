import React from 'react';
import PropTypes from 'prop-types';

function ColorBox(props)
{
    const {color} = props;
    return (
        <div className='box' style={{backgroundColor: color}}></div>
    )
}


ColorBox.prototype = {
    color: PropTypes.string.isRequired, // Định nghĩa này là bắt buộc bạn phải truyền tham số và vào

    
    // rounded: PropTypes.string, // bạn sử dụng rounded nếu bạn muốn khi không truyền tham số nào 
    // thì mặt định nó màu đỏ mà bạn muốn hiển thị khi không truyền tham số
}

ColorBox.defaultProps = {
    rounded: 'red', //
}




export default ColorBox;