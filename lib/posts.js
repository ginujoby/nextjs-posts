const comparePosts = (ascending) => {
    return (p1, p2) => {
        if (p1.title < p2.title){
            return ascending ? -1 : 1;
        }

        if (p1.title > p2.title){
            return ascending ? 1 : -1;
        }

        return 0;
    }
};

export const sortAscending = (posts) => {
    return [...posts].sort(comparePosts(true));
};

export const sortDescending = (posts) => {
    return [...posts].sort(comparePosts(false));
};