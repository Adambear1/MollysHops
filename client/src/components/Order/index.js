import React, { useState, useEffect } from "react";
import { Calendar } from "react-calendar";
import M from "materialize-css";
import API from "../../utils/API";
import "react-calendar/dist/Calendar.css";
import "./styles.css";

function Order() {
  const [date, setDate] = useState(new Date());
  const [immediate, setImmediate] = useState();
  const [pickup, setPickup] = useState();
  const [hops, setHops] = useState([]);
  const [order, setOrder] = useState({});
  useEffect(() => {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll("select");
      var instances = M.FormSelect.init(elems);
    });
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".modal");
      var instances = M.Modal.init(elems);
    });
  }, []);
  function formChange(e) {
    setOrder({
      ...order,
      immediateOrder: immediate,
      hops: hops,
      pickUp: pickup,
      scheduleDate: sessionStorage.getItem("date"),
      [e.target.name]: e.target.value,
    });
  }
  function onChange(d) {
    sessionStorage.clear();
    setTimeout(() => {
      setDate(d);
      sessionStorage.setItem("date", date);
    });
  }
  function onSwitchImmediate(e) {
    setImmediate(e.target.checked);
  }
  function onSwitchPickUp(e) {
    setPickup(e.target.checked);
  }
  function hopsChange(e) {
    const selectedValues = [...e.target.options]
      .filter((x) => x.selected)
      .map((x) => x.value);
    setHops(selectedValues.slice(0, selectedValues.length));
  }
  function onSubmit(e) {
    e.preventDefault();
    API.inquire(order)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  return (
    <div id="order-modal" className="modal">
      <div className="modal-content">
        <div className="modal-close" styles="font-size:20px!important">
          x
        </div>
        <div className="order-div">
          <form onSubmit={onSubmit}>
            <div className="row" id="order">
              <h4 className="order-header card-content valign center">Order</h4>
              <div className="col s12 m6 l6 xl6">
                <h5>Select Date</h5>
                <Calendar onChange={onChange} value={date} />
              </div>
              <div className="col s12 m6 l6 xl6">
                <div className="row">
                  <div className="input-field col s6">
                    <i className="material-icons prefix">account_circle</i>
                    <input
                      name="fullName"
                      id="icon_prefix"
                      type="text"
                      className="validate"
                      onChange={formChange}
                    />
                    <label for="icon_prefix">Full Name</label>
                  </div>
                  <div className="input-field col s6">
                    <i className="material-icons prefix">phone</i>
                    <input
                      name="phoneNumber"
                      id="icon_telephone"
                      type="tel"
                      className="validate"
                      onChange={formChange}
                    />
                    <label for="icon_telephone">Telephone</label>
                  </div>
                </div>
                <div className="row">
                  <div class="input-field col s12">
                    <i className="material-icons prefix">contact_mail</i>
                    <input
                      name="email"
                      id="email"
                      type="email"
                      class="validate"
                      onChange={formChange}
                    />
                    <label for="email">Email</label>
                  </div>
                </div>
                <div className="row">
                  <div class="input-field col s12">
                    <i className="material-icons prefix">check</i>
                    <select multiple="true" onChange={hopsChange} name="hops">
                      <option disabled={true} placeholder="Type">
                        Select Type...
                      </option>
                      <option className="options" value="Cascade">
                        Cascade
                      </option>
                      <option className="options" value="Chinook">
                        Chinook
                      </option>
                      <option className="options" value="ClusterMeeker">
                        Cluster Meeker
                      </option>
                      <option className="options" value="Columbia">
                        Columbia
                      </option>
                      <option className="options" value="Fuggles">
                        Fuggles
                      </option>
                      <option className="options" value="Williamette">
                        Williamette
                      </option>
                    </select>
                    <label>Select Type of Hops</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s4">
                    <div class="switch">
                      <label>Immediate?</label>
                      {"    "}
                      <label>
                        <input type="checkbox" onChange={onSwitchImmediate} />
                        <span class="lever"></span>
                      </label>
                    </div>
                  </div>
                  <div className="input-field col s4">
                    <div class="switch">
                      <label>Pick Up?</label>
                      {"    "}
                      <label>
                        <input type="checkbox" onChange={onSwitchPickUp} />
                        <span class="lever"></span>
                      </label>
                    </div>
                  </div>
                  <div className="input-field col s4">
                    <label>Amount (Pounds)</label>
                    <input
                      onChange={formChange}
                      name="quantity"
                      type="number"
                      min="0"
                      max="100"
                      placeholder="0lbs"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <button
                      class="white btn waves-effect waves-light"
                      type="submit"
                      name="action"
                      onSubmit={onSubmit}
                    >
                      Submit
                      <i class="material-icons right">send</i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Order;
