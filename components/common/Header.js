import {
    AppBar,
    Container,
    Toolbar,
    Typography,
} from '@material-ui/core';
import Link from 'next/link';

const Header = () => (
    <AppBar position="static">
        <Container maxWidth="md">
            <Toolbar disableGutters>
                <Typography variant="h6">
                    <Link href="/posts">Posts</Link>
                </Typography>
            </Toolbar>
        </Container>
    </AppBar>
);

export default Header;
