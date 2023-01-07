import './cart.css'
import Button from '@mui/material/Button';


const Cart = ({cartItems, handleRemoveproduct})=> {
    return (
        <div className='CartItems'>
            <div className='cart-items-header'>Your Cart</div>
            
            {
            cartItems.length === 0 && (
            <div className='empty-cart'>Your FlipZOn Cart is empty</div>
            )}

                <div className='cart-item-container'>
                    {
                    cartItems.map((item, index) =>(
                        <div key ={item.id} className="cart-item-list col-10">
                            <img className='cart-item-image' src={item.image} alt ={item.name}/>
                            <div className='cart-items-name col-4'>
                            {item.name} </div>
                            <div className='cart-items-price'>
                            {item.price}/-₨</div>
                            <Button variant="contained" className='buynow-Bn'>Buy now</Button>
                            <Button variant="contained" className='Remove-button'onClick={()=> handleRemoveproduct(item)}>Remove Cart</Button>
                        </div>
                        
                    ))}
                </div>

        </div>
    )
}

export default Cart;