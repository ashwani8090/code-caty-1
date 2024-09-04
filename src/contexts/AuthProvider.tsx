import { createContext, ReactNode, Dispatch, SetStateAction } from "react";

import { useAuth } from "@/hooks/useAuth";

// Define the shape of the AuthContext
interface AuthContextType {
  loading: boolean;
  user: any; // Replace `any` with the specific type of your user object if known
  setUser: Dispatch<SetStateAction<any>>; // Replace `any` with the user type
  token: string | null;
}

// Create the AuthContext with default values
const AuthContext = createContext<AuthContextType>({
  loading: false,
  user: null,
  setUser: () => {},
  token: null,
});

// Define props for AuthProvider
interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const { loading, setUser, token, user } = useAuth();

  return (
    <AuthContext.Provider
      value={{
        loading,
        user,
        setUser,
        token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
