import React from 'react';
import CustomButton from '../custom-button/CustomButton';
import { addItem } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';

import './CollectionItem.scss';

function CollectionItem({ item, addItem }) {
  console.log(item);
  const { name, price, imageUrl } = item;
  console.log(imageUrl);
  return (
    <div className='collection-item'>
      <div className='image' style={{ background: `url(${imageUrl})` }} />

      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton inverted onClick={() => addItem(item)}>
        Add to cart
      </CustomButton>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
