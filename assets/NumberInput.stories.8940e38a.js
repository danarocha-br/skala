var p=Object.defineProperty;var l=(e,t)=>p(e,"name",{value:t,configurable:!0});import{m as o,S as s}from"./usePanel.be3af1e1.js";import{B as g}from"./storybook-addon-badges.esm.1b0bb0f8.js";import{r as i}from"./index.2ab3c1e5.js";import{j as r,a as u}from"./jsx-runtime.e7acc8f6.js";import"./index.3f7e1040.js";import"./index.45f128b4.js";import"./iframe.ed58828a.js";import"./es.date.to-primitive.87590581.js";import"./es.number.max-safe-integer.4a0044a0.js";import"./es.map.constructor.8fdb5bda.js";import"./index.c041fee6.js";import"./es.number.to-fixed.0a78dfff.js";import"./index-681e4b07.9765e5fa.js";import"./es.number.is-nan.5a177b11.js";const D={title:"Form/NumberInput",component:o,parameters:{storySource:{source:`import { Story, Meta } from '@storybook/react';
import { NumberInput, NumberInputProps, Stack } from '@skala/react';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { useState } from 'react';

export default {
  title: 'Form/NumberInput',
  component: NumberInput,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    label: 'Total cost',
    name: 'cost',
    type: 'text',
    variant: 'default',
    disabled: false,
    readOnly: false,
    loading: false,
    hasAction: false,
    errors: undefined,
    allowNegative: false,
    decimalSeparator: ',',
    decimalScale: 2,
    prefix: '$',
    thousandSeparator: '.',
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
    actionLabel: {
      table: {
        category: 'Text',
      },
    },
    allowNegative: {
      table: {
        category: 'Text',
      },
    },
    prefix: {
      table: {
        category: 'Text',
      },
    },
    thousandSeparator: {
      table: {
        category: 'Text',
      },
    },
    decimalScale: {
      table: {
        category: 'Text',
      },
    },
    type: {
      table: {
        category: 'Modifiers',
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
    hasAction: {
      table: {
        category: 'Modifiers',
      },
    },
    actionIcon: {
      table: {
        category: 'Modifiers',
      },
    },
    onAction: {
      table: {
        category: 'Function',
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
} as Meta<NumberInputProps>;

export const OverviewDefaultVariant: Story<NumberInputProps> = (args) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setInputValue(e.target.value);
  };

  return (
    <Stack direction="column" fullWidth>
      <NumberInput
        {...args}
        value={inputValue}
        onChange={(e) => handleChange(e)}
      />
      <NumberInput
        {...args}
        placeholder="Enter cost"
        value={inputValue}
        onChange={(e) => handleChange(e)}
      />
      <NumberInput
        {...args}
        placeholder="Enter cost"
        icon="invoice"
        value={inputValue}
        onChange={(e) => handleChange(e)}
      />
      <NumberInput
        {...args}
        placeholder="Enter cost"
        addon="Addon"
        value={inputValue}
        onChange={(e) => handleChange(e)}
      />
      <NumberInput
        {...args}
        placeholder="Enter cost"
        hasAction
        value={inputValue}
        onChange={(e) => handleChange(e)}
        onAction={() => alert('Cost settings')}
      />
    </Stack>
  );
};

export const OverviewTableVariant: Story<NumberInputProps> = (args) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setInputValue(e.target.value);
  };

  return (
    <Stack direction="column" fullWidth>
      <NumberInput
        {...args}
        placeholder="Enter cost"
        value={inputValue}
        onChange={(e) => handleChange(e)}
        variant="table"
      />

      <NumberInput
        {...args}
        placeholder="Enter cost"
        addon="Addon"
        value={inputValue}
        onChange={(e) => handleChange(e)}
        variant="table"
      />
    </Stack>
  );
};

const States: Story<NumberInputProps> = (args) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setInputValue(e.target.value);
  };

  return (
    <Stack direction="column" fullWidth>
      <NumberInput
        {...args}
        placeholder="Enter cost"
        icon="mail"
        value={inputValue}
        onChange={(e) => handleChange(e)}
      />
      <NumberInput
        {...args}
        placeholder="Enter cost"
        addon="Addon"
        value={inputValue}
        onChange={(e) => handleChange(e)}
      />
      <NumberInput
        {...args}
        placeholder="Enter cost"
        hasAction
        value={inputValue}
        onChange={(e) => handleChange(e)}
        onAction={() => alert('E-mail settings')}
      />
    </Stack>
  );
};

export const Loading = States.bind({});
Loading.args = {
  loading: true,
};

export const Disabled = States.bind({});
Disabled.args = {
  disabled: true,
};

export const ReadOnly = States.bind({});
ReadOnly.args = {
  readOnly: true,
};

export const HasErrors = OverviewDefaultVariant.bind({});
HasErrors.args = {
  errors: {
    message: 'I am an error message.',
  },
};

export const Default: Story<NumberInputProps> = (args) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setInputValue(e.target.value);
  };

  return (
    <NumberInput
      {...args}
      value={inputValue}
      onChange={(e) => handleChange(e)}
    />
  );
};
`,locationsMap:{"overview-default-variant":{startLoc:{col:63,line:135},endLoc:{col:1,line:179},startBody:{col:63,line:135},endBody:{col:1,line:179}},"overview-table-variant":{startLoc:{col:61,line:181},endLoc:{col:1,line:208},startBody:{col:61,line:181},endBody:{col:1,line:208}},loading:{startLoc:{col:40,line:210},endLoc:{col:1,line:243},startBody:{col:40,line:210},endBody:{col:1,line:243}},disabled:{startLoc:{col:40,line:210},endLoc:{col:1,line:243},startBody:{col:40,line:210},endBody:{col:1,line:243}},"read-only":{startLoc:{col:40,line:210},endLoc:{col:1,line:243},startBody:{col:40,line:210},endBody:{col:1,line:243}},"has-errors":{startLoc:{col:63,line:135},endLoc:{col:1,line:179},startBody:{col:63,line:135},endBody:{col:1,line:179}},default:{startLoc:{col:48,line:267},endLoc:{col:1,line:281},startBody:{col:48,line:267},endBody:{col:1,line:281}}}},layout:"centered",badges:[g.STABLE],design:{type:"figma",url:""}},args:{label:"Total cost",name:"cost",type:"text",variant:"default",disabled:!1,readOnly:!1,loading:!1,hasAction:!1,errors:void 0,allowNegative:!1,decimalSeparator:",",decimalScale:2,prefix:"$",thousandSeparator:"."},argTypes:{label:{table:{category:"Text"}},name:{table:{category:"Text"}},placeholder:{table:{category:"Text"}},actionLabel:{table:{category:"Text"}},allowNegative:{table:{category:"Text"}},prefix:{table:{category:"Text"}},thousandSeparator:{table:{category:"Text"}},decimalScale:{table:{category:"Text"}},type:{table:{category:"Modifiers"}},variant:{table:{category:"Modifiers"},options:["default","table"],control:{type:"inline-radio"}},hasAction:{table:{category:"Modifiers"}},actionIcon:{table:{category:"Modifiers"}},onAction:{table:{category:"Function"}},errors:{table:{category:"Modifiers"}},disabled:{table:{category:"State"}},loading:{table:{category:"State"}},readOnly:{table:{category:"State"}}},decorators:[e=>r(s,{align:"center",justify:"center",css:{h:"100vh",w:350},children:e()})]},h=l(e=>{const[t,c]=i.exports.useState(""),a=l(n=>c(n.target.value),"handleChange");return u(s,{direction:"column",fullWidth:!0,children:[r(o,{...e,value:t,onChange:n=>a(n)}),r(o,{...e,placeholder:"Enter cost",value:t,onChange:n=>a(n)}),r(o,{...e,placeholder:"Enter cost",icon:"invoice",value:t,onChange:n=>a(n)}),r(o,{...e,placeholder:"Enter cost",addon:"Addon",value:t,onChange:n=>a(n)}),r(o,{...e,placeholder:"Enter cost",hasAction:!0,value:t,onChange:n=>a(n),onAction:()=>alert("Cost settings")})]})},"OverviewDefaultVariant"),k=l(e=>{const[t,c]=i.exports.useState(""),a=l(n=>c(n.target.value),"handleChange");return u(s,{direction:"column",fullWidth:!0,children:[r(o,{...e,placeholder:"Enter cost",value:t,onChange:n=>a(n),variant:"table"}),r(o,{...e,placeholder:"Enter cost",addon:"Addon",value:t,onChange:n=>a(n),variant:"table"})]})},"OverviewTableVariant"),d=l(e=>{const[t,c]=i.exports.useState(""),a=l(n=>c(n.target.value),"handleChange");return u(s,{direction:"column",fullWidth:!0,children:[r(o,{...e,placeholder:"Enter cost",icon:"mail",value:t,onChange:n=>a(n)}),r(o,{...e,placeholder:"Enter cost",addon:"Addon",value:t,onChange:n=>a(n)}),r(o,{...e,placeholder:"Enter cost",hasAction:!0,value:t,onChange:n=>a(n),onAction:()=>alert("E-mail settings")})]})},"States"),b=d.bind({});b.args={loading:!0};const m=d.bind({});m.args={disabled:!0};const y=d.bind({});y.args={readOnly:!0};const v=h.bind({});v.args={errors:{message:"I am an error message."}};const H=l(e=>{const[t,c]=i.exports.useState(""),a=l(n=>c(n.target.value),"handleChange");return r(o,{...e,value:t,onChange:n=>a(n)})},"Default"),R=["OverviewDefaultVariant","OverviewTableVariant","Loading","Disabled","ReadOnly","HasErrors","Default"];export{H as Default,m as Disabled,v as HasErrors,b as Loading,h as OverviewDefaultVariant,k as OverviewTableVariant,y as ReadOnly,R as __namedExportsOrder,D as default};
//# sourceMappingURL=NumberInput.stories.8940e38a.js.map
