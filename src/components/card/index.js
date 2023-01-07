import './card.css'
import Button from '@mui/material/Button';

const Cards =({products,  handleAddProduct}) => {
    return (
        <div className='Cards'>
            {
            products.map((products, index) =>(
                <div className='card'>
                <img src={products.image} className='card-img-top' alt="..."/>
                <div className='card-body'>
                    
                    <h5 className="card-title">{products.name}</h5>
                    <p className='"card-text"'>{products.price}/<small>₨</small></p>
                    <p className='cardrating'>{products.rating}⭐Rating</p>
                    <Button href="" className="cardbutton" variant='contained' onClick={ () =>handleAddProduct(products)}>Add to Cart</Button>
                </div>
                </div>
            ))
            }
        </div>
    )
}

export default Cards;
