import { getProjectTypes, getProjects } from "@/lib/sanity"
import { ProjectsClient } from "./projects-client"

export const revalidate = 3600;

export default async function ProjectsPage() {
  // Fetch data from Sanity
  const [projectTypes, sanityProjects] = await Promise.all([
    getProjectTypes(),
    getProjects(),
  ])

  return <ProjectsClient projectTypes={projectTypes} sanityProjects={sanityProjects} />
}
