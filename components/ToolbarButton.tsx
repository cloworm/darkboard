import { FunctionComponent } from 'react'
import { IconButton } from '@chakra-ui/react'

import Selected from '../shared/types/Selected'

interface Props {
  label: Selected
  icon: any
  selected: Selected
  onClick: (option: Selected) => void
}

const ToolbarButton: FunctionComponent<Props> = ({
  label,
  icon,
  selected,
  onClick
}) => {
  return (
    <IconButton colorScheme={label === selected ? 'brand' : 'black'} aria-label={label} icon={icon} borderRadius={0} onClick={() => onClick(label)} variant="outline" borderWidth={0}></IconButton>
  )
}

export default ToolbarButton
