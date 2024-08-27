import type { Schema, Attribute } from '@strapi/strapi';

export interface ElementsHeading extends Schema.Component {
  collectionName: 'components_elements_headings';
  info: {
    displayName: 'Heading';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    tag: Attribute.Enumeration<['h1', 'h2', 'h3', 'h4', 'h5', 'h6']> &
      Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'elements.heading': ElementsHeading;
    }
  }
}
