import { createContext, useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signup = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const loginwithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const logout = () => signOut(auth);

  const resetPassword = (email) => {
    sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
  }, []);

  return (
    <authContext.Provider
      value={{
        signup,
        login,
        user,
        logout,
        loading,
        loginwithGoogle,
        resetPassword,
      }}
    >
      {children}
    </authContext.Provider>
  );
}
