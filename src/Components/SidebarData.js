import React from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CampaignIcon from '@mui/icons-material/Campaign';
import PeopleIcon from '@mui/icons-material/People';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventNoteIcon from '@mui/icons-material/EventNote';
import NewReleasesIcon from '@mui/icons-material/NewReleases';

export const SidebarData = [
    {
        title:'Dashboard',
        icon: <DashboardIcon />,
        link:'/dashboard'
    },
    {
        title:'Notifications',
        icon: <NotificationsIcon />,
        link:'/notifications'
    },
    {
        title:'Announcement',
        icon: <CampaignIcon />,
        link:'/announcement'
    },
    {
        title:'Homeowners',
        icon: <PeopleIcon />,
        link:'/homeowners'
    },
    {
        title:'Dues',
        icon: <ReceiptLongIcon />,
        link:'/dues'
    },
    {
        title:'Calendar',
        icon: <CalendarMonthIcon />,
        link:'/calendar'
    },
    {
        title:'Event',
        icon: <EventNoteIcon />,
        link:'/event'
    },
    {
        title:'Concerns',
        icon: <NewReleasesIcon />,
        link:'/concerns'
    },
]