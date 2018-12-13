<template>
  <div id="people">
      <!-- hide-actions -->
    <v-data-table
      :headers="headers"
      :items="desserts"
      item-key="name"
      group-key="category"
    >
      <template slot="group1" slot-scope="props1">
        <!-- <span class="font-weight-bold">Group {{props.groupIndex + 1}} - {{props.groupName}}</span> -->
        <tr>
          <td>Group {{props.groupIndex + 1}}</td>
          <td>{{props.groupName}}</td>
        </tr>
      </template>

      <template slot="items" slot-scope="props">
        <tr @click="onClick">
          <td>{{ props.item.name }}</td>
          <td>{{ props.item.calories }}</td>
          <td>{{ props.item.fat }}</td>
          <td>{{ props.item.carbs }}</td>
          <td>{{ props.item.protein }}</td>
          <td>{{ props.item.iron }}</td>
        </tr>
      </template>
    </v-data-table>

    <v-data-table
      :headers="headers"
      :items="no_group_desserts"
      item-key="name"
    >
      <!-- <template slot="group" slot-scope="props">
        <tr>
          <td>Group {{props.groupIndex + 1}}</td>
          <td>{{props.groupName}}</td>
        </tr>
      </template> -->

      <template slot="items" slot-scope="props">
        <tr>
          <td>{{ props.item.name }}</td>
          <td>{{ props.item.calories }}</td>
          <td>{{ props.item.fat }}</td>
          <td>{{ props.item.carbs }}</td>
          <td>{{ props.item.protein }}</td>
          <td>{{ props.item.children }}</td>
        </tr>
      </template>
    </v-data-table>    
  </div>

</template>

<script>
export default {
  name: 'people',
  methods: {
      collapseAll() {
        this.$refs.expandableTable.collapseAll()
      },
      expandAll() {
        this.$refs.expandableTable.expandAll()
      },    
      onClick() {
        console.log("onclick")
      }
    },

    data: () => ({
      headers: [
        { text: "Dessert (100g serving)", value: "name" },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Iron (%)", value: "iron" }
      ],
      desserts: [
        {
          value: false,
          name: "Orange Juice",
          category: "Beverage",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%"
        },
        {
          value: false,
          name: "Larabar",
          category: "Snack",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%"
        },
        {
          value: false,
          name: "Donut",
          category: "Breakfast",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22%"
        },

        {
          value: false,
          name: "Bagel",
          category: "Breakfast",
          calories: 999,
          fat: 28.0,
          carbs: 151,
          protein: 2.9,
          iron: "29%"
        },
        {
          value: false,
          name: "KitKat",
          category: "Snack",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%"
        },
        {
          value: true,
          name: "KitKat1",
          // category: "Snack",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%"
        }

      ],
      no_group_desserts: [
        {
          value: false,
          name: "Orange Juice",
          category: "Beverage",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%",
          children: [
            {
              name: "sub Orange Juice1",
              category: "Beverage",
              calories: 262,
            },
            {
              name: "sub Orange Juice2",
              category: "Beverage",
              calories: 262,
            },


          ]
        },
        {
          value: false,
          name: "Larabar",
          category: "Snack",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%"
        }
      ],

      groupSortDescending: false

    })
}

</script>

<style>
.section {
  margin-top: 50px;
}
</style>