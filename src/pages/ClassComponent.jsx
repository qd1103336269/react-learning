import React, { Component } from 'react';

class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }
    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                date: new Date()
            });
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timer); 
    }
    render() {
        let { date } = this.state;
        return (
            <div>
                <h3>ClassComponent</h3>
                当前时间: {date.toLocaleTimeString()}
            </div>
        );
    }
}



export default ClassComponent;