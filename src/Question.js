import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

class Question extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currAnswerChosen: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = event => {
        this.setState({
            currAnswerChosen : event.target.value,
        });
        this.props.callbackReturnAnswer(event.target.value);
      };

    render() {
        return (
            <div className="Question">
                {this.props.questionDetail.questionText}

                <RadioGroup
                    aria-label="Gender"
                    name="currAnswerChosen"
                    value={this.state.currAnswerChosen}
                    onChange={this.handleChange}
                >
                    {this.props.questionDetail.answersOptions.map(a => {
                        return (
                            <FormControlLabel value={a} control={<Radio />} key={a + this.props.questionDetail.questionText} label={a}/>
                        );
                    })}
                </RadioGroup>
            </div>
        );
    }
}

export default Question;
