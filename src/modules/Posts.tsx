import { useContext, useEffect, useState } from "react"
import type { PostType } from "../types/PostsType"
import { Context } from "../context/Context"
import { getRequest } from "../service/getRequest"
import PostItem from "../components/PostItem"

const Posts = () => {
    const [posts, setPosts] = useState<Array<PostType>>([])
    const { screen, setScreen, userId } = useContext(Context)

    useEffect(() => {
        if (userId) {
            getRequest(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, setPosts, 'posts')
        }
    }, [userId])
    return (
        <>
            {screen == 'posts' &&
                <>
                    <button onClick={() => setScreen('users')} className="text-[10px] cursor-pointer">Back</button>
                    {posts.map((item: PostType) => <PostItem key={item.id} item={item} />)}
                </>
            }
        </>
    )
}

export default Posts