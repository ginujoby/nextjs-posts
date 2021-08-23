import React from 'react'
import { render } from '@testing-library/react'
import PostCard from '../../../components/post/PostCard'

describe('PostCard', () => {
    it('Render card', () => {
        const { getByRole, getByTitle } = render(<PostCard post={{title: 'Post title', body: 'Post body'}} />)

        expect(getByRole('heading')).toHaveTextContent('Post title');
        expect(getByTitle('Post title').src).toContain('/images/post.jpg');
    });
});