<template>
  <v-toolbar extended flat app>
    <v-toolbar-title>PTITCO</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-text-field
        class="mx-3"
        flat
        label="Recherchez un produit"
        prepend-inner-icon="search"
        solo-inverted
      ></v-text-field>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat>Connectez-vous</v-btn>
      <v-btn flat>Panier</v-btn>
      <v-btn flat><v-icon color="orange">favorite_border</v-icon></v-btn>
    </v-toolbar-items>
    <template v-slot:extension>
        <v-toolbar-items>
            <v-btn flat>Anti-Gaspi</v-btn>
            <v-btn flat>Boulangerie</v-btn>
            <v-btn flat>Boucherie</v-btn>
            <v-btn flat>Epicerie</v-btn>
            <v-btn flat>Poissonnerie</v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn flat>Nos valeurs</v-btn>
            <v-btn flat>FAQ</v-btn>
        </v-toolbar-items>
    </template>
  </v-toolbar>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>