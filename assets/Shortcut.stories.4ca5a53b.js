var a=Object.defineProperty;var o=(t,e)=>a(t,"name",{value:e,configurable:!0});import{l as r,S as s}from"./usePanel.be3af1e1.js";import{B as c}from"./storybook-addon-badges.esm.1b0bb0f8.js";import{j as n}from"./jsx-runtime.e7acc8f6.js";import"./index.3f7e1040.js";import"./index.2ab3c1e5.js";import"./iframe.ed58828a.js";import"./index.45f128b4.js";import"./es.date.to-primitive.87590581.js";import"./es.number.max-safe-integer.4a0044a0.js";import"./es.map.constructor.8fdb5bda.js";import"./index.c041fee6.js";import"./es.number.to-fixed.0a78dfff.js";import"./index-681e4b07.9765e5fa.js";import"./es.number.is-nan.5a177b11.js";const D={title:"Components/Shortcut",component:r,parameters:{storySource:{source:`import { Meta, Story } from '@storybook/react';
import { Shortcut, ShortcutProps, Stack } from '@skala/react';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Components/Shortcut',
  component: Shortcut,
  parameters: {
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nGRJSZ90AzGrFe23Shmkzf/Skala?node-id=16%3A6189',
    },
  },
  args: {
    shortcut: 'cmd + D',
  },
  argTypes: {
    shortcut: {
      table: {
        category: 'Text',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Stack align="center" justify="center" css={{ h: '50vh', w: '50vw' }}>
          {Story()}
        </Stack>
      );
    },
  ],
} as Meta<ShortcutProps>;

export const Default: Story<ShortcutProps> = (args) => <Shortcut {...args} />;
`,locationsMap:{default:{startLoc:{col:45,line:36},endLoc:{col:77,line:36},startBody:{col:45,line:36},endBody:{col:77,line:36}}}},badges:[c.STABLE],design:{type:"figma",url:"https://www.figma.com/file/nGRJSZ90AzGrFe23Shmkzf/Skala?node-id=16%3A6189"}},args:{shortcut:"cmd + D"},argTypes:{shortcut:{table:{category:"Text"}}},decorators:[t=>n(s,{align:"center",justify:"center",css:{h:"50vh",w:"50vw"},children:t()})]},b=o(t=>n(r,{...t}),"Default"),x=["Default"];export{b as Default,x as __namedExportsOrder,D as default};
//# sourceMappingURL=Shortcut.stories.4ca5a53b.js.map
