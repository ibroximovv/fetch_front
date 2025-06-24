import { useContext, type FC } from "react"
import type { PostType } from "../types/PostsType"
import { Context } from "../context/Context"

const PostItem: FC<{ item: PostType }> = ({ item }) => {
    const { setScreen, setPostId } = useContext(Context)
    function postOnClick(id: number) {
        setPostId(id)
        setScreen('comments')
    }
    return (
        <div onClick={() => postOnClick(item.id)} className="bg-blue-200 p-2 rounded-r-md">
            <div className="flex justify-between px-2">
                <strong className="text-[8px]">ID: {item.id}</strong>
                <strong className="text-[8px]">UserID: {item.userId}</strong>
            </div>
            <div>
                <h2 className="text-[10px] font-bold mb-1">{item.title}</h2>
                <p className="text-[9px] line-clamp-2">{item.body}</p>
            </div>
        </div>
    )
}

export default PostItem