'use client'
interface ProjectItemProps {
  name: string;
  description: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ name, description }) => {
  return (
    <div className="border p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ProjectItem;
