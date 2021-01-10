import { useCallback, useContext } from 'react'

import { BoardAction, BoardContext, ToolType } from '../state/board'

interface UseBoard {
  selectedTool: ToolType
  setSelectedTool: (tool: ToolType) => void
}

const useBoard = (): UseBoard => {
  const { state: { selectedTool }, dispatch } = useContext(BoardContext)

  const setSelectedTool = useCallback((tool: ToolType) => {
    dispatch({ type: BoardAction.SELECT_TOOL, payload: tool })
  }, [dispatch])

  return {
    selectedTool,
    setSelectedTool,
  }
}

export default useBoard
