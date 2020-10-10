import React, { useEffect } from "react";
import AboutCards from "../FAQCards/index.js";
import FAQPhoto from "../FAQPhoto/index.js";
import M from "materialize-css";
import "./styles.css";

function FAQ() {
  let info = [
    {
      title: "Pricing",
      index: 0,
      qa: [
        {
          question: "What is the pricing for hops?",
          answer:
            "The pricing per hop varies by quantity purchased, frequency of purchases, and type of hop. For more information, please do not hesitate to reach out to one of our associates to give you a fair price for your needs.",
        },
        {
          question: "Are there any discounts available?",
          answer:
            "Yes, we value our loyal customers and give fair discounts to those who shop with us frequently. ",
        },
        {
          question: "Am I able to buy in bulk?",
          answer:
            "Of course! Please reach out to one of our associates and we will gladly take your order.",
        },
        {
          question:
            "Are there subscriptions or memberships available for recurring purchases?",
          answer:
            "Not at the moment, but we do cherish our loyal customers and provide discounts and favorable pricing for our frequent customers.",
        },
        {
          question: "Does the company allow pre-orders?",
          answer:
            "Yes! By simply calling, or ordering ahead of time, we can have all hops ready for pickup at a set time.",
        },
      ],
    },
    {
      title: "Location",
      index: 1,
      qa: [
        {
          question: "Where are you located?",
          answer: "11294 Vickery Ave E, Tacoma WA 98446-3434",
        },
        {
          question: "Does the organization ship internationally?",
          answer:
            "Not at the moment. All purchases are done locally and in sate.",
        },
        {
          question: "Are there many locations?",
          answer:
            "For being a mom-and-pop hops farm, we are currently only located in Tacoma WA at 11294 Vickery Ave E.",
        },
      ],
    },
    {
      title: "Hours",
      index: 2,
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
      title: "Hops (Types)",
      index: 3,
      qa: [
        {
          question: "What type of hops are there?",
          answer:
            "At Molly's hops, we service 15 different types of hops: Cascades, Clusters( Meeker Hops), Haller-Taus, Goldens, Magnums, Willamette, Columbus, Chinooks, Fuggles, Mt Hoods, Comets, Sterling’s, Northern Brewers, Semco’s and Centennials",
        },
      ],
    },
  ];

  return (
    <div id="faq-modal" class="modal faq-modal">
      <div class="modal-content">
        <div className="FAQ-div">
          <h4 id="FAQ" className="FAQ-header card-content valign center">
            FAQ
          </h4>
          <div className="row">
            <div className="FAQ-grid col s12">
              {info.map((item) => {
                return (
                  <AboutCards
                    title={item.title}
                    qa={item.qa}
                    index={item.index}
                  />
                );
              })}
            </div>
            {/* 
            <div className="col s12 m6">
              <FAQPhoto />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
