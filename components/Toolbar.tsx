import { FunctionComponent, useCallback, useState } from 'react'
import { Box, Icon } from '@chakra-ui/react'
import { IoText, IoBrush } from 'react-icons/io5'

import ToolbarButton from './ToolbarButton'
import Selected from '../shared/types/Selected'

const Draw = <Icon as={IoBrush} />
const TextIcon = <Icon as={IoText} />

const Toolbar: FunctionComponent = () => {
  const [selected, setSelected] = useState<Selected>(Selected.DRAW)

  const handleClick = useCallback((option) => {
    setSelected(option)
  }, [])

  return (
    <Box bg="rgba(255, 255, 255, 0.6)" borderRadius={10} overflow="hidden">
      <ToolbarButton label={Selected.DRAW} icon={Draw} selected={selected} onClick={handleClick}  />
      <ToolbarButton label={Selected.TEXT} icon={TextIcon} selected={selected} onClick={handleClick}  />
    </Box>
  )
}

export default Toolbar
