<template>
  <div id="people1">
    <v-client-table :data="data" :columns="columns" :options="options"></v-client-table>
  </div>
</template>

<script>
// import { ServerTable, ClientTable, Event } from "vue-tables-2";
import { ClientTable } from 'vue-tables-2';
import Vue from 'vue';

Vue.use(ClientTable);

export default {
  name: 'people1',
  data () {
    return {
      columns: ['id', 'name', 'age', 'address.city'],
      data: getData(),
      options: {
        headings: {
          id: 'ID',
          name: 'Country Name',
          age: 'Age'
          
        },
        // sortable: ['name', 'age'],
        // filterable: ['name', 'age']
        filterable: false,
        // theme: 'bootstrap3',
        skin: 'table-bordered'
      },
      show: true
    };
  },

  computed: {},
  methods: {}
};

function getData () {
  return [
    { id: 1, name: 'John', age: '20', address: { city: 'seoul', zip: '123-122'} },
    { id: 2, name: 'Jane', age: '24' },
    { id: 3, name: 'Susan', age: '16' },
    { id: 4, name: 'Chris', age: '55' },
    { id: 5, name: 'Dan', age: '40' }
  ];
}

</script>

<style>
#people {
  text-align: center;
  width: 95%;
  margin: 0 auto;
}
h2 {
  margin-bottom: 30px;
}
th,
td {
  text-align: left;
}
th:nth-child(n+2),
td:nth-child(n+2) {
  text-align: center;
}
thead tr:nth-child(2) th {
  font-weight: normal;
}
.VueTables__sort-icon {
  margin-left: 10px;
}
.VueTables__dropdown-pagination {
  margin-left: 10px;
}
.VueTables__highlight {
  background: yellow;
  font-weight: normal;
}
.VueTables__sortable {
  cursor: pointer;
}
.VueTables__date-filter {
  border: 1px solid #ccc;
  padding: 6px;
  border-radius: 4px;
  cursor: pointer;
}
.VueTables__filter-placeholder {
  color: #aaa;
}
.VueTables__list-filter {
  width: 120px;
}
</style>
