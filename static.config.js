import axios from 'axios'

export default {
  getSiteData: () => ({
    title: 'react-router-dom',
  }),
  getRoutes: async () => {
    const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return [
      {
        path: '/',
        component: 'src/containers/Inicio',
      },
      {
        path: '/Sobre',
        component: 'src/containers/Sobre',
      },
    
      {
        path: '/Escola',
        component: 'src/containers/Escola',
      },
      {
        path: '/Ensino',
        component: 'src/containers/Ensino',
      },
      {
        path: '/Contato',
        component: 'src/containers/Contato',
      },
      {
        path: '/Fotos',
        component: 'src/containers/Fotos',
      },
      {
        path: '/Noticias',
        component: 'src/containers/Noticias',
      },
      {
        path: '/Video',
        component: 'src/containers/Video',
      },
      {
        path: '/Teste',
        component: 'src/containers/Teste',
      },
     ,
      {
        is404: true,
        component: 'src/containers/404',
      },
      
    ]
  },
}
