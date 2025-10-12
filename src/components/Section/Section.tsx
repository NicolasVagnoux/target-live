import React, { FC } from 'react';

type SectionProps = {
  color: string;
  children?: React.ReactNode;
};

const Section: FC<SectionProps> = ({ color, children }) => {
    return (
        <div style={{backgroundColor: color}}>
            {children}
        </div>
    );
};

export default Section;