import { createClient } from 'next-sanity'
import { createImageUrlBuilder } from '@sanity/image-url'
import { Project, ProjectType } from '@/types/sanity'

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'icddf1yh',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-12',
    useCdn: process.env.NODE_ENV === 'production',
})

// Image URL builder
const builder = createImageUrlBuilder(client)

export function urlForImage(source: any) {
    return builder.image(source)
}

// Fetch all project types
export async function getProjectTypes(): Promise<ProjectType[]> {
    const query = `*[_type == "projectType"] | order(title asc) {
        _id,
        title,
        icon
    }`
    return await client.fetch(query, {}, { next: { revalidate: 3600 } })
}

// Fetch all projects with populated references
export async function getProjects(): Promise<Project[]> {
    const query = `*[_type == "project"] | order(_createdAt desc) {
        _id,
        title,
        location,
        subtitle,
        projectType->{
            _id,
            title,
            icon
        },
        heroMedia,
        processTitle,
        phases
    }`
    return await client.fetch(query, {}, { next: { revalidate: 3600 } })
}