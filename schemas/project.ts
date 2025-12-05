import { defineType } from 'sanity'

export default defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'projectType',
            title: 'Project Type',
            type: 'reference',
            to: [{ type: 'projectType' }],
            description: 'Select the type of project',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'title',
            title: 'Project Title',
            type: 'string',
            description: 'The name of the project',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'location',
            title: 'Location',
            type: 'string',
            description: 'Location of the project (e.g., "Ямбол, България")',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'subtitle',
            title: 'Subtitle',
            type: 'text',
            description: 'Brief description of the project',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'heroMedia',
            title: 'Hero Media',
            type: 'object',
            description: 'Choose ONE option: single image, multiple images for carousel, or video URL',
            fields: [
                {
                    name: 'singleImage',
                    title: 'Single Image',
                    type: 'image',
                    description: 'Upload a single image',
                },
                {
                    name: 'imageCarousel',
                    title: 'Image Carousel',
                    type: 'array',
                    description: 'Upload multiple images for a carousel',
                    of: [{ type: 'image' }],
                },
                {
                    name: 'videoUrl',
                    title: 'Video CDN URL',
                    type: 'url',
                    description: 'Paste a CDN link to a video file',
                },
            ],
        },
        {
            name: 'processTitle',
            title: 'Process Section Title',
            type: 'string',
            description: 'Custom title for the timeline section (optional, defaults to "Времева линия на проекта")',
            initialValue: 'Времева линия на проекта',
        },
        {
            name: 'phases',
            title: 'Project Phases',
            type: 'array',
            description: 'Add multiple phases to show the project timeline',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'title',
                            title: 'Phase Title',
                            type: 'string',
                            description: 'Name of this phase (e.g., "Подготовка", "Преди", "По време")',
                            validation: (Rule) => Rule.required(),
                        },
                        {
                            name: 'icon',
                            title: 'Phase Icon',
                            type: 'string',
                            description: 'Lucide icon name (e.g., "AlertCircle", "Hammer", "Construction")',
                            validation: (Rule) => Rule.required(),
                        },
                        {
                            name: 'description',
                            title: 'Description',
                            type: 'text',
                            description: 'Detailed description of this phase',
                            validation: (Rule) => Rule.required(),
                        },
                        {
                            name: 'highlights',
                            title: 'Highlights',
                            type: 'array',
                            description: 'Key points or achievements in this phase',
                            of: [{ type: 'string' }],
                            validation: (Rule) => Rule.required(),
                        },
                        {
                            name: 'media',
                            title: 'Phase Media',
                            type: 'object',
                            description: 'Choose ONE option: single image, multiple images for carousel, or video URL',
                            fields: [
                                {
                                    name: 'singleImage',
                                    title: 'Single Image',
                                    type: 'image',
                                    description: 'Upload a single image',
                                },
                                {
                                    name: 'imageCarousel',
                                    title: 'Image Carousel',
                                    type: 'array',
                                    description: 'Upload multiple images for a carousel',
                                    of: [{ type: 'image' }],
                                },
                                {
                                    name: 'videoUrl',
                                    title: 'Video CDN URL',
                                    type: 'url',
                                    description: 'Paste a CDN link to a video file',
                                },
                            ],
                        },
                    ],
                    preview: {
                        select: {
                            title: 'title',
                            subtitle: 'icon',
                        },
                    },
                },
            ],
            validation: (Rule) => Rule.required().min(1),
        },
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'location',
            media: 'heroMedia.singleImage',
        },
    },
})
