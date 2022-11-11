var s=Object.defineProperty;var o=(n,e)=>s(n,"name",{value:e,configurable:!0});import{n as l,O as c,o as d,S as p,a as y}from"./usePanel.be3af1e1.js";import{B as u}from"./storybook-addon-badges.esm.1b0bb0f8.js";import{r}from"./index.2ab3c1e5.js";import{j as t,a as P,F as b}from"./jsx-runtime.e7acc8f6.js";import"./index.3f7e1040.js";import"./index.45f128b4.js";import"./iframe.ed58828a.js";import"./es.date.to-primitive.87590581.js";import"./es.number.max-safe-integer.4a0044a0.js";import"./es.map.constructor.8fdb5bda.js";import"./index.c041fee6.js";import"./es.number.to-fixed.0a78dfff.js";import"./index-681e4b07.9765e5fa.js";import"./es.number.is-nan.5a177b11.js";const R={title:"Components/Panel",component:l,parameters:{storySource:{source:`import { Story, Meta } from '@storybook/react';
import {
  Button,
  Panel,
  PanelHandlesProps,
  PanelProps,
  PanelProvider,
  OverlayProvider,
  Stack,
} from '@skala/react';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { useCallback, useRef } from 'react';

export default {
  title: 'Components/Panel',
  component: Panel,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    title: 'Panel Title',
    description: 'Panel description goes here',
    children: 'This is a transactional Panel.',
    buttonPrimaryLabel: 'Save',
    buttonSecondaryLabel: 'Cancel',
    onButtonPrimaryClick: () => console.log('clicked'),
    isButtonDisabled: false,
    isNavigationOpen: false,
  },
  argTypes: {
    title: {
      table: {
        category: 'Text',
      },
    },
    description: {
      table: {
        category: 'Text',
      },
    },
    children: {
      table: {
        category: 'Modifiers',
      },
    },
    isButtonDisabled: {
      table: {
        category: 'Modifiers',
      },
    },
    isNavigationOpen: {
      table: {
        category: 'Modifiers',
      },
    },
    buttonPrimaryLabel: {
      table: {
        category: 'Text',
      },
    },
    buttonSecondaryLabel: {
      table: {
        category: 'Text',
      },
    },
    onButtonPrimaryClick: {
      table: {
        category: 'Function',
      },
    },
    onButtonSecondaryClick: {
      table: {
        category: 'Function',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <OverlayProvider>
          <PanelProvider>
            <Stack align="center" justify="center" css={{ h: '100vh', w: 399 }}>
              {Story()}
            </Stack>
          </PanelProvider>
        </OverlayProvider>
      );
    },
  ],
} as Meta<PanelProps>;

export const Default: Story<PanelProps> = (args) => {
  const panelRef = useRef<PanelHandlesProps>(null);

  const handleOpenPanel = useCallback(() => {
    panelRef && panelRef.current?.openPanel();
  }, []);

  return (
    <>
      <Button label="Open Panel" color="secondary" onClick={handleOpenPanel} />
      <Panel ref={panelRef} {...args} />
    </>
  );
};
`,locationsMap:{default:{startLoc:{col:42,line:97},endLoc:{col:1,line:110},startBody:{col:42,line:97},endBody:{col:1,line:110}}}},layout:"centered",badges:[u.STABLE],design:{type:"figma",url:""}},args:{title:"Panel Title",description:"Panel description goes here",children:"This is a transactional Panel.",buttonPrimaryLabel:"Save",buttonSecondaryLabel:"Cancel",onButtonPrimaryClick:()=>console.log("clicked"),isButtonDisabled:!1,isNavigationOpen:!1},argTypes:{title:{table:{category:"Text"}},description:{table:{category:"Text"}},children:{table:{category:"Modifiers"}},isButtonDisabled:{table:{category:"Modifiers"}},isNavigationOpen:{table:{category:"Modifiers"}},buttonPrimaryLabel:{table:{category:"Text"}},buttonSecondaryLabel:{table:{category:"Text"}},onButtonPrimaryClick:{table:{category:"Function"}},onButtonSecondaryClick:{table:{category:"Function"}}},decorators:[n=>t(c,{children:t(d,{children:t(p,{align:"center",justify:"center",css:{h:"100vh",w:399},children:n()})})})]},E=o(n=>{const e=r.exports.useRef(null),i=r.exports.useCallback(()=>{var a;e&&((a=e.current)==null||a.openPanel())},[]);return P(b,{children:[t(y,{label:"Open Panel",color:"secondary",onClick:i}),t(l,{ref:e,...n})]})},"Default"),F=["Default"];export{E as Default,F as __namedExportsOrder,R as default};
//# sourceMappingURL=Panel.stories.902ddece.js.map
