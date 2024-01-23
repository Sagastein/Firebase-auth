import { create } from "zustand";
import { auth } from "../config/firebase-config";

const useUserStore = create((set) => ({
  isAuthenticated: false,
  user: null,
  loading: true, // add loading state
  setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
  setUser: (user) => set({ user }),
  setLoading: (loading) => set({ loading }), // add setLoading action
}));

// Listen for authentication state to change.
auth.onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, update the store.
    useUserStore.setState({
      isAuthenticated: true,
      user: user,
      loading: false,
    });
  } else {
    // No user is signed in, update the store.
    useUserStore.setState({
      isAuthenticated: false,
      user: null,
      loading: false,
    });
  }
});

export default useUserStore;
