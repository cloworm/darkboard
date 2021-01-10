import { FunctionComponent } from 'react'

declare module 'react-sketch2' {
  enum Tools {
    SELECT = 'select',
    PENCIL = 'pencil',
    CIRCLE = 'circle',
    RECTANGLE = 'rectangle',
    PAN = 'pan'
  }

  interface SketchFieldProps {
    tool?: Tools
    lineColor?: string
    lineWidth?: string
    fillColor?: string
    backgroundColor?: string
    undoSteps?: number
    imageFormat?: string
    width?: number
    height?: number
    value?: JSON
    defaultValue?: JSON
    widthCorrection?: number
    heightCorrection?: number
  }

  const SketchField: FunctionComponent<SketchFieldProps>

  export = {
    Tools,
    SketchField
  }
}
