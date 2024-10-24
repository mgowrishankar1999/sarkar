import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
import StepConnector, {
  stepConnectorClasses,
} from '@mui/material/StepConnector';


//this steper is used for order history details to view

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 16,
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundColor: '#00B207',
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundColor: '#00B207',
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: 5,
      border: 0,
      backgroundColor: '#eaeaf0',
      borderRadius: 1,
    },
    [`& .${stepConnectorClasses.lineHorizontal}`]: {
      minHeight: '2px',
      borderTopWidth: '2px',
      borderTopStyle: 'solid',
      borderTopColor:
        theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
      position: 'relative',
      top: 'calc(50% - 1px)',
    },
  }));
  

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor:
    ownerState.active || ownerState.completed ? '#00B207' : '#fff',
  border: ownerState.active || ownerState.completed ? '' : '2px dashed green',
  zIndex: 1,
  color: ownerState.active || ownerState.completed ? '#fff' : '#000',
  width: 40,
  height: 40,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {completed ? <CheckTwoToneIcon /> : props.icon}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};

const steps = ['Order received', 'Processing', 'On the way', 'Delivered'];

export default function OrderHistoryStepper() {
  return (
    <Stack sx={{ width: '100%' }} spacing={4}>
      <Stepper
        alternativeLabel
        activeStep={4}
        connector={<ColorlibConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
}