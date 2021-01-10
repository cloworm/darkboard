import React, { FunctionComponent, ReactElement } from 'react'
import { IconButton } from '@chakra-ui/react'

import Selected from '../shared/types/Selected'

interface Props {
  label: Selected
  icon: ReactElement
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
    <IconButton
      colorScheme={label === selected ? 'brand' : 'black'}
      aria-label={label}
      icon={icon}
      borderRadius={0}
      onClick={() => onClick(label)}
      variant="outline"
      borderWidth={0}
      isActive={label === selected}
      aria-pressed={label === selected}
    >
    </IconButton>
  )
}

export default ToolbarButton
