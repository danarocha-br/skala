var i=Object.defineProperty;var r=(n,o)=>i(n,"name",{value:o,configurable:!0});import{A as e,S as s}from"./usePanel.be3af1e1.js";import{B as l}from"./storybook-addon-badges.esm.1b0bb0f8.js";import{j as a,a as c,F as m}from"./jsx-runtime.e7acc8f6.js";import"./index.3f7e1040.js";import"./index.2ab3c1e5.js";import"./iframe.ed58828a.js";import"./index.45f128b4.js";import"./es.date.to-primitive.87590581.js";import"./es.number.max-safe-integer.4a0044a0.js";import"./es.map.constructor.8fdb5bda.js";import"./index.c041fee6.js";import"./es.number.to-fixed.0a78dfff.js";import"./index-681e4b07.9765e5fa.js";import"./es.number.is-nan.5a177b11.js";const M={title:"Components/Avatar",component:e,parameters:{storySource:{source:`import { Meta, Story } from '@storybook/react';
import { Avatar, AvatarProps, Stack } from '@skala/react';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nGRJSZ90AzGrFe23Shmkzf/Skala?node-id=16%3A6189',
    },
  },
  args: {
    username: 'Joe Smith',
    size: 'md',
    variant: 'circle',
    imageURL: 'https://source.unsplash.com/ew_Ou6oiQ2c',
    imageALT: 'user avatar',
    loading: false,
    showUsername: false,
  },
  argTypes: {
    username: {
      table: {
        category: 'Text',
      },
    },
    imageALT: {
      table: {
        category: 'Text',
      },
    },
    imageURL: {
      table: {
        category: 'Modifiers',
      },
    },
    variant: {
      table: {
        category: 'Modifiers',
      },
      options: ['circle', 'square'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      table: {
        category: 'Modifiers',
      },
      options: ['md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
    loading: {
      table: {
        category: 'Modifiers',
      },
    },
    showUsername: {
      table: {
        category: 'Modifiers',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Stack
          gap="8"
          align="center"
          justify="center"
          css={{ h: '100vh', px: 200 }}
        >
          {Story()}
        </Stack>
      );
    },
  ],
} as Meta<AvatarProps>;

export const Sizes: Story<AvatarProps> = (args) => (
  <>
    <Avatar {...args} />
    <Avatar {...args} size="lg" />
  </>
);

export const WithFallback = Sizes.bind({});
WithFallback.args = {
  imageURL: undefined,
};

export const Square = Sizes.bind({});
Square.args = {
  variant: 'square',
  imageURL: undefined,
};

export const WithUsername = Sizes.bind({});
WithUsername.args = {
  imageURL: undefined,
  showUsername: true,
};
`,locationsMap:{sizes:{startLoc:{col:41,line:85},endLoc:{col:1,line:90},startBody:{col:41,line:85},endBody:{col:1,line:90}},"with-fallback":{startLoc:{col:41,line:85},endLoc:{col:1,line:90},startBody:{col:41,line:85},endBody:{col:1,line:90}},square:{startLoc:{col:41,line:85},endLoc:{col:1,line:90},startBody:{col:41,line:85},endBody:{col:1,line:90}},"with-username":{startLoc:{col:41,line:85},endLoc:{col:1,line:90},startBody:{col:41,line:85},endBody:{col:1,line:90}}}},badges:[l.STABLE],design:{type:"figma",url:"https://www.figma.com/file/nGRJSZ90AzGrFe23Shmkzf/Skala?node-id=16%3A6189"}},args:{username:"Joe Smith",size:"md",variant:"circle",imageURL:"https://source.unsplash.com/ew_Ou6oiQ2c",imageALT:"user avatar",loading:!1,showUsername:!1},argTypes:{username:{table:{category:"Text"}},imageALT:{table:{category:"Text"}},imageURL:{table:{category:"Modifiers"}},variant:{table:{category:"Modifiers"},options:["circle","square"],control:{type:"inline-radio"}},size:{table:{category:"Modifiers"},options:["md","lg"],control:{type:"inline-radio"}},loading:{table:{category:"Modifiers"}},showUsername:{table:{category:"Modifiers"}}},decorators:[n=>a(s,{gap:"8",align:"center",justify:"center",css:{h:"100vh",px:200},children:n()})]},t=r(n=>c(m,{children:[a(e,{...n}),a(e,{...n,size:"lg"})]}),"Sizes"),d=t.bind({});d.args={imageURL:void 0};const g=t.bind({});g.args={variant:"square",imageURL:void 0};const p=t.bind({});p.args={imageURL:void 0,showUsername:!0};const R=["Sizes","WithFallback","Square","WithUsername"];export{t as Sizes,g as Square,d as WithFallback,p as WithUsername,R as __namedExportsOrder,M as default};
//# sourceMappingURL=Avatar.stories.89988650.js.map
