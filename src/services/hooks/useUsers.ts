import { useQuery } from 'react-query'
import { api } from '../../services/api'

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

type GetUsersResponde = {
  totalCount: number;
  users: User[];
}

async function getUsers(currentPage: number): Promise<GetUsersResponde> {
  const { data, headers } = await api.get('users', {
    params: {
      currentPage,
    }
  })

  console.log(data)

  const totalCount = Number(headers['x-total-count'])

  const users = data.users.map(user => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date (user.createdAt).toLocaleDateString('pt-BR', {
        day:'2-digit',
        month: 'long',
        year: 'numeric',
      })
    }
  })

  return {
    users,
    totalCount,
  }
}

export default function useUsers(currentPage: number) {
  return useQuery(['users', currentPage], () => getUsers(currentPage), {
    staleTime: 1000 * 5,
  })
}