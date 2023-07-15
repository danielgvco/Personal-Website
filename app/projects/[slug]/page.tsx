import { FC } from 'react'
import {allPosts} from "contentlayer/generated"
import { notFound } from 'next/navigation'
import { Mdx } from '@/app/components/mdx-components'

interface pageProps {
  params: {
    slug: string
  }
}

async function getDocFromParams(slug: string) {
    const post = allPosts.find((post) => post.slugAsParams === slug)

    if (!post) notFound()

    return post
}

const page = async ({params}: pageProps) => {
    const post = await getDocFromParams(params.slug)
  return <div><Mdx code={post.body.code}/></div>
}

export default page