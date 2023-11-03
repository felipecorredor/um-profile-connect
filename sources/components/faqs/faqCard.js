"use client";
import React, { useState } from "react";

import { faqsLeft, faqsRight } from "@/global/faqs";
import WellernAccordion from "../WellernAccordion";

const FaqCard = () => {
  const [active, setActive] = useState(`a1`);
  const onClick = (value) => {
    setActive(value === active ? "" : value);
  };

  return (
    <div className="row">
      <div className="col-lg-6">
        {faqsLeft.map((faq, i) => (
          <WellernAccordion
            key={i}
            title={faq.title}
            onClick={() => onClick(`a${i + 1}`)}
            active={active}
            eventName={`a${i + 1}`}
          >
            <p>{faq.resp}</p>
          </WellernAccordion>
        ))}
      </div>
      <div className="col-lg-6">
        {faqsRight.map((faq, i) => (
          <WellernAccordion
            key={i}
            title={faq.title}
            onClick={() => onClick(`b${i + 1}`)}
            active={active}
            eventName={`b${i + 1}`}
          >
            <p>{faq.resp}</p>
          </WellernAccordion>
        ))}
      </div>
    </div>
  );
};
export default FaqCard;
