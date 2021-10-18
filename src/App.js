import React from 'react';
import Header from './component/header/Header';
import Headline from './component/headline/Headline';
import Button from './component/button/Button';
import Post from './component/post/Post';
import { getPosts, selectPosts } from './component/posts/postsSlice'
import { useSelector, useDispatch } from 'react-redux';
import './styles/global.css';

const tempArray = [
  {
    fName: 'Joe',
    lName: 'Mama',
    email: 'joemama@gmail.com',
    age: 420,
    onlineStatus: true
  },
]

const App = (props) => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);

  const fetch = async () => {
    await dispatch(getPosts());
  }

  return (
    <div className="App">
      <Header />      
      <main>
        <Headline 
          header='Posts' 
          desc='Click the button to render posts' 
          tempArray={tempArray}
        />
        <Button 
          buttonText='Get posts'
          emitEvent={fetch}
        />
        { posts.length > 0 && 
          <div>
            {posts.map( post => 
              <Post 
                key={post.id}
                title={post.title}
                desc={post.body}
              />
            )}
          </div>
        }
      </main>
    </div>
  );
}

export default App;
