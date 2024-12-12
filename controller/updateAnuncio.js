const Anuncio = require('../models/anuncios')

// Ruta update
const updateA = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  console.log('id:', req.params['id'])
  console.log('ID del anuncio:', id); // Agrega este log para verificar el ID
  
  try {
   // Buscar el anuncio por ID y actualizarlo
      const anuncioActualizado = await Anuncio.findByIdAndUpdate( id,
        {title, description},
        { new: true } 
      );
  
      if (!anuncioActualizado) {
        return res.status(404).json({ message: 'Anuncio no encontrado' });
      }
  
      // Devolver el anuncio actualizado
      res.json(anuncioActualizado);
    } catch (error) {
      console.error('Error al actualizar el anuncio:', error); // AQUÍ ME DA ERROR --- 04.09.2024
      res.status(500).json({ message: 'Error al actualizar el anuncio' });
    }
  };
  
module.exports = updateA;
  


