import React from 'react'
import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../../redux/directory/directory.selectors'

import MenuItem from '../menu-item/MenuItem'

import './Directory.scss'

const Directory = ({ sections }) => (
  <div className='directory-menu'>
    {
      /*this.state.sections.map(({ title, imageUrl, id, size, linkUrl }) => {
          return <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
        })*/
      sections.map(({ id, ...otherSectionsProps }) => {
        return <MenuItem key={id} {...otherSectionsProps} />
      })
    }
  </div>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)
