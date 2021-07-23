import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Post = () => {
    const id = useParams().id;
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [post, setPost] = useState({
        title: 'title',
        body: 'bodyTest'
    });

    useEffect(() => {
        setIsLoading(true);
        let didCancel = false;
        axios({
            url: `https://jsonplaceholder.typicode.com/posts/${ id }`,
            method: 'GET',
        })
            .then(response => {
                if (!didCancel) {
                    setPost({
                        title: response.data.title,
                        body: response.data.body
                    })
                    setIsLoading(false);
                }
            }).catch(err => {
            console.log('error = ', err);
            setIsLoading(false);
            setError(err.message || 'Something went wrong');
        })
        return () => {
            didCancel = true;
        }

    }, [id]);

    const getContent = () => {
        if (isLoading) return (
            <h1>Loading</h1>
        );
        if (error) return (
            <div style={ { color: 'red' } }>{ error } </div>
        );
        return (
            <div>
                <div>
                    Title: { post.title }
                </div>
                <div>
                    Body: { post.body }
                </div>
            </div>
        )
    }

    return (
        <div>
            <div>
                <div> ID: { id } </div>
            </div>
            { getContent() }
        </div>
    )
}

export default Post;
