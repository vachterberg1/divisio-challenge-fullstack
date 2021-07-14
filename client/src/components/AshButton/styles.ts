import styled from 'styled-components'
import ReactTooltip from 'react-tooltip'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Tooltip = styled(ReactTooltip)`
  max-width: 64px !important;
  max-height: 59px !important;
`
export const ImageAsh = styled.img`
  cursor: pointer;
`
