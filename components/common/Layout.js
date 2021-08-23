import { Container, CssBaseline } from '@material-ui/core';
import Header from './Header';

const Layout = ({ children }) => (
    <>
        <CssBaseline />
        <Header />
        <main>
            <Container maxWidth="md" style={{ padding: 24 }}>
                {children}
            </Container>
        </main>
    </>
);

export default Layout;