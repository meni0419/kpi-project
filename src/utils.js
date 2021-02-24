export function uuid(min,) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export function saveStatePlugin(store) {
  store.subscribe(
    (mutation, state) => {
      localStorage.setItem(
        'moList',
        JSON.stringify(state.moList)
      )
    }
  )
}
