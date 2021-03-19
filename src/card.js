import React from "react"

const Card = (props) => {
    console.log(props);
    return(
        <div className="card carddesign mb-5 mb-lg-0">
        <img className="card-img-top" src={props.data.img} alt="Card image cap"/>
        <div className="card-body">
            <h4 className="card-title">{props.data.productName}</h4>
            <b className="card-title">Price: ${props.data.price}</b>
            <p className="card-text">Product Description</p>
            <p className="card-text">{props.data.description}</p>
            <a href="#" className="btn btn-info" onClick={() => { props.handleAddtoCart(props.data)} } >Add to cart</a>
        </div>
        </div>
    )
}

export default Card;