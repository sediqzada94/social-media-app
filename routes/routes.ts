import { Home, Users, User, Search, Video, ListVideo, Group, Users2 } from 'lucide-react'
export const homeRoutes = [
    {
        icon: Home,
        label: "Home",
        link: "/"
      },
    {
      icon: Users,
      label: "Friends",
      link: "/friends"
    },
    {
      icon: User,
      label: "Find friends",
      link: "/friends/find"
    },
    {
      icon: Video,
      label: "Watch videos",
      link: "/videos"
    },
    {
      icon: Group,
      label: "Groups",
      link: "/groups/mygroups/:userId"
    },
    {
      icon: Group,
      label: "Find groups",
      link: "/groups/find"
    },
]


export const videoRoutes = [
  {
      icon: ListVideo,
      label: "All videos",
      link: "/videos"
    },
  {
    icon: Video,
    label: "Friends videos",
    link: "/videos/friends/:userId"
  },
  {
    icon: Video,
    label: "Popular videos",
    link: "/find/friends"
  },
 
 
]
export const groupRoutes = [
  {
      icon: Users2,
      label: "All groups",
      link: "/groups"
    },
  {
    icon: Users,
    label: "My groups",
    link: "/groups/mygroups/:userId"
  },
  {
    icon: Users,
    label: "Suggested groups",
    link: "/groups/suggested-groups"
  },
 
]