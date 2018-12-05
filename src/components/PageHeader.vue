<template>
  <v-layout id="breadcrumb" row class="align-center layout px-4 pt-1 app--page-header">
    <div class="page-header-left">
      <h5 class="pr-3">{{title}}</h5>
    </div>
    <v-breadcrumbs divider=">" drak="true">
      <v-breadcrumbs-item>
      <v-icon larg>home</v-icon>
      </v-breadcrumbs-item>
      <v-breadcrumbs-item v-for="(item,key) in breadcrumbs" :key="key">
      {{ item }}
      </v-breadcrumbs-item>
    </v-breadcrumbs>
    <v-spacer></v-spacer>
    <div class="page-header-right">
      <v-btn icon>
        <v-icon class="text--secondary">refresh</v-icon>
      </v-btn>
    </div>
  </v-layout>  
</template>

<script>
import menu from '@/api/menu';
export default {
  data () {
    return {
      title: ''
    };
  },
  computed: {
    breadcrumbs: function () {
      let breadcrumbs = [];
      menu.forEach(item => {
        if (item.items) {
          let child =  item.items.find(i => {
            return i.component === this.$route.name;
          });
          if (child) {
            breadcrumbs.push(item.title);
            breadcrumbs.push(child.title);
            this.title = child.title;
          }
        } else {
          if (item.name === this.$route.name) {
            this.title = item.title;
            breadcrumbs.push(item.title);
          }
        }
      });
      return breadcrumbs;
    },    
  }
};
</script>

<style>

.breadcrumb { 
  list-style: none; 
  overflow: hidden; 
  font: 8px Sans-Serif;
}

.breadcrumb li a {
  color: white;
  text-decoration: none; 
  padding: 10px 0 10px 65px;
  background: brown; /* fallback color */
  background: hsla(34,85%,35%,1); 
  position: relative; 
  display: block;
  float: left;
}
</style>
