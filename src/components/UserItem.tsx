import React, { useContext, type FC } from 'react'
import type { UserType } from '../types/UsersType'
import { Context } from '../context/Context'

const UserItem: FC<{ item: UserType }> = ({ item }) => {
    const { setUserId, setScreen } = useContext(Context)
    function userOnClick(id: number) {
        setUserId(id)
        setScreen('posts')
    }
    return (
        <div onClick={() => userOnClick(item.id)} className='bg-slate-100 cursor-pointer hover:scale-[1.01] duration-300 flex justify-between p-2 rounded-md'>
            <div>
                <h2 className='text-[12px]'>{item.name} - {item.username}</h2>
                <p className='text-[10px]'>{item.email}</p>
                <a href={`tell:${item.phone}`} className='text-[9px] mt-1'>{item.phone}</a>
            </div>
            <div>
                <strong className='text-[10px]'>#{item.id}</strong>
            </div>
        </div>
    )
}

export default UserItem