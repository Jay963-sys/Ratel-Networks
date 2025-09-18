import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="flex flex-col justify-between bg-secondary/80 border border-gray-600 rounded-xl p-6 text-center hover:shadow-lg hover:border-primary hover:shadow-primary/30 transition h-full">
      <div>
        <div className="flex justify-center mb-4 text-primary text-4xl">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-200 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
