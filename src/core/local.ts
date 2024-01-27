import { Credentials } from "../api";

const local = {
  getUser(): (Credentials | {}) {
    const l: string | null = localStorage.getItem("credentials");
    return JSON.parse(l || "{}");
  },
  setUser(credentials: Credentials){
    localStorage.setItem("credentials", JSON.stringify(credentials));
  }
}

export default local