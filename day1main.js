import { createElement, render, Component } from './toy-react'

class MyComponent extends Component {
    constructor() {
        super();
        this.state = {
            a: 1,
            b: 2 
        }
    }
    render() {
        return (<div>
            <h1> my component </h1>
            { this.children }
              <button onclick={ () => { this.setSate({ a: this.state.a + 1 }) }}>add</button>
              <span>
                  { this.state.a.toString() } 
              </span>
              <br></br>
              <span>
                  { this.state.b.toString() } 
              </span>
            </div>);
    }
}

render( <MyComponent id = "a" class = "c">
        <div>
        <strong> 加粗 </strong> </div>
        <div> 测试3 </div> <div> 测试4 </div> </MyComponent>, document.body);