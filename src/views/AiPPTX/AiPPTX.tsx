// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Step from '@mui/material/Step'
import Divider from '@mui/material/Divider'
import Stepper from '@mui/material/Stepper'
import StepLabel from '@mui/material/StepLabel'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Fade from '@mui/material/Fade'

import StepperCustomDot from './Components/StepperCustomDot'
import StepperWrapper from 'src/@core/styles/mui/stepper'

import StepOneInputData from './StepOneInputData'
import StepTwoThreeGenerateOutline from './StepTwoThreeGenerateOutline'
import StepFourSelectTemplate from './StepFourSelectTemplate'
import StepFiveGeneratePpt from './StepFiveGeneratePpt'

const steps = [
  {
    title: '开始创作',
    subtitle: '请输入您的要求',
    icon: '📝'
  },
  {
    title: '输入主题',
    subtitle: '输入主题',
    icon: '🎯'
  },
  {
    title: '编辑大纲',
    subtitle: '编辑大纲',
    icon: '📋'
  },
  {
    title: '选择模板',
    subtitle: '选择模板',
    icon: '🎨'
  },
  {
    title: '制作PPTX',
    subtitle: '制作PPTX',
    icon: '🚀'
  }
]

const StepperLinearWithValidation = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState<number>(0)
  const [inputData, setInputData] = useState<any>({selectedOption: "inputTopic", inputText: "", importOption: "inputText", moreOption:{language:"zh-CN", moreRequirement:"", outlineLength:"regular" }, outlineContent: '', outlineHtml: '', templateId: 0, pptxContent: null, dataUrl: ''})

  return (
    <Card
        sx={{
          width: '100%',
          height: 'calc(100vh - 220px)',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: 2,
          boxShadow: theme.shadows[3],
          overflow: 'hidden'
        }}
      >
        {/* 顶部 Stepper 部分 */}
        <CardContent
          sx={{
            flex: '0 0 auto',
            backgroundColor: theme.palette.background.paper,
            pt: 4,
            pb: 3
          }}
        >
          <StepperWrapper>
            <Stepper 
              activeStep={activeStep}
              sx={{
                '& .MuiStepConnector-line': {
                  borderColor: theme.palette.primary.light,
                  borderTopWidth: 3,
                  borderRadius: 4
                }
              }}
            >
              {steps.map((step, index) => {
                const labelProps: { error?: boolean } = {};
                if (index === activeStep) {
                  labelProps.error = false;
                }

                return (
                  <Step key={index}>
                    <StepLabel 
                      {...labelProps} 
                      StepIconComponent={StepperCustomDot}
                      sx={{
                        '& .MuiStepLabel-label': {
                          color: index === activeStep ? theme.palette.primary.main : theme.palette.text.secondary
                        }
                      }}
                    >
                      <Box className='step-label' sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography 
                          className='step-number'
                          sx={{ 
                            fontSize: '1.2rem', 
                            fontWeight: 600,
                            mr: 1,
                            color: index === activeStep ? theme.palette.primary.main : 'inherit'
                          }}
                        >
                          {step.icon}
                        </Typography>
                        <Box>
                          <Typography 
                            className='step-title'
                            sx={{ 
                              fontWeight: index === activeStep ? 700 : 600,
                              fontSize: '0.95rem',
                              color: index === activeStep ? theme.palette.primary.main : 'inherit'
                            }}
                          >
                            {step.title}
                          </Typography>
                          <Typography 
                            className='step-subtitle'
                            sx={{ 
                              fontSize: '0.75rem',
                              color: theme.palette.text.secondary
                            }}
                          >
                            {step.subtitle}
                          </Typography>
                        </Box>
                      </Box>
                    </StepLabel>
                  </Step>
                );
              })}
            </Stepper>
          </StepperWrapper>
        </CardContent>

        {/* 分隔线 */}
        <Divider sx={{ m: '0 !important' }} />

        {/* 可滚动的内容部分 */}
        <CardContent
          sx={{
            pt: activeStep === 4 ? 0 : 4,
            pb: 4,
            flex: 1,
            overflowY: 'auto',
            backgroundColor: theme.palette.background.default
          }}
        >
          <Fade in={true} timeout={500}>
            <Box>
              {activeStep === 0 && (
                <StepOneInputData setActiveStep={setActiveStep} setInputData={setInputData} />
              )}
              {(activeStep === 1 || activeStep === 2) && (
                <StepTwoThreeGenerateOutline
                  activeStep={activeStep}
                  setActiveStep={setActiveStep}
                  inputData={inputData}
                  setInputData={setInputData}
                />
              )}
              {activeStep === 3 && (
                <StepFourSelectTemplate
                  activeStep={activeStep}
                  setActiveStep={setActiveStep}
                  inputData={inputData}
                  setInputData={setInputData}
                />
              )}
              {activeStep === 4 && (
                <StepFiveGeneratePpt
                  activeStep={activeStep}
                  setActiveStep={setActiveStep}
                  inputData={inputData}
                  setInputData={setInputData}
                />
              )}
            </Box>
          </Fade>
        </CardContent>
      </Card>

  )
}

export default StepperLinearWithValidation
