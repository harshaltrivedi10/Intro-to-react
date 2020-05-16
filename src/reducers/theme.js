export default function theme(state = "green", action) {
  if (action.tye === "CHANGE_THEME") {
    return action.payload;
  } else {
    return state;
  }
}
