import axios, { Axios } from "axios";

const api: Axios = new axios.Axios({
  baseURL: "https://7801-41-204-99-7.ngrok-free.app/",
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json",
  }
});

const createUser = async (data: CreateUser): Promise<User> => {
  return (await api.put("/createUser", data)).data;
};

const loginUser = async (data: LoginUser): Promise<Credentials> => {
  return (await api.post("/loginUser", JSON.stringify(data))).data;
};

const getUser = async (id: string): Promise<User> => {
  return (await api.get(`/user/${id}`)).data;
};

const getChildOfParents = async (id: string): Promise<User[]> => {
  return (await api.get(`/user/${encodeURIComponent(id)}/child`)).data;
};

const storeMoney = async (data: Investment): Promise<Investment> => {
  return (await api.post("/storeMoney", data)).data;
}

const transferMoney = async (user_id: string, data: Investment): Promise<Investment> => {
  return (await api.post(`/transferMoney/${encodeURIComponent(user_id)}`, data)).data;
}

const getWallet = async (user_id: string): Promise<Wallet> => {
  return (await api.get(`/getWallet/${encodeURIComponent(user_id)}`)).data;
}

const buy = async (data: Investment): Promise<Investment> => {
  return (await axios.post("/buy", data)).data;
}

interface LoginUser {
  firstname: string;
  lastname: string;
  password: string;
}

interface Credentials {
  userId: string;
  token: string;
}

interface Investment {
  id: string;
  name: string;
  comment: string;
  status: "ENABLED" | "DISABLED";
  price: number;
  image: string;
  category: InvestmentCategory[];
}

interface InvestmentCategory {
  id: string;
  label: string;
}

interface CreateUser {
  firstname: string;
  lastname: string;
  birthdate: string;
  sex: string;
  image: string;
  cin: string;
  role: string;
  age_category: string;
  age: number;
  password: string;
}

interface User {
  firstname: string;
  lastname: string;
  birthdate: string;
  sex: string;
  image: string;
  cin: string;
  role: string;
  age_category: string
  age: number;
}

interface Wallet {
  id:	string;
  user_id: User
  e_money: number;
  limit: number;
}

export { 
  createUser, loginUser, getUser, getChildOfParents, storeMoney, transferMoney, getWallet, buy,
 type User, type CreateUser, type LoginUser, type Wallet, type InvestmentCategory, type Investment, type Credentials
};
export default api;
