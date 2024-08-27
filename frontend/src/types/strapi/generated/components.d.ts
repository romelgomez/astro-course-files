import type { Schema, Attribute } from '@strapi/strapi';

export interface SectionTestimonialSection extends Schema.Component {
  collectionName: 'components_section_testimonial_sections';
  info: {
    displayName: 'Testimonial Section';
    description: '';
  };
  attributes: {
    heading: Attribute.Component<'elements.heading'> & Attribute.Required;
    testimonial: Attribute.Component<'blocks.testimonial', true> &
      Attribute.Required;
  };
}

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

export interface BlocksTestimonial extends Schema.Component {
  collectionName: 'components_blocks_testimonials';
  info: {
    displayName: 'Testimonial';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    role: Attribute.String & Attribute.Required;
    rating: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 5;
        },
        number
      > &
      Attribute.DefaultTo<5>;
    content: Attribute.Text & Attribute.Required;
    date: Attribute.Date & Attribute.Required;
    isFeatured: Attribute.Boolean & Attribute.DefaultTo<false>;
    image: Attribute.Media<'images'> & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'section.testimonial-section': SectionTestimonialSection;
      'elements.heading': ElementsHeading;
      'blocks.testimonial': BlocksTestimonial;
    }
  }
}
