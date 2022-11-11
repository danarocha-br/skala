var d=Object.defineProperty;var l=(t,e)=>d(t,"name",{value:e,configurable:!0});import{D as a,S as s}from"./usePanel.be3af1e1.js";import{B as i}from"./storybook-addon-badges.esm.1b0bb0f8.js";import{r as p}from"./index.2ab3c1e5.js";import{j as r,a as c}from"./jsx-runtime.e7acc8f6.js";import"./index.3f7e1040.js";import"./index.45f128b4.js";import"./iframe.ed58828a.js";import"./es.date.to-primitive.87590581.js";import"./es.number.max-safe-integer.4a0044a0.js";import"./es.map.constructor.8fdb5bda.js";import"./index.c041fee6.js";import"./es.number.to-fixed.0a78dfff.js";import"./index-681e4b07.9765e5fa.js";import"./es.number.is-nan.5a177b11.js";const x={title:"Form/DateInput",component:a,parameters:{storySource:{source:`import { Story, Meta } from '@storybook/react';
import { DateInput, DateInputProps, Stack } from '@skala/react';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { useState } from 'react';

export default {
  title: 'Form/DateInput',
  component: DateInput,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    label: 'Start date',
    name: 'start_date',
    variant: 'default',
    locale: 'pt-BR',
    dateFormat: 'dd/MM/yyyy',
    disabled: false,
    readOnly: false,
    loading: false,
    errors: undefined,
    isClearable: true,
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
} as Meta<DateInputProps>;

export const OverviewDefaultVariant: Story<DateInputProps> = (args) => {
  const [inputValue, setInputValue] = useState(new Date());

  const handleChange = (e) => {
    return setInputValue(e.target.value);
  };

  return (
    <Stack direction="column" fullWidth>
      <DateInput
        {...args}
        value={inputValue}
        selected={inputValue}
        onChange={(e) => handleChange(e)}
      />
      <DateInput
        {...args}
        placeholder="Choose a date"
        value={inputValue}
        selected={inputValue}
        onChange={(e) => handleChange(e)}
      />
      <DateInput
        {...args}
        placeholder="Choose a date"
        icon="calendar"
        value={inputValue}
        selected={inputValue}
        onChange={(e) => handleChange(e)}
      />
    </Stack>
  );
};
`,locationsMap:{"overview-default-variant":{startLoc:{col:61,line:40},endLoc:{col:1,line:72},startBody:{col:61,line:40},endBody:{col:1,line:72}}}},layout:"centered",badges:[i.STABLE],design:{type:"figma",url:""}},args:{label:"Start date",name:"start_date",variant:"default",locale:"pt-BR",dateFormat:"dd/MM/yyyy",disabled:!1,readOnly:!1,loading:!1,errors:void 0,isClearable:!0},decorators:[t=>r(s,{align:"center",justify:"center",css:{h:"100vh",w:350},children:t()})]},M=l(t=>{const[e,u]=p.exports.useState(new Date),o=l(n=>u(n.target.value),"handleChange");return c(s,{direction:"column",fullWidth:!0,children:[r(a,{...t,value:e,selected:e,onChange:n=>o(n)}),r(a,{...t,placeholder:"Choose a date",value:e,selected:e,onChange:n=>o(n)}),r(a,{...t,placeholder:"Choose a date",icon:"calendar",value:e,selected:e,onChange:n=>o(n)})]})},"OverviewDefaultVariant"),E=["OverviewDefaultVariant"];export{M as OverviewDefaultVariant,E as __namedExportsOrder,x as default};
//# sourceMappingURL=DateInput.stories.2bccdef2.js.map
