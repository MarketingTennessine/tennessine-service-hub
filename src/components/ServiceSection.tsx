
import { FC } from 'react';

interface ServiceSectionProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const ServiceSection: FC<ServiceSectionProps> = ({ title, description, icon }) => {
  return (
    <div className="service-card">
      <div className="flex justify-center mb-6 text-[#d76512]">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-center text-[#d76512]">{title}</h3>
      <p className="text-center text-[#333333]">{description}</p>
    </div>
  );
};

export default ServiceSection;
