import {
    LuLayoutDashboard,
    LuPlant,
    LuCalendar,
    LuClipboardList,
    LuSettings,
    LuLogOut,
} from "react-icons/lu"
import { IconBase } from "react-icons/lib"

export const SIDE_MENU_DATA =[ 
    {
        id: '01',
        label: "Dashboard",
        icon: LuLayoutDashboard,
        path:"/dashboard",
    },
    {
        id:"02",
        label: "My Crops",
        icon: LuPlant,
        path:"/crops",
    },
    {
        id:"03",
        label: "Farm Schedule",
        icon: LuCalendar,
        path:"/schedule",
    },
    {
        id:"04",
        label: "Farm Records",
        icon: LuClipboardList,
        path:"/records",
    },
    {
        id:"05",
        label: "Settings",
        icon: LuSettings,
        path:"/settings",
    },
    {
        id:"06",
        label: "Logout",
        icon: LuLogOut,
        path:"logout",
    },
];