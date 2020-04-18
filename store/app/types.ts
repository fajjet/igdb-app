import { AnyAction} from "redux";

enum Types {
  SET_TITLE = 'SET_TITLE',
  CHANGE_DIMENSIONS = 'CHANGE_DIMENSIONS',
}

interface SetTitle extends AnyAction{
  type: typeof Types.SET_TITLE;
  payload: {
    title: string;
  };
}

interface changeDimensions extends AnyAction {
  type: typeof Types.CHANGE_DIMENSIONS;
  payload: {
    width: number;
    height: number;
  };
}

export default Types;

export type AppActionTypes = SetTitle | changeDimensions
