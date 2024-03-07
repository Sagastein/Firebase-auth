import { create } from "zustand";
import { auth } from "../config/firebase-config";

const useUserStore = create((set) => ({
  isAuthenticated: false,
  user: null,
  loading: true,
  setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
  setUser: (user) => set({ user }),
  setLoading: (loading) => set({ loading }),
}));

auth.onAuthStateChanged((user) => {
  if (user) {
    useUserStore.setState({
      isAuthenticated: true,
      user: user,
      loading: false,
    });
  } else {
    useUserStore.setState({
      isAuthenticated: false,
      user: null,
      loading: false,
    });
  }
});

export default useUserStore;
