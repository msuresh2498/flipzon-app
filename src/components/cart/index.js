import './cart.css'


const Cart = ({cartItems})=> {
    return (
        <div className='CartItems'>
            <div className='cart-items-header'>CART ITEMS</div>
            
            {
            cartItems.length === 0 && (
            <div className='empty-cart'>Cart Empty</div>
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
                            <button className='buynow-button'>Buy now</button>
                        </div>
                        
                    ))}
                </div>

        </div>
    )
}

export default Cart;