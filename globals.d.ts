declare module 'react-sketch2' {
  enum Tools {
    SELECT = 'select',
    PENCIL = 'pencil',
    CIRCLE = 'circle',
    RECTANGLE = 'rectangle',
    PAN = 'pan'
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface SketchField {
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

  export = {
    Tools,
    SketchField
  }
}
