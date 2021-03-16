function handleSubmit(event) {
    
    event.preventDefault()

    let texto = document.getElementById('name').value

    // O código abaixo, referente ao regex, foi construído com base no esclarecimento do mentor, contido no link abaixo:

    // https://knowledge.udacity.com/questions/293440

    // Ajuste solicitado na revisão do projeto.

    const regex = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;

    if (regex.test(texto) && !texto){
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
