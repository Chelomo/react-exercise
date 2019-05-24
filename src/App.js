// בע" ה
import React from 'react';
import Question from './Question';
import Button from '@material-ui/core/Button';

const questionsList = [
  {
    questionId: 1,
    questionText: 'Question 1',
    answersOptions: ['1', '2', '3', '4'],
    trueAnswer: "1"
  },
  {
    questionId: 2,
    questionText: 'Question 2',
    answersOptions: ['1', '2', '3', '4'],
    trueAnswer: "1"
  },
  {
    questionId: 3,
    questionText: 'QUestion 3',
    answersOptions: ['1', '2', '3', '4'],
    trueAnswer: "1"
  },
  {
    questionId: 4,
    questionText: 'Question 4',
    answersOptions: ['1', '2', '3', '4'],
    trueAnswer: "1"
  },
];



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currQuestion: 0,
      currentAnswer: "",
      currentScore: 0,
      buttonNextText: "Next"
    }

    this.answerReturned = this.answerReturned.bind(this);
    this.onNext = this.onNext.bind(this);
    this.onPrev = this.onPrev.bind(this);

  }

  answerReturned = a => {
    this.setState({ currentAnswer: a });
  };

  onNext = () => {
    // verify if true Answer has been chosen.
    if (questionsList[this.state.currQuestion].trueAnswer === this.state.currentAnswer) {
      this.setState({ currentScore: this.state.currentScore + 1 });
    }
    this.setState({ currQuestion: this.state.currQuestion + 1 })

    // verify if it is the last question:
    if (this.state.currQuestion === questionsList.length - 1) {
      this.setState({ buttonNextText: "Done" })
    }

  }

  onPrev = () => {
    this.setState({ currQuestion: this.state.currQuestion - 1 })

  }


  render() {

    // on The first question, The button prev disabled
    if (this.state.currQuestion === 0) {
      return (
        <div className="App">

          <Question questionDetail={questionsList[this.state.currQuestion]} callbackReturnAnswer={this.answerReturned}></Question>

          <Button disabled={true} onClick={this.onPrev} variant="contained" color="secondary" >
            Prev
    </Button>

          <Button onClick={this.onNext} variant="contained" color="primary" >
            {this.state.buttonNextText}
          </Button>

        </div>


      );
    }

    else if (this.state.currQuestion < questionsList.length) {
      return (
        <div className="App">

          <Question questionDetail={questionsList[this.state.currQuestion]} callbackReturnAnswer={this.answerReturned}></Question>

          <Button onClick={this.onPrev} variant="contained" color="secondary" >
            Prev
      </Button>

          <Button onClick={this.onNext} variant="contained" color="primary" >
            {this.state.buttonNextText}
          </Button>

        </div>
      );
    }
    else {
      return (
        <div>
          Congratulations ! You answered on {this.state.currentScore}  true questions.
        </div>
      );
    }
  }
}


export default App;
