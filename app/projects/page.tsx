import { getProjectTypes, getProjects } from "@/lib/sanity"
import { ProjectsClient } from "./projects-client"

export default async function ProjectsPage() {
  // Fetch data from Sanity
  const [projectTypes, sanityProjects] = await Promise.all([
    getProjectTypes(),
    getProjects(),
  ])

  return <ProjectsClient projectTypes={projectTypes} sanityProjects={sanityProjects} />
}
