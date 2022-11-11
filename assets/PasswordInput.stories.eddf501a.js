var d=Object.defineProperty;var a=(e,n)=>d(e,"name",{value:n,configurable:!0});import{P as r,S as c}from"./usePanel.be3af1e1.js";import{B as p}from"./storybook-addon-badges.esm.1b0bb0f8.js";import{r as i}from"./index.2ab3c1e5.js";import{j as o}from"./jsx-runtime.e7acc8f6.js";import"./index.3f7e1040.js";import"./index.45f128b4.js";import"./iframe.ed58828a.js";import"./es.date.to-primitive.87590581.js";import"./es.number.max-safe-integer.4a0044a0.js";import"./es.map.constructor.8fdb5bda.js";import"./index.c041fee6.js";import"./es.number.to-fixed.0a78dfff.js";import"./index-681e4b07.9765e5fa.js";import"./es.number.is-nan.5a177b11.js";const E={title:"Form/PasswordInput",component:r,parameters:{storySource:{source:`import { Story, Meta } from '@storybook/react';
import { PasswordInput, PasswordInputProps, Stack } from '@skala/react';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { useState } from 'react';

export default {
  title: 'Form/PasswordInput',
  component: PasswordInput,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    label: 'Password',
    name: 'password',
    variant: 'default',
    disabled: false,
    readOnly: false,
    loading: false,
    errors: undefined,
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
    errors: {
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
    readOnly: {
      table: {
        category: 'State',
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
} as Meta<PasswordInputProps>;

export const Default: Story<PasswordInputProps> = (args) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    return setInputValue(e.currentTarget.value);
  };

  return (
    <PasswordInput
      {...args}
      value={inputValue}
      onChange={(e) => handleChange(e)}
    />
  );
};
`,locationsMap:{default:{startLoc:{col:50,line:74},endLoc:{col:1,line:88},startBody:{col:50,line:74},endBody:{col:1,line:88}}}},layout:"centered",badges:[p.STABLE],design:{type:"figma",url:""}},args:{label:"Password",name:"password",variant:"default",disabled:!1,readOnly:!1,loading:!1,errors:void 0},argTypes:{label:{table:{category:"Text"}},name:{table:{category:"Text"}},placeholder:{table:{category:"Text"}},errors:{table:{category:"Modifiers"}},disabled:{table:{category:"State"}},loading:{table:{category:"State"}},readOnly:{table:{category:"State"}}},decorators:[e=>o(c,{align:"center",justify:"center",css:{h:"100vh",w:350},children:e()})]},k=a(e=>{const[n,s]=i.exports.useState(""),l=a(t=>s(t.currentTarget.value),"handleChange");return o(r,{...e,value:n,onChange:t=>l(t)})},"Default"),D=["Default"];export{k as Default,D as __namedExportsOrder,E as default};
//# sourceMappingURL=PasswordInput.stories.eddf501a.js.map
