export const LOGOUT_USER = "LOGOUT_USER";
export const CLEAR_PLAID = "CLEAR_PLAID";
export const CLEAR_BLOCKS = "CLEAR_BLOCKS";

export const logoutClearLogin = () => ({ type: LOGOUT_USER });

export const logoutClearPlaid = () => ({ type: CLEAR_PLAID });

export const logoutClearBlocks = () => ({ type: CLEAR_BLOCKS });

export function logoutUser(){
    return function(dispatch) {
        sessionStorage.clear();
        localStorage.clear()
        dispatch(logoutClearLogin());
        dispatch(logoutClearPlaid());
        dispatch(logoutClearBlocks());
        

    }
}