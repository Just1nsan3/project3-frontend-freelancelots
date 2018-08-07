import React, { Component } from 'react';


const EditPhoto = (props) =>  {

  return (
    <div>
      <h4> Edit Photo</h4>
      <form onSubmit={props.closeAndEdit}>
        <label>
          Edit Photo:
          <input type="text" name="title" onChange={props.handleFormChange} value={props.PhotoToEdit.title}/>
        </label>
        <label>
          Edit Description:
          <input type="text" name="description" onChange={props.handleFormChange} value={props.PhotoToEdit.description}/>
        </label>
        <input type='Submit'/>
      </form>
    </div>

    )
  }

export default EditPhoto;