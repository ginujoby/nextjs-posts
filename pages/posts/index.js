import Head from 'next/head'
import Layout from '../../components/common/Layout';
import PostTable from '../../components/post/PostTable'
import { getPosts, deletePostById } from '../../lib/api';
import { useRouter } from 'next/router'

const Posts = ({ posts }) => {
    const router = useRouter();

    const handleShowPosts = (selectedPostIds) => {
        if (selectedPostIds.length === 0) {
            alert('Please select at least one post!');
            return;
        }

        const ids = selectedPostIds.join('-');
        router.push(`/posts/${ids}`)
    };

    const handleDelete = (postId) => {
        deletePostById(postId);
        // then: update central store (currently not set up)
        // error: show error message
    }

    return (
        <Layout>
            <Head>
                <title>Posts</title>
            </Head>
            <h1>Posts</h1>
            <PostTable posts={posts} onShowPosts={handleShowPosts} onDelete={handleDelete} />
        </Layout>
    );
}

export async function getServerSideProps() {
    const posts = await getPosts();

    return {
        props: {
            posts,
        },
    }
}

export default Posts;