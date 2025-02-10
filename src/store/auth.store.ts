import { create } from "zustand";

interface AuthState {
  status: "authenticates" | "unauthenticated" | "checking";
  token?: string;
  user?: {
    name: string;
    email: string;
  };

  //DEFINIREMOS ALGUNAS ACCIONES EN ZUSTAN
  //METODO
  login: (email: string, password: string) => void;
  logout: () => void;
}

//defineremos un espacio en memoria que nos perima tener ese estados AuthState
// gestor de sustan similar a un custon hook
export const useAuthStore = create<AuthState>((set) => ({
  //esto me crea un estado global que puedo leer en cualquiera de mis componentes

  status: "checking",
  token: undefined,
  user: undefined,

  //definimos metodos en este objeto

  login: (email: string, password: string) => {
    set({
      status: "authenticates",
      token: "ABCD",
      user: {
        name: "Fernando",
        email: email,
      },
    });
  },

  logout: () => {
    set({
      status: "unauthenticated",
      token: undefined,
      user: undefined,
    });
  },
}));
