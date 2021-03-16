function handleSubmit(event) {
    
    event.preventDefault()

    let texto = document.getElementById('name').value

    if (!/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(texto)){
      fetch('http://localhost:8081/meaningcloud-api', {
      method: 'POST', 
      credentials: 'same-origin', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({texto: texto})  
      })

      .then(res => res.json())  
      .then(res=>{Client.updateUI(res)})
    }
    
    else {
      alert("It was not possible to analyze the inserted text.")
    }
   
}

export { handleSubmit }
