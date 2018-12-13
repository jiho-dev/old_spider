<template>
  <div id="people">
    <!-- hide-actions -->
    <v-card>
      <v-card-title>Network Object
        <v-spacer></v-spacer>
        <v-text-field append-icon="search" label="Search" single-line hide-details v-model="search"></v-text-field>
      </v-card-title>

      <v-data-table :headers="headers" :items="desserts" :search="search" item-key="name">
        <template slot="headers" slot-scope="props">
          <tr>
            <th>expand</th>
            <th v-for="header in props.headers" :key="header.text">{{ header.text }}</th>
          </tr>
        </template>

        <template slot="items" slot-scope="props">
          <tr>
            <!-- <td class="justify-center layout px-0">
            </td>-->
            <td>
              <v-btn v-if="props.item.children" icon class="mx-0" @click="onClick(props)">
                <v-icon v-if="!props.item.expand" small color="blue">arrow_downward</v-icon>
                <v-icon v-else small color="blue">arrow_upward</v-icon>
              </v-btn>
            </td>
            <td>{{ props.item.name }}</td>
            <td>{{ props.item.calories }}</td>
            <td>{{ props.item.fat }}</td>
            <td>{{ props.item.carbs }}</td>
            <td>{{ props.item.protein }}</td>
            <td>{{ props.item.iron }}</td>
          </tr>
        </template>
        <v-alert
          slot="no-results"
          :value="true"
          color="error"
          icon="warning"
        >
        Your search for "{{ search }}" found no results.
        </v-alert>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "people",
  data: () => ({
    search: "",
    headers: [
      // {
      //     text: '',
      //     align: 'left',
      //     sortable: false,
      //     value: 'name',
      //     width: "1%"
      // },      
      //  { text: "check", value: "expand" },
      { text: "Dessert", value: "name" },
      { text: "Calories", value: "calories" },
      { text: "Fat (g)", value: "fat" },
      { text: "Carbs (g)", value: "carbs" },
      { text: "Protein (g)", value: "protein" },
      { text: "Iron (%)", value: "iron" }
    ],
    desserts: [
      {
        value: false,
        expand: false,
        name: "Orange Juice",
        category: "Beverage",
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        iron: "7%",
        children: [
          {
            value: false,
            expand: false,
            name: "Juice1",
            category: "Beverage",
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: "7%",
            children: false
          },
          {
            value: false,
            expand: false,
            name: "Juice1",
            category: "Beverage",
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: "7%",
            children: false
          }
        ]
      },
      {
        value: false,
        expand: false,
        name: "Larabar",
        category: "Snack",
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        iron: "45%",
        children: false
      }
    ],

    groupSortDescending: false
  }),

  methods: {
    collapseAll() {
      this.$refs.expandableTable.collapseAll();
    },
    expandAll() {
      this.$refs.expandableTable.expandAll();
    },
    onClick(props) {
      console.log("onclick:" + props.item.name);
      console.log("onclick:" + props.item.expand);
      console.log("onclick:" + props.item.children);
      props.item.expand = !props.item.expand;
      // this.desserts.push(n);
    }
  }
};
</script>

<style>
.section {
  margin-top: 50px;
}
</style>