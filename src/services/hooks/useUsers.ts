import { useQuery } from 'react-query'
import { api } from '../../services/api'

type User = {
  id: number;
  name: string;
  email: string;
  created_at: string;
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
      created_at: new Date (user.created_at).toLocaleDateString('pt-BR', {
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
    staleTime: 1000 * 60 * 10, // 10 minutos
  })
}