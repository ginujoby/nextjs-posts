import Head from 'next/head'
import Layout from '../../components/common/Layout';
import PostList from '../../components/post/PostList'
import { getPostById, getPostsByIds } from '../../lib/api';

const Post = ({ posts }) => (
    <Layout>
        <Head>
            <title>Post Details</title>
        </Head>
        <h1>Post Details</h1>
        <PostList posts={posts}/>
    </Layout>
);

export async function getServerSideProps({ params }) {
    const postIds = params.ids.split('-').map((id) => parseInt(id));

    let posts = [];
    if (postIds.length === 1) {
        const post = await getPostById(postIds[0]);
        posts.push(post);
    } else if (postIds.length > 1) {
        posts = await getPostsByIds(postIds);
    }

    return {
        props: {
            posts,
        },
    }
}

export default Post;