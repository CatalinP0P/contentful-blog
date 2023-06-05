import { useRouter } from 'next/router'
import React from 'react'
import client from '@/lib/contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import RichTextRenderer from '@/components/RichTextRenderer'

export default function Post({ post }) {
    console.log(post)
    return (
        <div className="pt-16">
            <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-32 mx-2 lg:mx-8">
                <div className="w-full lg:w-[40%] h-0 pb-[80%] md:pb-[40%] lg:pb-[30%] overflow-hidden relative rounded-3xl">
                    <img
                        src={post.fields.image.fields.file.url}
                        className="absolute top-0 left-0 w-full h-full object-cover "
                    ></img>
                </div>
                <div className="flex flex-col text-center justify-start w-full lg:w-[60%] order-first lg:order-2 gap-16">
                    <label className="text-4xl md:text-5xl lg:text-6xl font-extralight">
                        {post.fields.title}
                    </label>
                    <p className="hidden lg:inline w-full text-2xl text-stone-400 font-thin">
                        {post.fields.description}
                    </p>
                </div>
                <p className="text-center w-full inline lg:hidden text-2xl text-stone-400 font-thin">
                    {post.fields.description}
                </p>
            </div>
            <hr className="mt-8 mx-2 lg:mx-8 border-t-2 border-stone-100"></hr>
            <div className="prose-base md:prose-lg xl:prose-xl w-full mx-2 lg:mx-8 py-4">
                {<RichTextRenderer content={post.fields.content} />}
            </div>
        </div>
    )
}

export const getStaticProps = async ({ params, preview = false }) => {
    const { id } = params
    const post = await client.getEntries({
        content_type: 'post',
        'fields.id': id,
    })

    return {
        props: {
            post: post.items[0],
        },
    }
}

export const getStaticPaths = async () => {
    const response = await client.getEntries({ content_type: 'post' })
    const paths = response.items.map((item) => ({
        params: {
            id: item.fields.id,
        },
    }))

    return {
        paths,
        fallback: true,
    }
}
