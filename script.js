const apiKey = "CONTRA API KEY";


const botonBuscar = document.getElementById("btn-buscar");
  botonBuscar.addEventListener("click", function() {
  const buscar = document.getElementById("buscar").value;
  const url = `API KEY`;

   fetch(url) 
    .then(response => response.json())
    .then(data => {
        const gifs = data.data;
        const gifsHTML = gifs.map(gif => {
            return `
                <div class="gif">
                    <img src="${gif.images.fixed_height.url}">
                </div>   
            `;
        }).join("");
        document.getElementById("gifs").innerHTML = gifsHTML;
        })
    .catch(error => console.error(error));
});


