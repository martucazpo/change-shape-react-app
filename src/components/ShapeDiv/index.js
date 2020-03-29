import React, {Component} from 'react';
import Button from '../Button';
import './shape-div.css';

class ShapeDiv extends Component {
    constructor(props){
        super(props);
            this.shapeDiv = React.createRef();
            this.changeShape = this.changeShape.bind(this);
            this.handleClick = this.handleClick.bind(this);
    }


    changeShape(){
        this.shapeDiv.current.className === 'round' ?
        this.shapeDiv.current.className = 'square' :
        this.shapeDiv.current.className = 'round';
    }

    handleClick(){
        this.changeShape()
    }

        render(){
            return(
                <div>
                    <div 
                    id="shapeDiv"
                    className = {this.props.className}
                    ref = {this.shapeDiv}
                    >
                    </div>
                    <div
                    className = 'btn-div'
                    >
                    <Button onClick = {this.handleClick}/>
                    </div>
                </div>
            )
    }
           
}

export default ShapeDiv;