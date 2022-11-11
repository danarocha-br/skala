var s=Object.defineProperty;var t=(n,o)=>s(n,"name",{value:o,configurable:!0});import{I as r,i as a,G as i,S as l,T as d}from"./usePanel.be3af1e1.js";import{B as p}from"./storybook-addon-badges.esm.1b0bb0f8.js";import{j as e,a as g}from"./jsx-runtime.e7acc8f6.js";import"./index.3f7e1040.js";import"./index.2ab3c1e5.js";import"./iframe.ed58828a.js";import"./index.45f128b4.js";import"./es.date.to-primitive.87590581.js";import"./es.number.max-safe-integer.4a0044a0.js";import"./es.map.constructor.8fdb5bda.js";import"./index.c041fee6.js";import"./es.number.to-fixed.0a78dfff.js";import"./index-681e4b07.9765e5fa.js";import"./es.number.is-nan.5a177b11.js";const c=Object.keys(a),$={title:"Components/Icon",component:r,parameters:{storySource:{source:`import { Story, Meta } from '@storybook/react';
import { Grid, Icon, IconProps, iconPath, Text, Stack } from '@skala/react';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

const icons = Object.keys(iconPath);

export default {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'fullscreen',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nGRJSZ90AzGrFe23Shmkzf/Skala?node-id=12%3A2786',
    },
  },
  args: {
    name: 'plus',
    color: 'body-lighter',
    label: 'add',
    size: 'md',
  },
  argTypes: {
    name: {
      table: {
        category: 'Modifiers',
      },
      options: [...icons],
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
    label: {
      table: {
        category: 'Text',
      },
    },
    size: {
      table: {
        category: 'Modifiers',
      },
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<IconProps>;

export const IconSet: Story<IconProps> = (args) => (
  <Grid
    flow="row-dense"
    cols="6"
    align="stretch"
    justify="between"
    gap="3"
    css={{ w: '100%', p: '$spacing-4' }}
  >
    {icons.map((icon) => (
      <Stack
        key={icon}
        direction="column"
        align="center"
        gap="2"
        css={{
          bg: '$surface-color-background-subdued',
          p: '$spacing-2',
          borderRadius: '$radii-sm',
        }}
      >
        <Icon {...args} name={icon} />
        <Text
          as="p"
          size="xs"
          color="caption"
          css={{
            bg: '$surface-color-background-default',
            w: '100%',
            textAlign: 'center',
          }}
        >
          {icon}
        </Text>
      </Stack>
    ))}
  </Grid>
);

export const SingleIcon: Story<IconProps> = (args) => <Icon {...args} />;
SingleIcon.parameters = {
  layout: 'centered',
};
`,locationsMap:{"icon-set":{startLoc:{col:41,line:70},endLoc:{col:1,line:107},startBody:{col:41,line:70},endBody:{col:1,line:107}},"single-icon":{startLoc:{col:44,line:109},endLoc:{col:72,line:109},startBody:{col:44,line:109},endBody:{col:72,line:109}}}},layout:"fullscreen",badges:[p.STABLE],design:{type:"figma",url:"https://www.figma.com/file/nGRJSZ90AzGrFe23Shmkzf/Skala?node-id=12%3A2786"}},args:{name:"plus",color:"body-lighter",label:"add",size:"md"},argTypes:{name:{table:{category:"Modifiers"},options:[...c],control:{type:"select"}},color:{table:{category:"Modifiers"},options:["body","body-lighter","caption","success","danger","warning","on-dark","on-light","current"],control:{type:"select"}},label:{table:{category:"Text"}},size:{table:{category:"Modifiers"},options:["sm","md","lg"],control:{type:"inline-radio"}}}},M=t(n=>e(i,{flow:"row-dense",cols:"6",align:"stretch",justify:"between",gap:"3",css:{w:"100%",p:"$spacing-4"},children:c.map(o=>g(l,{direction:"column",align:"center",gap:"2",css:{bg:"$surface-color-background-subdued",p:"$spacing-2",borderRadius:"$radii-sm"},children:[e(r,{...n,name:o}),e(d,{as:"p",size:"xs",color:"caption",css:{bg:"$surface-color-background-default",w:"100%",textAlign:"center"},children:o})]},o))}),"IconSet"),m=t(n=>e(r,{...n}),"SingleIcon");m.parameters={layout:"centered"};const j=["IconSet","SingleIcon"];export{M as IconSet,m as SingleIcon,j as __namedExportsOrder,$ as default};
//# sourceMappingURL=Icon.stories.043c2d67.js.map
