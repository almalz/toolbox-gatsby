import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const CategoryItem = styled('div')`
  ${tw`py-2 px-4 hover:bg-orange-200 font-sans rounded-full`}
`

export default (props) => (
  <CategoryItem>
    {console.log('PROPS: ', props)}
    {props.category.name}
  </CategoryItem>
)