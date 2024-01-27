import axios from "axios";

const api = new axios.Axios({
  baseURL: import.meta.env.BASE_URL
});

interface User{
    firstname: string,
    lastname: string,
    birthdate: string,
    sex: "M" | "F",
    image: null,
    cin: null,
    role: "CHILD" | "PARENTS",
    ageCategory: "KID" | "ADULT" | "TEEN",
    age: number,
    password: string
}

const createUser = async (data: User) => {
  const res = await api.put("/createUser", data);
  switch (res.status) {
    case 200:
      return res.data;

    case 400:
      throw new Error(badRequest.message);

    case 404:
      return notFound;

    case 500:
      return serverError;
  }
};

interface UserLogin {
  lastname: string;
  firstname: string;
  password: string;
}

interface LoggedUser {
  id: string;
  token: string;
}

const loginUser = async (data: UserLogin) => {
  const res = await api.post("/loginUser", data);
  switch (res.status) {
    case 200:
      return res.data as LoggedUser;

    case 400:
      return badRequest;

    case 404:
      return notFound;

    case 500:
      return serverError;
  }
};

const getUser = async (id: string) => {
  const res = await api.get(`/user/${encodeURIComponent(id)}`);
  switch (res.status) {
    case 200:
      return res.data as User;

    case 400:
      return badRequest;

    case 404:
      return notFound;

    case 500:
      return serverError;
  }
};

const getChildOfParents = async (id: string) => {
  const res = await api.get(`/user/${encodeURIComponent(id)}/child`);
  switch (res.status) {
    case 200:
      return res.data as User[];

    case 400:
      return badRequest;

    case 404:
      return notFound;

    case 500:
      return serverError;
  }
};

const badRequest = {
  error: "bad request",
  message: "cannot create or update your account",
};

const notFound = {
  error: "not found",
  message: "ressource not found for updates",
};

const serverError = {
  error: "server error",
  message: "",
};

export { createUser, loginUser, getUser, getChildOfParents };
export default api;
