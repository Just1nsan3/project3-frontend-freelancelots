import React from 'react';

const Photos = (props) => {

  const photoList = props.photos.map((photo, i) => {
    return (
      <li key={photo._id}>
        <span>{photo.title}</span>
        <small>{photo.description}</small>
        <button onClick={props.deletePhoto.bind(null, photo._id)}>Delete</button>
        <button onClick={props.showModal.bind(null, photo._id)}>Edit</button>
      </li>
      )
  });

  return (
    <ul>
      {photoList}
    </ul>
    )


}


export default Photos;



