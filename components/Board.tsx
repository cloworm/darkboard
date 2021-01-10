import { FunctionComponent } from 'react'
// import { fabric } from 'fabric'
// import { Tools } from 'react-sketch2'
import useIsMounted from '../hooks/useIsMounted'

import dynamic from 'next/dynamic'

const SketchField = dynamic(
  () => import('react-sketch2').then((pkg) => pkg.SketchField),
  {
    ssr: false
  }
)

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
    <SketchField
      width='1024px'
      height='768px'
      tool="pencil"
      lineColor='black'
      lineWidth={3}/>
    // <canvas ref={boardCanvas} width={1440} height={900} />
  )
}

export default Board
