var i=Object.defineProperty;var t=(n,l)=>i(n,"name",{value:l,configurable:!0});import{R as a,S as r}from"./usePanel.be3af1e1.js";import{B as d}from"./storybook-addon-badges.esm.1b0bb0f8.js";import{j as o}from"./jsx-runtime.e7acc8f6.js";import"./index.3f7e1040.js";import"./index.2ab3c1e5.js";import"./iframe.ed58828a.js";import"./index.45f128b4.js";import"./es.date.to-primitive.87590581.js";import"./es.number.max-safe-integer.4a0044a0.js";import"./es.map.constructor.8fdb5bda.js";import"./index.c041fee6.js";import"./es.number.to-fixed.0a78dfff.js";import"./index-681e4b07.9765e5fa.js";import"./es.number.is-nan.5a177b11.js";const E={title:"Form/RadioGroup",component:a,parameters:{storySource:{source:`import { Story, Meta } from '@storybook/react';
import { RadioGroup, RadioGroupProps, Stack } from '@skala/react';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Form/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    name: 'options',
    legend: 'Choose an option',
    options: [
      {
        value: 'option1',
        label: 'Option 1',
      },
      {
        value: 'option2',
        label: 'Option 2',
      },
    ],
    // defaultValue: 'option1',
    variant: 'primary',
    disabled: false,
    fullWidth: false,
  },
  argTypes: {
    legend: {
      table: {
        category: 'Text',
      },
    },
    name: {
      table: {
        category: 'Text',
      },
    },
    value: {
      table: {
        category: 'Text',
      },
    },
    defaultValue: {
      table: {
        category: 'Text',
      },
    },
    options: {
      table: {
        category: 'Text',
      },
    },
    onChange: {
      table: {
        category: 'Function',
      },
    },
    variant: {
      table: {
        category: 'Modifiers',
      },
      options: ['primary', 'secondary', 'boxed'],
      control: {
        type: 'inline-radio',
      },
    },
    errors: {
      table: {
        category: 'State',
      },
    },
    fullWidth: {
      table: {
        category: 'Modifiers',
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
} as Meta<RadioGroupProps>;

export const Primary: Story<RadioGroupProps> = (args) => {
  // const [inputValue, setInputValue] = useState('');

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   return setInputValue(e.target.value);
  // };

  return (
    <Stack as="form" direction="column" fullWidth>
      <RadioGroup
        {...args}
        // value={inputValue}
        // onChange={(e) => handleChange(e)}
      />
    </Stack>
  );
};

export const Secondary = Primary.bind({});
Secondary.args = {
  variant: 'secondary',
  fullWidth: true,
};

export const SecondaryWithIcon = Primary.bind({});
SecondaryWithIcon.args = {
  variant: 'secondary',
  fullWidth: true,
  options: [
    {
      value: 'design',
      label: 'Design',
      icon: 'design',
    },
    {
      value: 'development',
      label: 'Development',
      icon: 'development',
    },
  ],
};

export const Boxed = Primary.bind({});
Boxed.args = {
  variant: 'boxed',
  fullWidth: true,
};

export const BoxedWithIcon = Primary.bind({});
BoxedWithIcon.args = {
  variant: 'boxed',
  fullWidth: true,
  options: [
    {
      value: 'design',
      label: 'Design',
      icon: 'design',
    },
    {
      value: 'development',
      label: 'Development',
      icon: 'development',
    },
    {
      value: 'development1',
      label: 'Development',
      icon: 'development',
    },
  ],
};

export const HasErrors = Primary.bind({});
HasErrors.args = {
  errors: {
    message: 'I am an error message.',
  },
};
`,locationsMap:{primary:{startLoc:{col:47,line:101},endLoc:{col:1,line:117},startBody:{col:47,line:101},endBody:{col:1,line:117}},secondary:{startLoc:{col:47,line:101},endLoc:{col:1,line:117},startBody:{col:47,line:101},endBody:{col:1,line:117}},"secondary-with-icon":{startLoc:{col:47,line:101},endLoc:{col:1,line:117},startBody:{col:47,line:101},endBody:{col:1,line:117}},boxed:{startLoc:{col:47,line:101},endLoc:{col:1,line:117},startBody:{col:47,line:101},endBody:{col:1,line:117}},"boxed-with-icon":{startLoc:{col:47,line:101},endLoc:{col:1,line:117},startBody:{col:47,line:101},endBody:{col:1,line:117}},"has-errors":{startLoc:{col:47,line:101},endLoc:{col:1,line:117},startBody:{col:47,line:101},endBody:{col:1,line:117}}}},layout:"centered",badges:[d.STABLE],design:{type:"figma",url:""}},args:{name:"options",legend:"Choose an option",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"}],variant:"primary",disabled:!1,fullWidth:!1},argTypes:{legend:{table:{category:"Text"}},name:{table:{category:"Text"}},value:{table:{category:"Text"}},defaultValue:{table:{category:"Text"}},options:{table:{category:"Text"}},onChange:{table:{category:"Function"}},variant:{table:{category:"Modifiers"},options:["primary","secondary","boxed"],control:{type:"inline-radio"}},errors:{table:{category:"State"}},fullWidth:{table:{category:"Modifiers"}},disabled:{table:{category:"State"}}},decorators:[n=>o(r,{align:"center",justify:"center",css:{h:"100vh",w:600},children:n()})]},e=t(n=>o(r,{as:"form",direction:"column",fullWidth:!0,children:o(a,{...n})}),"Primary"),s=e.bind({});s.args={variant:"secondary",fullWidth:!0};const c=e.bind({});c.args={variant:"secondary",fullWidth:!0,options:[{value:"design",label:"Design",icon:"design"},{value:"development",label:"Development",icon:"development"}]};const p=e.bind({});p.args={variant:"boxed",fullWidth:!0};const u=e.bind({});u.args={variant:"boxed",fullWidth:!0,options:[{value:"design",label:"Design",icon:"design"},{value:"development",label:"Development",icon:"development"},{value:"development1",label:"Development",icon:"development"}]};const m=e.bind({});m.args={errors:{message:"I am an error message."}};const R=["Primary","Secondary","SecondaryWithIcon","Boxed","BoxedWithIcon","HasErrors"];export{p as Boxed,u as BoxedWithIcon,m as HasErrors,e as Primary,s as Secondary,c as SecondaryWithIcon,R as __namedExportsOrder,E as default};
//# sourceMappingURL=RadioGroup.stories.cc315ebc.js.map
