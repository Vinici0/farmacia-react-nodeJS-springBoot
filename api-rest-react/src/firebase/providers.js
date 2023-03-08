import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async() => {
    try {
        
        const result = await signInWithPopup(FirebaseAuth, googleProvider );
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        const { displayName, email, photoURL, uid } = result.user;

        return {
            ok: true,
            displayName, 
            email,
            photoURL,
            uid,
        }

    } catch (error) {
        const errorMessage = error.message;
       console.log(error, "error");
        return {
            ok: false,
            errorMessage,
        }
    }

}

export const loginWithEmailPassword = async({ email, password }) => {
    try {    
        const auth = getAuth();
        const result = await signInWithEmailAndPassword(auth, email, password);
        const { uid, photoURL, displayName } = result.user;
        return {
            ok: true,
            uid, 
            photoURL,
            displayName
        }
    } catch (error) {
        console.log("error");
        return { ok: false, errorMessage: error.message }
    }
}


export const logoutFirebase = async() => { 
    return await FirebaseAuth.signOut();
}
