

  const myForm = document.getElementById('myForm');

  
  function handleSubmit(event) {
    event.preventDefault(); 
    
    
    const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      
      const formdata = {
          name: name,
          email: email
    }
     
      const formdataJson = JSON.stringify(formdata);

      localStorage.setItem('form', formdataJson);
    
      console.log(localStorage);
  }


  myForm.addEventListener("submit", handleSubmit);
