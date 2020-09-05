import React from "react";
import "./styles.css";
function FAQCards(props) {
  function Open(e) {
    document
      .getElementsByClassName(`${e.target.id}`)[0]
      .classList.remove("hide");
  }
  function Close(e) {
    document.getElementsByClassName(`${e.target.id}`)[0].classList.add("hide");
  }
  return (
    <div class="card animate__animated  animate__fadeIn">
      <div
        class={`card-image waves-effect waves-block waves-light card-image-FAQ ${props.index} hide`}
      >
        <img
          class="activator"
          src="https://coolbackgrounds.io/images/backgrounds/white/pure-white-background-85a2a7fd.jpg"
        />
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">
          {props.title}
          <i class="material-icons right" id={props.index} onClick={Open}>
            more_vert
          </i>
        </span>
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4 card-back">
          {props.title}
          <i class="material-icons right" id={props.index} onClick={Close}>
            close
          </i>
        </span>
        {props.qa.map((item) => {
          return (
            <div className="question-answer">
              <br />
              <strong>
                <span>{item.question}</span>
              </strong>
              <br />
              <span>{item.answer}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FAQCards;
