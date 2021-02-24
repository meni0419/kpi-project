<template>
  <div>
    these start<br />
    <div id="moList">
      <v-data-table :headers="[1, 2, 3]" :items="moList.rows"> </v-data-table>
      <br /><br />moList<br />
      {{ moList }}
      <br /><br />users <br />
      {{ users }}
    </div>
    these end
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState(["moList", "users"]),
    ...mapGetters(["USERS"]),
  },

  data: () => {
    return {};
  },
  methods: {
    ...mapActions(["SINGIN", "GET_USERS"]),
  },
  mounted() {
    this.SINGIN(), this.GET_USERS();
  },
};
</script>

<style lang="css">
.login {
  text-decoration: none;

}
</style>