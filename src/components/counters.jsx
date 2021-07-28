import React, { Component } from 'react'
import Counter from './counter';
 class Counters extends   Component {
     
    state = {
        counters : [
            {id : 1, value:0},
            {id : 2, value:44},
            {id : 3, value:0},
            {id : 4, value:0}
        ]
    };
  handleDelete = (counterId) =>{
     const counters = this.state.counters.filter(c =>c.id!==counterId);
     this.setState({counters:counters})
  }
    
    render() {
        return (
            <div>
                {this.state.counters.map(counter=> (
                <Counter onDelete={this.handleDelete} value = {counter.value} selected = {true} key={counter.id}>
                    <h2 className="display-6">Counter #{counter.id}</h2>
                </Counter>))}
            </div>
        )
    }
}
export default Counters;