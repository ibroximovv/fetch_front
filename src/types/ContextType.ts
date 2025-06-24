import type { Dispatch, SetStateAction } from "react";

export interface ContextType {
    userId: number | null,
    setUserId: Dispatch<SetStateAction<number | null>>,
    postId: number | null,
    setPostId: Dispatch<SetStateAction<number | null>>,
    screen: 'users' | 'posts' | 'comments',
    setScreen: Dispatch<SetStateAction<'users' | 'posts' | 'comments'>>
}