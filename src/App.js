import React from 'react';
import { useMachine } from '@xstate/react';
import { redditMachine } from './RedditMachine';
import {SubReddit} from "./SubReddit";

const subreddits = ['frontend', 'reactjs', 'vuejs'];

const App = () => {
  const [current, send] = useMachine(redditMachine);
  const { subreddit } = current.context;

  return (
    <main>
      <header>
        <select
          onChange={e => {
            send('SELECT', { name: e.target.value });
          }}
        >
          {subreddits.map(subreddit => {
            return <option key={subreddit}>{subreddit}</option>;
          })}
        </select>
      </header>
      {subreddit && <SubReddit name={subreddit} key={subreddit} />}
    </main>
  );
};

export default App