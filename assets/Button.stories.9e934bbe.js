var s=Object.defineProperty;var r=(n,i)=>s(n,"name",{value:i,configurable:!0});import{a as t,S as l}from"./usePanel.be3af1e1.js";import{B as c}from"./storybook-addon-badges.esm.1b0bb0f8.js";import{j as o,a,F as e}from"./jsx-runtime.e7acc8f6.js";import"./index.3f7e1040.js";import"./index.2ab3c1e5.js";import"./iframe.ed58828a.js";import"./index.45f128b4.js";import"./es.date.to-primitive.87590581.js";import"./es.number.max-safe-integer.4a0044a0.js";import"./es.map.constructor.8fdb5bda.js";import"./index.c041fee6.js";import"./es.number.to-fixed.0a78dfff.js";import"./index-681e4b07.9765e5fa.js";import"./es.number.is-nan.5a177b11.js";const I={title:"Components/Button",component:t,parameters:{storySource:{source:`import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps, Stack } from '@skala/react';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'fullscreen',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    label: 'Label',
    variant: 'primary',
    color: 'primary',
    size: 'md',
    fullWidth: false,
    disabled: false,
    loading: false,
    animateOnHover: false,
    onClick: () => 'clicked',
  },
  argTypes: {
    label: {
      table: {
        category: 'Text',
      },
    },
    variant: {
      table: {
        category: 'Modifiers',
      },
      options: ['primary', 'transparent', 'icon'],
      control: {
        type: 'inline-radio',
      },
    },
    color: {
      table: {
        category: 'Modifiers',
      },
      options: ['primary', 'secondary', 'danger'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      table: {
        category: 'Modifiers',
      },
    },
    icon: {
      table: {
        category: 'Modifiers',
      },
    },
    animateOnHover: {
      table: {
        category: 'Modifiers',
      },
    },
    fullWidth: {
      table: {
        category: 'Modifiers',
      },
    },
    css: {
      table: {
        category: 'Modifiers',
      },
    },
    disabled: {
      table: {
        category: 'State',
      },
    },
    loading: {
      table: {
        category: 'State',
      },
    },
    onClick: {
      table: {
        category: 'Function',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Stack align="center" justify="center" fullWidth css={{ h: '100vh' }}>
          {Story()}
        </Stack>
      );
    },
  ],
} as Meta<ButtonProps>;

export const DefaultVariant: Story<ButtonProps> = (args) => (
  <>
    <Button {...args} color="primary" />
    <Button {...args} color="secondary" />
    <Button {...args} color="danger" />
  </>
);
DefaultVariant.args = {
  variant: 'primary',
};

export const TransparentVariant: Story<ButtonProps> = (args) => (
  <>
    <Button {...args} color="primary" />
    <Button {...args} color="secondary" />
    <Button {...args} color="danger" />
  </>
);
TransparentVariant.args = {
  variant: 'transparent',
};

export const IconVariant: Story<ButtonProps> = (args) => (
  <>
    <Button {...args} color="primary" />
    <Button {...args} color="secondary" />
    <Button {...args} color="danger" />
  </>
);
IconVariant.args = {
  variant: 'icon',
  icon: 'plus',
};

export const Sizes: Story<ButtonProps> = (args) => (
  <>
    <Button {...args} size="sm" />
    <Button {...args} size="md" />
    <Button {...args} size="lg" />
  </>
);

export const StateDisabled: Story<ButtonProps> = (args) => (
  <>
    <Button {...args} size="sm" disabled />
    <Button {...args} size="md" disabled />
    <Button {...args} size="lg" disabled />
  </>
);

export const StateLoading: Story<ButtonProps> = (args) => (
  <>
    <Button {...args} size="sm" loading />
    <Button {...args} size="md" loading />
    <Button {...args} size="lg" loading />
  </>
);

export const ButtonIconSizes: Story<ButtonProps> = (args) => (
  <>
    <Button {...args} size="sm" variant="icon" icon="plus" />
    <Button {...args} size="md" variant="icon" icon="plus" />
    <Button {...args} size="lg" variant="icon" icon="plus" />
  </>
);

export const PrimaryWithIcon: Story<ButtonProps> = (args) => (
  <>
    <Button {...args} size="sm" icon="plus" />
    <Button {...args} size="md" icon="plus" />
    <Button {...args} size="lg" icon="plus" />
  </>
);

export const TransparentWithIcon: Story<ButtonProps> = (args) => (
  <>
    <Button {...args} size="sm" icon="plus" variant="transparent" />
    <Button {...args} size="md" icon="plus" variant="transparent" />
    <Button {...args} size="lg" icon="plus" variant="transparent" />
  </>
);
`,locationsMap:{"default-variant":{startLoc:{col:50,line:103},endLoc:{col:1,line:109},startBody:{col:50,line:103},endBody:{col:1,line:109}},"transparent-variant":{startLoc:{col:54,line:114},endLoc:{col:1,line:120},startBody:{col:54,line:114},endBody:{col:1,line:120}},"icon-variant":{startLoc:{col:47,line:125},endLoc:{col:1,line:131},startBody:{col:47,line:125},endBody:{col:1,line:131}},sizes:{startLoc:{col:41,line:137},endLoc:{col:1,line:143},startBody:{col:41,line:137},endBody:{col:1,line:143}},"state-disabled":{startLoc:{col:49,line:145},endLoc:{col:1,line:151},startBody:{col:49,line:145},endBody:{col:1,line:151}},"state-loading":{startLoc:{col:48,line:153},endLoc:{col:1,line:159},startBody:{col:48,line:153},endBody:{col:1,line:159}},"button-icon-sizes":{startLoc:{col:51,line:161},endLoc:{col:1,line:167},startBody:{col:51,line:161},endBody:{col:1,line:167}},"primary-with-icon":{startLoc:{col:51,line:169},endLoc:{col:1,line:175},startBody:{col:51,line:169},endBody:{col:1,line:175}},"transparent-with-icon":{startLoc:{col:55,line:177},endLoc:{col:1,line:183},startBody:{col:55,line:177},endBody:{col:1,line:183}}}},layout:"fullscreen",badges:[c.STABLE],design:{type:"figma",url:""}},args:{label:"Label",variant:"primary",color:"primary",size:"md",fullWidth:!1,disabled:!1,loading:!1,animateOnHover:!1,onClick:()=>"clicked"},argTypes:{label:{table:{category:"Text"}},variant:{table:{category:"Modifiers"},options:["primary","transparent","icon"],control:{type:"inline-radio"}},color:{table:{category:"Modifiers"},options:["primary","secondary","danger"],control:{type:"inline-radio"}},size:{table:{category:"Modifiers"}},icon:{table:{category:"Modifiers"}},animateOnHover:{table:{category:"Modifiers"}},fullWidth:{table:{category:"Modifiers"}},css:{table:{category:"Modifiers"}},disabled:{table:{category:"State"}},loading:{table:{category:"State"}},onClick:{table:{category:"Function"}}},decorators:[n=>o(l,{align:"center",justify:"center",fullWidth:!0,css:{h:"100vh"},children:n()})]},d=r(n=>a(e,{children:[o(t,{...n,color:"primary"}),o(t,{...n,color:"secondary"}),o(t,{...n,color:"danger"})]}),"DefaultVariant");d.args={variant:"primary"};const p=r(n=>a(e,{children:[o(t,{...n,color:"primary"}),o(t,{...n,color:"secondary"}),o(t,{...n,color:"danger"})]}),"TransparentVariant");p.args={variant:"transparent"};const u=r(n=>a(e,{children:[o(t,{...n,color:"primary"}),o(t,{...n,color:"secondary"}),o(t,{...n,color:"danger"})]}),"IconVariant");u.args={variant:"icon",icon:"plus"};const T=r(n=>a(e,{children:[o(t,{...n,size:"sm"}),o(t,{...n,size:"md"}),o(t,{...n,size:"lg"})]}),"Sizes"),V=r(n=>a(e,{children:[o(t,{...n,size:"sm",disabled:!0}),o(t,{...n,size:"md",disabled:!0}),o(t,{...n,size:"lg",disabled:!0})]}),"StateDisabled"),W=r(n=>a(e,{children:[o(t,{...n,size:"sm",loading:!0}),o(t,{...n,size:"md",loading:!0}),o(t,{...n,size:"lg",loading:!0})]}),"StateLoading"),D=r(n=>a(e,{children:[o(t,{...n,size:"sm",variant:"icon",icon:"plus"}),o(t,{...n,size:"md",variant:"icon",icon:"plus"}),o(t,{...n,size:"lg",variant:"icon",icon:"plus"})]}),"ButtonIconSizes"),C=r(n=>a(e,{children:[o(t,{...n,size:"sm",icon:"plus"}),o(t,{...n,size:"md",icon:"plus"}),o(t,{...n,size:"lg",icon:"plus"})]}),"PrimaryWithIcon"),E=r(n=>a(e,{children:[o(t,{...n,size:"sm",icon:"plus",variant:"transparent"}),o(t,{...n,size:"md",icon:"plus",variant:"transparent"}),o(t,{...n,size:"lg",icon:"plus",variant:"transparent"})]}),"TransparentWithIcon"),j=["DefaultVariant","TransparentVariant","IconVariant","Sizes","StateDisabled","StateLoading","ButtonIconSizes","PrimaryWithIcon","TransparentWithIcon"];export{D as ButtonIconSizes,d as DefaultVariant,u as IconVariant,C as PrimaryWithIcon,T as Sizes,V as StateDisabled,W as StateLoading,p as TransparentVariant,E as TransparentWithIcon,j as __namedExportsOrder,I as default};
//# sourceMappingURL=Button.stories.9e934bbe.js.map
