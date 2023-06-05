import React from 'react'
import client from '@/lib/contentful'
import PostCard from '@/pages/posts/PostCard'

export default function LastPosts({ posts }) {
    const cardClass = `grid grid-cols-${posts.length} gap-4 w-[90%] md:w-[80%] lg:w-[70%] mx-auto py-16`
    console.log(cardClass)
    return (
        <div className={cardClass}>
            {posts.map((post) => {
                return <div className="col-span-1"><PostCard post={post} /></div>
            })}
        </div>
    )
}
