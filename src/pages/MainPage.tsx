import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import { Box, Button, Container, ListItemIcon, Typography } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import { Canciones } from "../helpers/ObjetoCanciones";
import CancionesModal from '../components/CancionesModal';
import { useEffect } from 'react';
const MainPage = () => {
	const cancionesOrdenadas = Canciones.sort((a, b) => parseInt(a.posicion, 10) - parseInt(b.posicion, 10));

	useEffect(() => {
		console.log(Canciones);
		
	}, [])
	

	return (
		<Container style={{height:'100vh'}}>
			<Box>
				<Typography variant="h3">Diseño de Aplicaciones Web Top 5</Typography>
			</Box>
			<List  sx={{ width: '100%', height:'100%', bgcolor: 'background.paper',overflow:'auto', display: 'flex',flexDirection: 'column',justifyContent: 'space-between',color:'red' }}>
      {cancionesOrdenadas.map((value,index) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem
            key={value.posicion+value.Artista}
			sx={{
				width: '100%',
				fles:1, // Ocupa todo el ancho disponible
				marginBottom: 2, // Espacio entre elementos
			  }}
            disablePadding
          >
			  <ListItemIcon style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
				{value.estadoPosicion ==='subio'
				?
				<ArrowUpwardIcon color='success'/>
			  	:
				<ArrowDownwardIcon color ='warning'/>
				}
			  	<ListItemText primary={index + 1}></ListItemText>
			  </ListItemIcon>
			  
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${value.posicion}`}
                  src={value.imageUrl}
                />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={value.Artista} secondary={value.NombreCancion} />
            </ListItem>
        );
      })}
	  
	  	<Box>
			<CancionesModal/>
		</Box>
    </List>
\		</Container>
	)
}

export default MainPage;