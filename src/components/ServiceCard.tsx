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
    <div className="flex flex-col justify-between bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-xl hover:border-[#FF6B00] transition-all duration-300 h-full">
      <div>
        {/* Icon */}
        <div className="flex justify-center mb-5">{icon}</div>

        {/* Title */}
        <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
