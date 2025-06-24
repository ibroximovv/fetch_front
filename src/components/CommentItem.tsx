import {type FC } from "react"
import type { CommentType } from "../types/CommentsType"


const CommentItem:FC<{item: CommentType}> = ({item}) => {
  return (
    <div className="bg-slate-200 p-2 rounded-md">
        <div className="flex justify-between px-2">
            <strong className="text-[8px]">ID: {item.id}</strong>
            <strong className="text-[8px]">Post ID: {item.postId}</strong>
        </div>
        <div>
            <h2 className="text-[10px] font-bold mb-1">{item.name} - {item.email}</h2>
            <p className="text-[9px] line-clamp-2">{item.body}</p>
        </div>
    </div>
  )
}

export default CommentItem