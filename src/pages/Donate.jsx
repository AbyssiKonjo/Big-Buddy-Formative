import {useContext, useEffect, useState} from 'react';
import wooCommerceApi from '../woocommerceApi';
import { CartContext } from '../context/CartContext';
import Seo from '../components/Seo';

// Import Component
import PageHeader from '../components/PageHeader';

const Donate = () => {
    const [products, setProducts] = useState([]);
    const {addToCart} = useContext(CartContext);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await wooCommerceApi.get('/product');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products');
            }
        };
        fetchProduct();
    }, []);

    const handleAddToCart = (product) => {
        addToCart(product);
    };
  return (
    <>
      <Seo
        title='Donate Now - Big Buddy Formative'
        description='Browse my amazing wordpress Post for my custom site.'
        url={window.location.href}
      />
      <div id='pageContent'>
        <PageHeader title='Donate'/>
        <div id='contentInfo'>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {/* Product Name */}
                        <h2>{product.name}</h2>

                        {/* Product Price */}
                        <p>Price: ${(product.prices.price /100).toFixed(2)}</p>

                        <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </>
  )
}

export default Donate
