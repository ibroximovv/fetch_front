import { useContext, useEffect, useState } from "react"
import { Context } from "../context/Context"
import type { UserType } from "../types/UsersType"
import { getRequest } from "../service/getRequest"
import UserItem from "../components/UserItem"

const Users = () => {
    const { screen } = useContext(Context)
    const [users, setUsers] = useState<Array<UserType>>([])

    useEffect(() => {
        getRequest(`https://jsonplaceholder.typicode.com/users`, setUsers, 'users')
    }, [])
    return screen == 'users' && users.map((item: UserType) => <UserItem key={item.id} item={item} />)
}

export default Users