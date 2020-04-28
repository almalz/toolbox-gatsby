import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

import CategoryItem from './CategoryItem'

const CategoryList = styled.ul([tw`w-1/4 shadow-sm mx-4 py-4 px-4 border rounded-lg`])

const categoryAll = {
  name: 'all',
  label: 'All',
  id: -1
}

export default (props) => {
  return (
    <CategoryList>
      <CategoryItem category={categoryAll} handleClickCategory={props.handleClickCategory} />
      {props.categories.map(cat => <CategoryItem
        key={cat.node.id}
        category={cat.node}
        handleClickCategory={props.handleClickCategory}
      />)}
    </CategoryList>
  )
}