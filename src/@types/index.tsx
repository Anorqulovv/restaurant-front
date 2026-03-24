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

