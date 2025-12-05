import { defineType } from 'sanity'

export default defineType({
    name: 'projectType',
    title: 'Project Type',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'The name of the project type (e.g., "Пътно строителство и поддръжка")',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'icon',
            title: 'Lucide Icon',
            type: 'string',
            description: 'Lucide icon name (e.g., "Construction", "Building", "HardHat", "Hammer")',
            validation: (Rule) => Rule.required(),
        },
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'icon',
        },
    },
})
