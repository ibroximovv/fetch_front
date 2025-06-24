import { useContext, useEffect, useState } from "react"
import type { CommentType } from "../types/CommentsType"
import { Context } from "../context/Context"
import { getRequest } from "../service/getRequest"
import CommentItem from "../components/CommentItem"

const Comments = () => {
  const [comments, setComments] = useState<Array<CommentType>>([])
  const { screen, setScreen, postId } = useContext(Context)

  useEffect(() => {
    if (postId) {
      getRequest(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`, setComments, 'comments')
    }
  }, [postId])
  return (
    <>
      {
        screen == 'comments' &&
        <>
          <button onClick={() => setScreen('posts')} className="text-[10px] cursor-pointer">Back</button>
          {comments.map((item: CommentType) => <CommentItem key={item.id} item={item}/>)}
        </>
      }
    </>
  )
}

export default Comments