
async function send(){
      let file = document.getElementById('file');
      let img = file.files[0];
      

      if(!img){
            alert('Selecione uma imagem para enviar!')
      }else{
        
        const formData = new FormData();
        formData.append('image', img);

    try {
        const response = await fetch('https://api.imgbb.com/1/upload?key=18c309babaac947633eaa732474c985b', {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();
        
        if (data.status === 200) {
            let url = data.data.url
            console.log('Imagem enviada com sucesso:', url);
            sendImageURLToUnity(url);
            return;
            
        } else {
            throw new Error('Falha no upload');
        }
    } catch (error) {
        console.error('Erro no upload:', error);
    }

      }
}



function sendImageURLToUnity(url) {
    var iframe = document.getElementById("unityIframe");

    // Envia a URL para o Unity dentro do iframe
    iframe.contentWindow.postMessage({
        type: "applyTexture",
        url: url
    }, "*");
}