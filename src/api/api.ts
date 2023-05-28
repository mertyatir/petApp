import axios from "axios"

const BASE_URL = "https://petstore.swagger.io/v2"

// pet Everything about your Pets

// https://petstore.swagger.io/

export const getPetById = async (petId: number) => {
  const response = await axios.get(`${BASE_URL}/pet/${petId}`)
  return response.data
}

export const uploadImage = async (petId: number, image: any) => {
  const formData = new FormData()
  formData.append("file", image)

  const response = await axios.post(
    `${BASE_URL}/pet/${petId}/uploadImage`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  )
  return response.data
}

export const addPet = async (pet: any) => {
  const response = await axios.post(`${BASE_URL}/pet`, pet)
  return response.data
}

export const updatePet = async (pet: any) => {
  const response = await axios.put(`${BASE_URL}/pet`, pet)
  return response.data
}

export const findPetsByStatus = async (status: string) => {
  const response = await axios.get(
    `${BASE_URL}/pet/findByStatus?status=${status}`
  )
  return response.data
}

export const updatePetWithForm = async (
  petId: number,
  name: string,
  status: string
) => {
  const response = await axios.post(`${BASE_URL}/pet/${petId}`, {
    name,
    status,
  })
  return response.data
}

export const deletePet = async (petId: number) => {
  const response = await axios.delete(`${BASE_URL}/pet/${petId}`)
  return response.data
}

// store Access to Petstore orders

export const placeOrder = async (order: any) => {
  const response = await axios.post(`${BASE_URL}/store/order`, order)
  return response.data
}

export const getOrderById = async (orderId: number) => {
  const response = await axios.get(`${BASE_URL}/store/order/${orderId}`)
  return response.data
}

export const deleteOrder = async (orderId: number) => {
  const response = await axios.delete(`${BASE_URL}/store/order/${orderId}`)
  return response.data
}

export const getInventory = async () => {
  const response = await axios.get(`${BASE_URL}/store/inventory`)
  return response.data
}

//user Operations about user

export const createUsersWithArrayInput = async (users: any[]) => {
  const response = await axios.post(`${BASE_URL}/user/createWithArray`, users)
  return response.data
}

export const createUsersWithListInput = async (users: any[]) => {
  const response = await axios.post(`${BASE_URL}/user/createWithList`, users)
  return response.data
}

export const getUserByName = async (username: string) => {
  const response = await axios.get(`${BASE_URL}/user/${username}`)
  return response.data
}

export const updateUser = async (username: string, user: any) => {
  const response = await axios.put(`${BASE_URL}/user/${username}`, user)
  return response.data
}

export const deleteUser = async (username: string) => {
  const response = await axios.delete(`${BASE_URL}/user/${username}`)
  return response.data
}

export const loginUser = async (username: string, password: string) => {
  const response = await axios.get(
    `${BASE_URL}/user/login?username=${username}&password=${password}`
  )
  return response.data
}

export const logoutUser = async () => {
  const response = await axios.get(`${BASE_URL}/user/logout`)
  return response.data
}

export const createUser = async (user: any) => {
  const response = await axios.post(`${BASE_URL}/user`, user)
  return response.data
}
