import React, { useState, useEffect, memo } from 'react'
import PropTypes from 'prop-types'

// Single List Item
const WrappedSingleListItem = ({ index, isSelected, onClickHandler, text }) => {
  WrappedSingleListItem.propTypes = {
    index: PropTypes.number.isRequired,
    isSelected: PropTypes.bool.isRequired,
    onClickHandler: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
  }
  return (
    <li
      style={{ backgroundColor: isSelected ? 'green' : 'red' }}
      onClick={onClickHandler(index)}
    >
      {text}
    </li>
  )
}

const SingleListItem = memo(WrappedSingleListItem)

// List Component
const WrappedListComponent = ({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState()

  useEffect(() => {
    selectedIndex(null)
  }, [items])

  const handleClick = (index) => {
    selectedIndex(index)
  }

  //   WrappedListComponent.propTypes = {
  //     items: PropTypes.array(
  //       PropTypes.shape({
  //         text: PropTypes.string.isRequired,
  //       }),
  //     ),
  //   }

  WrappedListComponent.defaultProps = {
    items: null,
  }

  return (
    <ul style={{ textAlign: 'left' }}>
      {items.map((item, index) => (
        <SingleListItem
          onClickHandler={() => handleClick(index)}
          text={item.text}
          index={index}
          isSelected={setSelectedIndex}
        />
      ))}
    </ul>
  )
}

const List = memo(WrappedListComponent)

export default List
