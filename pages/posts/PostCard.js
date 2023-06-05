import React from 'react'
import { useRouter } from 'next/router'

export default function PostCard({ post }) {
    const router = useRouter()

    const openPost = (postId) => {
        console.log(postId)
        router.push(`/posts/${postId}`)
    }
    return (
        <div
            key={post.fields.id}
            onClick={() => openPost(post.fields.id)}
            className="bg-stone-100 text-stone-400 rounded-3xl text-center flex flex-col justify-between gap-8 overflow-hidden relative pb-8 cursor-pointer h-full"
        >
            <div className="w-full overflow-hidden absolute left-0 top-0 h-0 pb-[50%]">
                <img
                    src={post.fields.image?.fields.file.url}
                    className="w-full"
                ></img>
            </div>

            <label className="text-xl xl:text-2xl text-white font-thin absolute text-center w-full bg-black  bg-opacity-50 py-8">
                {post.fields.title}
            </label>
            <p className="z-10 mt-[50%] pt-8 px-8">{post.fields.description}</p>
        </div>
    )
}
