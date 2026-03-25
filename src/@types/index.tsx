export interface Login {
    username: string;
    password: string;
}

export interface Register{
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    password: string;
    confirmPassword: string;
}

export interface Category{
    id: number,
    isActive: boolean,
    createdAt: string,
    updatedAt: string,
    name: string
}

export interface Products{
    id: number,
    isActive: boolean,
    createdAt: string,
    updatedAt: string,
    category: Category,
    name: string,
    description: string,
    price: number,
    image: string,
    rating: number,
    reviewsCount: number,
    isAvailable: boolean
}

export interface News{
    id: number,
    isActive: boolean,
    createdAt: string,
    updatedAt: string,
    image: string,
    description: string
    author: NewsAuthor
}

export interface NewsAuthor{
    id: number,
    createdAt: string,
    isActive: true,
    firstName: string,
    lastName: string,
    email: string,
    username: string,
    avatar: string,
    address: string,
    position: string,
    role: string
    updatedAt: string,
}

export interface Reservation{
  customerName: string,
  email : string,
  guestCount: number,
  reservationDate: string,
  reservationTime: string,
  tableId: number,
  note?: string
}

export interface Contact{
  name: string;
  email: string;
  phone?: string;
  message: string;
}


