import { useState } from 'react';
import Link from 'next/link'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableFooter,
    TableRow,
    Paper,
    Button,
    Checkbox,
    Box,
    Typography,
} from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { sortAscending, sortDescending } from '../../lib/posts';

const MAX_POST_COUNT = 20;

const PostTable = ({ posts: postList, onShowPosts, onDelete }) => {
    const [posts, setPosts] = useState(postList);
    const [selectedPostIds, setSelectedPostIds] = useState([]);
    const [selectAll, setSelectAll] = useState(false);

    const handleSelect = (postId) => {
        const index = selectedPostIds.indexOf(postId);
        if (index > -1) {
            setSelectAll(false);
            selectedPostIds.splice(index, 1);
        } else {
            selectedPostIds.push(postId);
        }

        setSelectedPostIds([...selectedPostIds]);
    };

    const handleSelectAll = () => {
        if (selectAll) {
            setSelectedPostIds([]);
            setSelectAll(false);
        } else {
            const selectedIds = posts.slice(0, MAX_POST_COUNT).map(({ id }) => id);
            setSelectedPostIds(selectedIds);
            setSelectAll(true);
        }
    };

    const handleSort = (ascending) => {
        if (ascending) {
            setPosts(sortAscending(posts));
        } else {
            setPosts(sortDescending(posts));
        }
        // Need to reset the current selection?
    };

    const handleDelete = (postId) => {
        onDelete(postId);
        // Updating posts as there is currently no central data store
        const filteredPosts = posts.filter(({ id }) => id !== postId);
        setPosts(filteredPosts);
    };

    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center" width={125}>
                            <Checkbox
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                                checked={selectAll}
                                onChange={handleSelectAll}
                            />
                            Select
                        </TableCell>
                        <TableCell align="center">
                            Post Title
                            <KeyboardArrowUpIcon onClick={() => handleSort(true)} />
                            <KeyboardArrowDownIcon onClick={() => handleSort(false)} />
                        </TableCell>
                        <TableCell align="center" width={225}>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {posts.slice(0, MAX_POST_COUNT).map(({ id, title }) => (
                        <TableRow key={id}>
                            <TableCell align="center">
                                <Checkbox
                                    color="primary"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                    checked={selectedPostIds.includes(id)}
                                    onChange={() => handleSelect(id)}
                                />
                            </TableCell>
                            <TableCell align="left">{title}</TableCell>
                            <TableCell align="center">
                                <Box component="span" m={1}>
                                    <Button size="small" variant="outlined" color="primary">
                                        <Link href={`/posts/${id}`}>Show</Link>
                                    </Button>
                                </Box>
                                <Box component="span" m={1}>
                                    <Button size="small" variant="outlined" color="secondary" onClick={() => handleDelete(id)}>Delete</Button>
                                </Box>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={3} align="center">
                            <Typography variant="caption" display="block" gutterBottom>
                                Currently there are <b>{selectedPostIds.length}</b> posts selected
                            </Typography>
                            <Button variant="outlined" color="primary" disabled={selectedPostIds.length === 0} onClick={() => onShowPosts(selectedPostIds)}>Show selected posts</Button>
                        </TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    );
}

export default PostTable;