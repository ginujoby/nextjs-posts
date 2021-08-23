import Grid from '@material-ui/core/Grid';
import PostCard from '../../components/post/PostCard'

const PostList = ({ posts }) => (
    <Grid container spacing={5}>
        {posts.map((post) => (
            <Grid item sm={12} key={post.id}>
                <PostCard post={post} />
            </Grid>
        ))}
    </Grid>
);

export default PostList;