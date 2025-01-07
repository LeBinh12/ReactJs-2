import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Album from '../Album';


AlbumList.propTypes = {
    album_list: PropTypes.array.isRequired
}

function AlbumList(props) {
    const {album_list} = props;
    return (
        <ul className='album-List'>
            {album_list.map((album =>
                <li key={album.id}>
                    <Album album={album} />
                </li>
            ))
        }
        </ul>
    );
}

export default AlbumList;