import { AxiosRequestConfig } from "axios";

const getBearerToken = () => {
  return localStorage.getItem("local_token");
};

export const createAxiosConfig = (): AxiosRequestConfig => {
  const token = getBearerToken();
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

//------local APIs URL------//
export const api_base_url = "http://localhost:5000/api";

//-------Auth URL-------//
const auth_url = `${api_base_url}/auth`;

export const login = {
  register: `${auth_url}/register`,
  login: `${auth_url}/login`,
};

//-------Managers URL-------//
const managers_url = `${api_base_url}/managers`;

export const managers_api = {
  get: managers_url,
  post: `${managers_url}/create`,
  edit: managers_url,
  delete: managers_url,
};

//-------Users URL-------//
const users_url = `${api_base_url}/users`;

export const users_api = {
  get: users_url,
  post: `${users_url}/create`,
  edit: users_url,
  delete: users_url,
};

//-------Tickets URL-------//
const ticket_url = `${api_base_url}/tickets`;

export const ticket_api = {
  get: ticket_url,
  post: `${ticket_url}/create`,
  edit: ticket_url,
  delete: ticket_url,
  addComment: `${ticket_url}/comments/create`,
  listComments: `${ticket_url}/comments`,
};

//-------IB URL-------//
const ib_url = `${api_base_url}/ib/subib`;

export const ib_api = {
  get: ib_url,
};

//-------Bonus URL-------//
const bonus_url = `${api_base_url}/bonuses`;

export const bonus_api = {
  get: bonus_url,
  post: `${bonus_url}/create`,
  edit: bonus_url,
  delete: bonus_url,
};

//-------Packages URL-------//
const packages_url = `${api_base_url}/packages`;

export const packages_api = {
  get: packages_url,
  post: `${packages_url}/create`,
  edit: packages_url,
  delete: packages_url,
};

//-------Works space URL-------//
const works_space_url = `${api_base_url}/workspaces`;

export const works_space_api = {
  get: works_space_url,
  post: `${works_space_url}/create`,
  edit: works_space_url,
  delete: works_space_url,
};
