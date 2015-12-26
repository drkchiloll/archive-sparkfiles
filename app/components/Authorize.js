import React from 'react';
import config from '../../config';

export default class Authorize extends React.Component {
  authenticate() {
    var auth = {};
    auth = {
      response_type: encodeURIComponent('code'),
      scope: encodeURIComponent('spark:messages_read'),
      state: encodeURIComponent('sparkadmin@wwt.com'),
      client_id: encodeURIComponent(config.id),
      redirect_uri: encodeURIComponent('https://sparkint.proxy.wwtatc.com')
    };
    var authKeys = Object.keys(auth);
    return `https://api.ciscospark.com/v1/authorize?${authKeys[0]}`+
      `=${auth.response_type}&${authKeys[1]}=${auth.scope}&${authKeys[2]}`+
      `=${auth.state}&${authKeys[3]}=${auth.client_id}`+
      `&${authKeys[4]}=${auth.redirect_uri}`;
  }
  render() {
    return (
      <div className='container'>
        <a
          className='btn btn-xl btn-success'
          href={this.authenticate()}>
          Authorize App
        </a>
      </div>
    );
  }
}
