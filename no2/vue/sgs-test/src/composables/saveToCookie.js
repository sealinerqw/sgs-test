function saveToCookie(data) {
  const jsonData = JSON.stringify(data);
  document.cookie = `formData=${jsonData}; path=/; max-age=259200`; // 3 дня
}

export default saveToCookie