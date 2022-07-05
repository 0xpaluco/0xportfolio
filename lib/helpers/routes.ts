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
    { name: 'Tools', href: '/tools', icon: UserGroupIcon, current: currentPage },
    { name: 'Services', href: '/services', icon: UserGroupIcon, current: currentPage },
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
