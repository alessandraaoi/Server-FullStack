const Anuncio = require('../models/anuncios')

// Ruta update
const updateA = async (req, res) => {
  const { _id } = req.params;

  console.log('ID del anuncio:', _id); // Agrega este log para verificar el ID

  const { title, description } = req.body;

    try {
    

      /* In questo .js devo passare i dati che ho letto attraverso getAnuncios-Update.js
      Salvare da qualche parte l'id (object id) 
      Quando l'usuario da l'ok al form, manda i dati al server */


   // Buscar el anuncio por ID y actualizarlo
      const anuncioActualizado = await Anuncio.findByIdAndUpdate(  _id,
         {title, description},
        { new: true } 
      );
  
      if (!anuncioActualizado) {
        return res.status(404).json({ message: 'Anuncio no encontrado' });
      }
  
      // Devolver el anuncio actualizado
      res.json(anuncioActualizado);
    } catch (error) {
      console.error('Error al actualizar el anuncio:', error);
      res.status(500).json({ message: 'Error al actualizar el anuncio' });
    }
  };
  
module.exports = updateA;
  


