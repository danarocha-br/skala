var v=Object.defineProperty;var a=(o,l)=>v(o,"name",{value:l,configurable:!0});import{j as e,e as s,I as d,S as h,k as r,T as i,B as m,l as g,a as p}from"./usePanel.be3af1e1.js";import{B as x}from"./storybook-addon-badges.esm.1b0bb0f8.js";import{r as f}from"./index.2ab3c1e5.js";import{a as t,F as c,j as n}from"./jsx-runtime.e7acc8f6.js";import"./index.3f7e1040.js";import"./index.45f128b4.js";import"./iframe.ed58828a.js";import"./es.date.to-primitive.87590581.js";import"./es.number.max-safe-integer.4a0044a0.js";import"./es.map.constructor.8fdb5bda.js";import"./index.c041fee6.js";import"./es.number.to-fixed.0a78dfff.js";import"./index-681e4b07.9765e5fa.js";import"./es.number.is-nan.5a177b11.js";const z={title:"Navigation/Navigation",component:e.Wrapper,parameters:{storySource:{source:`import { Meta, Story } from '@storybook/react';
import {
  Dropdown,
  Navigation,
  NavigationProps,
  Stack,
  Icon,
  Tooltip,
  Button,
  Shortcut,
  Text,
  Box,
} from '@skala/react';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { useState } from 'react';

export default {
  title: 'Navigation/Navigation',
  component: Navigation.Wrapper,
  parameters: {
    layout: 'fullscreen',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    user_email: 'hello@danarocha.com',
    user_name: 'Dana Rocha',
    user_imageURL: '',
    children: (
      <>
        <Navigation.Item
          label="Projects"
          icon="project"
          href="/projects"
          shortcut="\u2318 + P"
        />
        <Navigation.Item
          label="Invoices"
          icon="invoice"
          href="/invoices"
          shortcut="\u2318 + I"
          isActive
        />
        <Navigation.Item label="Clients" icon="user" href="/clients" />
        <Navigation.Item
          label="Special"
          icon="development"
          href="/special"
          disabled
        />
      </>
    ),
    userMenu: (
      <>
        <Dropdown.Item textValue="Configura\xE7\xF5es">
          <Icon name="settings" label="settings" css={{ mr: '$spacing-2' }} />
          <a href="/">
            Configura\xE7\xF5es <Dropdown.RightSlot>\u2318 C</Dropdown.RightSlot>
          </a>
        </Dropdown.Item>
        <Dropdown.Item textValue="Prefer\xEAncias">
          <Icon name="settings" label="settings" css={{ mr: '$spacing-2' }} />
          <a href="/">
            Prefer\xEAncias <Dropdown.RightSlot>\u2318 P</Dropdown.RightSlot>
          </a>
        </Dropdown.Item>
        <Dropdown.Separator />
        <Dropdown.Item textValue="Sair">
          <a href="/">Sair</a>
        </Dropdown.Item>
      </>
    ),
  },
  argTypes: {
    children: {
      table: {
        category: 'Modifiers',
      },
    },
    userMenu: {
      table: {
        category: 'Modifiers',
      },
    },
    css: {
      table: {
        category: 'Modifiers',
      },
    },
    user_name: {
      table: {
        category: 'Text',
      },
    },
    user_email: {
      table: {
        category: 'Text',
      },
    },
    user_imageURL: {
      table: {
        category: 'Text',
      },
    },
  },
  decorators: [
    (Story) => (
      <Stack gap="8" align="center" css={{ h: '100vh' }}>
        {Story()}
      </Stack>
    ),
  ],
} as Meta<NavigationProps>;

export const Example: Story<NavigationProps> = (args) => (
  <Navigation.Wrapper {...args} />
);

export const WithFooter: Story<NavigationProps> = (args) => (
  <Navigation.Wrapper {...args} />
);
WithFooter.args = {
  footer: (
    <>
      <Tooltip content="Made with \u2764\uFE0F by Compasso">
        <Text color="body-lighter" css={{ ml: '$spacing-3' }}>
          C
        </Text>
      </Tooltip>
      <Box css={{ d: 'inline-flex', mr: '$spacing-2', gap: '$spacing-2' }}>
        <Tooltip content="Configura\xE7oes" slot={<Shortcut shortcut="\u2318 C" />}>
          <Button label="settings" variant="icon" icon="settings" size="sm" />
        </Tooltip>

        <Tooltip content="Ajuda / Feedback" slot={<Shortcut shortcut="\u2318 H" />}>
          <Button label="help" variant="icon" icon="help" size="sm" />
        </Tooltip>
      </Box>
    </>
  ),
};

export const WithNavigationToggle: Story<NavigationProps> = (args) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <Navigation.Wrapper
      {...args}
      isNavigationOpen={isOpen}
      onNavigationOpenChange={() => setIsOpen(!isOpen)}
      footer={
        <>
          <Tooltip content="Made with \u2764\uFE0F by Compasso">
            <Text color="body-lighter" css={{ ml: '$spacing-3' }}>
              C
            </Text>
          </Tooltip>
          <Box css={{ d: 'inline-flex', mr: '$spacing-2', gap: '$spacing-2' }}>
            <Tooltip content="Configura\xE7oes" slot={<Shortcut shortcut="\u2318 C" />}>
              <Button
                label="settings"
                variant="icon"
                icon="settings"
                size="sm"
              />
            </Tooltip>

            <Tooltip
              content="Ajuda / Feedback"
              slot={<Shortcut shortcut="\u2318 H" />}
            >
              <Button label="help" variant="icon" icon="help" size="sm" />
            </Tooltip>
          </Box>
        </>
      }
    />
  );
};

export const ExampleLoading: Story<NavigationProps> = (args) => (
  <Navigation.Wrapper {...args} />
);
ExampleLoading.args = {
  loading: true,
  children: (
    <>
      <Navigation.Item
        label="Projects"
        icon="project"
        href="/projects"
        shortcut="\u2318 + P"
        loading
      />
      <Navigation.Item
        label="Invoices"
        icon="invoice"
        href="/invoices"
        shortcut="\u2318 + I"
        isActive
        loading
      />
      <Navigation.Item label="Clients" icon="user" href="/clients" loading />
    </>
  ),
};

export const NavigationItem: Story<NavigationProps> = () => (
  <Stack
    direction="column"
    justify="center"
    css={{ h: '100vh', w: '100%', px: 380 }}
  >
    <Text size="xs" css={{ ml: '$spacing-3' }}>
      Regular Active
    </Text>
    <Navigation.Item
      icon="invoice"
      label="Invoices"
      href="/invoices"
      isActive
    />
    <Text size="xs" css={{ ml: '$spacing-3' }}>
      Regular
    </Text>
    <Navigation.Item icon="invoice" label="Invoices" href="/invoices" />

    <Text size="xs" css={{ ml: '$spacing-3' }}>
      With Shortcut
    </Text>
    <Navigation.Item
      icon="invoice"
      label="Invoices"
      href="/invoices"
      shortcut="cmd + p"
    />

    <Text size="xs" css={{ ml: '$spacing-3' }}>
      Disabled
    </Text>
    <Navigation.Item
      icon="invoice"
      label="Invoices"
      href="/invoices"
      shortcut="cmd + p"
      disabled
    />
    <Text size="xs" css={{ ml: '$spacing-3' }}>
      Loading
    </Text>
    <Navigation.Item
      icon="invoice"
      label="Invoices"
      href="/invoices"
      shortcut="cmd + p"
      loading
    />
  </Stack>
);
`,locationsMap:{example:{startLoc:{col:47,line:118},endLoc:{col:1,line:120},startBody:{col:47,line:118},endBody:{col:1,line:120}},"with-footer":{startLoc:{col:50,line:122},endLoc:{col:1,line:124},startBody:{col:50,line:122},endBody:{col:1,line:124}},"with-navigation-toggle":{startLoc:{col:60,line:146},endLoc:{col:1,line:182},startBody:{col:60,line:146},endBody:{col:1,line:182}},"example-loading":{startLoc:{col:54,line:184},endLoc:{col:1,line:186},startBody:{col:54,line:184},endBody:{col:1,line:186}},"navigation-item":{startLoc:{col:54,line:211},endLoc:{col:1,line:262},startBody:{col:54,line:211},endBody:{col:1,line:262}}}},layout:"fullscreen",badges:[x.STABLE],design:{type:"figma",url:""}},args:{user_email:"hello@danarocha.com",user_name:"Dana Rocha",user_imageURL:"",children:t(c,{children:[n(e.Item,{label:"Projects",icon:"project",href:"/projects",shortcut:"\u2318 + P"}),n(e.Item,{label:"Invoices",icon:"invoice",href:"/invoices",shortcut:"\u2318 + I",isActive:!0}),n(e.Item,{label:"Clients",icon:"user",href:"/clients"}),n(e.Item,{label:"Special",icon:"development",href:"/special",disabled:!0})]}),userMenu:t(c,{children:[t(s.Item,{textValue:"Configura\xE7\xF5es",children:[n(d,{name:"settings",label:"settings",css:{mr:"$spacing-2"}}),t("a",{href:"/",children:["Configura\xE7\xF5es ",n(s.RightSlot,{children:"\u2318 C"})]})]}),t(s.Item,{textValue:"Prefer\xEAncias",children:[n(d,{name:"settings",label:"settings",css:{mr:"$spacing-2"}}),t("a",{href:"/",children:["Prefer\xEAncias ",n(s.RightSlot,{children:"\u2318 P"})]})]}),n(s.Separator,{}),n(s.Item,{textValue:"Sair",children:n("a",{href:"/",children:"Sair"})})]})},argTypes:{children:{table:{category:"Modifiers"}},userMenu:{table:{category:"Modifiers"}},css:{table:{category:"Modifiers"}},user_name:{table:{category:"Text"}},user_email:{table:{category:"Text"}},user_imageURL:{table:{category:"Text"}}},decorators:[o=>n(h,{gap:"8",align:"center",css:{h:"100vh"},children:o()})]},M=a(o=>n(e.Wrapper,{...o}),"Example"),b=a(o=>n(e.Wrapper,{...o}),"WithFooter");b.args={footer:t(c,{children:[n(r,{content:"Made with \u2764\uFE0F by Compasso",children:n(i,{color:"body-lighter",css:{ml:"$spacing-3"},children:"C"})}),t(m,{css:{d:"inline-flex",mr:"$spacing-2",gap:"$spacing-2"},children:[n(r,{content:"Configura\xE7oes",slot:n(g,{shortcut:"\u2318 C"}),children:n(p,{label:"settings",variant:"icon",icon:"settings",size:"sm"})}),n(r,{content:"Ajuda / Feedback",slot:n(g,{shortcut:"\u2318 H"}),children:n(p,{label:"help",variant:"icon",icon:"help",size:"sm"})})]})]})};const F=a(o=>{const[l,u]=f.exports.useState(!0);return n(e.Wrapper,{...o,isNavigationOpen:l,onNavigationOpenChange:()=>u(!l),footer:t(c,{children:[n(r,{content:"Made with \u2764\uFE0F by Compasso",children:n(i,{color:"body-lighter",css:{ml:"$spacing-3"},children:"C"})}),t(m,{css:{d:"inline-flex",mr:"$spacing-2",gap:"$spacing-2"},children:[n(r,{content:"Configura\xE7oes",slot:n(g,{shortcut:"\u2318 C"}),children:n(p,{label:"settings",variant:"icon",icon:"settings",size:"sm"})}),n(r,{content:"Ajuda / Feedback",slot:n(g,{shortcut:"\u2318 H"}),children:n(p,{label:"help",variant:"icon",icon:"help",size:"sm"})})]})]})})},"WithNavigationToggle"),I=a(o=>n(e.Wrapper,{...o}),"ExampleLoading");I.args={loading:!0,children:t(c,{children:[n(e.Item,{label:"Projects",icon:"project",href:"/projects",shortcut:"\u2318 + P",loading:!0}),n(e.Item,{label:"Invoices",icon:"invoice",href:"/invoices",shortcut:"\u2318 + I",isActive:!0,loading:!0}),n(e.Item,{label:"Clients",icon:"user",href:"/clients",loading:!0})]})};const R=a(()=>t(h,{direction:"column",justify:"center",css:{h:"100vh",w:"100%",px:380},children:[n(i,{size:"xs",css:{ml:"$spacing-3"},children:"Regular Active"}),n(e.Item,{icon:"invoice",label:"Invoices",href:"/invoices",isActive:!0}),n(i,{size:"xs",css:{ml:"$spacing-3"},children:"Regular"}),n(e.Item,{icon:"invoice",label:"Invoices",href:"/invoices"}),n(i,{size:"xs",css:{ml:"$spacing-3"},children:"With Shortcut"}),n(e.Item,{icon:"invoice",label:"Invoices",href:"/invoices",shortcut:"cmd + p"}),n(i,{size:"xs",css:{ml:"$spacing-3"},children:"Disabled"}),n(e.Item,{icon:"invoice",label:"Invoices",href:"/invoices",shortcut:"cmd + p",disabled:!0}),n(i,{size:"xs",css:{ml:"$spacing-3"},children:"Loading"}),n(e.Item,{icon:"invoice",label:"Invoices",href:"/invoices",shortcut:"cmd + p",loading:!0})]}),"NavigationItem"),_=["Example","WithFooter","WithNavigationToggle","ExampleLoading","NavigationItem"];export{M as Example,I as ExampleLoading,R as NavigationItem,b as WithFooter,F as WithNavigationToggle,_ as __namedExportsOrder,z as default};
//# sourceMappingURL=Navigation.stories.ab546fb6.js.map
