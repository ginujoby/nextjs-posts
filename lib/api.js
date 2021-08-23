const URL_POSTS = 'https://jsonplaceholder.typicode.com/posts';
const URL_POST = 'https://jsonplaceholder.typicode.com/posts/';

export const getPosts = async () => {
    const res = await fetch(URL_POSTS);
    return res.json();
};

export const getPostById = async (id) => {
    const res = await fetch(URL_POST + id);
    return res.json();
};

export const getPostsByIds = async (postIds) => {
    // TODO Use another API endpoint that returns the posts by IDs
    const res = await fetch(URL_POSTS);
    const allPosts = await res.json();

    return allPosts.filter(({ id }) => postIds.includes(id));
};

export const deletePostById = (id) => {
    // TODO
};