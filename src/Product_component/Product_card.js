import React from "react";

//this.props.titleで参照

class Product_card extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

            <div class="card col-md m-5 my-card">
                <div class="card-body">
                    <h5><strong>{this.props.title}</strong></h5>

                
                    {this.props.tags.map((tag) => {
                        return (
                            <span class="badge badge-pill badge-success">{tag}</span>

                        );
                    })}


                    <p></p>
                    <img src={this.props.img} class="img-fluid" />
                    <p></p>
                    <button type="button" class="btn btn-success" data-toggle="modal" data-target={this.props.id_target}>More</button>

                    <div class="modal fade" id={this.props.id_num} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenteredLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalCenteredLabel">{this.props.title}</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    {this.props.tags.map((tag) => {
                                        return (
                                            <span class="badge badge-pill badge-success">{tag}</span>
                                        );
                                    })}
                                    <p></p>
                                    <img src={this.props.img} class="img-fluid" />
                                    <p></p>
                                    <p>{this.props.description}</p>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default Product_card;