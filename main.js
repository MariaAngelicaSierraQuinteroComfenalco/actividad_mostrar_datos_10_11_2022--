
addEventListener(`DOMContentLoaded`, (e)=>{

    alert("Hola en consola encontraras mi informacion? inspeccion el codigo o precionar f12");

    console.group("Presentacion");
        console.log("Soy Maria Angelica Sierra Quintero");
    console.groupEnd();
    
    console.group("Edad");
        console.log("17 años");
    console.groupEnd();
    
    console.group("Pasatiempo");
        console.log("Escuchar musica");
    console.groupEnd();
    
    console.group("Meta a corto plazo");
        console.log("Terminar mi programa academico");
    console.groupEnd();

    console.group("Meta a largo plazo");
         console.log("poder juntar la programcion con la medicina");
    console.groupEnd();

    console.group("Municipio");
        console.log("vivo en piedecuesta");
        console.groupEnd();  

    console.group("Expectativas en el curso");
        console.log("Mediante este curso quiero aprender conceptos que me ayuden a lograr un avance significativo para los semestres siguientes ");
        console.groupEnd();

    document.querySelector("body").innerHTML = "BIENVENIDOS";


})
