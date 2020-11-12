import React, {useState, useEffect} from 'react'
import {MainLayout} from '../../components/MainLayout'
import Link from 'next/link'
import {Post} from "../../interfaces/post";
import {NextPageContext} from "next";

interface PostsPageProps {
    posts: Post[]
}

const loadPosts = (): Promise<Post[]> =>
    fetch(`${process.env.API_URL}/posts`).then(res => res.json())

export default function PostsPage({posts: serverPosts}: PostsPageProps) {
    const [posts, setPosts] = useState(serverPosts)

    useEffect(() => {
        async function load() {
            const posts = await loadPosts()
            setPosts(posts)
        }

        if (!serverPosts) {
            load()
        }
    }, [])

    if (!posts) {
        return <MainLayout>
            <p>Loading ...</p>
        </MainLayout>
    }

    return (<MainLayout title={'Posts page'}>
        <h1>Posts page</h1>
        <ul>
            {posts.map(post => {
                    return (<li key={post.id}>
                        <Link href={`/posts/${post.id}`}>
                            <a>{post.title}</a>
                        </Link>
                    </li>)
                }
            )}
        </ul>
    </MainLayout>)
}

PostsPage.getInitialProps = async ({req}: NextPageContext) => {
    if (!req) {
        return {posts: null}
    }
    const posts = await loadPosts()
    return {posts}
}
