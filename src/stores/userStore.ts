import { _USER } from "@/types";
import { create } from "zustand";

type userState ={
    user: _USER;
    setUser: (user:_USER) => void;
}

const useUserStore = create<userState>((set) => ({
  user : {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    phoneNumber: 0,
    addresses: [],
    isStoreManager: false,
    isCEO: false,
  },
    setUser: (user:_USER) => set({ user:user }),
}));

export default useUserStore;
