<template>
  <div id="networkobj1" data-app="true">
    <!-- <v-data-table -->
    <v-tree-data-table

      :headers="headers"
      :items="items"
      :pagination="pagination"
      :loading="loading"
      :total-items="totalItems"
      @load="load"
    >
      <!-- selectAll="false" -->
      <template slot="row" slot-scope="props">
        <td>{{props.item.name}}</td>
        <td>{{props.item.description}}</td>
      </template>
    <!-- </v-data-table> -->
    </v-tree-data-table>    
  </div>
</template>

<script>
import Vue from "vue";
// import VTreeDataTable from "v-tree-data-table";
// import VTreeDataTable from "v-tree-data-table";
import VTreeDataTable from "./myVTreeTable";

Vue.use(VTreeDataTable);

export default {
  name: "networkobj1",
  components: {
    VTreeDataTable
  },
  data() {
    return {
      loading: false,
      pagination: {},
      totalItems: 0,
      headers: [
        {
          text: "Name",
          value: "name",
          width: "30%",
          align: "left",
          sortable: true,
          // classes: { text: 'Calories', value: 'calories', width: '1%' }
        },
        {
          text: "Description",
          value: "description",
          align: "left",          
          width: "65%",
        }
      ],
      items: []
    };
  },
  methods: {
    load(pagination) {
      this.pagination = pagination;
      this.$nextTick(() => {
        this.items = [
          {
            id: 1,
            name: "Node 1-asdfasfdasfasdfadfasdfasdfasdfasdfasdfasdfasdfasdfasfasfdasdf",
            description: "Root Node With Children",
            depth: 1,
            children: [
              {
                id: 3,
                name: "Node 1.1",
                description: "Child of Root",
                depth: 2,
                leaf: true
              },
              {
                id: 4,
                name: "Node 1.2",
                description: "Child of Root",
                depth: 2,
                children: [
                  {
                    id: 5,
                    name: "Node 1.2.1",
                    description: "Child of 1.2",
                    depth: 3,
                    leaf: true
                  },
                  {
                    id: 6,
                    name: "Node 1.2.2",
                    description: "Child of 1.2",
                    depth: 3,
                    leaf: true
                  }
                ]
              }
            ]
          },
          {
            id: 2,
            name: "Node 2",
            description: "Node 2 is just leaf",
            depth: 1,
            leaf: true
          },
          {
            id: 10,
            name: "Node 10",
            description: "Node 10 is just leaf",
            depth: 1,
            leaf: true
          }


        ];
        this.totalItems = 2;
      });
    },
  }
};
</script>


<style>
/* table tbody tr:not(:last-child) td {
  border: 1px solid red !important;
  height:1px;
} */

    table.v-table tbody td,
    table.v-table tbody th {
      border: 1px solid red !important;      
      height: 1px;
    }

</style>