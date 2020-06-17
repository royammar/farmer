import React, { useState } from 'react'

import minus from '../styles/imgs/minus.png'
import plus from '../styles/imgs/plus.png'


export default function FAQ() {


    const [faqs, setFaqs] = useState([{
        id: 1,
        question: 'Why buy from us?',
        answer: 'Great question! we bring day by day fresh products straight from the farmer.',
        isOpen: false
    },
    {
        id: 2,
        question: 'How I will get my order?',
        answer: 'As soon as you submit your order the seller will start to prepar it for your and contact you for pickup - usually up to 2 workdays',
        isOpen: false
    },
    {
        id: 3,
        question: 'Why not to order from the supermarket',
        answer: 'Nice one :) Well yes, you will probably pay less but you will not find that quality in your local supermarket.Guaranty!',
        isOpen: false
    }, {
        id: 4,
        question: 'I want to become a seller!',
        answer: 'We are excited too! just login, and go to your shop. Add you products and start to sell. Good luck partner :)',
        isOpen: false
    }, {
        id: 5,
        question: 'Can I customize my shop?',
        answer: 'Yes you can! change your logo. update your shop name and description (just type what ever you like)',
        isOpen: false

    }])




    function toggleText(curId) {
        const res = faqs.findIndex(faq => faq.id === curId)
        setFaqs(faqs.map((faq) => {
            if (faq.id === curId) faqs[res].isOpen = !faqs[res].isOpen
            return faq
        }))
    }





    return (
        <div className="FAQ-container container flex flex1 column ">
            <h2 className="FAQ-header">Frequently Asked Questions</h2>
            {faqs.map((faq) =>
                <div key={faq.id} className="question-answer">
                    <div className="headline flex justify-center space-between">
                        <p className="question">{faq.question}</p>
                        <button className="btn" onClick={() => toggleText(faq.id)}>{faq.isOpen === true ? <img className="minus" src={minus}></img> : <img className="plus" src={plus}></img>}</button>
                    </div>
                    <p className={`answer ${faq.isOpen === true ? 'show' : 'hide'}`} >{faq.answer}</p>
                </div>
            )}
        </div>
    )
}
