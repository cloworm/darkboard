import React, { FunctionComponent, useCallback } from 'react'
import { Box, Icon } from '@chakra-ui/react'
import { IoText, IoBrush, IoExpandOutline } from 'react-icons/io5'

import ToolbarButton from './ToolbarButton'
import useBoard from '../shared/hooks/useBoard'
import { ToolType } from '../shared/state/board'

const DrawIcon = <Icon as={IoBrush} />
const SelectIcon = <Icon as={IoExpandOutline} />
const TextIcon = <Icon as={IoText} />

const Toolbar: FunctionComponent = () => {
  const {
    selectedTool,
    setSelectedTool
  } = useBoard()

  const handleClick = useCallback((option) => {
    setSelectedTool(option)
  }, [setSelectedTool])

  return (
    <Box bg="rgba(255, 255, 255, 0.6)" borderRadius={10} overflow="hidden">
      <ToolbarButton label={ToolType.Pencil} icon={DrawIcon} selected={selectedTool} onClick={handleClick}  />
      <ToolbarButton label={ToolType.Text} icon={TextIcon} selected={selectedTool} onClick={handleClick}  />
      <ToolbarButton label={ToolType.Select} icon={SelectIcon} selected={selectedTool} onClick={handleClick}  />
    </Box>
  )
}

export default Toolbar
