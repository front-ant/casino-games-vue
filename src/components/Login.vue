<template>
  <div>
    <h1>Let's Get You Logged In!</h1>
    <form>
      <div class="form-group">
        <label for="user">Username</label>
        <input type="text" v-model="user" name="user" class="form-control" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          v-model="password"
          name="password"
          class="form-control"
        />
      </div>
      <button
        type="submit"
        class="btn btn-lg btn-gold btn-block"
        @click.prevent="handleLogin"
      >
        Login
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      user: "",
      password: "",
      check1: false,
      check2: false
    };
  },

  methods: {
    handleLogin: function() {
      this.$emit("submitted", this.user, this.password);
    }
  }
};
</script>
