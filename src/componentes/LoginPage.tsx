import { useEffect } from "react";
import { useAuthStore } from "../store/auth.store";

export const LoginPage = () => {
  const authStatus = useAuthStore((state) => state.status);

  //tomamos lo que necesitamos de gestor de zustan
  const user = useAuthStore((state) => state.user);
  const login: (email: string, password: string) => void = useAuthStore(
    (state) => state.login
  );
  const logout = useAuthStore((state) => state.logout);

  useEffect(() => {
    setTimeout(() => {
      logout();
    }, 1500);
  }, []);

  if (authStatus === "checking") {
    return <h3>Loading...</h3>;
  }

  return (
    <>
      <h2>LoginPage</h2>
      {/*{authStatus}*/}
      {/*si estamos autenticados que queremos mostrar*/}

      {authStatus === "authenticates" ? (
        <div>Autenticado como: {JSON.stringify(user, null, 2)}</div>
      ) : (
        <div>No autenticado</div>
      )}
      {authStatus === "authenticates" ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={() => login("ferando@gmail.com", "123")}>
          Logout
        </button>
      )}
    </>
  );
};
