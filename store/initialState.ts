export interface State {
  app: {
    title: string;
    width: number | null;
    height: number | null;
  },
  other: {
    property: number;
  }
}

const initialState: State = {
  app: {
    title: '',
    width: null,
    height: null,
  },
  other: {
    property: 999
  }
};

export default initialState;
