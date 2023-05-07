import { GitHubIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from '@components/SocialIcons';
import { UserGroupIcon } from '@heroicons/react/24/solid'


interface NavItem {
    name: string;
    href: string;
    icon?: any;
}

function currentPage(this: NavItem, path: string)  {
    return this.href === path;
}

function containPage(this: NavItem, path: string)  {
    return path.includes(this.href);
}


export const navigation: NavItem[] = [
    { name: 'About', href: '/about', icon: UserGroupIcon },
    { name: 'Articles', href: '/blog', icon: UserGroupIcon },
    { name: 'Projects', href: '/projects', icon: UserGroupIcon },
    // { name: 'Portfolio', href: '/portfolio', icon: UserGroupIcon },
]

export const secondaryNavigation: NavItem[] = [
    { name: 'About', href: '/about' },
    { name: 'Articles', href: '/blog' },
    { name: 'Lets Work', href: '/contact' },
    { name: 'Projects', href: '/projects' },
]
  
export const userNavigation: NavItem[] = [
    { name: 'My Wallet', href: '/me' },
]

export const feedTabs = [
    { name: 'Tab1', href: '#', current: currentPage },
    { name: 'Tab2', href: '#', current: currentPage },
    { name: 'Tab3', href: '#', current: currentPage },
]


export const socialNavigation: NavItem[] = [
    
    {
      name: 'Twitter',
      href: 'https://twitter.com/0xpaluco',
      icon: TwitterIcon
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/0xpaluco',
      icon: InstagramIcon
    },
    {
      name: 'Github',
      href: 'https://github.com/0xpaluco',
      icon: GitHubIcon
    },
    {
      name: 'Linkedin',
      href: 'https://www.linkedin.com/in/0xpaluco',
      icon: LinkedInIcon
    },
  ]