import React, { useState, useEffect } from 'react';
import { fetchData } from "../helpers/getNoticias"

interface Noticia {
  id: string
  date: string
  title: string
  autor: string
  section: string
  image: string
  type: string
}

const classes = {
  title:          'noticias__titulo',
  contenedor:     'contenedor_lista',
  button:         'button',
  difuminado:     'difuminarTop',
}

const ListaNoticias = () => {
  const [mostrarTodo, setMostrarTodo] = useState(false);
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [noticiasAMostrar, setNoticiasAMostrar] = useState<Noticia[]>([]);


  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const notas = await fetchData();
        setNoticias(notas.notes)
        setNoticiasAMostrar(notas.notes.slice(0, 5));
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    obtenerDatos();
  }, []);

  const toggleMostrarNoticias = () => {
    setNoticiasAMostrar(mostrarTodo ? noticiasAMostrar.slice(0, 5) : noticias);
    setMostrarTodo(!mostrarTodo);
  };


  return (
    <>
      <div className={classes.contenedor}>
        <ul>
          {noticiasAMostrar.map((noticia, index) => (
            <li key={index} className ={classes.title}>{noticia.title}</li>
          ))}
        </ul>
      </div>
      <button onClick={toggleMostrarNoticias} 
       className={`${classes.button} ${mostrarTodo ? '' : classes.difuminado}`}
      >
        {mostrarTodo ? 'Ver menos' : 'Ver más'}

      </button>
    </>
  );
};

export default ListaNoticias;
