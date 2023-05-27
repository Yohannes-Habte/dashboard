export const ACTION = {
  LIGHT: 'LIGHT',
  DARK: 'DARK',
  TOGGLE: 'TOGGLE',
};
const Reducer = (state, action) => {
  switch (action.type) {
    case ACTION.LIGHT: {
      return { darkMode: false };
    }

    case ACTION.DARK: {
      return { darkMode: true };
    }

    case ACTION.TOGGLE: {
      return { darkMode: !state.darkMode };
    }

    default:
      return state;
  }
};

export default Reducer;
