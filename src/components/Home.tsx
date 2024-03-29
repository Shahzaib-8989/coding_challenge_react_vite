import { User } from '@/types/interfaces'
import fetchUsers from '@/utils/fetchUser'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DataTable } from 'simple-datatables'
import Loader from './Loader'
interface filteredUsers {
  name: string
  email: string
  gender: string
  age: string
  startDate: string
  country: string
}

const Home: React.FC = () => {
  const navigate = useNavigate()
  const [users, setUsers] = useState<User[] | []>([])
  const [filteredUsers, setFilteredUsers] = useState<filteredUsers[] | []>([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const fetchUsersData = async () => {
      setLoading(true)
      const fetchedResult: User[] = await fetchUsers()
      const filteredUsers: filteredUsers[] = fetchedResult.map((user) => ({
        name: `${user.name.title}. ${user.name.first} ${user.name.last}`,
        email: user.email,
        gender: user.gender,
        age: user.dob.age,
        'start Date': new Date(user?.registered?.date).toLocaleDateString(),
        country: user.location.country,
      }))
      setFilteredUsers(filteredUsers)
      setUsers(fetchedResult)
      setLoading(false)
    }
    fetchUsersData()
  }, [])
  useEffect(() => {
    const initTable = () => {
      const dataTableTwo = document?.getElementById('table')
      if (dataTableTwo) {
        const NotMapped = new DataTable(dataTableTwo, {
          perPage: 10,
          data: {
            headings: Object.keys(filteredUsers[0])?.map(
              (el) => el[0]?.toUpperCase() + el?.slice(1),
            ),
            data: filteredUsers.map((item) => Object.values(item)),
          },
          columns: [
            {
              select: 3,
              filter: ['male', 'female'],
            },
          ],
        })
        NotMapped?.init()

        // Add cursor-pointer class to all tr elements
        const trElements = dataTableTwo.getElementsByTagName('tr')
        for (let i = 0; i < trElements.length; i++) {
          trElements[i].classList.add('cursor-pointer')
        }

        // Add event listener to handle click on table rows
        dataTableTwo.addEventListener('click', (event) => {
          const target = event.target as HTMLElement
          console.log(target)
          if (target?.tagName === 'TD') {
            const tr = target?.parentElement
            const dataIndex = tr?.getAttribute('data-index')
            if (dataIndex) {
              navigate(`/profile?username=${filteredUsers[dataIndex]?.name}`, {
                state: users?.filter(
                  (el) => el?.email === filteredUsers[dataIndex]?.email,
                ),
              })
              console.log('Row index:', dataIndex)
            }
          }
        })
      }
    }
    if (filteredUsers?.length) initTable()
  }, [filteredUsers])

  return (
    <div className="p-10 ">
      <div className="border-stroke bg-white shadow-default ">
        <h1 className="text-black text-2xl font-bold p-2">Users List</h1>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="rounded-sm border border-stroke bg-white shadow-default ">
          <div className="data-table-common data-table-two max-w-full overflow-x-auto">
            <table className="table w-full table-auto" id="table"></table>
          </div>
        </div>
      )}
    </div>
  )
}

export default Home
