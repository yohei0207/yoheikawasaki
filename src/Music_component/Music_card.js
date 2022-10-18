import React from "react";

//this.props.titleで参照

class Music_card extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

            <div class="card col-md m-5 my-card">
                <div class="card-body">
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item"
                            src={this.props.url} allowfullscreen>

                        </iframe>
                    </div>
                   
                    {this.props.tags.map((tag) => {
                        return (
                            <span class="badge badge-pill badge-success">{tag}</span>
                            
                        );
                    })}
                    <h5 class="card-text">{this.props.title} / {this.props.artist}</h5>
                </div>
            </div>



        );
    }
}

export default Music_card;