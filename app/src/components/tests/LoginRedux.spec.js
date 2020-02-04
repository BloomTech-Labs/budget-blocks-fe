import * as actions  from "../../redux/actions/LoginActions"

test('should create an action to add a user on successful login',()=>{
    const payload = {
        id:null,
        token:"",
        message:"",
        LinkedAccount:false
    };
    const expectedAction = {
        type: actions.LOGIN_USER_SUCCESS,
        payload:payload
    };
    expect(actions.loginUserSuccess(payload)).toEqual(expectedAction)
});

test('should create an action to call loading action when login is loading',()=>{
    const expectedAction = {
        type: actions.LOGIN_USER_LOADING
    };
    expect(actions.loginUserLoading()).toEqual(expectedAction)
});

test('should create an action to add an error when login fails',()=>{
    const payload = "You failed to login";
    const expectedAction = {
        type: actions.LOGIN_USER_FAILED,
        payload:payload
    };
    expect(actions.loginUserFailure(payload)).toEqual(expectedAction)
});
