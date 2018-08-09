import React, {Component} from 'react';
import '../modal.css';


class Modal extends Component {
  constructor(props) {
    super(props);

    // set initial state
    this.state = {
      isModalOpen: false,
      isInnerModalOpen: false
    }

    // bind functions
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);

  }
    
  // render modal
  render() {
    return (
      <div>
        <div onClick={this.props.closeModal}>
        </div>
        <div onClick={this.props.closeModal}>
        </div>
      </div>
    )
  }
}



// class App extends Component {
//   constructor(props) {
//     super(props);
// }
    

//   // close modal (set isModalOpen, true)
//   closeModal() {
//     this.setState({
//       isModalOpen: false
//     })
//   }

//   // open modal (set isModalOpen, false)
//   openModal() {
//     this.setState({
//       isModalOpen: true
//     })
//   }

//   // render login
//   render() {
//     return (
//       <div style={mainStyle.app}>
//         <button style={mainStyle.button} onClick={this.openModal}>Login</button>
//         <Modal
//           isModalOpen={this.state.isModalOpen}
//           closeModal={this.closeModal}
//           style={modalStyle}
//         >

//           <form className="login" onSubmit={this.handleSubmit}>
//             <h1>Register:</h1>
//             <label>
//             Username:
//             <input type='text' name='username' onChange={this.handleChange} />
//           </label>
//           <label>
//             Password:
//             <input type='password' name='password' onChange={this.handleChange} />
//           </label>
          
          
                  
//           <button onClick={this.closeModal}>Cancel</button>
//           <input type='submit' value='Register' />
//         </form>


//         </Modal>

//       </div>
//     );
//   }
// }

export default Modal;