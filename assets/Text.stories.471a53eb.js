var s=Object.defineProperty;var t=(o,i)=>s(o,"name",{value:i,configurable:!0});import{T as e,G as r}from"./usePanel.be3af1e1.js";import{B as l}from"./storybook-addon-badges.esm.1b0bb0f8.js";import{j as n,a as c}from"./jsx-runtime.e7acc8f6.js";import"./index.3f7e1040.js";import"./index.2ab3c1e5.js";import"./iframe.ed58828a.js";import"./index.45f128b4.js";import"./es.date.to-primitive.87590581.js";import"./es.number.max-safe-integer.4a0044a0.js";import"./es.map.constructor.8fdb5bda.js";import"./index.c041fee6.js";import"./es.number.to-fixed.0a78dfff.js";import"./index-681e4b07.9765e5fa.js";import"./es.number.is-nan.5a177b11.js";const w={title:"Primitives/Text",component:e,parameters:{storySource:{source:`import { Story, Meta } from '@storybook/react';
import { Text, TextProps, Grid } from '@skala/react';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Primitives/Text',
  component: Text,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    size: 'md',
    align: 'left',
    color: 'body',
    weight: 'regular',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor. ',
  },
  argTypes: {
    size: {
      table: {
        category: 'Modifiers',
      },
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
      control: {
        type: 'select',
      },
    },
    color: {
      table: {
        category: 'Modifiers',
      },
      options: [
        'body',
        'body-lighter',
        'caption',
        'success',
        'danger',
        'warning',
        'on-dark',
        'on-light',
        'current',
      ],
      control: {
        type: 'select',
      },
    },
    weight: {
      table: {
        category: 'Modifiers',
      },
      options: ['light', 'regular', 'medium', 'semibold'],
      control: {
        type: 'inline-radio',
      },
    },
    align: {
      table: {
        category: 'Modifiers',
      },
      options: ['left', 'center', 'right'],
      control: {
        type: 'inline-radio',
      },
    },
    leading: {
      table: {
        category: 'Modifiers',
      },
      options: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
      control: {
        type: 'select',
      },
    },
    children: {
      table: {
        category: 'Modifiers',
      },
    },
    css: {
      table: {
        category: 'Modifiers',
      },
    },
    as: {
      table: {
        category: 'Modifiers',
      },
    },
  },
} as Meta<TextProps>;

const Template: Story<TextProps> = (args) => (
  <Grid cols="2" rows="9" align="center" css={{ maxWidth: 600, py: '$6' }}>
    <Text size="sm" color="caption">
      4xl
    </Text>
    <Text {...args} size="4xl" />
    <Text size="sm" color="caption">
      3xl
    </Text>
    <Text {...args} size="3xl" />
    <Text size="sm" color="caption">
      2xl
    </Text>
    <Text {...args} size="2xl" />
    <Text size="sm" color="caption">
      xl
    </Text>
    <Text {...args} size="xl" />
    <Text size="sm" color="caption">
      lg
    </Text>
    <Text {...args} size="lg" />
    <Text size="sm" color="caption">
      md
    </Text>
    <Text {...args} size="md" />
    <Text size="sm" color="caption">
      sm
    </Text>
    <Text {...args} size="sm" />
    <Text size="sm" color="caption">
      xs
    </Text>
    <Text {...args} size="xs" />
    <Text size="sm" color="caption">
      xxs
    </Text>
    <Text {...args} size="xxs" />
  </Grid>
);

export const AllScales = Template.bind({});

export const CustomTag: Story<TextProps> = (args) => (
  <Text {...args}>Text</Text>
);
CustomTag.args = {
  as: 'strong',
};
`,locationsMap:{"all-scales":{startLoc:{col:35,line:98},endLoc:{col:1,line:137},startBody:{col:35,line:98},endBody:{col:1,line:137}},"custom-tag":{startLoc:{col:43,line:141},endLoc:{col:1,line:143},startBody:{col:43,line:141},endBody:{col:1,line:143}}}},layout:"centered",badges:[l.STABLE],design:{type:"figma",url:""}},args:{size:"md",align:"left",color:"body",weight:"regular",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor. "},argTypes:{size:{table:{category:"Modifiers"},options:["xxs","xs","sm","md","lg","xl","2xl","3xl","4xl"],control:{type:"select"}},color:{table:{category:"Modifiers"},options:["body","body-lighter","caption","success","danger","warning","on-dark","on-light","current"],control:{type:"select"}},weight:{table:{category:"Modifiers"},options:["light","regular","medium","semibold"],control:{type:"inline-radio"}},align:{table:{category:"Modifiers"},options:["left","center","right"],control:{type:"inline-radio"}},leading:{table:{category:"Modifiers"},options:["1","2","3","4","5","6","7","8","9"],control:{type:"select"}},children:{table:{category:"Modifiers"}},css:{table:{category:"Modifiers"}},as:{table:{category:"Modifiers"}}}},a=t(o=>c(r,{cols:"2",rows:"9",align:"center",css:{maxWidth:600,py:"$6"},children:[n(e,{size:"sm",color:"caption",children:"4xl"}),n(e,{...o,size:"4xl"}),n(e,{size:"sm",color:"caption",children:"3xl"}),n(e,{...o,size:"3xl"}),n(e,{size:"sm",color:"caption",children:"2xl"}),n(e,{...o,size:"2xl"}),n(e,{size:"sm",color:"caption",children:"xl"}),n(e,{...o,size:"xl"}),n(e,{size:"sm",color:"caption",children:"lg"}),n(e,{...o,size:"lg"}),n(e,{size:"sm",color:"caption",children:"md"}),n(e,{...o,size:"md"}),n(e,{size:"sm",color:"caption",children:"sm"}),n(e,{...o,size:"sm"}),n(e,{size:"sm",color:"caption",children:"xs"}),n(e,{...o,size:"xs"}),n(e,{size:"sm",color:"caption",children:"xxs"}),n(e,{...o,size:"xxs"})]}),"Template"),A=a.bind({}),d=t(o=>n(e,{...o,children:"Text"}),"CustomTag");d.args={as:"strong"};const G=["AllScales","CustomTag"];export{A as AllScales,d as CustomTag,G as __namedExportsOrder,w as default};
//# sourceMappingURL=Text.stories.471a53eb.js.map
