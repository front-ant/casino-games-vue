<template>
  <div>
    <h1>Let's Get You Registered!</h1>
    <form>
      <div class="form-group">
        <label for="user">Username</label>
        <input v-model="user" name="user" class="form-control" />
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
      <div class="form-group form-check">
        <input
          type="checkbox"
          v-model="check1"
          name="check1"
          class="form-check-input"
        />
        <label for="check1" class="form-check-label"
          >Ich akzeptiere diesen Text</label
        >
      </div>
      <div class="form-group form-check">
        <input
          type="checkbox"
          v-model="check2"
          name="check1"
          class="form-check-input"
        />
        <label for="check2" class="form-check-label"
          >Ich akzeptiere auch diesen Text</label
        >
      </div>
      <button
        type="submit"
        class="btn btn-lg btn-gold btn-block"
        @click.prevent="handleLogin"
      >
        Play Now
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
      password: ""
    };
  },

  methods: {
    handleLogin: function() {
      this.$emit("submitted");
    }
  }
};
</script>
