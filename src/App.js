import { useState } from 'react';
import './App.css';
import Home from './components/home';
import Cards from './components/card'; 
import Header from './components/header';
import Cart from './components/cart';
import Footer from './footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const ProductList = [
  {
    id: 1,
    name: 'Sky Blue Cotton',
    image: 'https://cdn.shopify.com/s/files/1/0585/6349/4070/products/Skyblue-Solid-Cotton-Shirt_6_800x.jpg?v=1668407289',
    rating: '4.2',
    price: '999'
  },
  {
    id: 2,
    name: 'Red And Blue Casual Half Sleeves',
    image: 'https://api.powerlook.in/pub/media/catalog/product//1/_/1_666_2.jpg',
    rating: '3.8',
    price: '499'
  },
  {
    id: 3,
    name: 'Raglan Crew Neck Sweatshirt',
    image: 'https://asset1.cxnmarksandspencer.com/is/image/mands/SD_03_T28_1032M_J1_X_EC_0?$Intl_PDP_Tab$',
    rating: '4.0',
    price: '2499'
  },
  {
    id: 4,
    name: 'Mid Rise Relaxed Jeans',
    image: 'https://assets.ajio.com/medias/sys_master/root/20220909/bcj3/631ae1c4aeb269dbb37deeba/-473Wx593H-462146343-blue-MODEL4.jpg',
    rating: '3.5',
    price: '1140'
  },
  {
    id: 5,
    name: 'Apexo Walking Shoes',
    image: 'https://assets.ajio.com/medias/sys_master/root/20220504/lz9A/62718619aeb26921af5314c3/-473Wx593H-469107261-navy-MODEL4.jpg',
    rating: '4.0',
    price: '2089'
  },
  {
    id: 6,
    name: 'Heritage Mountain Typographic Print Hoodie',
    image: 'https://assets.ajio.com/medias/sys_master/root/20220713/xjMy/62cedda3aeb26921af78736e/-473Wx593H-410307182-5ao-MODEL3.jpg',
    rating: '4.4',
    price: '3639'
  },
  {
    id: 7,
    name: 'Shorts with Elasticated Waist',
    image: 'https://assets.ajio.com/medias/sys_master/root/20220810/WPZE/62f3c814aeb26921afdb25bd/-473Wx593H-469164759-blue-MODEL3.jpg',
    rating: '3.5',
    price: '750'
  },
  {
    id: 8,
    name: 'Water-Resistant Analogue Watch',
    image: 'https://assets.ajio.com/medias/sys_master/root/20220528/aNup/6291dc45f997dd03e2435e79/-473Wx593H-4927960970-multi-MODEL3.jpg',
    rating: '3.9',
    price: '3095'
  }
];

function App() {
  const [products] = useState(ProductList);
  const [cartItems, setcartItems] = useState([])
   

  const handleAddProduct = (product) =>{
  const productExist = cartItems.find((item) => item.id === product.id);
    if(productExist){
      setcartItems(cartItems.map((item) => item.id === product.id ?
      {...productExist, quantity: productExist.quantity + 1 }: item)
      )
    }
    else{
      setcartItems([...cartItems, {...product, quantity: 1 }])
    }
  }

  const handleRemoveproduct =(product) =>{
    const productExist = cartItems.find((item) => item.id === product.id);
    if(productExist.quantity === 1){
      setcartItems(cartItems.filter((item)=> item.id !== product.id));
    } else{
      setcartItems(
        cartItems.map((item)=> item.id === product.id ? {...productExist, quantity: productExist.quantity - 1 }: item)
      );
    }
  }
  return (
    <BrowserRouter>
    <div className='app'>
      <Header />
      <Routes>
      <Route path = "/" element = {<Home />}/> 
      <Route path = "/card" element = {<Cards products={products} cartItems={cartItems} handleAddProduct={handleAddProduct} />} />
      <Route path = "/cart" element = {<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveproduct={handleRemoveproduct}/>} />
      </Routes>
      <Footer />
    </div >
    </BrowserRouter>
  );
}

export default App;
