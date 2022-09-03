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
      name: 'TestSocial',
      href: '#',
      icon: UserGroupIcon,
    }
  ]

// export const socialNavigation = [
//     {
//       name: 'TikTok',
//       href: '#',
//       icon: Icons.tiktok.icon,
//     },
//     {
//       name: 'Instagram',
//       href: '#',
//       icon: Icons.insta.icon,
//     },
//     {
//       name: 'Twitter',
//       href: '#',
//       icon: Icons.twitter.icon,
//     },
//     {
//       name: 'YouTube',
//       href: '#',
//       icon: Icons.youtube.icon,
//     },
//     {
//       name: 'Discord',
//       href: '#',
//       icon: Icons.discord.icon,
//     },
//     {
//       name: 'Github',
//       href: '#',
//       icon: Icons.github.icon,
//     },
//   ]