var s=Object.defineProperty;var o=(e,a)=>s(e,"name",{value:a,configurable:!0});import{b as n,S as c}from"./usePanel.be3af1e1.js";import{B as i}from"./storybook-addon-badges.esm.1b0bb0f8.js";import{j as r,a as l}from"./jsx-runtime.e7acc8f6.js";import"./index.3f7e1040.js";import"./index.2ab3c1e5.js";import"./iframe.ed58828a.js";import"./index.45f128b4.js";import"./es.date.to-primitive.87590581.js";import"./es.number.max-safe-integer.4a0044a0.js";import"./es.map.constructor.8fdb5bda.js";import"./index.c041fee6.js";import"./es.number.to-fixed.0a78dfff.js";import"./index-681e4b07.9765e5fa.js";import"./es.number.is-nan.5a177b11.js";const T={title:"Form/Checkbox",component:n.Item,parameters:{storySource:{source:`import { Story, Meta } from '@storybook/react';
import { Checkbox, CheckboxProps, Stack } from '@skala/react';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Form/Checkbox',
  component: Checkbox.Item,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    variant: 'regular',
    name: 'option1',
    label: 'Accept terms and conditions',
    disabled: false,
  },
  argTypes: {
    name: {
      table: {
        category: 'Text',
      },
    },
    defaultChecked: {
      table: {
        category: 'Modifiers',
      },
    },
    variant: {
      table: {
        category: 'Modifiers',
      },
      options: ['regular', 'task'],
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
  },
  decorators: [
    (Story) => {
      return (
        <Stack align="center" justify="center" css={{ h: '100vh', w: 600 }}>
          {Story()}
        </Stack>
      );
    },
  ],
} as Meta<CheckboxProps>;

export const Regular: Story<CheckboxProps> = (args) => {
  return <Checkbox.Item {...args} />;
};

export const RegularWithLegend: Story<CheckboxProps> = (args) => {
  return (
    <Checkbox.Fieldset legend="Choose your options">
      <Checkbox.Item {...args} name="1" />
      <Checkbox.Item {...args} name="2" />
    </Checkbox.Fieldset>
  );
};

export const Task = Regular.bind({});
Task.args = {
  variant: 'task',
};

export const HasErrors = Regular.bind({});
HasErrors.args = {
  errors: {
    message: 'I am an error message.',
  },
};
`,locationsMap:{regular:{startLoc:{col:45,line:65},endLoc:{col:1,line:67},startBody:{col:45,line:65},endBody:{col:1,line:67}},"regular-with-legend":{startLoc:{col:55,line:69},endLoc:{col:1,line:76},startBody:{col:55,line:69},endBody:{col:1,line:76}},task:{startLoc:{col:45,line:65},endLoc:{col:1,line:67},startBody:{col:45,line:65},endBody:{col:1,line:67}},"has-errors":{startLoc:{col:45,line:65},endLoc:{col:1,line:67},startBody:{col:45,line:65},endBody:{col:1,line:67}}}},layout:"centered",badges:[i.STABLE],design:{type:"figma",url:""}},args:{variant:"regular",name:"option1",label:"Accept terms and conditions",disabled:!1},argTypes:{name:{table:{category:"Text"}},defaultChecked:{table:{category:"Modifiers"}},variant:{table:{category:"Modifiers"},options:["regular","task"],control:{type:"inline-radio"}},errors:{table:{category:"State"}},disabled:{table:{category:"State"}}},decorators:[e=>r(c,{align:"center",justify:"center",css:{h:"100vh",w:600},children:e()})]},t=o(e=>r(n.Item,{...e}),"Regular"),v=o(e=>l(n.Fieldset,{legend:"Choose your options",children:[r(n.Item,{...e,name:"1"}),r(n.Item,{...e,name:"2"})]}),"RegularWithLegend"),d=t.bind({});d.args={variant:"task"};const m=t.bind({});m.args={errors:{message:"I am an error message."}};const R=["Regular","RegularWithLegend","Task","HasErrors"];export{m as HasErrors,t as Regular,v as RegularWithLegend,d as Task,R as __namedExportsOrder,T as default};
//# sourceMappingURL=Checkbox.stories.3bafac91.js.map
