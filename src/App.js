import React, { useState } from 'react';
import Header from './component/header/Header';
import Headline from './component/headline/Headline';
import Button from './component/button/Button';
import Post from './component/post/Post';
import { getPosts, selectPosts } from './component/posts/postsSlice'
import { useSelector, useDispatch } from 'react-redux';
import './styles/global.css';
import { v4 as uuidv4 } from 'uuid';

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

  const [displayButton, setDisplayButton] = useState(true)

  const fetch = async () => {
    setDisplayButton(false);
    await dispatch(getPosts());
  }

  return (
    <div className="App" data-testid='app-component'>
      <Header />      
      <main>
        <Headline 
          header='Posts' 
          desc='Click the button to render posts' 
          tempArray={tempArray}
        />
        {displayButton && 
          <Button 
            buttonText='Get posts'
            emitEvent={fetch}
          />
        }
        { posts.length > 0 && 
          <div>
            {posts.map( post => 
              <Post 
                key={uuidv4()}
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
