var p=Object.defineProperty;var r=(e,a)=>p(e,"name",{value:a,configurable:!0});import{f as o,S as u}from"./usePanel.be3af1e1.js";import{B as g}from"./storybook-addon-badges.esm.1b0bb0f8.js";import{j as l,a as c}from"./jsx-runtime.e7acc8f6.js";import{aP as s}from"./iframe.ed58828a.js";import"./index.3f7e1040.js";import"./index.2ab3c1e5.js";import"./index.45f128b4.js";import"./es.date.to-primitive.87590581.js";import"./es.number.max-safe-integer.4a0044a0.js";import"./es.map.constructor.8fdb5bda.js";import"./index.c041fee6.js";import"./es.number.to-fixed.0a78dfff.js";import"./index-681e4b07.9765e5fa.js";import"./es.number.is-nan.5a177b11.js";const D={title:"Form/TextInput",component:o,parameters:{storySource:{source:`import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Stack, TextInput, TextInputProps } from '@skala/react';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { useState } from '@storybook/addons';

export default {
  title: 'Form/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    label: 'E-mail',
    name: 'email',
    type: 'email',
    variant: 'default',
    disabled: false,
    readOnly: false,
    loading: false,
    hasAction: false,
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
    actionLabel: {
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
} as Meta<TextInputProps>;

export const OverviewDefaultVariant: Story<TextInputProps> = (args) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setInputValue(e.target.value);
  };

  return (
    <Stack as="form" direction="column" fullWidth>
      <TextInput
        {...args}
        value={inputValue}
        onChange={(e) => handleChange(e)}
      />
      <TextInput
        {...args}
        placeholder="Your email"
        value={inputValue}
        onChange={(e) => handleChange(e)}
      />
      <TextInput
        {...args}
        placeholder="Your email"
        icon="mail"
        value={inputValue}
        onChange={(e) => handleChange(e)}
      />
      <TextInput
        {...args}
        placeholder="Your email"
        addon="Addon"
        value={inputValue}
        onChange={(e) => handleChange(e)}
      />
      <TextInput
        {...args}
        placeholder="Your email"
        hasAction
        value={inputValue}
        onChange={(e) => handleChange(e)}
        onAction={() => alert('E-mail settings')}
      />
    </Stack>
  );
};

export const OverviewTableVariant: Story<TextInputProps> = (args) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setInputValue(e.target.value);
  };

  return (
    <Stack direction="column" fullWidth>
      <TextInput
        {...args}
        placeholder="Your email"
        value={inputValue}
        onChange={(e) => handleChange(e)}
        variant="table"
      />

      <TextInput
        {...args}
        placeholder="Your email"
        addon="Addon"
        value={inputValue}
        onChange={(e) => handleChange(e)}
        variant="table"
      />
    </Stack>
  );
};

const States: Story<TextInputProps> = (args) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setInputValue(e.target.value);
  };

  return (
    <Stack direction="column" fullWidth>
      <TextInput
        {...args}
        placeholder="Your email"
        icon="mail"
        value={inputValue}
        onChange={(e) => handleChange(e)}
      />
      <TextInput
        {...args}
        placeholder="Your email"
        addon="Addon"
        value={inputValue}
        onChange={(e) => handleChange(e)}
      />
      <TextInput
        {...args}
        placeholder="Your email"
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

export const Default: Story<TextInputProps> = (args) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setInputValue(e.target.value);
  };

  return (
    <TextInput {...args} value={inputValue} onChange={(e) => handleChange(e)} />
  );
};
`,locationsMap:{"overview-default-variant":{startLoc:{col:61,line:111},endLoc:{col:1,line:155},startBody:{col:61,line:111},endBody:{col:1,line:155}},"overview-table-variant":{startLoc:{col:59,line:157},endLoc:{col:1,line:184},startBody:{col:59,line:157},endBody:{col:1,line:184}},loading:{startLoc:{col:38,line:186},endLoc:{col:1,line:219},startBody:{col:38,line:186},endBody:{col:1,line:219}},disabled:{startLoc:{col:38,line:186},endLoc:{col:1,line:219},startBody:{col:38,line:186},endBody:{col:1,line:219}},"read-only":{startLoc:{col:38,line:186},endLoc:{col:1,line:219},startBody:{col:38,line:186},endBody:{col:1,line:219}},"has-errors":{startLoc:{col:61,line:111},endLoc:{col:1,line:155},startBody:{col:61,line:111},endBody:{col:1,line:155}},default:{startLoc:{col:46,line:243},endLoc:{col:1,line:253},startBody:{col:46,line:243},endBody:{col:1,line:253}}}},layout:"centered",badges:[g.STABLE],design:{type:"figma",url:""}},args:{label:"E-mail",name:"email",type:"email",variant:"default",disabled:!1,readOnly:!1,loading:!1,hasAction:!1,errors:void 0},argTypes:{label:{table:{category:"Text"}},name:{table:{category:"Text"}},placeholder:{table:{category:"Text"}},actionLabel:{table:{category:"Text"}},type:{table:{category:"Modifiers"}},variant:{table:{category:"Modifiers"},options:["default","table"],control:{type:"inline-radio"}},hasAction:{table:{category:"Modifiers"}},actionIcon:{table:{category:"Modifiers"}},onAction:{table:{category:"Function"}},errors:{table:{category:"Modifiers"}},disabled:{table:{category:"State"}},loading:{table:{category:"State"}},readOnly:{table:{category:"State"}}},decorators:[e=>l(u,{align:"center",justify:"center",css:{h:"100vh",w:350},children:e()})]},h=r(e=>{const[a,i]=s(""),t=r(n=>i(n.target.value),"handleChange");return c(u,{as:"form",direction:"column",fullWidth:!0,children:[l(o,{...e,value:a,onChange:n=>t(n)}),l(o,{...e,placeholder:"Your email",value:a,onChange:n=>t(n)}),l(o,{...e,placeholder:"Your email",icon:"mail",value:a,onChange:n=>t(n)}),l(o,{...e,placeholder:"Your email",addon:"Addon",value:a,onChange:n=>t(n)}),l(o,{...e,placeholder:"Your email",hasAction:!0,value:a,onChange:n=>t(n),onAction:()=>alert("E-mail settings")})]})},"OverviewDefaultVariant"),w=r(e=>{const[a,i]=s(""),t=r(n=>i(n.target.value),"handleChange");return c(u,{direction:"column",fullWidth:!0,children:[l(o,{...e,placeholder:"Your email",value:a,onChange:n=>t(n),variant:"table"}),l(o,{...e,placeholder:"Your email",addon:"Addon",value:a,onChange:n=>t(n),variant:"table"})]})},"OverviewTableVariant"),d=r(e=>{const[a,i]=s(""),t=r(n=>i(n.target.value),"handleChange");return c(u,{direction:"column",fullWidth:!0,children:[l(o,{...e,placeholder:"Your email",icon:"mail",value:a,onChange:n=>t(n)}),l(o,{...e,placeholder:"Your email",addon:"Addon",value:a,onChange:n=>t(n)}),l(o,{...e,placeholder:"Your email",hasAction:!0,value:a,onChange:n=>t(n),onAction:()=>alert("E-mail settings")})]})},"States"),m=d.bind({});m.args={loading:!0};const y=d.bind({});y.args={disabled:!0};const b=d.bind({});b.args={readOnly:!0};const v=h.bind({});v.args={errors:{message:"I am an error message."}};const R=r(e=>{const[a,i]=s(""),t=r(n=>i(n.target.value),"handleChange");return l(o,{...e,value:a,onChange:n=>t(n)})},"Default"),H=["OverviewDefaultVariant","OverviewTableVariant","Loading","Disabled","ReadOnly","HasErrors","Default"];export{R as Default,y as Disabled,v as HasErrors,m as Loading,h as OverviewDefaultVariant,w as OverviewTableVariant,b as ReadOnly,H as __namedExportsOrder,D as default};
//# sourceMappingURL=TextInput.stories.48f39818.js.map
