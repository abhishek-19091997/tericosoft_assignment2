export const dataAction = (data, dispatch) => {
  dispatch({
    type: "DATA",
    payload: data,
  });
};
