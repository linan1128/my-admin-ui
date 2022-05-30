import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [
    // {
    //     path: '/',
    //     name: 'index',
    //     component: () => import('@/layout/index.vue')
    // },
    // {
    //     path: '/',
    //     name: 'index',
    //     component: () => import('@/views/index.vue')
    // },
    {
        path: '/',
        name: '',
        component: () => import('@/layout/index.vue'),
        redirect: '/index',
        children: [
            {
                path: '/index',
                name: 'index',
                meta: {
                    title: '首页'
                },
                component: () => import('@/views/index.vue'),

            },
        ],
    },
    // {
    //     path: '/system',
    //     name: 'System',
    //     component: () => import('@/layout/index.vue'),
    //     children: [
    //         {
    //             path: 'user',
    //             name: 'User',
    //             meta: {
    //                 title: '用户管理'
    //             },
    //             component: () => import('@/views/system/user/index.vue'),
    //         },
    //         {
    //             path: 'dept',
    //             name: 'Dept',
    //             meta: {
    //                 title: '部门管理'
    //             },
    //             component: () => import('@/views/system/dept/index.vue'),
    //         },{
    //             path: 'role',
    //             name: 'Role',
    //             meta: {
    //                 title: '权限管理'
    //             },
    //             component: () => import('@/views/system/role/index.vue'),
    //         },
    //         {
    //             path: 'menu',
    //             name: 'Menu',
    //             meta: {
    //                 title: '菜单管理'
    //             },
    //             component: () => import('@/views/system/menu/index.vue'),
    //         },
    //     ],
    // },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;