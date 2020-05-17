import React from 'react';


// const App = () => (<Counter></Counter>)


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        console.log("constructor")
    }
    handlePlusButton =()=>{
        console.log("setstate")
        this.setState({count: this.state.count + 1})
        console.log("setstate done")

    }
    handleMinusButton=()=>{
        console.log("1")

        this.setState({count : this.state.count -1})
    }


    render() {
        console.log("render")
        return (
            <React.Fragment>
                <div>count : {this.state.count}</div>
                <button onClick ={this.handlePlusButton}>+1</button>
                <button onClick = {this.handleMinusButton}>-1</button>
            </React.Fragment>
        )
    }
}


export default App;
