import { createContext, useState, type FC, type ReactNode } from "react";
import type { ContextType } from "../types/ContextType";

export const Context = createContext<ContextType>({
    userId: null,
    postId: null,
    setUserId: () => null,
    setPostId: () => null,
    screen: 'users',
    setScreen: () => 'users'
})

export const GlobalContext: FC<{children: ReactNode}> = ({children}) => {
    const [userId, setUserId] = useState<number | null>()
    const [postId, setPostId] = useState<number | null>()
    const [screen, setScreen] = useState<'users' | 'posts' | 'comments'>('users')
    return (
        <Context.Provider value={{userId, postId, screen, setUserId, setPostId, setScreen}}>{children}</Context.Provider>
    )
}