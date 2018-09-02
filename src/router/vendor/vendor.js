// 供应商管理路由
export default [
    {
        // 供应商邀请管理
        path : '/vendor/index',
        name : 'vendor_index',
        component : resolve => require(['@/views/vendor/vendor_index.vue'], resolve),
    },
    {
        // 邀请平台供应商
        path : '/vendor/channelVendor',
        name : 'vendor_channelVendor',
        component : resolve => require(['@/views/vendor/vendor_channelVendor.vue'], resolve)
    }
]
