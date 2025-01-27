import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import axios from "axios";


// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null)
const auth = getAuth(app);
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();


    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    const updateUserProfile = (name, photo) => {
        setUser({ ...user, displayName: name, photoURL: photo })
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }
    const resetPassword = email => {
        return sendPasswordResetEmail(auth, email);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log(currentUser)
            if (currentUser) {
                // get token and store client
                const userInfo = { email: currentUser.email };
                axios.post(`${import.meta.env.VITE_API_URL}/jwt`, userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);
                        }
                    })
            }
            else {
                // remove token
                localStorage.removeItem('access-token')
            }
            setLoading(false)
        })
        return () => {
            return unsubscribe();
        }
    }, [])
    const authInfo = {
        user,
        setUser,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfile,
        googleSignIn,
        resetPassword

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;