import React from 'react';
import Rating from './rating';
import Review from './review';
import ReviewList from './reviewlist';

export default class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            id: props.id,
            title: props.title,
            poster: props.poster,
            summary: props.summary

        };
    }

    render() {
        return(
            <div className="row">
                <div className="card w-75">
                    <div className="card-header bg-dark text-white">
                        {this.state.title}
                    </div>
                    <br/>
                    <div className="card-header bg-light">
                        <img src={this.state.poster} width="300"/>
                    </div>
                    <br/>
                    <div className="card-body">
                        <h6><b>Summary</b></h6>
                        {this.state.summary}
                        <br/>
                        <br/>
                        <h6><b>Number of Positive Reviews</b></h6>
                        <Rating />
                    </div>
                    <br/>
                    <div className="card-footer"> 
                    <h6><b>Leave a Review Here</b></h6>
                    <ReviewList />
                    </div>
                </div>
            </div>
        );
    }
}
