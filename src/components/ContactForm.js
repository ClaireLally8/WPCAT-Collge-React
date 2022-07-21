import React, { Component } from 'react'
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";

export default class ContactForm extends Component {
  render() { return (
          <form>
            <label>
              Full name
            </label>
            <input
              type="text"
              className="form-control"
            />
            <br />
            <label>
                Email Address
            </label>
            <input
              type="email"
              className="form-control"
            />
            <br />
            <label>
              Phone Number
            </label>
            <input
              type="text"
              className="form-control"
            />
            <br />
            <label>
              Your message
            </label>
            <textarea
              type="text"
              className="form-control"
              rows="3"
            />
            <div className="text-center mt-4">
            </div>
            <MDBBtn className="btn btn-block py-3 px-4">
                Send
              </MDBBtn>
          </form>
    )
  }
}
