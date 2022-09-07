import React, {Component} from "react";

// class component card1 vs fuctional component card
class Card1 extends Component{
    render(){
        return(
            <div>
                <h4>{this.props.name}</h4>
            </div>     
        );
    }
}
export default  Card1;