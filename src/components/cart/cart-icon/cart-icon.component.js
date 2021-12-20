import React from 'react'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../../redux/cart/cart.selector'

import './cart-icon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../../assets/shopping-bag.svg'

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  )
}

const mapStateToProps = state => {
  //console.log('called')
  return { itemCount: selectCartItemsCount(state) }
}

const mapDispatchtoProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchtoProps)(CartIcon)
