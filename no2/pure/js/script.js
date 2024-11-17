const citySelect = document.querySelector('.cities')
const workshopSelect = document.querySelector('.workshops')
const employeeSelect = document.querySelector('.employees')
const form = document.querySelector('.form')
const brigadeSelect = document.querySelector('.brigades')
const shiftSelect = document.querySelector('.shifts')


const data = {
  'Самара': {
    workshops: ['Самара-1', 'Самара-2', 'Самара-3'],
    employees:{
      'Самара-1': ['Иванов', 'Панов', 'Городецкий', 'Сидоров', 'Столяров'],
      'Самара-2': ['Городий', 'Синицин', 'Маляров'],
      'Самара-3': ['Савинов', 'Рябов', 'Самойлова', 'Добролюбов']
    } 
  },

  'Казань': {
    workshops: ['Казань-1', 'Казань-2', 'Казань-3'],
    employees:{
      'Казань-1': ['Синицин', 'Городий', 'Маляров'],
      'Казань-2': ['Городецкий', 'Иванов', 'Панов', 'Сидоров', 'Столяров'],
      'Казань-3': ['Самойлова', 'Савинов', 'Рябов', 'Добролюбов']
    } 
  },

  'Москва': {
    workshops: ['Москва-1', 'Москва-2', 'Москва-3'],
    employees:{
      'Москва-1': ['Городий', 'Синицин', 'Маляров'],
      'Москва-2': ['Сидоров', 'Городецкий', 'Иванов', 'Панов', 'Столяров'],
      'Москва-3': ['Рябов', 'Самойлова', 'Савинов', 'Добролюбов']
    } 
  }
}

function saveToCookie(data) {
  const jsonData = JSON.stringify(data);
  document.cookie = `formData=${jsonData}; path=/; max-age=259200`; // 3 дня
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = {
    city: citySelect.value,
    workshop: workshopSelect.value,
    employee: employeeSelect.value,
    brigade: brigadeSelect.value,
    shift: shiftSelect.value
  };
  saveToCookie(formData);
  alert('Данные сохранены в cookie!');
});


function updateWorkshops() {
  const selectedCity = citySelect.value;
  workshopSelect.innerHTML = '';
  if (selectedCity && data[selectedCity]) {
    data[selectedCity].workshops.forEach(workshop => {
      let option = document.createElement('option');
      option.textContent = workshop;
      option.value = workshop;
      workshopSelect.appendChild(option);
    });
  }
  updateEmployees();
}

function updateEmployees() {
  const selectedCity = citySelect.value;
  const selectedWorkshop = workshopSelect.value;
  employeeSelect.innerHTML = '';
  if (selectedCity && selectedWorkshop && data[selectedCity].employees[selectedWorkshop]) {
    data[selectedCity].employees[selectedWorkshop].forEach(employee => {
      let option = document.createElement('option');
      option.textContent = employee;
      option.value = employee;
      employeeSelect.appendChild(option);
    });
  }
}

citySelect.addEventListener('change', updateWorkshops)
workshopSelect.addEventListener('change', updateEmployees)

updateWorkshops()