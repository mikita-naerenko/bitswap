

export const handleClick = (event,dispatch, reducer,) => {
    dispatch(reducer(event.target.textContent))
}