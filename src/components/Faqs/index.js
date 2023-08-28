// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props

    return (
      <div className="app-bg-container">
        <div className="app-container">
          <h1 className="heading">FAQs</h1>
          <ul>
            {faqsList.map(eachItem => (
              <FaqItem key={eachItem.id} qaList={eachItem} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
