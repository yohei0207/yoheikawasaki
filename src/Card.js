import React from "react";

class Card extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <h5>{this.props.title}</h5>
            </div>
        );
    }
}

export default Card;