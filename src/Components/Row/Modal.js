import React, { Component } from 'react'
import './modal.css'

class Modal extends Component {
    render() {
        {
            console.log(this.props.pop.title)
        }
        return (
            <div className="modal">
                <div className="modal_content">
                    <img src={`${"https://image.tmdb.org/t/p/original"}${this.props.pop.poster_path}`} alt='' className="modal_image" />
                    <div className="modal_text">
                        <span className="fa fa-times" onClick={()=>{this.props.set(false)}}></span>
                        <h2>{this.props.pop?.title || this.props.pop?.name}</h2>
                        <p>{this.props.pop.overview}</p>
                        <h4>IMDB : {this.props.pop.vote_average}/10</h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;
