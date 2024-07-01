<template>
  <v-card>
    <v-card-text>
      <v-row align="center">
        <v-col cols="12">
         <slot name="icon" />
        </v-col>
        <v-col>
          <v-list-item-title  class="text-h5">
            <slot name="description" />
          </v-list-item-title>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
