import React, { FunctionComponent, useCallback } from 'react'
import { Box, Icon } from '@chakra-ui/react'
import { IoText, IoBrush } from 'react-icons/io5'

import ToolbarButton from './ToolbarButton'
import useBoard from '../shared/hooks/useBoard'
import { ToolType } from '../shared/state/board'

const Draw = <Icon as={IoBrush} />
const TextIcon = <Icon as={IoText} />

const Toolbar: FunctionComponent = () => {
  const {
    selectedTool,
    setSelectedTool
  } = useBoard()
  // const [selected] = useState<Selected>(Selected.DRAW)

  const handleClick = useCallback((option) => {
    setSelectedTool(option)
  }, [setSelectedTool])

  return (
    <Box bg="rgba(255, 255, 255, 0.6)" borderRadius={10} overflow="hidden">
      <ToolbarButton label={ToolType.DRAW} icon={Draw} selected={selectedTool} onClick={handleClick}  />
      <ToolbarButton label={ToolType.TEXT} icon={TextIcon} selected={selectedTool} onClick={handleClick}  />
    </Box>
  )
}

export default Toolbar
