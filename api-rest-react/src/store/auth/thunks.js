import { useDispatch, useSelector } from "react-redux"
import { loginWithEmailPassword, logoutFirebase, singInWithGoogle } from "../../firebase/providers"
import { chekingCredentials, login, logout } from "./authSlice"

export const checkingAuthentication = () => {
    return async (dispatch) => {
        dispatch(chekingCredentials())
    }
}

export const startGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(chekingCredentials());
        const resukt = await singInWithGoogle();
        if (!resukt.ok) return dispatch(logout(resukt.errorMessage));
        dispatch(login(resukt));   
    }
}

export const startLoginWithEmailPassword = ({ email, password }) => {
    return async(dispatch) => {
        dispatch(chekingCredentials());
        const result = await  loginWithEmailPassword({email, password});
        if (!result.ok) return dispatch(logout({errorMessage:result.errorMessage}));
        dispatch(login(result));
    }
}

export const startLogout = () => {
    return async (dispatch) => {
        await logoutFirebase();
        dispatch(logout());
    }
}