var d=Object.defineProperty;var r=(n,a)=>d(n,"name",{value:a,configurable:!0});import{s as t,S as c,B as u,I as m}from"./usePanel.be3af1e1.js";import{B as b}from"./storybook-addon-badges.esm.1b0bb0f8.js";import{j as e,a as l}from"./jsx-runtime.e7acc8f6.js";import"./index.3f7e1040.js";import"./index.2ab3c1e5.js";import"./iframe.ed58828a.js";import"./index.45f128b4.js";import"./es.date.to-primitive.87590581.js";import"./es.number.max-safe-integer.4a0044a0.js";import"./es.map.constructor.8fdb5bda.js";import"./index.c041fee6.js";import"./es.number.to-fixed.0a78dfff.js";import"./index-681e4b07.9765e5fa.js";import"./es.number.is-nan.5a177b11.js";const R={title:"Components/SelectMenu",component:t.Root,parameters:{storySource:{source:`import { Story, Meta } from '@storybook/react';
import { Box, Icon, SelectMenu, SelectMenuProps, Stack } from '@skala/react';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Components/SelectMenu',
  component: SelectMenu.Root,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    label: 'Status',
    defaultValue: 'invoiced',
  },
  argTypes: {
    label: {
      table: {
        category: 'Text',
      },
    },
    defaultValue: {
      table: {
        category: 'Text',
      },
    },
    css: {
      table: {
        category: 'Modifiers',
      },
    },
    children: {
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
} as Meta;

type CustomSelectProps = {
  label: string;
  color: string;
  value: string;
  disabled?: boolean;
};

const CustomSelectItem = ({
  value,
  color,
  label,
  disabled = false,
}: CustomSelectProps) => (
  <SelectMenu.Item value={value} disabled={disabled}>
    <SelectMenu.ItemText>
      <Stack align="center">
        <Box
          css={{
            w: '$spacing-3',
            h: '$spacing-3',
            borderRadius: '$radii-sm',
            bg: color,
          }}
        />
        {label}
      </Stack>
    </SelectMenu.ItemText>
    <SelectMenu.Indicator>
      <Icon
        label="indicator"
        name="check"
        size="sm"
        color="current"
        css={{ transform: 'scale(0.8)' }}
      />
    </SelectMenu.Indicator>
  </SelectMenu.Item>
);

export const Default: Story<SelectMenuProps> = (args) => {
  return (
    <SelectMenu.Root defaultValue="draft" {...args}>
      <SelectMenu.Group>
        <CustomSelectItem
          value="draft"
          label="Rascunho"
          color="$feedback-color-background-warning-hover"
        />
        <CustomSelectItem
          value="invoiced"
          label="Enviado"
          color="$interactive-color-background-pressed"
        />

        <CustomSelectItem
          value="paid"
          label="Pago"
          color="$action-color-background-secondary-enabled"
        />
        <CustomSelectItem
          value="disabled"
          label="Disabled"
          color="$action-color-background-primary-disabled"
          disabled
        />
      </SelectMenu.Group>
    </SelectMenu.Root>
  );
};
`,locationsMap:{default:{startLoc:{col:47,line:92},endLoc:{col:1,line:121},startBody:{col:47,line:92},endBody:{col:1,line:121}}}},layout:"centered",badges:[b.STABLE],design:{type:"figma",url:""}},args:{label:"Status",defaultValue:"invoiced"},argTypes:{label:{table:{category:"Text"}},defaultValue:{table:{category:"Text"}},css:{table:{category:"Modifiers"}},children:{table:{category:"Modifiers"}}},decorators:[n=>e(c,{align:"center",justify:"center",css:{h:"100vh",px:200},children:n()})]},o=r(({value:n,color:a,label:s,disabled:i=!1})=>l(t.Item,{value:n,disabled:i,children:[e(t.ItemText,{children:l(c,{align:"center",children:[e(u,{css:{w:"$spacing-3",h:"$spacing-3",borderRadius:"$radii-sm",bg:a}}),s]})}),e(t.Indicator,{children:e(m,{label:"indicator",name:"check",size:"sm",color:"current",css:{transform:"scale(0.8)"}})})]}),"CustomSelectItem"),D=r(n=>e(t.Root,{defaultValue:"draft",...n,children:l(t.Group,{children:[e(o,{value:"draft",label:"Rascunho",color:"$feedback-color-background-warning-hover"}),e(o,{value:"invoiced",label:"Enviado",color:"$interactive-color-background-pressed"}),e(o,{value:"paid",label:"Pago",color:"$action-color-background-secondary-enabled"}),e(o,{value:"disabled",label:"Disabled",color:"$action-color-background-primary-disabled",disabled:!0})]})}),"Default"),E=["Default"];export{D as Default,E as __namedExportsOrder,R as default};
//# sourceMappingURL=SelectMenu.stories.ec68d6ad.js.map
