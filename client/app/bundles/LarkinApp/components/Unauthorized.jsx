import React from 'react';
import { Link } from 'react-router'

export default (props) => {
    return (
      <div className="unauthorized">
        <div className="ui middle aligned center aligned grid">
          <div className="column">
              <div className="ui negative message">
                <div className="header">You are not authorized to see this content</div>
                <p>Please, contact your system administrator to request access rights.</p>
                <Link to="/app">Go to application</Link>
                {props.children}
              </div>
          </div>
        </div>
      </div>
    );
}
