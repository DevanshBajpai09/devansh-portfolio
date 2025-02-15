import Projects from "@/components/Projects";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: `Projects`,
  description: `Check out some of the projects I have worked on`,
  
  
};

const ProjectsPage = () => {
  return <Projects />;
};

export default ProjectsPage;
