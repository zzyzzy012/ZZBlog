export interface IAuthor {
  id: string
  name: string
  bio: string
  avatar: string
  socials: ISocial[]
}

export interface ISocial {
  platform: string
  url: string
}

export interface IPost {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string
  coverImage?: string
  status: PostStatus
  tags: string[]
  author: IAuthor
  createdAt: number
  updatedAt: number
  viewCount: number
}

export type PostStatus = 'draft' | 'published' | 'archived'

export interface IProject {
  id: string
  title: string
  slug: string
  description: string
  images: string[]
  category: string
  techStack: string[]
  demoUrl?: string
  repoUrl?: string
  featured: boolean
  createdAt: number
}

export interface IDoc {
  id: string
  title: string
  slug: string
  content: string
  category: string
  order: number
  updatedAt: number
}

export interface ApiResponse<T> {
  data: T
  status: number
  message: string
  timestamp: number
}