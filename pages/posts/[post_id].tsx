import React, {useEffect, useState} from 'react'
import Router, {useRouter} from 'next/router'
import {NextPageContext} from 'next'
import {MainLayout} from '../../components/MainLayout'
import {Post} from '../../interfaces/post'

interface PostPageProps {
    post: Post
}

const loadPost = (post_id: string): Promise<Post> =>
    fetch(`${process.env.API_URL}/posts/${post_id}`).then(res => res.json())

/**
 * How to use route vars
 * Example is about query
 */
export default function PostPage({post: serverPost}: PostPageProps) {
    const [post, setPost] = useState(serverPost)
    const {query} = useRouter()

    useEffect(() => {
        async function load() {
            const post_id = query.post_id.toString()
            const post = await loadPost(post_id)
            setPost(post)
        }

        if (!serverPost) {
            load()
        }
    }, [])

    if (!post) {
        return <MainLayout title={`Post page`}>
            <p>Loading ...</p>
        </MainLayout>
    }

    return (<MainLayout title={`Post ${post.id} page`}>
        <h1>Post page</h1>
        <p>Post id is {post.id}.</p>
        <p>{post.title}</p>
        <p>{post.body}</p>
        <p>
            <button onClick={() => Router.push('/posts')}>Back to all posts.</button>
        </p>
    </MainLayout>)
}

/**
 * Works for frontend and backend
 * */
// PostPage.getInitialProps = async ({query, req}) => {
//     if (!req) {
//         return {post: null}
//     }
//     const post = await loadPost(query)
//     return {post}
// }

interface PostNextPageContext extends NextPageContext {
    query: {
        post_id: string
    }
}

/**
 * Works for backend only
 * */
export async function getServerSideProps({query, req}: PostNextPageContext) {
    // if (!req) {
    //     return {post: null}
    // }
    const post_id = query.post_id
    const post = await loadPost(post_id)
    return {props: {post}}
}
