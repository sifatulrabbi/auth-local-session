import React from 'react';
import { SiTypescript, SiExpress, SiNodedotjs, SiReact, SiCss3, SiPassport } from 'react-icons/si';
import { Container } from './icons-preview.styles';

export function IconsPreview(): React.ReactElement {
  return (
    <Container color="default">
      <span className="icon">
        <SiReact />
      </span>
      <span className="icon">
        <SiTypescript />
      </span>
      <span className="icon">
        <SiNodedotjs />
      </span>
      <span className="icon">
        <SiCss3 />
      </span>
      <span className="icon">
        <SiExpress />
      </span>
      <span className="icon">
        <SiPassport />
      </span>
    </Container>
  );
}
