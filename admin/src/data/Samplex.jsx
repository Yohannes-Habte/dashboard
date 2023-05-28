import React from 'react';

const Sample = () => {
  return (
    <form class="form">
      <p id="heading">Login</p>
      <div class="field">
        <input
          type="email"
          autocomplete="off"
          placeholder="Username"
          class="input-field"
        />
        
      </div>

      <div class="field">
        <input placeholder="Password" class="input-field" type="password" />
      </div>
      <div class="btn">
        <button class="button1">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </button>
        <button class="button2">Sign Up</button>
      </div>
      <button class="button3">Forgot Password</button>
    </form>
  );
};

export default Sample;
