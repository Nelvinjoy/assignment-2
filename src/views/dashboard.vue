<template>
  <div class="about">
    <h1>Dashboard</h1>
    <div class="">


    <form @submit="clear">
      <h1>Welcome!..      {{name}}</h1>
      <p>your Email id is {{email}}</p>
  <button type="submit">clear</button>
    </form>
</div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default{
  data(){
    return{
      email: window.localStorage.getItem('email'),
      name: window.localStorage.getItem('name')
    }
  },
  methods:{
...mapActions(["clear"]),
    clear(){
    window. localStorage.clear();
  }
}
}
</script>
