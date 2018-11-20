import Vue from 'vue';
import Router from 'vue-router';
import { usuarioGetter } from './store/usuario/getters';

import HelloWorld from './components/HelloWorld';
import Login from './components/TheLogin';
import Cadastro from './components/Cadastro';
import Eventos from './components/Eventos';
import Inscricao from './components/Inscricao';
import Passagem from './components/Passagem';
import NotFound from './components/NotFound';

Vue.use(Router);

const routes = [
    {
        path: '/eventos',
        name: 'Eventos',
        component: Eventos,
        meta: {
            title: 'Principal',
        },
    },
    {
        path: '/inscricao',
        name: 'Inscricao',
        component: Inscricao,
        meta: {
            title: 'Principal',
        },
    },
    {
        path: '/usuario',
        name: 'HelloWorld',
        component: HelloWorld,
        meta: {
            title: 'Principal',
        },
    },
    {
        path: '/',
        name: 'Login',
        component: Login,
        meta: {
            title: 'Principal',
        },
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            title: 'Principal',
        },
    },
    {
        path: '/cadastro',
        name: 'Cadastro',
        component: Cadastro,
        meta: {
            title: 'Principal',
        },
    },
    {
        path: '/passagem',
        name: 'Passagem',
        component: Passagem,
        meta: {
            title: 'Principal',
        },
    },
    {
        path: '/*',
        name: 'NotFound',
        component: NotFound,
        meta: {
            title: 'Principal',
        },
    },
];

// export default new Router({ routes });
const router = new Router({ routes });

router.beforeEach(function(to, from, next) {
    const usuario = (router.app.$store.state.usuario.usuario)

    if (
        (
            to.name == 'Eventos' ||
            to.name == 'Inscricao' ||
            to.name == 'Eventos'
        )
        && Object.keys(usuario).length == 0
    ) {
        next('/login')
    } else {
        next()
    }

});

export default router;
