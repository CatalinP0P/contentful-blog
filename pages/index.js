import Layout from '@/components/layout'
import React from 'react'
import client from '@/lib/contentful'
import PostCard from './posts/PostCard'
import LastPosts from '@/components/LastPosts'

export default function Home({ homepage, lastPosts }) {
    console.log(lastPosts)
    return (
        <>
            <div className="mx-2 py-8">
                <div className="grid grid-cols-12 items-center">
                    <div className="col-span-12 md:col-span-6 lg:col-span-8 text-center py-8">
                        <p className="text-4xl text-stone-600 font-thin md:text-3xl lg:text-5xl mx-8 md:mx-16 lg:mx-32 transition-all">
                            <span className="leading-relaxed md:hover:leading-loose transition-all">
                                {homepage.fields.description}
                            </span>
                        </p>
                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-4 relative h-0 pb-[80%] md:pb-[100%] rounded-full overflow-hidden mx-auto w-[80%] md:w-full">
                        <img
                            className="absolute left-0 top-0 w-full h-full object-cover"
                            src={homepage.fields.profileImage.fields.file.url}
                        ></img>
                    </div>
                </div>
            </div>
            <hr className="border-t-2 text-stone-400 mt-2"></hr>
            <div>
                <LastPosts  posts={lastPosts}/>
            </div>
        </>
    )
}

export const getStaticProps = async () => {
    const homepage = await client.getEntries({ content_type: 'homepage' })
    const lastPosts = await client.getEntries({
        content_type: 'post',
        order: '-sys.createdAt',
    })

    return {
        props: {
            homepage: homepage.items[0],
            lastPosts: lastPosts.items,
        },
    }
}
