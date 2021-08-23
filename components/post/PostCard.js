import {
    CardContent,
    Card,
    CardMedia,
    Typography
} from '@material-ui/core';

const PostCard = ({post: { title, body }}) => (
    <Card variant="outlined">
        <CardMedia
            component="img"
            image="/images/post.jpg"
            title={title}
            height="180"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {body}
            </Typography>
        </CardContent>
    </Card>
);

export default PostCard;