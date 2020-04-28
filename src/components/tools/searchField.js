import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const SearchFiled = styled.input([tw`px-4 py-2 focus:outline-none border rounded-full`])

export default (props) => (
  <form>
    <SearchFiled type="text" placeholder="search..." onChange={props.handleSeachTyping} />
  </form>
)