function ProjectCard({title, description}) {
        return (
            <div className="bg-white p-4 rounded shadow mb-4">
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="text-gray-600 mt-2">{description}</p>
            </div>
        )
}
export default ProjectCard;