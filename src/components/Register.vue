<template>
  <div>
    <h1>Let's Get You Registered!</h1>
    <form>
      <label for="user">Username</label>
      <input v-model="user" name="user" />

      <label for="password">Password</label>
      <input type="password" v-model="password" name="password" />
      <input type="submit" @click.prevent="handleLogin" />
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

<style scoped>
.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
