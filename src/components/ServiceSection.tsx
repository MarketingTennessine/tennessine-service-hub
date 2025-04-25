
import { FC } from 'react';

interface ServiceSectionProps {
  title: string;
  description: string;
  icon: JSX.Element;
  isLight?: boolean;
}

const ServiceSection: FC<ServiceSectionProps> = ({ title, description, icon, isLight = false }) => {
  return (
    <div className={`service-card ${isLight ? 'bg-transparent border-white/20 hover:bg-white/10' : ''}`}>
      <div className="flex justify-center mb-6">
        {icon}
      </div>
      <h3 className={`text-xl font-bold mb-3 text-center ${isLight ? 'text-white' : 'text-black'}`}>{title}</h3>
      <p className={`text-center ${isLight ? 'text-white/90' : 'text-[#333333]'}`}>{description}</p>
    </div>
  );
};

export default ServiceSection;
