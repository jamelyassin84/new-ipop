
const navs = [
    {
        name: 'Home',
        route: 'home',
        icon: 'bi-house',
        type: 'all',
        color:'#0894D8'
    },
    {
        name: 'Records',
        route: 'profiling',
        icon: 'bi-folder2-open',
        type: 'all',
        color: '#865A4E'
    },
    {
        name: 'Content Mgt',
        route: 'cms',
        icon: 'bi-columns',
        type: 'admin',
        color: '#F22112'
    },
    {
        name: 'Admin Accounts',
        route: 'admin-accounts',
        icon: ' bi-shield-lock-fill',
        type: 'admin',
        color: '#423DA4'
    },
    {
        name: 'New Admin',
        route: 'new-admin',
        icon: 'bi-shield-fill-plus',
        type: 'admin',
        color:'#D62F2F'
    },
    {
        name: 'History Logs',
        route: 'logs',
        icon: 'bi-clock-history',
        type: 'admin',
        color:'#3AB09D'
    },
    {
        name: 'CPDB',
        route: 'cpdb',
        icon: 'bi-people',
        type: 'all',
        color:'blue'
    },
    {
        name: 'Deaths',
        route: 'deaths',
        icon: 'bi-exclude',
        type: 'all',
        color:'red'
    },
    {
        name: 'Births',
        route: 'births',
        icon: 'bi-signpost-2',
        type: 'all',
        color:'gray'
    },
    {
        name: 'In- Migrations',
        route: 'in-mig',
        icon: 'bi-box-arrow-left',
        type: 'all',
        color:'orange'
    },
    {
        name: 'Out-Migrations',
        route: 'out-mig',
        icon: 'bi-box-arrow-right',
        type: 'all',
        color: '#B86E08'
    },
    {
        name: 'Marriages',
        route: 'marriages',
        icon: 'bi-suit-heart',
        type: 'all',
        color: '#FF3C7E'
    },

]


export function Sidebar() {
    return navs
}