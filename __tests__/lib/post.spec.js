import { sortAscending, sortDescending } from '../../lib/posts';

const POSTS = [
    {
        id: 1,
        title: 'bbb aaa ccc',
    },
    {
        id: 2,
        title: 'aaa bbb ccc',
    },
    {
        id: 3,
        title: 'ccc bbb aaa',
    },
];

describe('Lib posts', () => {
    it('sortAscending', () => {
        expect(sortAscending(POSTS)[0].title).toBe('aaa bbb ccc');
        expect(sortAscending(POSTS)[2].title).toBe('ccc bbb aaa');
    });
    it('sortAscending', () => {
        expect(sortDescending(POSTS)[0].title).toBe('ccc bbb aaa');
        expect(sortDescending(POSTS)[2].title).toBe('aaa bbb ccc');
    });
});