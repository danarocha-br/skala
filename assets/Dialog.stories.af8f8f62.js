var c=Object.defineProperty;var t=(n,a)=>c(n,"name",{value:a,configurable:!0});import{c as i,O as d,d as g,S as p,a as y}from"./usePanel.be3af1e1.js";import{B as b}from"./storybook-addon-badges.esm.1b0bb0f8.js";import{r}from"./index.2ab3c1e5.js";import{j as o,a as m,F as u}from"./jsx-runtime.e7acc8f6.js";import"./index.3f7e1040.js";import"./index.45f128b4.js";import"./iframe.ed58828a.js";import"./es.date.to-primitive.87590581.js";import"./es.number.max-safe-integer.4a0044a0.js";import"./es.map.constructor.8fdb5bda.js";import"./index.c041fee6.js";import"./es.number.to-fixed.0a78dfff.js";import"./index-681e4b07.9765e5fa.js";import"./es.number.is-nan.5a177b11.js";const j={title:"Components/Dialog",component:i,parameters:{storySource:{source:`import { Story, Meta } from '@storybook/react';
import {
  Button,
  Dialog,
  DialogHandlesProps,
  DialogProps,
  DialogProvider,
  OverlayProvider,
  Stack,
} from '@skala/react';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { useCallback, useRef } from 'react';

export default {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    title: 'Dialog Title',
    description: 'Dialog description goes here',
    children: 'This is a transactional dialog.',
    variant: 'transactional',
    buttonPrimaryLabel: 'Save',
    buttonSecondaryLabel: 'Cancel',
    onButtonPrimaryClick: () => console.log('clicked'),
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
    variant: {
      table: {
        category: 'Modifiers',
      },
      options: ['passive', 'transactional', 'danger'],
      control: {
        type: 'inline-radio',
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
          <DialogProvider>
            <Stack align="center" justify="center" css={{ h: '100vh', w: 399 }}>
              {Story()}
            </Stack>
          </DialogProvider>
        </OverlayProvider>
      );
    },
  ],
} as Meta<DialogProps>;

export const Transactional: Story<DialogProps> = (args) => {
  const dialogRef = useRef<DialogHandlesProps>(null);

  const handleOpenDialog = useCallback(() => {
    dialogRef && dialogRef.current?.openDialog();
  }, []);
  return (
    <>
      <Button
        label="Open dialog"
        color="secondary"
        onClick={handleOpenDialog}
      />
      <Dialog ref={dialogRef} {...args} />
    </>
  );
};

export const Passive = Transactional.bind({});
Passive.args = {
  variant: 'passive',
  buttonPrimaryLabel: 'Ok',
};

export const Danger = Transactional.bind({});
Danger.args = {
  variant: 'danger',
  buttonPrimaryLabel: 'Ok',
};
`,locationsMap:{transactional:{startLoc:{col:49,line:95},endLoc:{col:1,line:111},startBody:{col:49,line:95},endBody:{col:1,line:111}},passive:{startLoc:{col:49,line:95},endLoc:{col:1,line:111},startBody:{col:49,line:95},endBody:{col:1,line:111}},danger:{startLoc:{col:49,line:95},endLoc:{col:1,line:111},startBody:{col:49,line:95},endBody:{col:1,line:111}}}},layout:"centered",badges:[b.STABLE],design:{type:"figma",url:""}},args:{title:"Dialog Title",description:"Dialog description goes here",children:"This is a transactional dialog.",variant:"transactional",buttonPrimaryLabel:"Save",buttonSecondaryLabel:"Cancel",onButtonPrimaryClick:()=>console.log("clicked")},argTypes:{title:{table:{category:"Text"}},description:{table:{category:"Text"}},children:{table:{category:"Modifiers"}},variant:{table:{category:"Modifiers"},options:["passive","transactional","danger"],control:{type:"inline-radio"}},buttonPrimaryLabel:{table:{category:"Text"}},buttonSecondaryLabel:{table:{category:"Text"}},onButtonPrimaryClick:{table:{category:"Function"}},onButtonSecondaryClick:{table:{category:"Function"}}},decorators:[n=>o(d,{children:o(g,{children:o(p,{align:"center",justify:"center",css:{h:"100vh",w:399},children:n()})})})]},l=t(n=>{const a=r.exports.useRef(null),s=r.exports.useCallback(()=>{var e;a&&((e=a.current)==null||e.openDialog())},[]);return m(u,{children:[o(y,{label:"Open dialog",color:"secondary",onClick:s}),o(i,{ref:a,...n})]})},"Transactional"),v=l.bind({});v.args={variant:"passive",buttonPrimaryLabel:"Ok"};const D=l.bind({});D.args={variant:"danger",buttonPrimaryLabel:"Ok"};const A=["Transactional","Passive","Danger"];export{D as Danger,v as Passive,l as Transactional,A as __namedExportsOrder,j as default};
//# sourceMappingURL=Dialog.stories.af8f8f62.js.map
