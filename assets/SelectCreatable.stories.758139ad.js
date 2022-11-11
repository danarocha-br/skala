var m=Object.defineProperty;var a=(e,n)=>m(e,"name",{value:n,configurable:!0});import{r as i,S,F as O}from"./usePanel.be3af1e1.js";import{B as L}from"./storybook-addon-badges.esm.1b0bb0f8.js";import{r}from"./index.2ab3c1e5.js";import{j as s,a as M}from"./jsx-runtime.e7acc8f6.js";import"./index.3f7e1040.js";import"./index.45f128b4.js";import"./iframe.ed58828a.js";import"./es.date.to-primitive.87590581.js";import"./es.number.max-safe-integer.4a0044a0.js";import"./es.map.constructor.8fdb5bda.js";import"./index.c041fee6.js";import"./es.number.to-fixed.0a78dfff.js";import"./index-681e4b07.9765e5fa.js";import"./es.number.is-nan.5a177b11.js";const q={title:"Form/SelectCreatable",component:i,parameters:{storySource:{source:`import { Story, Meta } from '@storybook/react';
import {
  Form,
  SelectCreatable,
  SelectCreatableProps,
  Stack,
} from '@skala/react';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { useState } from 'react';

export default {
  title: 'Form/SelectCreatable',
  component: SelectCreatable,
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
    loadOptions: [
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
    loadOptions: {
      table: {
        category: 'Text',
      },
    },
    cacheOptions: {
      table: {
        category: 'Modifiers',
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
} as Meta<SelectCreatableProps>;

interface Option {
  readonly label: string;
  readonly value: string;
}

const createOption = (label: string) => ({
  label,
  value: label.toLowerCase().replace(/\\W/g, ''),
});

const defaultOptions = [
  createOption('One'),
  createOption('Two'),
  createOption('Three'),
];

export const Default: Story<SelectCreatableProps> = (args) => {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState(defaultOptions);
  const [value, setValue] = useState<Option | null>();

  const handleCreate = (inputValue: string) => {
    setIsLoading(true);
    setTimeout(() => {
      const newOption = createOption(inputValue);
      setIsLoading(false);
      setOptions((prev) => [...prev, newOption]);
      setValue(newOption);
    }, 1000);
  };

  return (
    <Form>
      <SelectCreatable {...args} disabled={isLoading} loading={isLoading} />
      <SelectCreatable
        {...args}
        icon="business"
        disabled={isLoading}
        loading={isLoading}
        onChange={(newValue: Option) => setValue(newValue)}
        onCreateOption={handleCreate}
        value={value}
        cacheOptions
        // defaultOptions
        loadOptions={options}
      />
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
`,locationsMap:{default:{startLoc:{col:52,line:136},endLoc:{col:1,line:168},startBody:{col:52,line:136},endBody:{col:1,line:168}},"is-multi":{startLoc:{col:52,line:136},endLoc:{col:1,line:168},startBody:{col:52,line:136},endBody:{col:1,line:168}},"table-variant":{startLoc:{col:52,line:136},endLoc:{col:1,line:168},startBody:{col:52,line:136},endBody:{col:1,line:168}},"disabled-state":{startLoc:{col:52,line:136},endLoc:{col:1,line:168},startBody:{col:52,line:136},endBody:{col:1,line:168}},"loading-state":{startLoc:{col:52,line:136},endLoc:{col:1,line:168},startBody:{col:52,line:136},endBody:{col:1,line:168}},"has-error":{startLoc:{col:52,line:136},endLoc:{col:1,line:168},startBody:{col:52,line:136},endBody:{col:1,line:168}}}},layout:"centered",badges:[L.STABLE],design:{type:"figma",url:""}},args:{name:"select",label:"Select an item",variant:"default",isMulti:!1,disabled:!1,loading:!1,isSearchable:!0,isClearable:!0,noOptionMessage:"No options found",placeholder:"Select one option",loadOptions:[{label:"Option 1",value:"Option 1"},{label:"Option 2",value:"Option 2"}]},argTypes:{label:{table:{category:"Text"}},name:{table:{category:"Text"}},placeholder:{table:{category:"Text"}},variant:{table:{category:"Modifiers"},options:["default","table"],control:{type:"inline-radio"}},errors:{table:{category:"State"}},disabled:{table:{category:"State"}},loading:{table:{category:"State"}},isMulti:{table:{category:"Modifiers"}},isSearchable:{table:{category:"Modifiers"}},isClearable:{table:{category:"Modifiers"}},noOptionMessage:{table:{category:"Modifiers"}},loadOptions:{table:{category:"Text"}},cacheOptions:{table:{category:"Modifiers"}}},decorators:[e=>s(S,{align:"center",justify:"center",css:{h:"100vh",w:350},children:e()})]},o=a(e=>({label:e,value:e.toLowerCase().replace(/\W/g,"")}),"createOption"),h=[o("One"),o("Two"),o("Three")],t=a(e=>{const[n,c]=r.exports.useState(!1),[b,g]=r.exports.useState(h),[u,d]=r.exports.useState(),y=a(l=>{c(!0),setTimeout(()=>{const p=o(l);c(!1),g(f=>[...f,p]),d(p)},1e3)},"handleCreate");return M(O,{children:[s(i,{...e,disabled:n,loading:n}),s(i,{...e,icon:"business",disabled:n,loading:n,onChange:l=>d(l),onCreateOption:y,value:u,cacheOptions:!0,loadOptions:b})]})},"Default"),C=t.bind({});C.args={isMulti:!0};const v=t.bind({});v.args={variant:"table"};const x=t.bind({});x.args={disabled:!0};const T=t.bind({});T.args={loading:!0};const B=t.bind({});B.args={errors:{message:"I am an error message."}};const z=["Default","isMulti","TableVariant","DisabledState","LoadingState","HasError"];export{t as Default,x as DisabledState,B as HasError,T as LoadingState,v as TableVariant,z as __namedExportsOrder,q as default,C as isMulti};
//# sourceMappingURL=SelectCreatable.stories.758139ad.js.map
