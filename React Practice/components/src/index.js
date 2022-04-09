import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className='ui container comments'>
            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 16:45"
                    content="Nice blog post"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Alex" 
                    timeAgo="Today at 02:00" 
                    content="I like the subject"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>    
                <CommentDetail 
                    author="Jane" 
                    timeAgo="Yesterday at 17:00" 
                    content="I like the writing"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'))