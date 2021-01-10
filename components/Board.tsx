import { FunctionComponent } from 'react'
import { Box } from '@chakra-ui/react'
import useIsMounted from '../shared/hooks/useIsMounted'

import dynamic from 'next/dynamic'
import Toolbar from './Toolbar'

const SketchField = dynamic(
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

// const Tools = dynamic(
//   () => import('react-sketch2').then((pkg) => pkg.Tools),
//   {
//     ssr: false
//   }
// )

// const { SketchField, Tools } = ReactSketch


const Board: FunctionComponent = () => {
  const isMounted = useIsMounted()
  // const boardCanvas = useRef<any>()

  if (!isMounted) return <div></div>

  return (
    <Box position="relative">
      <SketchField
        width='100vw'
        height='100vh'
        backgroundColor="##121212"
        tool={Tools.PENCIL}
        lineColor='#fff'
        lineWidth={3}
      />
      <Box position="absolute" top="5" left="10">
        <Toolbar />
      </Box>
    </Box>
    // <canvas ref={boardCanvas} width={1440} height={900} />
  )
}

export default Board
