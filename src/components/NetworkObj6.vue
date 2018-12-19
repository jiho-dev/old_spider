<template>
<div id="q-app">
  <div class="q-ma-md">
    Fork and make your own! I haven't tested this table with huge data, with less than 1000 rows works fine <br><br> Developed using the latest quasar framework
  </div>

  <div class="q-ma-md">
    Tree table example
  </div>
  <div class="q-table-container q-table-dense">
    <div class="q-table-middle scroll">
      <table class="q-table">
        <thead>
          <tr class style="text-align: left;">
            <th>Name</th>
            <th>Description</th>
            <th>Account</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>

          <tr v-for="(item ,index)  in (arrayTreeObj)" :key="index" v-bind:class="[(item.id != selectedRowID.id) ? 'my-label':'text-green bg-light-green-11','']" @click="selectedRow(item)">
            <td data-th="Name" @click="toggle(item, index)">

              <span class="q-tree-link q-tree-label" v-bind:style="setPadding(item)">                
                                  <q-icon  style="cursor: pointer;" 
                                  :name="iconName(item)" color="secondary"  ></q-icon>
                                  {{item.name}}
                              </span>

            </td>
            <td data-th="Description">{{item.description}}</td>
            <td width="20%" data-th="Account">{{item.niif_account}} </td>
            <td width="10%" data-th="Actions">
              <q-btn dense flat color="blue" icon="add_circle"></q-btn>

            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

</template>

<script>
// import { ServerTable, ClientTable, Event } from "vue-tables-2";
import { ClientTable } from 'vue-tables-2';
import Vue from 'vue';

Vue.use(ClientTable);

export default {
  name: 'q-ap',
  data: function() {
    return {
      version: Quasar.version,
      isExpanded: true,
      selectedRowID: {},
      table: [{
          children: [{
            children: [{
              children: [],
              leaf: false,
              level: 1,
              name: "Sub-Value",
              niif_account: "36565",
              parent_id: 2,
              id: 4,
              description: "sub-description"
            }],
            leaf: true,
            level: 1,
            name: "Sub-Value 1",
            niff_account: "123567",
            parent_id: 1,
            id: 2,
            description: "sub-description value 1"
          }],
          leaf: false,
          level: 0,
          name: "Value 1",
          niff_account: "",
          parent_id: null,
          expend: null,
          id: 1,
          description: "description value 1"
        },
        {
          children: [],
          leaf: true,
          level: 0,
          name: "Value 2",
          niff_account: "",
          parent_id: null,
          expend: null,
          id: 2,
          description: "description value 2"
        }
      ],
      itemId: null,
    }
  },
  methods: {
    notify: function() {
      this.$q.notify('Running on Quasar v' + this.$q.version)
    },
    recursive(obj, newObj, level, itemId, isExpend) {
      let vm = this;

      obj.forEach(function(o) {
        if (o.children && o.children.length != 0) {
          o.level = level;
          o.leaf = false;
          newObj.push(o);
          if (o.id == itemId) {
            o.expend = isExpend;
          }
          if (o.expend == true) {
            vm.recursive(o.children, newObj, o.level + 1, itemId, isExpend);
          }
        } else {
          o.level = level;
          o.leaf = true;
          newObj.push(o);
          return false;
        }
      });
    },
    iconName(item) {
      if (item.expend == true) {
        return "remove_circle_outline";
      }

      if (item.children && item.children.length > 0) {
        return "control_point";
      }

      return "done";
    },
    toggle(item, index) {
      let vm = this;
      vm.itemId = item.id;

      item.leaf = false;
      //show  sub items after click on + (more)
      if (
        item.leaf == false &&
        item.expend == undefined &&
        item.children != undefined
      ) {
        if (item.children.length != 0) {
          vm.recursive(item.children, [], item.level + 1, item.id, true);
        }
      }


      if (item.expend == true && item.children != undefined) {
        var __subindex = 0;
        item.children.forEach(function(o) {
          o.expend = undefined;
        });

        vm.$set(item, "expend", undefined);
        vm.$set(item, "leaf", false);
        vm.itemId = null;
      }
    },
    setPadding(item) {
      return `padding-left: ${item.level * 30}px;`;
    },
  },
  computed: {
    arrayTreeObj() {
      let vm = this;
      var newObj = [];
      vm.recursive(vm.table, newObj, 0, vm.itemId, vm.isExpanded);
      return newObj;
    }
  },
  watch: {
    selectedIDRow: function(val) {
      if (this.selectedRowID != null) {
        this.$set(this.selectedRowID, "id", val);
      }
    }
  },
};

</script>

<style>

</style>
