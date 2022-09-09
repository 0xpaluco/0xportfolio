import { Icons } from '@components/shared';
import { UserGroupIcon } from '@heroicons/react/outline'


interface NavItem {
    name: string;
    href: string;
    icon: any;
    current: (this: NavItem, path: string) => boolean
}

function currentPage(this: NavItem, path: string)  {
    return this.href === path;
}

function containPage(this: NavItem, path: string)  {
    return path.includes(this.href);
}


export const navigation: NavItem[] = [
    { name: 'DAO', href: '/dao', icon: UserGroupIcon, current: currentPage },
    { name: 'Projects', href: '/projects', icon: UserGroupIcon, current: currentPage },
    { name: 'Blog', href: '/blog', icon: UserGroupIcon, current: currentPage },
]

export const secondaryNavigation = [
    { name: 'About Us', href: '#' },
    { name: 'Lets Work', href: '/contact' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of use', href: '#' },
]
  
export const userNavigation = [
    { name: 'My Wallet', href: '/me' },
]

export const feedTabs = [
    { name: 'Tab1', href: '#', current: currentPage },
    { name: 'Tab2', href: '#', current: currentPage },
    { name: 'Tab3', href: '#', current: currentPage },
]

export const socialNavigation = [
    
    {
      name: 'tiktok',
      href: '#',
    },
    {
      name: 'instagram',
      href: '#',
    },
    {
      name: 'twitter',
      href: '#',
    },
    {
      name: 'youtube',
      href: '#',
    },
    {
      name: 'discord',
      href: '#',
    },
    {
        name: 'github',
        href: '#',
    },
    
  ]