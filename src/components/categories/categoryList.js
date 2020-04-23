import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

import CategoryItem from './CategoryItem'

const CategoryList = styled('ul')`
  ${tw`w-1/4 bg-green-100 mx-4`}
`

export default (props) => {
  return (
    <CategoryList>
      {props.categories.map(cat => <CategoryItem
        key={cat.node.id}
        category={cat.node}
        handleClickCategory={props.handleClickCategory}
      />)}
    </CategoryList>
  )
}