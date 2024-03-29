import { User } from '@/types/interfaces'
import axios, { AxiosResponse } from 'axios'

const fetchUsers = async (): Promise<User[]> => {
  try {
    const response: AxiosResponse<{ results: User[] }> = await axios.get(
      'https://randomuser.me/api/?results=50',
    )
    return response.data.results
  } catch (error) {
    console.error('Error fetching users:', error)
    return []
  }
}

export default fetchUsers
