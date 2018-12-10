<template lang="html">
  <div id="netobjtable2">
    <tg-table
      ref="table"
      sum-text="sum"
      index-text="#"
      :data="data"
      :columns="columns"
      :stripe="props.stripe"
      :border="props.border"
      :show-header="props.showHeader"
      :show-summary="props.showSummary"
      :show-row-hover="props.showRowHover"
      :show-index="props.showIndex"
      :tree-type="props.treeType"
      :is-fold="props.isFold"
      :expand-type="props.expandType"
      :selection-type="props.selectionType"
      >
      <template slot="$expand" scope="scope">
        {{ `My name is ${scope.row.name},
           this rowIndex is ${scope.rowIndex}.`
         }}
      </template>
      <template slot="likes" scope="scope">
        {{ scope.row.likes.join(',') }}
      </template>
    </tg-table>
  </div>
</template>

<script>
import TgTable from 'vue-table-with-tree-grid'
import Vue from 'vue'

Vue.use(TgTable)

  export default {
    name: 'netobjtable2',
    components: {
      TgTable,
    },
    data() {
      return {
        props: {
          stripe: false,
          border: true,
          showHeader: true,
          showSummary: false,
          showRowHover: true,
          showIndex: false,
          treeType: true,
          isFold: true,
          expandType: false,
          selectionType: true,
        },
        columns: [
          {
            label: 'Name',
            prop: 'name',
            width: '400px',
            minWidth: '100px',
          },
          {
            label: 'Address Type',
            prop: 'address_type',
            minWidth: '50px',
          },
          {
            label: 'Address',
            prop: 'address',
          },
          {
            label: 'Comment',
            prop: 'comment',
          },

        ],

        data: [
          {
              'name': 'subnet1',
              'type': 'subnet', // group, subnet, range
              'address_type': 'v4',   // v4, v6
              'address': '192.168.1.0',
              'netmask': '255.255.255.0',
              'comment': 'this is user comment'
            },
            {
              'name': 'range1',
              'type': 'range', // group, subnet, range
              'address_type': 'v4',   // v4, v6    
              'address': '192.168.1.11',
              'netmask': '192.168.1.129',
              'comment': 'this is user comment'    
            },          
            {
              'name': 'group1',
              'type': 'group', // group, subnet, range
              'comment': 'This is Group object',
              children: [
                {
                  'name': 'subrange',
                  'type': 'range', // group, subnet, range
                  'address_type': 'v4',   // v4, v6    
                  'address': '192.168.1.11',
                  'netmask': '192.168.1.129',
                  'comment': 'this is user comment'    
                },                          

              ],
            },
        ],

      };
    },
    computed: {
      propList() {
        return Object.keys(this.props).map(item => ({
          name: item,
        }));
      },
    },
    methods: {

    },
  };
</script>

<style scoped lang="less">
  * {
    margin: 0;
    padding: 0;
  }
</style>