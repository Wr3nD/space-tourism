export const CHANGE_PAGE = "CHANGE_PAGE";

const reducer = (state, action) => {
    if (action.type === CHANGE_PAGE) {
        console.log("DATA",action.payload.page)
        return {  page: action.payload.page };
    }
    return{ ...state}
}

export default reducer;