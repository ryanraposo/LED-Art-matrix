import { IDeleteModalState, IDeleteModalAction } from "../types";


const modalReducer = (
  state: IDeleteModalState = {
    deleteModalIsOpen: false,
    deleteModalContext: { btnId: "" }
  }, 
  action: IDeleteModalAction
): IDeleteModalState => {
  switch (action.type) {
    case "SET_DELETE_MODAL_OPEN":
      return {
        ...state,
        deleteModalIsOpen: action.payload as boolean
      };
    case "SET_DELETE_MODAL_CONTEXT":
      return {
        ...state,
        deleteModalContext: action.payload as { btnId: string; }
      };
    default: return state;
  }
};

export default modalReducer;