export default function location(state = "Seattle, WA", action) {
  if (action.tye === "CHANGE_LOCATION") {
    return action.payload;
  } else {
    return state;
  }
}
