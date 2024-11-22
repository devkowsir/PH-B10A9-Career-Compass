import React from "react";

const FAQList = ({ faqs }) => {
  return (
    <div className="join join-vertical w-full">
      {faqs.map((faq, i) => (
        <div key={i} className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" defaultChecked={i == 0} />
          <div className="collapse-title text-xl font-medium">{faq.question}</div>
          <div className="collapse-content">
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQList;
