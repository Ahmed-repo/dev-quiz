import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function () {
  const authContext = useContext(AuthContext);

  return authContext;
}
