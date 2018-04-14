import React, {Component} from 'react';

class Login extends Component {

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-sm-4"></div>
          <div class="col-sm-4">
            <a class="btn big-login" data-toggle="modal" href="javascript:void(0)" onclick="openLoginModal();">Log in</a>
          </div>
          <div class="col-sm-4"></div>
        </div>
      </div>
  }
}
