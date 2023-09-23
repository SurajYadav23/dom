const myForm = document.getElementById('myForm');

function handleSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  const formdata = {
    name: name,
    email: email,
    phone: phone,
  };

    saveform(formdata);
    dispaydata();

  console.log(localStorage);
}

function saveform(formdata) {
  const storedformdata = JSON.parse(localStorage.getItem('form') || []);
  storedformdata.push(formdata);
  localStorage.setItem('form', JSON.stringify(storedformdata));
}

function displayData() {
    dataList.innerHTML = ''; 

    
    const existingDataJSON = localStorage.getItem('form');
    if (existingDataJSON) {
      const existingData = JSON.parse(existingDataJSON);

      existingData.forEach((formData, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Entry ${index + 1}: Name - ${formData.name}, Email - ${formData.email}:phone-${formData.phone}`;
        dataList.appendChild(listItem);
      });
    }
  }

myForm.addEventListener('submit', handleSubmit);
