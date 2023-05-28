export interface Pet {
  id: number
  name: string
  status: string
  category: Category
  tags: Tag[]
  photoUrls: string[]
}

export interface Category {
  id: number
  name: string
}

export interface Tag {
  id: number
  name: string
}

export interface Order {
  id: number
  petId: number
  quantity: number
  shipDate: string
  status: string
  complete: boolean
}

export interface User {
  id: number
  username: string
  firstName: string
  lastName: string
  email: string
  password: string
  phone: string
  userStatus: number
}

export enum PetStatus {
  AVAILABLE = "available",
  PENDING = "pending",
  SOLD = "sold",
}
