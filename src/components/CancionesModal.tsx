import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton } from '@mui/material';
import { Canciones } from '../helpers/ObjetoCanciones';
import CancionesType from '../types/Canciones.type';

const CancionesModal = () => {
  const [open, setOpen] = useState(false);
  const [cancionSeleccionada, setCancionSeleccionada] = useState<CancionesType>({} as CancionesType);

  const handleOpen = () => {
    const randomIndex = Math.floor(Math.random() * Canciones.length);
    const randomCancion = Canciones[randomIndex];
    setCancionSeleccionada(randomCancion);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Mostrar Portada
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{cancionSeleccionada.Artista}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <img src={cancionSeleccionada.imageUrl} alt="Imagen Aleatoria" style={{ maxWidth: '100%', maxHeight: '100%' }} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cerrar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CancionesModal;
