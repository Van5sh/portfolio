"use client";

import React, { useReducer } from "react";
import ProjectsCard from "@/components/ui/ProjectsCard";
import useMounted from "@/lib/mount";
import { motion, AnimatePresence, Variants } from "framer-motion";

import Arrow1 from "../../public/svgs/codes/Arrow1";
import Arrow2 from "../../public/svgs/codes/Arrow2";
import Arrow3 from "../../public/svgs/codes/Arrow3";
import Arrow4 from "../../public/svgs/codes/Arrow4";
import Centre from "../../public/svgs/codes/Centre";

import CardView from "../components/ui/CardView";

type State = {
  activeProjectId: string | null;
};

type Action =
  | { type: "OPEN_PROJECT"; payload: string }
  | { type: "CLOSE_PROJECT" }
  | { type: "TOGGLE_PROJECT"; payload: string };

type Project = {
  id: string;
  title: string;
  position: "left" | "right";
  image: string;
  link: string;
  description: string;
};

const initialState: State = {
  activeProjectId: null,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "OPEN_PROJECT":
      return { activeProjectId: action.payload };

    case "CLOSE_PROJECT":
      return { activeProjectId: null };

    case "TOGGLE_PROJECT":
      return {
        activeProjectId:
          state.activeProjectId === action.payload ? null : action.payload,
      };

    default:
      return state;
  }
}

const iosOpen: Variants = {
  hidden: { opacity: 0, scale: 0.92, y: 25 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 22,
      mass: 0.9,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 30,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};

const Projects = () => {
  const mounted = useMounted();
  const [state, dispatch] = useReducer(reducer, initialState);

  if (!mounted) return null;

  const projects: Project[] = [
    {
      id: "maven",
      title: "Maven Financial",
      position: "right",
      image: "",
      link: "",
      description:
        "Maven Financial is a full stack web application that allows users to manage their transactions and view account balance.",
    },
    {
      id: "cryptic",
      title: "Cryptic Hunt",
      position: "right",
      image: "",
      link: "",
      description: "A gamified cryptic hunt platform with puzzle progression.",
    },
    {
      id: "apex",
      title: "Apex Market",
      position: "left",
      image: "",
      link: "",
      description: "E-commerce marketplace with modern UI and cart features.",
    },
    {
      id: "acm",
      title: "ACMOne-APP",
      position: "left",
      image: "",
      link: "",
      description: "Club management app for ACM events, members and updates.",
    },
  ];

  const activeProject = projects.find((p) => p.id === state.activeProjectId);

  return (
    <div className="flex flex-col items-center w-full px-20 py-20 relative">
      <h1 className="text-5xl font-bold tracking-tight mb-25">Projects</h1>

      <div className="relative w-full max-w-5xl h-[80vh]">
        <div className="absolute inset-0 flex justify-between items-center px-28">
          <div className="flex flex-col items-end gap-8">
            <div className="relative flex items-center">
              <Arrow4 />
              <div
                className="absolute cursor-pointer right-[240px] -mt-15 hover:scale-[1.3] transition-transform duration-400 ease-out top-2.5"
                onClick={() =>
                  dispatch({ type: "TOGGLE_PROJECT", payload: "maven" })
                }
              >
                <ProjectsCard>Maven Financial</ProjectsCard>
              </div>
            </div>

            <div className="relative">
              <Arrow3 />
              <div
                className="absolute right-full cursor-pointer hover:scale-[1.3] transition-transform duration-400 ease-out"
                onClick={() =>
                  dispatch({ type: "TOGGLE_PROJECT", payload: "cryptic" })
                }
              >
                <ProjectsCard>Cryptic Hunt</ProjectsCard>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-8 mr-20">
            <div className="relative">
              <Arrow1 />
              <div
                className="absolute cursor-pointer left-[240px] -mt-15 hover:scale-[1.3] transition-transform duration-400 ease-out top-2.5"
                onClick={() =>
                  dispatch({ type: "TOGGLE_PROJECT", payload: "apex" })
                }
              >
                <ProjectsCard>Apex Market</ProjectsCard>
              </div>
            </div>

            <div className="relative">
              <Arrow2 />
              <div
                className="absolute cursor-pointer left-full hover:scale-[1.3] transition-transform duration-400 ease-out"
                onClick={() =>
                  dispatch({ type: "TOGGLE_PROJECT", payload: "acm" })
                }
              >
                <ProjectsCard>ACMOne-APP</ProjectsCard>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute top-1/2 left-1/2 z-10 
                     -translate-x-1/2 -translate-y-1/2
                     hover:scale-[1.3] transition-transform duration-500 ease-out"
        >
          <Centre />
        </div>
        <AnimatePresence>
          {activeProject && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 z-40 backdrop-blur-2xl bg-gray-900/50"
                onClick={() => dispatch({ type: "CLOSE_PROJECT" })}
              />
              <motion.div
                key={activeProject.id}
                variants={iosOpen}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="fixed top-1/2 left-1/2 z-50 
                           -translate-x-1/2 -translate-y-1/2 
                           drop-shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <CardView
                  title={activeProject.title}
                  description={activeProject.description}
                  image={activeProject.image}
                  link={activeProject.link}
                />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;
