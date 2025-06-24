import type { Dispatch, SetStateAction } from "react";

export const getRequest = (url: string, setList: Dispatch<SetStateAction<any>>, screen: string) => {
    fetch(url).then(res => res.json()).then(data => {
        if(screen == 'users') {
            setList(data.map((item:any) => {
                let value = {
                    id: item.id,
                    email: item.email,
                    username: item.username,
                    name: item.name,
                    phone: item.phone
                }
                return value
            }))
        } else {
            setList(data)
        }
    })
}