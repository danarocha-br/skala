var l=Object.defineProperty;var o=(e,r)=>l(e,"name",{value:r,configurable:!0});import{q as t,S as i,F as s}from"./usePanel.be3af1e1.js";import{B as c}from"./storybook-addon-badges.esm.1b0bb0f8.js";import{j as a,a as d}from"./jsx-runtime.e7acc8f6.js";import"./index.3f7e1040.js";import"./index.2ab3c1e5.js";import"./iframe.ed58828a.js";import"./index.45f128b4.js";import"./es.date.to-primitive.87590581.js";import"./es.number.max-safe-integer.4a0044a0.js";import"./es.map.constructor.8fdb5bda.js";import"./index.c041fee6.js";import"./es.number.to-fixed.0a78dfff.js";import"./index-681e4b07.9765e5fa.js";import"./es.number.is-nan.5a177b11.js";const j={title:"Form/Select",component:t,parameters:{storySource:{source:`import { Story, Meta } from '@storybook/react';
import { Form, Select, SelectProps, Stack } from '@skala/react';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Form/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    name: 'select',
    label: 'Select an item',
    variant: 'default',
    isMulti: false,
    disabled: false,
    loading: false,
    isSearchable: true,
    isClearable: true,
    noOptionMessage: 'No options found',
    placeholder: 'Select one option',
    options: [
      { label: 'Option 1', value: 'Option 1' },
      { label: 'Option 2', value: 'Option 2' },
    ],
  },
  argTypes: {
    label: {
      table: {
        category: 'Text',
      },
    },
    name: {
      table: {
        category: 'Text',
      },
    },
    placeholder: {
      table: {
        category: 'Text',
      },
    },
    variant: {
      table: {
        category: 'Modifiers',
      },
      options: ['default', 'table'],
      control: {
        type: 'inline-radio',
      },
    },
    errors: {
      table: {
        category: 'State',
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
    isMulti: {
      table: {
        category: 'Modifiers',
      },
    },
    isSearchable: {
      table: {
        category: 'Modifiers',
      },
    },
    isClearable: {
      table: {
        category: 'Modifiers',
      },
    },
    noOptionMessage: {
      table: {
        category: 'Modifiers',
      },
    },
    options: {
      table: {
        category: 'Text',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Stack align="center" justify="center" css={{ h: '100vh', w: 350 }}>
          {Story()}
        </Stack>
      );
    },
  ],
} as Meta<SelectProps>;

export const Default: Story<SelectProps> = (args) => {
  return (
    <Form>
      <Select {...args} />
      <Select {...args} icon="business" />
    </Form>
  );
};

export const isMulti = Default.bind({});
isMulti.args = {
  isMulti: true,
};

export const TableVariant = Default.bind({});
TableVariant.args = {
  variant: 'table',
};

export const DisabledState = Default.bind({});
DisabledState.args = {
  disabled: true,
};

export const LoadingState = Default.bind({});
LoadingState.args = {
  loading: true,
};

export const HasError = Default.bind({});
HasError.args = {
  errors: {
    message: 'I am an error message.',
  },
};
`,locationsMap:{default:{startLoc:{col:43,line:109},endLoc:{col:1,line:116},startBody:{col:43,line:109},endBody:{col:1,line:116}},"is-multi":{startLoc:{col:43,line:109},endLoc:{col:1,line:116},startBody:{col:43,line:109},endBody:{col:1,line:116}},"table-variant":{startLoc:{col:43,line:109},endLoc:{col:1,line:116},startBody:{col:43,line:109},endBody:{col:1,line:116}},"disabled-state":{startLoc:{col:43,line:109},endLoc:{col:1,line:116},startBody:{col:43,line:109},endBody:{col:1,line:116}},"loading-state":{startLoc:{col:43,line:109},endLoc:{col:1,line:116},startBody:{col:43,line:109},endBody:{col:1,line:116}},"has-error":{startLoc:{col:43,line:109},endLoc:{col:1,line:116},startBody:{col:43,line:109},endBody:{col:1,line:116}}}},layout:"centered",badges:[c.STABLE],design:{type:"figma",url:""}},args:{name:"select",label:"Select an item",variant:"default",isMulti:!1,disabled:!1,loading:!1,isSearchable:!0,isClearable:!0,noOptionMessage:"No options found",placeholder:"Select one option",options:[{label:"Option 1",value:"Option 1"},{label:"Option 2",value:"Option 2"}]},argTypes:{label:{table:{category:"Text"}},name:{table:{category:"Text"}},placeholder:{table:{category:"Text"}},variant:{table:{category:"Modifiers"},options:["default","table"],control:{type:"inline-radio"}},errors:{table:{category:"State"}},disabled:{table:{category:"State"}},loading:{table:{category:"State"}},isMulti:{table:{category:"Modifiers"}},isSearchable:{table:{category:"Modifiers"}},isClearable:{table:{category:"Modifiers"}},noOptionMessage:{table:{category:"Modifiers"}},options:{table:{category:"Text"}}},decorators:[e=>a(i,{align:"center",justify:"center",css:{h:"100vh",w:350},children:e()})]},n=o(e=>d(s,{children:[a(t,{...e}),a(t,{...e,icon:"business"})]}),"Default"),b=n.bind({});b.args={isMulti:!0};const g=n.bind({});g.args={variant:"table"};const p=n.bind({});p.args={disabled:!0};const u=n.bind({});u.args={loading:!0};const y=n.bind({});y.args={errors:{message:"I am an error message."}};const A=["Default","isMulti","TableVariant","DisabledState","LoadingState","HasError"];export{n as Default,p as DisabledState,y as HasError,u as LoadingState,g as TableVariant,A as __namedExportsOrder,j as default,b as isMulti};
//# sourceMappingURL=Select.stories.7c3eb8f8.js.map
