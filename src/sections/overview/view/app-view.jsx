import * as React from 'react';
import { useState } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import Link from '@mui/material/Link';
import List from '@mui/material/List';



import Button from '@mui/material/Button';






import Logo from '/public/assets/digitro-logo.svg';



function Copyright(props) {
  return (

    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://digitro.com/">
        dígitro
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const drawerWidth = 240;



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);


// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#1565c0', // Um azul vibrante e moderno
    },
    secondary: {
      main: '#ff4081', // Um rosa marcante para complementar o azul
    },
  },
  shape: {
    borderRadius: 12, // Bordas mais arredondadas para todos os componentes
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
    button: {
      textTransform: 'none', // Removendo a transformação de texto em maiúsculas nos botões
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10, // Ainda mais arredondado para botões
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16, // Aumentando as bordas para cartões
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: 12, // Campos de texto com bordas arredondadas
        }
      }
    },
  }
});

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
  
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setOpen(false); // Fechar o drawer após o scroll
    }
  };



// ----------------------------------------------------------------------

export default function AppView() {
  const [open, setOpen] = React.useState(false);

  

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Hi, Welcome back 👋
      </Typography>

      {/* <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={3}>
          a
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          b
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          c
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          e

        </Grid>

        <Grid xs={12} sm={6} md={20}>
          f

        </Grid>


      </Grid> */}

      <Box sx={{ display: 'flex' }}>


        
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 2, mb: 4 }}>
            <Grid container spacing={3}>


              {/* CADASTRO DE NÚMEROS */}
              <Grid item xs={12}>
                <Box
                  sx={{
                    position: '',
                    left: 0,
                    right: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mb: 2,


                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      mb: 2,
                    }}
                  >
                    <Button
                      sx={{
                        width: 200,
                        height: 150,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '12px',
                        mr: 2,
                      }}
                      variant="contained"
                      onClick={() => scrollToSection('home')}
                    >
                      HOME
                      
                    </Button>

                    <Button
                      sx={{
                        width: 200, // Define a largura do botão
                        height: 150, // Define a altura do botão para torná-lo quadrado
                        flexDirection: 'column', // Organiza o conteúdo em coluna (ícone em cima, texto embaixo)
                        justifyContent: 'center', // Centraliza o conteúdo verticalmente
                        alignItems: 'center', // Centraliza o conteúdo horizontalmente
                        padding: '12px', // Ajusta o preenchimento para garantir que o conteúdo não esteja muito apertado
                        mr: 2, // Adiciona um espaço de 2 unidades entre cada item

                      }}
                      variant="contained"
                      onClick={() => scrollToSection('numbers')}
                    >
                      CADASTRAR WHATSAPP
                      
                    </Button>

                    <Button
                      sx={{
                        width: 200, // Define a largura do botão
                        height: 150, // Define a altura do botão para torná-lo quadrado
                        flexDirection: 'column', // Organiza o conteúdo em coluna (ícone em cima, texto embaixo)
                        justifyContent: 'center', // Centraliza o conteúdo verticalmente
                        alignItems: 'center', // Centraliza o conteúdo horizontalmente
                        padding: '12px', // Ajusta o preenchimento para garantir que o conteúdo não esteja muito apertado
                        mr: 2, // Adiciona um espaço de 2 unidades entre cada item
                      }}
                      variant="contained"
                      onClick={() => scrollToSection('templates')}
                    >
                      TEMPLATES
                      
                    </Button>

                  </Box>
                </Box>
                <Paper id="home" sx={{ p: 10, display: 'flex', flexDirection: 'column', mt: 25, mb: 10 }}>
                  aasasa
                </Paper>
                <Paper id="numbers" sx={{ p: 10, display: 'flex', flexDirection: 'column', mb: 10 }}>
                  b
                </Paper>
                <Box>
                  <Paper id="templates" sx={{ p: 10, display: 'flex', flexDirection: 'column', mb: 10 }}>
                    c
                  </Paper>
                </Box>

              </Grid>
            </Grid>
            
          </Container>
        </Box>
      </Box>
    </Container>
  );
}
