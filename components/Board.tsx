import React, { FunctionComponent, ComponentType } from 'react'
import { Box } from '@chakra-ui/react'
import useIsMounted from '../shared/hooks/useIsMounted'

import dynamic from 'next/dynamic'
import Toolbar from './Toolbar'

  interface SketchFieldProps {
    tool?: Tools
    lineColor?: string
    lineWidth?: string
    fillColor?: string
    backgroundColor?: string
    undoSteps?: number
    imageFormat?: string
    width?: number|string
    height?: number|string
    value?: JSON
    defaultValue?: JSON
    widthCorrection?: number
    heightCorrection?: number
  }

const SketchField: ComponentType<SketchFieldProps> = dynamic(
  () => import('react-sketch2').then((pkg) => pkg.SketchField),
  {
    ssr: false
  }
)

enum Tools {
  SELECT = 'select',
  PENCIL = 'pencil',
  CIRCLE = 'circle',
  RECTANGLE = 'rectangle',
  PAN = 'pan'
}

const Board: FunctionComponent = () => {
  const isMounted = useIsMounted()

  if (!isMounted) return <div></div>

  return (
    <Box position="relative">
      <SketchField
        width='100vw'
        height='100vh'
        backgroundColor="##121212"
        tool={Tools.PENCIL}
        lineColor='#fff'
        lineWidth="3"
      />
      <Box position="absolute" top="5" left="10">
        <Toolbar />
      </Box>
    </Box>
  )
}

export default Board
