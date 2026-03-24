import { Login } from "@/@types";
import instance from "@/hooks/instance";


export async function login (data: Login) {
  const res = await instance.post("/auth/signin", data);
  return res.data;
}

export async function register(data: any) {
  const res = await instance.post("/auth/signup",data);
  return res.data
}

export async function getProducts() {
  const res = await instance.get("/products")
  return res.data
}