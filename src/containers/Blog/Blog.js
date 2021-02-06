import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'; 
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {

    render () {    

    //    const errorDiv = (this.state.error) ? 
    //     <h2 style={{background: 'red', color: 'white'}}><strong>ERROR!!!</strong></h2>
    //     :
    //     null;

        return (
            <div className="Blog">
                {/* {errorDiv} */}
                <header>
                     <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link
                                to={{
                                    pathname: '/new-post',
                                    search: '?skip_system_check=1'
                                }}>New post</Link>
                            </li>
                        </ul>
                     </nav>
                </header> 
                {/* <Route path="/" exact render={() => <h1>Хомячок</h1>} /> */}
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" component={NewPost} />
            </div>
        );
    }
}

export default Blog;