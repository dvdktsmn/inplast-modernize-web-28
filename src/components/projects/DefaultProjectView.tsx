
import React from 'react';

interface DefaultProjectViewProps {
  image: string;
  title: string;
}

const DefaultProjectView = ({ image, title }: DefaultProjectViewProps) => {
  return (
    <div className="mt-8">
      <div className="bg-white rounded-xl overflow-hidden shadow-md">
        <div className="h-80 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default DefaultProjectView;
