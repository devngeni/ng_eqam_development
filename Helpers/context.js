/**
 * This file contains the context for the Medium API
 * It is used to fetch the latest posts from the Medium feed API
 * and then pass it down to the children components
 */
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
