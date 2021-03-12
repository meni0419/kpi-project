<template>
  <div id="moList">
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
        full-width: false
      ></v-text-field>
    <v-data-table
      :headers="[
        { text: 'user_id', value: 'user.user_id' },
        { text: 'login', value: 'user.login' },
        { text: 'first_name', value: 'user.first_name' },
        { text: 'middle_name', value: 'user.middle_name' },
        { text: 'last_name', value: 'user.last_name' },
        { text: 'initials', value: 'user.initials' },
        { text: 'email', value: 'user.email' },
        { text: 'layout_id', value: 'user.layout_id' },
        { text: 'theme', value: 'user.theme' },
      ]"
      v-model="selected"
      :single-select="singleSelect"
      fixed-header
      :search="search"
      item-key="user_id"
      :items="moList.DATA.rows"
      :items-per-page="50"
      show-select
      class="elevation-1"
      multi-sort
      height="1000"
    >
    </v-data-table>
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
    return {
      search: "",
      singleSelect: false,
    };
  },
  methods: {
    ...mapActions(["SINGIN", "GET_USERS"]),
  },
  mounted() {
    this.SINGIN(), this.GET_USERS();
  },
};
</script>

<style lang="scss">
.v-text-field {
  width: 300px;
  label {
    padding: 0 0 0 10px;
  }
  #input-21 {
    padding: 0 0 0 10px;
  }
}
</style>