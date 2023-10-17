
import { createContext, useContext } from "react";

const Mediumcontext = createContext();

export function usePostsContext() {
  const posts = useContext(Mediumcontext);
  if (posts === undefined) {
    throw new Error("usePostsContext must be used within a MediumProvider");
  }
  return posts;
}

export const MediumProvider = ({ children, value }) => {
  return (
    <Mediumcontext.Provider value={value}>{children}</Mediumcontext.Provider>
  );
};
