import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const CategoryItem = styled('li')`
  ${tw`py-2 px-4 hover:bg-gray-200 font-sans rounded-full truncate`}
`

export default (props) => (
  < CategoryItem onClick={() => props.handleClickCategory(props.category)} >
    {props.category.label}
  </CategoryItem >
)