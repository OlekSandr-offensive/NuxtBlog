export interface IAppBarItem {
  name: string
  url: string
}

export const AppBar_Data: IAppBarItem[] = [
  {
    name: 'Home',
    url: '/',
  },

  {
    name: 'Posts',
    url: '/posts',
  },
]
