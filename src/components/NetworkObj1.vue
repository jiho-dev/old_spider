<template>
  <div id="networkobj1" data-app="true">
    <v-tree-data-table
      :headers="headers"
      :items="items"
      :pagination="pagination"
      :loading="loading"
      :total-items="totalItems"
      @load="load"
    >
      <template slot="row" slot-scope="props">
        <td>{{props.item.name}}</td>
        <td>{{props.item.description}}</td>
      </template>
    </v-tree-data-table>
  </div>
</template>

<script>
import Vue from "vue";
// import VTreeDataTable from "v-tree-data-table";
//import vTreeDataTable from 'v-tree-data-table';

Vue.use(vTreeDataTable);

export default {
  name: "networkobj1",
  components: {
    vTreeDataTable
  },
  data() {
    return {
      loading: false,
      pagination: {},
      totalItems: 2,
      headers: [
        {
          text: "Name",
          value: "name"
        },
        {
          text: "Description",
          value: "description"
        }
      ],
      items: []
    };
  },
  methods: {
    /**
     * Load the records
     * @param {Object} pagination Pagination data from the DataTable
     */
    load(pagination) {
      this.pagination = pagination;
      this.$nextTick(() => {
        this.items = [
          {
            id: 1,
            name: "Node 1",
            description: "Root Node With Children",
            depth: 1,
            children: [
              {
                id: 3,
                name: "Node 1.1",
                description: "Child of Root",
                depth: 2,
                leaf: true,
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
                    leaf: true,
                  },
                  {
                    id: 6,
                    name: "Node 1.2.2",
                    description: "Child of 1.2",
                    depth: 3,
                    leaf: true,
                  }
                ]
              }
            ]
          },
          {
            id: 2,
            name: "Node 2",
            description: "Root Node No Children",
            depth: 1,
            leaf: true,
          }
        ];
        this.totalItems = 2;
      });
    }
  }
};
</script>
