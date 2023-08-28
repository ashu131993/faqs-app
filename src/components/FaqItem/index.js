// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {showAns: false}

  showHideAnswer = () => {
    this.setState(preState => ({
      showAns: !preState.showAns,
    }))
  }

  render() {
    const {showAns} = this.state
    const {qaList} = this.props

    const {questionText, answerText} = qaList

    const btnImg = showAns
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const btnText = showAns ? 'minus' : 'plus'

    return (
      <li className="qa-container">
        <div className="ques-container">
          <h3 className="ques">{questionText}</h3>
          <button
            type="button"
            className="btn-plus-minus"
            onClick={this.showHideAnswer}
          >
            <img src={btnImg} alt={btnText} />
          </button>
        </div>
        {showAns ? (
          <div className="ans-container">
            <hr />
            <p className="ans">{answerText}</p>
          </div>
        ) : (
          ''
        )}
      </li>
    )
  }
}

export default FaqItem
