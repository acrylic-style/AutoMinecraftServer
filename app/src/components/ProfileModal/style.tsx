import styled from 'styled-components'
import { Dropdown as _Dropdown } from '../atoms/Form'

export const Dropdown = styled(_Dropdown).attrs({
  menuStyle: {
    height: 200,
    overflowX: 'hidden',
  }
})``