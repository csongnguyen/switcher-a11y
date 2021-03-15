import React from 'react';
import './App.css';
import { colors } from '@workday/canvas-kit-react-core';
import { AccentIcon, SystemIcon } from '@workday/canvas-kit-react-icon';
import { backpackIcon, bandAidsIcon, bankIcon, cakeIcon, calculatorIcon, checklistIcon, pawIcon, shieldIcon, stopwatchIcon, sunIcon } from '@workday/canvas-accent-icons-web';
import styled from '@emotion/styled';
import { focusRing } from '@workday/canvas-kit-react-common';
import { ClassNames, CSSObject } from '@emotion/react';
import { CanvasAccentIcon } from '@workday/design-assets-types';

const getIcons = () => {
  return [
    shieldIcon,
    bandAidsIcon,
    backpackIcon,
    bankIcon,
    cakeIcon,
    checklistIcon,
    calculatorIcon,
    pawIcon,
    sunIcon,
    stopwatchIcon
  ];
}

const IconContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column'
});

const IconRow = (props: any) => {
  return (
    <ClassNames>
        {({css}) => (
          <div
            tabIndex={0}              
            className={css(IconRowStyles)}
          >
            {props.children}
          </div>
        )}
      </ClassNames>
  );
};

const IconRowStyles: CSSObject = {
  flexDirection: 'row',
  '&:focus': {
    ...focusRing({inset: 'outer', width: 0, separation: 2}),
  },
};

const IconButton = (props: {icon: CanvasAccentIcon}) => {
  const {icon} = props;
  return (
    <AccentIcon 
      icon={icon} 
      color={colors.pomegranate500} 
      size={80} 
    />
  );
};



const renderIcons = (icons: CanvasAccentIcon[], rowLength: number = 3): JSX.Element[] => {
  
  let rowIndex = 0;

  const rows = [];
  const remainder = icons.length % rowLength;
  const numberOfRows = Math.ceil(icons.length / rowLength);
  let iconsIndex = 0;
  for (let i = 0; i < numberOfRows; i++) {
    rows[i] = icons.slice(iconsIndex, iconsIndex+rowLength);
    iconsIndex+=rowLength;
  }

  return rows.map((rowOfIcons, index) => {
    return (
      <IconRow>
        {
          rowOfIcons.map((icon: CanvasAccentIcon) => {
            return (
              <IconButton icon={icon}/>
            );
          })
        }
      </IconRow>
    )
  });
}

/**
 * The app should rotate to each selection criteria every X seconds until the user uses spacebar/enter key
 * 
 * As a user, I should be able to:
 * 1. select a row/item by tapping when the item/row I want is highlighted
 * 2. When a row/item is selected, it should show the options in a popup that a user can do with that item (in this case, maybe show 3 different things that can happen, maybe change color, maybe console.log, maybe popup?)
 * 
 */
function App() {
  React.useLayoutEffect(() => {
    setTimeout(() => {
      //TODO: create alternating highlight
    }, 1000);
  });

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Switcher a11y
        </p>
        <div>
          <IconContainer>
            {renderIcons(getIcons())}
          </IconContainer>
        </div>
      </header>

    </div>
  );
}



export default App;
