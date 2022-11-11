var p=Object.defineProperty;var n=(e,t)=>p(e,"name",{value:t,configurable:!0});import{r as o}from"./index.2ab3c1e5.js";import{F as s,S as c,f as u,P as d}from"./usePanel.be3af1e1.js";import{B as g}from"./storybook-addon-badges.esm.1b0bb0f8.js";import{j as a,a as f}from"./jsx-runtime.e7acc8f6.js";import"./iframe.ed58828a.js";import"./index.3f7e1040.js";import"./index.45f128b4.js";import"./es.date.to-primitive.87590581.js";import"./es.number.max-safe-integer.4a0044a0.js";import"./es.map.constructor.8fdb5bda.js";import"./index.c041fee6.js";import"./es.number.to-fixed.0a78dfff.js";import"./index-681e4b07.9765e5fa.js";import"./es.number.is-nan.5a177b11.js";const A={title:"Form/Form",component:s,parameters:{storySource:{source:`import { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { Form, FormProps, PasswordInput, Stack, TextInput } from '@skala/react';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Form/Form',
  component: Form,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {},
  decorators: [
    (Story) => {
      return (
        <Stack align="center" justify="center" css={{ h: '100vh', w: 400 }}>
          {Story()}
        </Stack>
      );
    },
  ],
} as Meta<FormProps>;

export const Default: Story<FormProps> = (args) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Form {...args}>
      <TextInput
        name="email"
        label="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <PasswordInput
        name="name"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </Form>
  );
};
`,locationsMap:{default:{startLoc:{col:41,line:29},endLoc:{col:1,line:49},startBody:{col:41,line:29},endBody:{col:1,line:49}}}},layout:"centered",badges:[g.STABLE],design:{type:"figma",url:""}},args:{},decorators:[e=>a(c,{align:"center",justify:"center",css:{h:"100vh",w:400},children:e()})]},T=n(e=>{const[t,m]=o.exports.useState(""),[l,i]=o.exports.useState("");return f(s,{...e,children:[a(u,{name:"email",label:"E-mail",value:t,onChange:r=>m(r.target.value)}),a(d,{name:"name",label:"Password",value:l,onChange:r=>i(r.target.value)})]})},"Default"),C=["Default"];export{T as Default,C as __namedExportsOrder,A as default};
//# sourceMappingURL=Form.stories.26e3b31a.js.map
