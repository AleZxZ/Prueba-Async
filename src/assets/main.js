const APIurl = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCMn28O1sQGochG94HdlthbA&part=snippet%2Cid&order=date&maxResults=10';
const content= null || document.getElementById('content-1');
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '72849e97f6msh7c42d92d2bd93acp158a2cjsn4d47a7f64b5c',
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(API){
    const response = await fetch(API, options);
    const data = await response.json();
    return data;
}
//PARA EJECUTAR AUTOMATICAMENTE UNA FUNCION 
(async()=>{
    try{
        const videos=await fetchData(APIurl);
        //abajo un template
      //  console.log(videos)
        let views =`${videos.items.map(video =>
            
            `<div class="group relative clase1 " >
                <div 
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                     ${video.snippet.title}
                    </h3>
                </div>
            </div>`
        ).join("")}`
      // console.log(view);
        content.innerHTML=views;
      //  console.log(view);
      const videoElements = document.querySelectorAll('.clase1');

      // Crear un Map para almacenar el id del video asociado a cada elemento
      const videoIdMap = new Map();

      // Iterar sobre cada elemento y asignar el id
      videoElements.forEach((element, index) => {
        
          const videoId = videos.items[index].id.videoId;
          //console.log(videoElements);
          videoIdMap.set(element, videoId);
          
          // Añadir el evento click
          element.addEventListener('click', () => {
              const id = videoIdMap.get(element);
              console.log(`Has clicado en el video con ID: ${id}`);
              // Aquí puedes añadir lógica adicional aaaaa
          });
      });
    }catch(error){
        console.log(error);
    }
})();


