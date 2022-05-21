import * as React from 'react'
import { IoCalendar, IoGrid, IoHelpBuoy } from 'react-icons/io5'
import { MdWeb } from 'react-icons/md'

export interface Link {
  label: string
  href?: string
  children?: Array<{
    label: string
    description?: string
    href: string
    icon?: React.ReactElement
  }>
}

export const links: Link[] = [
  { label: 'About', href: '#' },
  {
    label: 'Services',
    children: [
      {
        label: 'Headless Wordpress Development',
        description: 'Wordpress as a Headless cms & Nextjs for Frontend',
        href: '#',
        icon: <IoHelpBuoy />,
      },
      {
        label: 'Headless CMS & Reactjs Frontend',
        description: 'Pick any Headless cms such as Prismic, storyblok,sanity and GatsbyJs or Nexts for the frontend',
        href: '#',
        icon: <IoCalendar />,
      },
      {
        label: 'Wordpress Development',
        description: 'Traditional Wordpress development with recommended page builder or custom theme',
        href: '#',
        icon: <IoGrid />,
      },
      {
        label: 'Site maintentance',
        description: 'Managing, updating and Optimizing your website to make you cool',
        href: '#',
        icon: <MdWeb />,
      },
    ],
  },
  { label: 'Blog', href: '#' }
]
