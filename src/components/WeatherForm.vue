<template>
  <v-form ref="form" @submit.prevent="handleSubmit">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field
            ref="cityInput"
            v-model="city"
            append-inner-icon="mdi-magnify"
            label="Enter city name"
            :rules="cityRules"
            hide-details="auto"
          />
        </v-col>
        <v-col cols="12" class="d-md-none">
          <v-btn block color="primary" type="submit" class="mt-3">Search</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue';

const city = ref('');
const cityInput = ref(null);
const form = ref(null);
const emit = defineEmits(['submit']);

const regex = /^[a-zA-ZąĄćĆęĘłŁńŃóÓśŚźŹżŻ\s]+$/;

const cityRules = [
  (v: string) => !!v || 'City name is required',
  (v: string) => regex.test(v) || 'City name must contain only letters',
];

const handleSubmit = async () => {
  try {
    const { valid } = await form.value?.validate();

    if (valid) {
      console.log('city name:', city.value)
      emit('submit', city.value);
      city.value = '';
      cityInput.value?.blur();
      form.value?.resetValidation();
    }
  } catch (error) {
    console.error('Error during form validation:', error);
  }
};
</script>
