export interface ProjectType {
    _id: string
    title: string
    icon: string
}

export interface ProjectMedia {
    singleImage?: {
        asset: {
            _ref: string
            _type: 'reference'
        }
    }
    imageCarousel?: Array<{
        asset: {
            _ref: string
            _type: 'reference'
        }
    }>
    videoUrl?: string
}

export interface ProjectPhase {
    title: string
    icon: string
    description: string
    highlights: string[]
    media?: ProjectMedia
}

export interface Project {
    _id: string
    title: string
    location: string
    subtitle: string
    projectType: ProjectType
    heroMedia?: ProjectMedia
    processTitle?: string
    phases: ProjectPhase[]
}
