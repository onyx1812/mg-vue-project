<template>
  <div class="content content-register">
    <div class="container">
      <h1>Register</h1>
      <form id="register" class="form form-register">
        <ul class="fields">
          <li class="field">
            <input type="text" name="user_first_name" placeholder="First name" required>
          </li>
          <li class="field">
            <input type="text" name="user_last_name" placeholder="Last name" required>
          </li>
          <li class="field">
            <input type="email" name="user_email" placeholder="Email" required>
          </li>
          <li class="field">
            <input type="text" name="user_position" placeholder="Position" required>
          </li>
          <li class="field">
            <input type="password" name="user_password" placeholder="Password" required>
          </li>
          <li class="field">
            <input type="submit" value="REGISTER">
          </li>
        </ul>
        <div id="result" class="result"></div>
      </form>
    </div>
  </div>
</template>
