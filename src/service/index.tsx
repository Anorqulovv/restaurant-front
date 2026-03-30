import { Contact, Login, Reservation } from "@/@types";
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

export async function getNews() {
  const res = await instance.get("/news")
  return res.data
}

export async function getGalelery() {
  const res = await instance.get("/galleries")
  return res.data
}

export async function getCategory() {
  const res = await instance.get("/categories")
  return res.data
}

export async function getTable() {
  const res = await instance.get("/restaurant-tables")
  return res.data
}

export async function reservation(data:Reservation) {
  const res = await instance.post("/reservations/create",data)
  return res.data
}

export async function contact(data:Contact) {
  const res = await instance.post("/contact",data)
  return res.data
}

export async function getCook() {
  const res = await instance.get("/cook")
  return res.data
}