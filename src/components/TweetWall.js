import React from 'react';
import Tweet from './Tweet';

class TweetWall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };
  }

  // TODO: componentWillMount()
  componentWillMount (nextProps) {
    this.setState({tweets: this.props.newTweets})
  }
  // TODO: shouldComponentUpdate()
  shouldComponentUpdate (nextProps) {
    return this.state.tweets.includes(nextProps.newTweets)
  }
  // TODO: componentWillReceiveProps()
  componentWillReceiveProps (nextProps) {
    var tweetArray = [ ...nextProps.newTweets,...this.state.tweets]
    this.setState({tweets: tweetArray})
  }

  render() {
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }
}

export default TweetWall;
