import React from 'react'
import { connect } from 'react-redux'
import { selectCartItems } from '../../../redux/cart/cart.selector'
import './cart-dropdown.styles.scss'

import CustomButton from '../../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'

const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map(item => {
        return <CartItem key={item.id} item={item} />
      })}
    </div>
    <CustomButton inverted>GO TO CHECKOUT</CustomButton>
  </div>
)

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
})

export default connect(mapStateToProps, null)(CartDropdown)
