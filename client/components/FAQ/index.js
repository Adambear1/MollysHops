import React from "react";
import AboutCards from "../FAQCards/index.js";
import FAQPhoto from "../FAQPhoto/index.js";
import "./styles.css";

function FAQ() {
  let info = [
    {
      title: "General",
      index: 0,
      qa: [
        {
          question: "What is a hop",
          answer: "Something you brew beer with",
        },
        {
          question: "How do you spell hop",
          answer: "HOP",
        },
        {
          question: "How do you spell hop",
          answer: "HOP",
        },
        {
          question: "How do you spell hop",
          answer: "HOP",
        },
        {
          question: "How do you spell hop",
          answer: "HOP",
        },
        {
          question: "How do you spell hop",
          answer: "HOP",
        },
      ],
    },
    {
      title: "Pricing",
      index: 1,
      qa: [
        {
          question: "What is the pricing for hops?",
          answer: "11294 Vickery Ave E, Tacoma WA 98446-3434",
        },
        {
          question: "Are there any discounts available?",
          answer: "No local only",
        },
        {
          question: "Am I able to buy in bulk?",
          answer: "No, only the one in tacoma",
        },
        {
          question:
            "Are there subscriptions or memberships available for recurring purchases?",
          answer: "No, only the one in tacoma",
        },
      ],
    },
    {
      title: "Location",
      index: 2,
      qa: [
        {
          question: "Where are you located?",
          answer: "11294 Vickery Ave E, Tacoma WA 98446-3434",
        },
        {
          question: "Does the organization ship internationally?",
          answer: "No local only",
        },
        {
          question: "Are there many locations?",
          answer: "No, only the one in tacoma",
        },
      ],
    },
    {
      title: "Hours",
      index: 3,
      qa: [
        {
          question: "What are the hours of operation for Mollys Hops?",
          answer: "11AM - 4PM PST",
        },
        {
          question: "Are you open for holidays?",
          answer: "Yes",
        },
      ],
    },
    {
      title: "Hops (Types",
      index: 4,
      qa: [
        {
          question: "What type of hops are there?",
          answer: "11AM - 4PM PST",
        },
        {
          question: "Are hops edible?",
          answer: "No",
        },
      ],
    },
  ];
  return (
    <div className="FAQ-div">
      <h4 id="FAQ" className="FAQ-header card-content valign center">
        FAQ
      </h4>
      <div className="row">
        <div className="FAQ-grid col s12 m6">
          {info.map((item) => {
            return (
              <AboutCards title={item.title} qa={item.qa} index={item.index} />
            );
          })}
        </div>

        <div className="col s12 m6">
          <FAQPhoto />
        </div>
      </div>
    </div>
  );
}

export default FAQ;
