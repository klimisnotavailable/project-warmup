import ProjectsList from "../ProjectsList/ProjectsList";

const ProjectsSection = () => {
    return (
        <section className="p-24">
            <div className="bg-indigo-800 p-10 text-center">
                <h2 className="text-white text-2xl">Projects</h2>
                <ProjectsList></ProjectsList>
            </div>
        </section>
    )
};

export default ProjectsSection;