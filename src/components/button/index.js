import React, { Component } from 'react';


class Button extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mode:true,

    }
  }

      changeMode =()=>{
        const {mode}=this.state;
      this.setState({mode:false
      })
    }

    

  render() {
    return (
      <div>
  
    
  
      </div>
    );
  }
}

export default Button;
