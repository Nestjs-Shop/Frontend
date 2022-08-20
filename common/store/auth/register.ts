import create from 'zustand';

type RegisterState = {
  userPhone: string;
  setUserPhone: (userPhone: string) => void;
};

export const useRegisterStore = create<RegisterState>((set) => ({
  userPhone: '',
  setUserPhone: (userPhone) => set(() => ({ userPhone })),
}));
