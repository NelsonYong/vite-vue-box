export const createState = () => {
  const state = {
    currentUser: {},
  };
  return state;
};

export type State = ReturnType<typeof createState>;
