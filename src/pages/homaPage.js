import React, {Component} from 'react';

class HomaPage extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                this.setState({ posts: data });
            })
            .catch(error => {
                console.log(error);
            });
    }
    render() {

        return (
            <div className="home-root">
                <div className="tittle-wrapper">
                    <h1>Blog List</h1>
                </div>
                <div className="table-wrapper safe-area">
                    <div className="title-container">
                    <div className="content-block">
                        <h2>Title</h2>
                        <h2>Content</h2>
                    </div>
                    </div>
                    <div className="content-container">
                    {this.state.posts.map(post => (
                        <div className="content-block" key={post.id}>
                            <span>{post.title}</span>
                            <span>{post.body}</span>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default HomaPage;