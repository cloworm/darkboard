import React, { FunctionComponent, ReactElement, useCallback } from 'react'
import { IconButton } from '@chakra-ui/react'

import { ToolType } from '../shared/state/board'

interface Props {
  label: ToolType
  icon: ReactElement
  selected: ToolType
  onClick: (option: ToolType) => void
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
      onClick={useCallback(() => onClick(label), [onClick, label])}
      variant="outline"
      borderWidth={0}
      isActive={label === selected}
      aria-pressed={label === selected}
    >
    </IconButton>
  )
}

export default ToolbarButton
