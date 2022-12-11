import './card.css'
import { Link } from 'react-router-dom';

const Cards =({products,  handleAddProduct}) => {
    return (
        <div className='Cards'>
            {
            products.map((products, index) =>(
                <div className='card'>
                <img src={products.image} className='card-img-top' alt="..."/>
                <div className='card-body'>
                    
                    <h5 className="card-title">{products.name}</h5>
                    <p className='"card-text"'>{products.price}/-₨</p>
                    <p className='cardrating'>{products.rating}⭐Rating</p>
                    <p> home  </p>
                    <button href="" className="cardbutton" onClick={ () =>handleAddProduct(products)}>Add to Cart</button>
                </div>
                </div>
            ))
            }
        </div>
    )
}

export default Cards;
