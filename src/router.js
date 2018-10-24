import Vue from 'vue';
import Router from 'vue-router';

import HelloWorld from './components/HelloWorld';
import Login from './components/Login';
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

export default new Router({ routes });
