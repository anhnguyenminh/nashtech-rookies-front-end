import React, {useEffect, useState} from 'react';
import axios from "axios";

const PostsPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [isSortByName, setIsSortByName] = useState(false);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
            console.log('response = ', response);
            setIsLoading(false);
            setPosts(response.data.results);
        })
    }, []);

    const postsFilter = posts.filter(post => post.name.toLowerCase().
    includes(searchText.toLowerCase()))

    const postsSorted = isSortByName ? postsFilter.sort((post1, post2) => {
        if (post1.name < post2.name) return -1;
        if (post1.name > post2.name) return 1;
        return 0;
    }) : postsFilter;

    if (isLoading) return <h1>Loading</h1>
    return (
        <div>
            <input style={{margin: 25}} placeholder="Search post" type="text" value={searchText}
                   onChange={evt => setSearchText(evt.target.value)}/>
            <button onClick={ () => setIsSortByName(true)}>
                Sort by title
            </button>
            {postsFilter.length === 0 && <div>'Not found'</div>}

            <div className="posts-list">
                {postsFilter.map(post => (
                    <div key={post.id}>
                        <div>UserId: {post.userId}</div>
                        <div>Title: {post.title}</div>
                        <div>PostId: {post.id}</div>
                        <div>Body: {post.body}</div>
                        <div>--------------------------</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PostsPage;