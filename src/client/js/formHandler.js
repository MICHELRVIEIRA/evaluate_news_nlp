function handleSubmit(event) {
    
    event.preventDefault()

    let texto = document.getElementById('name').value

    // Correção solicitada pelo 2 revisor do projeto.

    if (texto ==""){
      alert("It was not possible to analyze the inserted text.")
    }
    
    else {
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
   
}

export { handleSubmit }
