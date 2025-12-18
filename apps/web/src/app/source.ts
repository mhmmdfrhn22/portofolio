import { createMDXSource } from "@fumadocs/content-collections";
import { allProjectMetas, allProjects } from "content-collections";
import { loader } from "fumadocs-core/source";

export const project = loader({
  baseUrl: "/projects",
  source: createMDXSource(allProjects, allProjectMetas),
});
