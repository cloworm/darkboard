import React, { FunctionComponent, useEffect, useRef, useCallback, useState, CSSProperties } from 'react'
import { Box } from '@chakra-ui/react'
import useIsMounted from '../shared/hooks/useIsMounted'
import { fabric } from 'fabric'

import Toolbar from './Toolbar'
import useBoard from '../shared/hooks/useBoard'
import { ToolType } from '../shared/state/board'

const canvasStyle = {position: 'absolute', top: '0', left: '0', width: '100%'} as CSSProperties
const cursorStyle = {position: 'absolute', top: 0, left: 0, pointerEvents: 'none'} as CSSProperties

const Board: FunctionComponent = () => {
  const [canvas, setCanvas] = useState<fabric.Canvas>()
  const { selectedTool } = useBoard()
  const isMounted = useIsMounted()
  const mousecursorRef = useRef<fabric.Circle>()
  const cursorRef = useRef<fabric.StaticCanvas>()

  const initCanvas = useCallback(() => {
    const canvas = new fabric.Canvas('canvas', {
      height: 800,
      width: 800,
      backgroundColor: '#121212',
      isDrawingMode: true,
      freeDrawingCursor: 'none'
    })
    cursorRef.current = new fabric.StaticCanvas('cursor', {
      height: 800,
      width: 800
    })
    const cursor = cursorRef.current

    canvas.freeDrawingBrush.width = 10
    canvas.freeDrawingBrush.color = '#9f9'

    mousecursorRef.current = new fabric.Circle({
      left: 0,
      top: 0,
      radius: canvas.freeDrawingBrush.width / 2,
      fill: canvas.freeDrawingBrush.color,
      originX: 'right',
      originY: 'bottom',
    })

    const mousecursor = mousecursorRef.current

    cursor.add(mousecursor)

    canvas.on('mouse:move', function (event) {
      const e = event.e as MouseEvent
      mousecursor.set({
        top: e.clientY + (mousecursor?.radius ?? 0),
        left: e.clientX + (mousecursor?.radius ?? 0)
      })
        .setCoords().canvas?.renderAll()
    })

    canvas.on('mouse:out', function () {
      // put circle off screen
      mousecursor.set({
        top: -100,
        left: -100
      })
        .setCoords().canvas?.renderAll()
    })

    return canvas
  }, [])

  useEffect(() => {
    if (isMounted) {
      setCanvas(initCanvas())
    }
  }, [initCanvas, isMounted])

  useEffect(() => {
    if (!canvas || !mousecursorRef.current || !cursorRef.current) return

    if (selectedTool === ToolType.Pencil) {
      canvas.isDrawingMode = true
      canvas.renderAll()
      cursorRef.current.add(mousecursorRef.current)
    } else {
      canvas.isDrawingMode = false
      cursorRef.current.remove(mousecursorRef.current)
    }

    if (selectedTool === ToolType.Text) {
      const text = new fabric.IText('Your Text Here', {
        left: 100,
        top: 100,
        fontFamily: 'Noto Sans JP',
        fill: '#F9ABCE',
        width: 2000
      })
      canvas.add(text)
    }

  }, [canvas, selectedTool])

  if (!isMounted) return <div></div>

  return (
    <Box position="relative">
      <canvas id="canvas" width="300" style={canvasStyle} height="300" />
      <canvas id="cursor" style={cursorStyle} width="300" height="300" />
      <Box position="absolute" top="5" left="10">
        <Toolbar />
      </Box>
    </Box>
  )
}

export default Board
