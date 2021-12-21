import React, {useContext} from 'react';
import AppContext from '../context/AppContext';
import '../styles/OrderItem.scss';
import IconClose  from "@icons/icon_close.png";

const OrderItem = ({product}) => {
	const { removeFromCart } = useContext(AppContext);

	const remove = (product)=>{
		removeFromCart(product);
	}
	
	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt="bike" />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img src={IconClose} onClick={()=>{
				remove(product)
			}} alt="close" />
		</div>
	);
}

export default OrderItem;