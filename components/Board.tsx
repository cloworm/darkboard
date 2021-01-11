import React, { FunctionComponent, useEffect, useRef, useCallback, useState } from 'react'
import { Box } from '@chakra-ui/react'
import useIsMounted from '../shared/hooks/useIsMounted'
import { fabric } from 'fabric'

// import dynamic from 'next/dynamic'
import Toolbar from './Toolbar'
import useBoard from '../shared/hooks/useBoard'
import { ToolType } from '../shared/state/board'

//   interface SketchFieldProps {
//     ref?: any
//     // ref?: (e: any) => any
//     innerRef?: any
//     tool?: ToolType
//     lineColor?: string
//     lineWidth?: string
//     fillColor?: string
//     backgroundColor?: string
//     undoSteps?: number
//     imageFormat?: string
//     width?: number|string
//     height?: number|string
//     value?: JSON
//     defaultValue?: JSON
//     widthCorrection?: number
//     heightCorrection?: number
//   }

// const SketchField: ComponentType<SketchFieldProps> = dynamic(
//   () => import('react-sketch2').then((pkg) => pkg.SketchField),
//   {
//     ssr: false
//   }
// )

// const SketchFieldForwardRef = forwardRef((props, ref) => (
//   <SketchField {...props} ref={ref} />
// ))

const Board: FunctionComponent = () => {
  const [canvas, setCanvas] = useState<any>('')
  const { selectedTool } = useBoard()
  const isMounted = useIsMounted()

  const initCanvas = () => {
    const canvas = new fabric.Canvas('canvas', {
      height: 800,
      width: 800,
      backgroundColor: '#121212',
      isDrawingMode: true,
      freeDrawingCursor: 'none'
    })

    canvas.freeDrawingBrush.width = 10
    canvas.freeDrawingBrush.color = '#9f9'

    const mousecursor = new fabric.Circle({
      left: 0,
      top: 0,
      radius: canvas.freeDrawingBrush.width / 2,
      fill: canvas.freeDrawingBrush.color,
      originX: 'right',
      originY: 'bottom',
    })

    canvas.add(mousecursor)

    // Cursor in canvas
    canvas.on('mouse:move', event => {
      mousecursor.top = event.e.layerY + mousecursor.radius
      mousecursor.left = event.e.layerX + mousecursor.radius
      canvas.renderAll()
    })

    // Cursor out of canvas
    canvas.on('mouse:out', () => {
      mousecursor.top = -100
      mousecursor.left = -100
      canvas.renderAll()
    })

    return canvas
  }

  useEffect(() => {
    if (isMounted) {
      setCanvas(initCanvas())
    }
  }, [isMounted])

  useEffect(() => {
    if (!canvas) return

    if (selectedTool === ToolType.Pencil) {
      canvas.isDrawingMode = true
    } else {
      canvas.isDrawingMode = false
    }
  }, [canvas, selectedTool])

  // useEffect(() => {
  //   console.log('ref', canvasRef)
  //   if (!canvasRef.current) return
  //   if (selectedTool === ToolType.Text) {
  //     console.log('current', canvasRef.current)
  //     // canvasRef.current.addText('Text', {fill: '#dedede', fontStyle: 'italic', editable: true})
  //   }
  // }, [selectedTool])

  // const setCanvasRef = useCallback((node) => {
  //   if (node !== null) {
  //     canvasRef.current = node
  //     console.log('node', node)
  //   }
  // }, [])

  if (!isMounted) return <div></div>

  return (
    <Box position="relative">
      <canvas id="canvas" width="800" height="800" />
      <Box position="absolute" top="5" left="10">
        <Toolbar />
      </Box>
      {/* <SketchFieldForwardRef
        // ref={(c) => { console.log('c', c); canvasRef.current = c }}
        ref={canvasRef}
        width='100vw'
        height='100vh'
        backgroundColor="##121212"
        tool={selectedTool}
        lineColor='#fff'
        lineWidth="3"
      /> */}

    </Box>
  )
}

export default Board
