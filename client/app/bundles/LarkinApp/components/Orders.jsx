import React from 'react';
import { Link } from 'react-router'

export default (props) => {
    return (
      <div>
        <h3 className="noselect">
          <div className="ui tabular menu">

            <Link to='/app/delivery/orders/list' activeClassName="active" className="item nav-orders-actual">Actual</Link>
            <Link to='/app/delivery/orders/outdated' activeClassName="active"  className="item nav-orders-outdated">Outdated</Link>
            <Link to='/app/delivery/orders/completed' activeClassName="active"  className="item nav-orders-scheduled">Scheduled</Link>
            <Link to='/app/delivery/orders/cancelled' activeClassName="active"  className="item nav-orders-cancelled">Cancelled</Link>

            <div className="right menu">
              <a className="item button-orders-upload">
                  <i className="upload icon"></i>Upload orders CSV
              </a>
            </div>
          </div>
        </h3>

        {props.children}

        <div name="upload" className="ui modal upload">
          <i className="close icon"></i>
          <div className="header">
            Upload new orders
          </div>
          <div className="image content">
            <div className="image">
              <i className="shipping icon"></i>
            </div>
            <div className="full-width description">
              <div className="ui warning message">
                <div className="header">
                  Please, be careful!
                </div>
                <p>If your CSV contains old, malformed or duplicate orders they will be uploaded AS IS without any modification.</p>
                <p>If you've accidentally uploaded something wrong, you could fix it later by editing and cancelling wrong orders.</p>
              </div>
              <form>
                <p>Select your orders CSV file using control below:</p>
                {/*file-upload files=orderFiles*/}
              </form>
            </div>
          </div>
          <div className="actions">
              <div className="ui positive button">
                <i className="upload icon"></i>
                Upload
              </div>
              <div className="ui deny button">
                <i className="cancel icon"></i>
                Cancel
              </div>
          </div>
        </div>
      </div>
    );
}
