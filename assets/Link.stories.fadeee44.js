var a=Object.defineProperty;var t=(n,e)=>a(n,"name",{value:e,configurable:!0});import{L as r,S as i}from"./usePanel.be3af1e1.js";import{B as s}from"./storybook-addon-badges.esm.1b0bb0f8.js";import{j as o,a as c,F as l}from"./jsx-runtime.e7acc8f6.js";import"./index.3f7e1040.js";import"./index.2ab3c1e5.js";import"./iframe.ed58828a.js";import"./index.45f128b4.js";import"./es.date.to-primitive.87590581.js";import"./es.number.max-safe-integer.4a0044a0.js";import"./es.map.constructor.8fdb5bda.js";import"./index.c041fee6.js";import"./es.number.to-fixed.0a78dfff.js";import"./index-681e4b07.9765e5fa.js";import"./es.number.is-nan.5a177b11.js";const T={title:"Navigation/Link",component:r,parameters:{storySource:{source:`import { Meta, Story } from '@storybook/react';
import { Link, LinkProps, Stack } from '@skala/react';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Navigation/Link',
  component: Link,
  parameters: {
    layout: 'fullscreen',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    children: 'I am a link label',
    href: '/',
    target: '/',
    color: 'primary',
  },
  argTypes: {
    children: {
      table: {
        category: 'Text',
      },
    },
    href: {
      table: {
        category: 'Text',
      },
    },
    target: {
      table: {
        category: 'Modifiers',
      },
    },
    color: {
      table: {
        category: 'Modifiers',
      },
      options: ['primary', 'secondary', 'caption'],
      control: {
        type: 'inline-radio',
      },
    },
    css: {
      table: {
        category: 'Modifiers',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Stack align="center" justify="center" css={{ h: '100vh', px: 200 }}>
          {Story()}
        </Stack>
      );
    },
  ],
} as Meta<LinkProps>;

export const Variants: Story<LinkProps> = (args) => (
  <>
    <Link {...args} color="primary" />
    <Link {...args} color="secondary" />
    <Link {...args} color="caption" />
  </>
);
`,locationsMap:{variants:{startLoc:{col:42,line:64},endLoc:{col:1,line:70},startBody:{col:42,line:64},endBody:{col:1,line:70}}}},layout:"fullscreen",badges:[s.STABLE],design:{type:"figma",url:""}},args:{children:"I am a link label",href:"/",target:"/",color:"primary"},argTypes:{children:{table:{category:"Text"}},href:{table:{category:"Text"}},target:{table:{category:"Modifiers"}},color:{table:{category:"Modifiers"},options:["primary","secondary","caption"],control:{type:"inline-radio"}},css:{table:{category:"Modifiers"}}},decorators:[n=>o(i,{align:"center",justify:"center",css:{h:"100vh",px:200},children:n()})]},E=t(n=>c(l,{children:[o(r,{...n,color:"primary"}),o(r,{...n,color:"secondary"}),o(r,{...n,color:"caption"})]}),"Variants"),j=["Variants"];export{E as Variants,j as __namedExportsOrder,T as default};
//# sourceMappingURL=Link.stories.fadeee44.js.map
