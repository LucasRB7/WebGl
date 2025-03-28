//         var canvas = document.getElementById('unity-canvas');
//         var unityInstance;

//         function loadUnityWebGL() {
//             var buildUrl = "https://lucasrb7.github.io/CubeTexture/Build";
//             var loaderUrl = buildUrl + "/WebGl.loader.js";  // Ajuste para o caminho correto do seu arquivo loader.js
//             var config = {
//                 dataUrl: buildUrl + "/WebGl.data",
//                 frameworkUrl: buildUrl + "/WebGl.framework.js",
//                 codeUrl: buildUrl + "/WebGl.wasm",
//                 //streamingAssetsUrl: "StreamingAssets",
//                 companyName: "YourCompany",
//                 productName: "YourGame",
//                 productVersion: "1.0",
//                 canvas: canvas,
//                // memoryInitializerUrl: buildUrl + "/yourUnityBuild.mem",
//                 webGLContextAttributes: { preserveDrawingBuffer: true, failIfMajorPerformanceCaveat: false }
//             };

//             // Instancia o Unity WebGL diretamente no canvas
//             unityInstance = UnityLoader.instantiate("unity-canvas", loaderUrl, config);
//         }


// async function send(){
//       let file = document.getElementById('file');
//       let img = file.files[0];
      

//       if(!img){
//             alert('Selecione uma imagem para enviar!')
//       }else{
        
//         const formData = new FormData();
//         formData.append('image', img);

//     try {
//         const response = await fetch('https://api.imgbb.com/1/upload?key=18c309babaac947633eaa732474c985b', {
//             method: 'POST',
//             body: formData,
//         });

//         const data = await response.json();
        
//         if (data.status === 200) {
//             let url = data.data.url
//             console.log('Imagem enviada com sucesso:', url);
//             sendTextureToUnity(url);
//             return;
            
//         } else {
//             throw new Error('Falha no upload');
//         }
//     } catch (error) {
//         console.error('Erro no upload:', error);
//     }

//       }
// }

// function sendTextureToUnity(imageUrl) {
//     if (unityIframe.contentWindow) {
//         unityIframe.contentWindow.postMessage({
//             type: 'ChangeTexture',
//             url: imageUrl
//         }, '*'); // '*' pode ser substituído por um domínio específico, por segurança
//     } else {
//         console.error('Iframe não encontrado ou ainda não carregado.');
//     }
// }

// window.onload = function() {
//     loadUnityWebGL();
// };


function sendImageURLToUnity(url) {
    var iframe = document.getElementById("unityIframe");

    // Envia a URL para o Unity dentro do iframe
    iframe.contentWindow.postMessage({
        type: "applyTexture",
        url: url
    }, "*");
}

setTimeout(()=>{
    sendImageURLToUnity("https://raw.githubusercontent.com/LucasRB7/WebGl/refs/heads/main/image_3.jpg");
},15000)
// Exemplo: enviando uma URL de imagem
