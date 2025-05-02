
import { FC } from 'react';

interface ServiceSectionProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const ServiceSection: FC<ServiceSectionProps> = ({
  title,
  description,
  icon
}) => {
  return (
    <div className="service-card hover:border-orange-300 transition-colors duration-300 flex flex-col items-center">
      <div className="flex justify-center items-center w-16 h-16 rounded-full bg-gradient-to-r from-[#d76512]/20 to-[#f5a20a]/20 text-[#d76512] mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-center text-gray-900">{title}</h3>
      <p className="text-center text-gray-700">{description}</p>
    </div>
  );
};

export default ServiceSection;
