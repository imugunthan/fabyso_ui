import React from "react";

interface EmptyStateProps {
  title: string;
  desc: string;
  pic: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ title, desc, pic }) => {
  return (
    <div className="empty-state w-full h-full flex items-center justify-center p-4">
      <div className="empty-state-container">
        <img src={pic} alt="empty-state-pic" style={{ maxHeight: 212 }} />
        <div className="flex flex-col items-center justify-center mt-8">
          <h3 className="text-tertiary">{title}</h3>
          <p className="text-secondary text-13 font-medium leading4 mt-1">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmptyState;
