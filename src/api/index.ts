import axios, {AxiosResponse} from "axios";

const api = new axios.Axios({
  baseURL: "",
});

const createUser = async (data: User) => {
  const res = await api.put("/createUser", data);

  const f = (res: AxiosResponse) => {
    switch (res.status) {
      case 200:
        return res.data;
      case 400:
        return "Bad Request"; // Replace with actual badRequest variable or string
      case 404:
        return "Not Found"; // Replace with actual notFound variable or string
      case 500:
        return "Server Error"; // Replace with actual serverError variable or string
      default:
        return "Unknown status";
    }
  };

  console.log(f(res));
};


interface UserLogin {
  lastname: string;
  firstname: string;
  password: string;
}

interface User{
  firstname: string;
  lastname: string;
  birthdate: string;
  sex: string;
  image: string;
  cin:number;
  role: string;
  age_category: string;
  age: number;
  id: string
}

interface LoggedUser {
  id: string;
  token: string;
}

interface StoreMoney{
  id: string;
  name: string;
  comment: string;
  status: string;
  price: number;
  image:string;
  category:
      {
        id: string
        label: string
      };
}

interface TransferMoney{
  id: string;
  name: string;
  comment: string;
  status: string;
  price: number;
  image: string;
  category:
      {
        id: string,
        label: string
      }
}

interface GetWallet{
  id: string;
  user_id:
      {
        firstname:string;
        lastname: string;
        birthdate: string;
        sex: string;
        image: string;
        cin: string;
        role: string;
        age_category: string;
        age: number
      }
  e_money: number;
  limit: number
}

interface PostBuy{
  id: string;
  name: string;
  comment: string;
  status: string;
  price: number;
  image: null;
  category:
      {
        id: string;
        label: string
      }
}

const loginUser = async (data: UserLogin) => {
  const res = (await api.post("/loginUser", data));
  const t = (res : AxiosResponse)=>{
    switch (res.status){
      case 200:
        return res.data as LoggedUser;

      case 400:
        return badRequest;

      case 404:
        return notFound;

      case 500:
        return serverError;
    }
  }
  return (t(res))
}

const getUser = async (id: string) => {
  const res = (await api.get(`/user/${encodeURIComponent(id)}`));
  const r = (res : AxiosResponse)=>{
    switch (res.status){
      case 200:
        return res.data as User;

      case 400:
        return badRequest;

      case 404:
        return notFound;

      case 500:
        return serverError;
    }
  }
  return (r(res))
}

const getChildOfParents = async (id: string) => {
  const res = await api.get(`/user/${encodeURIComponent(id)}/child`);
  const u = (res : AxiosResponse) =>{
    switch (res.status){
      case 200:
        return res.data as User[];

      case 400:
        return badRequest;

      case 404:
        return notFound;

      case 500:
        return serverError;
    }
  }
  return (u(res));
}

const postStoreMoney = async (id: string) =>{
  const res = await  api.post(`/storeMoney/${encodeURIComponent(id)}`);

  const s = (res : AxiosResponse)=>{
    switch (res.status){
      case 200:
        return res.data as StoreMoney[];
      case 400:
        return badRequest;
      case 404:
        return notFound;
      case 500:
        return serverError;
    }
  }
  return(s(res));
}

const transferMoney = async (id: string) =>{
  const res = await api.post(`/transferMoney/${encodeURIComponent(id)}`);

  const v = (res: AxiosResponse) =>{
    switch (res.status){
      case 200:
        return res.data as TransferMoney;
      case 400:
        return notFound;
      case 500:
        return serverError;
    }
  }
  return(v(res));
}

const getWallet = async (id: string) => {
  const res = await api.get(`/getWallet/${encodeURIComponent(id)}`);

  const w = (res: AxiosResponse) => {
    switch (res.status){
      case 200:
        return res.data as GetWallet;
      case 400:
        return notFound;
      case 500:
        return serverError;
    }
}
  return w(res);
}

const postBuy = async () =>{
  const res = await api.post(`/buy/`);

  const z = (res: AxiosResponse) =>{
    switch (res.status){
      case 200:
        return res.data as PostBuy;
      case 400:
        return notFound;
      case 500:
        return serverError;

    }
  }
  return (z(res));
}

const badRequest = {
  error: "bad request",
  message: "cannot create or update your account"
}

const notFound = {
  error: "not found",
  message: "ressource not found for updates"
}

const serverError = {
  error: "server error",
  message: ""
}

export {
  createUser,
  loginUser,
  getUser,
  getChildOfParents,
  postStoreMoney,
  transferMoney,
  getWallet,
  postBuy
}
export default api;
