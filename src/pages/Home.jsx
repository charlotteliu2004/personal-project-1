import ProjectCard from "../components/ProjectCard";
import MapView from "../components/MapView";

function Home() {
        const sampleProjects = [
            {
                title: "AI for Sustainability",
                description: "Track your carbon footprint with AI tools."
            },
            {
                title: "Another fake sample project",
                description: "Fake description of a sample project"
            }
            ];

        return (
            <div className={"p-8"}>
            <h1 className={"text-3xl font-bold mb-6"}>Explore Projects</h1>
                <MapView />
    {sampleProjects.map((project, index) => (
        <ProjectCard
        key={index}
        title={project.title}
        description={project.description}
        />
    ))}
    </div>
        );
}
export default Home;
