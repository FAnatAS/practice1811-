import {Component} from 'react';


class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count:0,
      step:1,
      mode: true
    }  
    
  }

  math = ()=>{
    const {mode} = this.state;
    console.log({mode})
    mode ? this.maths=this.setState({count: this.state.count+this.state.step}) : this.maths=this.setState({count: this.state.count-this.state.step})

  }

  changeMode =()=>{
  this.setState({mode:!this.state.mode
  })
  console.log(this.state.mode)
}

  componentDidMount(){
    this.math()
    
  }

  componentDidUpdate(){
  }

  render() {
    const {count} = this.state;
    return (
      <>
      <section className="counters">
      <p className="counterp">
        {count}
      </p>
      <button onClick={this.math}>{this.state.mode?"Add":"Sub"}</button>
      <button onClick={this.changeMode}>Mode</button>
      
      </section>
      </>
       
    );
  }
}

export default Counter;