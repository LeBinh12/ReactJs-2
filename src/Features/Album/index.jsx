import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeatures.propTypes = {
    
};

function AlbumFeatures(props) {

    const album_list = [
        {
            id: 1,
            name: 'Thả mình vào dòng chảy của',
            thumbnail_url: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/9/5/f/0/95f0b5835087613305f8732c27346db2.jpg'
        },
        {
            id: 2,
            name: 'Lofi Chill nghe là nghiện',
            thumbnail_url: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/4/5/4/9/45493e859cde749c75fb4377c14d0db3.jpg'
        },
        {
            id: 3,
            name: 'Đắm say với nỗi buồn',
            thumbnail_url: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/5/6/c/d/56cd9130ab4c54b3d3e74ec6d656ea04.jpg'
        },
        
    ];

    return (
        <div>
            <AlbumList album_list={album_list} />
        </div>
    );
}

export default AlbumFeatures;