import React, { Component } from 'react'
   class Counter extends Component {
  
    state={
            value : this.props.value
    }

       handleIncrement=product=> {
        console.log(product);
            this.setState({value:this.state.value + 1 });
   }
       
      
    render() {
         return (
            <div>
                {this.props.children}
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button  onClick={()=>this.handleIncrement({product:this.state.value})}
                 className='btn btn-secondary btn-sm'>Increment</button>
                 <button onClick={()=>this.props.onDelete(this.props.id)} 
                 className="btn-danger brn-sm m-2">Delete</button>
            </div>
        )
    }
      getBadgeClasses() {
          let classes = "badge m-2 badge-";
          classes += (this.state.value === 0) ? 'warning' : 'primary';
          return classes;
      }

    formatCount(){
        const {value: count} = this.state;
        return count===0?'Zero':count;
    }
     
}

export default Counter;