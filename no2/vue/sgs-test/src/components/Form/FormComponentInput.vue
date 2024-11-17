<template>
  <div class="form__input">
      <label :for="inputName">{{labelMessage}}</label>
      <select class="form__select" 
      v-model="selectedValue" 
      @change="handleChange">
        <option
        v-for="option in options" 
        :key="option" 
        :value="option">{{ option }}</option>
      </select>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

  const props = defineProps({
    inputName:{
      type: String,
      required: true
    },
    labelMessage:{
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    },
    modelValue: {
      type: Array,
      required: true
    }
  })
  
  const emits = defineEmits(['handleChange'])

  const selectedValue = ref(props.modelValue)

  watch(() => props.modelValue, (newValue) =>{
    selectedValue.value = newValue
  })

  const handleChange = () =>{
    emits('update:modelValue', selectedValue.value)
  }
</script>

<style scoped>
  .form__input{
    width: 100%;
    display: flex;
    text-align: center;
    flex-direction: column;
    gap: 1rem;
    font-size: 2rem;
  }

  .form__input select{
    font-weight: 400;
    align-self: center;
    width: 50%;
    height: 2rem;
    border: 0;
    border-bottom: 2px solid;
    font-size: 1.5rem;
    text-align: center;
  }


</style>