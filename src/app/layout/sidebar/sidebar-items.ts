import {RouteInfo} from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    {
        path: '',
        title: 'MENUITEMS.MAIN.TEXT',
        iconType: '',
        icon: '',
        class: '',
        groupTitle: true,
        badge: '',
        badgeClass: '',
        role: ['All'],
        submenu: [],
    },

    // Admin Modules
    {
        path: '/admin/dashboard',
        title: 'MENUITEMS.DASHBOARD.TEXT',
        iconType: 'material-icons-two-tone',
        icon: 'space_dashboard',
        class: '',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Admin'],
        submenu: [],
    },
    {
        path: '',
        title: 'MENUITEMS.DOCTORS.TEXT',
        iconType: 'material-icons-two-tone',
        icon: 'supervised_user_circle',
        class: 'menu-toggle',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Admin'],
        submenu: [
            {
                path: '/admin/doctors/allDoctors',
                title: 'MENUITEMS.DOCTORS.LIST.ALL-DOCTOR',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
        ],
    },
    {
        path: '',
        title: 'MENUITEMS.PATIENTS.TEXT',
        iconType: 'material-icons-two-tone',
        icon: 'face',
        class: 'menu-toggle',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Admin'],
        submenu: [
            {
                path: '/admin/patients/all-patients',
                title: 'MENUITEMS.PATIENTS.LIST.ALL-PATIENT',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            }
        ],
    },
    {
        path: '/tables/basic-table',
        title: 'MENUITEMS.RESOURCES.RESOURCES',
        iconType: 'material-icons-two-tone',
        icon: 'edit_note',
        class: '',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Admin'],
        submenu: [],
    },
    {
        path: 'apps/forum',
        title: 'MENUITEMS.FORUMS.TITLE',
        iconType: 'material-icons-two-tone',
        icon: 'forum',
        class: '',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Admin'],
        submenu: [],
    },

    // Doctor Modules
    {
        path: '/doctor/dashboard',
        title: 'MENUITEMS.DOCTOR.DASHBOARD',
        iconType: 'material-icons-two-tone',
        icon: 'space_dashboard',
        class: '',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Doctor'],
        submenu: [],
    },
    {
        path: '/doctor/patients',
        title: 'MENUITEMS.DOCTOR.PATIENTS',
        iconType: 'material-icons-two-tone',
        icon: 'face',
        class: '',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Doctor'],
        submenu: [],
    },
    {
        path: '/doctor/doctor-profile',
        title: 'MENUITEMS.DOCTORS.LIST.PROFILE',
        iconType: 'material-icons-two-tone',
        icon: 'manage_accounts',
        class: '',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Doctor'],
        submenu: [],
    },
    {
        path: '/apps/chat',
        title: 'MENUITEMS.DOCTOR.CHAT',
        iconType: 'material-icons-two-tone',
        icon: 'chat',
        class: '',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Doctor'],
        submenu: [],
    },
    {
        path: 'apps/forum',
        title: 'MENUITEMS.FORUMS.TITLE',
        iconType: 'material-icons-two-tone',
        icon: 'forum',
        class: '',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Doctor'],
        submenu: [],
    },

    // Patient Modules
    {
        path: '/patient/dashboard',
        title: 'MENUITEMS.PATIENT.DASHBOARD',
        iconType: 'material-icons-two-tone',
        icon: 'space_dashboard',
        class: '',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Patient'],
        submenu: [],
    },
    {
        path: 'apps/games-section',
        title: 'MENUITEMS.GAMES-SECTION.TITLE',
        iconType: 'material-icons-two-tone',
        icon: 'games',
        class: '',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Patient'],
        submenu: [],
    },
    {
        path: 'apps/forum',
        title: 'MENUITEMS.FORUMS.TITLE',
        iconType: 'material-icons-two-tone',
        icon: 'forum',
        class: '',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Patient'],
        submenu: [],
    },
    {
        path: '/patient/patient-profile',
        title: 'MENUITEMS.PATIENTS.LIST.PROFILE',
        iconType: 'material-icons-two-tone',
        icon: 'manage_accounts',
        class: '',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Patient'],
        submenu: [],
    },
    {
        path: '/apps/chat',
        title: 'MENUITEMS.PATIENT.CHAT',
        iconType: 'material-icons-two-tone',
        icon: 'chat',
        class: '',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Patient'],
        submenu: [],
    },


    // Common Modules
    {
        path: 'contacts',
        title: 'MENUITEMS.CONTACTS.TEXT',
        iconType: 'material-icons-two-tone',
        icon: 'contacts',
        class: '',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Patient'],
        submenu: [],
    },
    {
        path: 'calendar',
        title: 'MENUITEMS.CALENDAR.TITLE',
        iconType: 'material-icons-two-tone',
        icon: 'event',
        class: '',
        groupTitle: false,
        badge: 'new',
        badgeClass: 'badge bg-cyan sidebar-badge float-end',
        role: ['Patient'],
        submenu: [],
    },
    {
        path: '',
        title: 'MENUITEMS.RESOURCES.RESOURCES',
        iconType: 'material-icons-two-tone',
        icon: 'edit_note',
        class: 'menu-toggle',
        groupTitle: false,
        badge: 'new',
        badgeClass: 'badge bg-cyan sidebar-badge float-end',
        role: ['Doctor'],
        submenu: [
            {
                path: '/resource/my-resources',
                title: 'MENUITEMS.RESOURCES.MY-RESOURCES',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/resource/compose',
                title: 'MENUITEMS.RESOURCES.CREATE',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
        ],
    },
    {
        path: '/resource/user-resources-list',
        title: 'MENUITEMS.RESOURCES.MY-RESOURCES',
        iconType: 'material-icons-two-tone',
        icon: 'edit_note',
        class: '',
        groupTitle: false,
        badge: 'new',
        badgeClass: 'badge bg-cyan sidebar-badge float-end',
        role: ['Patient'],
        submenu: [],
    },
    {
        path: '/patient/diary',
        title: 'MENUITEMS.DIARY.TITLE',
        iconType: 'material-icons-two-tone',
        icon: 'book',
        class: '',
        groupTitle: false,
        badge: 'new',
        badgeClass: 'badge bg-cyan sidebar-badge float-end',
        role: ['Patient'],
        submenu: [],
    },
]

