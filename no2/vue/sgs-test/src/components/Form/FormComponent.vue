<template>
  <form @submit.prevent="handleSubmit" class="form">
    <FormComponentInput
    inputName="city"
    labelMessage="Выберите город:"
    :options="cities"
    v-model="selectedCity"
    @change="updateWorkshops"
    />

    <FormComponentInput
    inputName="workshop"
    labelMessage="Выберите цех:"
    :options="workshops"
    v-model="selectedWorkshop"
    @change="updateEmployees"
    />

    <FormComponentInput
    inputName="employee"
    labelMessage="Выберите сотрудника:"
    :options="employees"
    v-model="selectedEmployee"
    />

    <FormComponentInput
    inputName="brigade"
    labelMessage="Выберите бригаду:"
    :options="brigades"
    v-model="selectedBrigade"
    />

    <FormComponentInput
    inputName="city"
    labelMessage="Выберите смену:"
    :options="shifts"
    v-model="selectedShift"
    />

    <button type="submit">Отправить!</button>
  </form>
</template>

<script setup>
import data from '@/composables/data';
import { ref, computed } from 'vue';
import FormComponentInput from './FormComponentInput.vue';
import saveToCookie from '@/composables/saveToCookie';

const selectedCity = ref('Самара')
const selectedWorkshop = ref('')
const selectedEmployee = ref('')
const selectedBrigade = ref('')
const selectedShift = ref('')

const cities = computed(() =>{
  return Object.getOwnPropertyNames(data)
})
const workshops = computed(() =>{
  return data[selectedCity.value].workshops || []
})
const employees = computed(() =>{
  return data[selectedCity.value].employees[selectedWorkshop.value] || []
})
const brigades = ['1-я бригада', '2-я бригада', '3-я бригада']
const shifts = ['Дневная', 'Ночная']

const updateWorkshops = () => {
  selectedWorkshop.value = ''
  selectedEmployee.value = ''
}

const updateEmployees = () => {
  selectedEmployee.value = ''
}
  

const handleSubmit = () =>{
  const formData ={
    city: selectedCity.value,
    workshop: selectedWorkshop.value,
    employee: selectedEmployee.value,
    brigade: selectedBrigade.value,
    shift: selectedShift.value
  }
  saveToCookie(formData)
  alert('Данные сохранены в cookie!')
}
</script>

<style scoped>
  .form{
  font-family: "Mulish", sans-serif;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}

.form button{
  font-family: inherit;
  font-weight: 700;
  font-size: 2rem;
  height: 4rem;
  border-radius: 30px;
  border: 2px solid;
  transition: all 0.2s;
}

.form button:hover{
  background-color: #a9f4c1;
}
</style>