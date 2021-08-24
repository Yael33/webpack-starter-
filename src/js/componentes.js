import '../css/componentes.css';
// import webpacklogo from '../assets/img/webpack-logo.png';
export const saludar=(nombre)=>{
    console.log(`Creando una etiqueta`);
    const h1=document.createElement('H1');
    h1.innerText=`Hola ${nombre}`;
    document.body.appendChild(h1);

    // const img=document.createElement('img');
    // img.src=webpacklogo;
    // document.body.append(img);
    }