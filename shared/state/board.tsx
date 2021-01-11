import React, { Dispatch, createContext, useReducer, FunctionComponent, useMemo } from 'react'


export enum ToolType {
  Circle = 'circle',
  Line = 'line',
  Arrow = 'arrow',
  Pencil = 'pencil',
  Rectangle = 'rectangle',
  RectangleLabel = 'rectangle-label',
  Select = 'select',
  Pan = 'pan',
  Highlighter = 'highlighter',
  DefaultTool = 'default-tool',
  Text = 'text'
}

interface State {
  selectedTool: ToolType
}

const initialState: State = {
  selectedTool: ToolType.Pencil
}

export enum BoardAction {
  SELECT_TOOL = 'SELECT_TOOL',
}

interface SelectToolAction {
  type: BoardAction.SELECT_TOOL
  payload: ToolType
}

export type Action = SelectToolAction

export const boardReducer = (state: State, action: Action): State => {
  switch(action.type) {

  case BoardAction.SELECT_TOOL: {
    return {
      ...state,
      selectedTool: action.payload
    }
  }

  default:
    return initialState
  }
}

type Store = {
  state: State
  dispatch: Dispatch<Action>
}

export const BoardContext = createContext<Store>({
  state: initialState,
  dispatch: () => null
})

export const BoardProvider: FunctionComponent = ({ children }) => {
  const [state, dispatch] = useReducer(boardReducer, initialState)

  return (
    <BoardContext.Provider value={useMemo(() => ({ state, dispatch }), [state, dispatch])}>
      {children}
    </BoardContext.Provider>
  )
}
