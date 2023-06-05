import React from 'react'
import client from '@/lib/contentful'
import PostCard from './PostCard'
import Post from './[id]'

export default function Posts({ posts }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
            {posts.map((post) => {
                return <PostCard post={post} />
            })}
        </div>
    )
}

export const getStaticProps = async () => {
    const posts = await client.getEntries({ content_type: 'post' })
    return {
        props: {
            posts: posts.items,
        },
    }
}
