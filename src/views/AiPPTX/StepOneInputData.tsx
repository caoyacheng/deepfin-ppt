// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import {
  CloudUpload,
  Description,
  FormatSize,
  KeyboardArrowDown,
  KeyboardArrowRight,
  Language,
  Link,
  List,
  PlayCircleFilled,
  Settings,
  TextFields,
  UploadFile
} from '@mui/icons-material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Fade from '@mui/material/Fade'
import MenuItem from '@mui/material/MenuItem'
import Paper from '@mui/material/Paper'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

const StepOneInputData = ({ setActiveStep, setInputData }: any) => {
  // ** States
  const theme = useTheme()

  // 状态管理
  const [selectedOption, setSelectedOption] = useState('inputTopic') // 默认选中 "输入主题与要求"
  const [importOption, setImportOption] = useState('inputText') // 默认选中 "输入文本"
  const [inputText, setInputText] = useState('2025年金融与AI研究分析') // 输入框内容
  const [showMoreOptions, setShowMoreOptions] = useState(false) // 是否显示更多生成要求
  const [moreOptions, setMoreOptions] = useState({ moreRequirement: '', language: 'zh-CN', outlineLength: 'regular' }) // 更多生成要求的内容

  // 处理选项切换
  const handleOptionChange = (option: any) => {
    setSelectedOption(option)
  }

  // 处理导入选项切换
  const handleImportOptionChange = (option: any) => {
    setImportOption(option)
  }

  // 处理更多生成要求的显示/隐藏
  const toggleMoreOptions = () => {
    setShowMoreOptions(!showMoreOptions)
  }

  // 处理立即生成按钮点击
  const handleGenerateOutline = () => {
    console.log('生成 PPTX 的参数：', {
      selectedOption,
      importOption,
      inputText,
      moreOptions
    })
    setInputData((prevState: any) => ({ ...prevState, selectedOption, importOption, inputText, moreOptions }))
    setActiveStep((prevActiveStep: number) => prevActiveStep + 1)
  }

  return (
    <Box sx={{ maxWidth: '1200px', mx: 'auto' }}>
      {/* 第一行：两个按钮 */}
      <Paper
        elevation={0}
        sx={{
          p: 1,
          mb: 3,
          borderRadius: 2,
          backgroundColor: theme.palette.background.paper,
          display: 'flex',
          gap: 2,
          justifyContent: 'center'
        }}
      >
        <Button
          variant={selectedOption === 'inputTopic' ? 'contained' : 'outlined'}
          color={selectedOption === 'inputTopic' ? 'primary' : 'inherit'}
          onClick={() => handleOptionChange('inputTopic')}
          startIcon={<Description />}
          sx={{
            borderRadius: 2,
            px: 3,
            py: 1,
            boxShadow: selectedOption === 'inputTopic' ? theme.shadows[2] : 'none',
            transition: 'all 0.3s ease'
          }}
        >
          输入主题与要求
        </Button>
        <Button
          variant={selectedOption === 'importData' ? 'contained' : 'outlined'}
          color={selectedOption === 'importData' ? 'primary' : 'inherit'}
          onClick={() => handleOptionChange('importData')}
          startIcon={<CloudUpload />}
          sx={{
            borderRadius: 2,
            px: 3,
            py: 1,
            boxShadow: selectedOption === 'importData' ? theme.shadows[2] : 'none',
            transition: 'all 0.3s ease'
          }}
        >
          导入外部资料
        </Button>
      </Paper>

      {/* 第二行：根据选项显示不同内容 */}
      <Fade in={selectedOption === 'inputTopic'} timeout={500}>
        <Box sx={{ display: selectedOption === 'inputTopic' ? 'block' : 'none' }}>
          <TextField
            fullWidth
            label='请输入主题与要求'
            variant='outlined'
            value={inputText}
            onChange={e => setInputText(e.target.value)}
            sx={{
              mb: 3,
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: theme.palette.primary.light
                }
              }
            }}
            placeholder='例如：金融AI发展研究'
            helperText='输入您想要创建的PPT主题或详细要求'
          />
        </Box>
      </Fade>

      <Fade in={selectedOption === 'importData'} timeout={500}>
        <Box sx={{ display: selectedOption === 'importData' ? 'block' : 'none' }}>
          {/* 四个按钮 */}
          <Paper
            elevation={0}
            sx={{
              p: 1.5,
              mb: 3,
              borderRadius: 2,
              backgroundColor: theme.palette.background.paper,
              display: 'flex',
              flexWrap: 'wrap',
              gap: 2,
              justifyContent: 'center'
            }}
          >
            <Button
              variant={importOption === 'inputText' ? 'contained' : 'outlined'}
              color={importOption === 'inputText' ? 'primary' : 'inherit'}
              onClick={() => handleImportOptionChange('inputText')}
              startIcon={<TextFields />}
              sx={{
                borderRadius: 2,
                px: 2,
                boxShadow: importOption === 'inputText' ? theme.shadows[2] : 'none',
                transition: 'all 0.3s ease'
              }}
            >
              输入文本
            </Button>
            <Button
              variant={importOption === 'uploadFile' ? 'contained' : 'outlined'}
              color={importOption === 'uploadFile' ? 'primary' : 'inherit'}
              onClick={() => handleImportOptionChange('uploadFile')}
              startIcon={<UploadFile />}
              sx={{
                borderRadius: 2,
                px: 2,
                boxShadow: importOption === 'uploadFile' ? theme.shadows[2] : 'none',
                transition: 'all 0.3s ease'
              }}
            >
              上传文件
            </Button>
            <Button
              variant={importOption === 'inputUrl' ? 'contained' : 'outlined'}
              color={importOption === 'inputUrl' ? 'primary' : 'inherit'}
              onClick={() => handleImportOptionChange('inputUrl')}
              startIcon={<Link />}
              sx={{
                borderRadius: 2,
                px: 2,
                boxShadow: importOption === 'inputUrl' ? theme.shadows[2] : 'none',
                transition: 'all 0.3s ease'
              }}
            >
              输入网页地址
            </Button>
            <Button
              variant={importOption === 'importOutline' ? 'contained' : 'outlined'}
              color={importOption === 'importOutline' ? 'primary' : 'inherit'}
              onClick={() => handleImportOptionChange('importOutline')}
              startIcon={<List />}
              sx={{
                borderRadius: 2,
                px: 2,
                boxShadow: importOption === 'importOutline' ? theme.shadows[2] : 'none',
                transition: 'all 0.3s ease'
              }}
            >
              导入大纲
            </Button>
          </Paper>

          {/* 动态显示输入框 */}
          <Fade in={importOption === 'inputText'} timeout={500}>
            <Box sx={{ display: importOption === 'inputText' ? 'block' : 'none' }}>
              <TextField
                fullWidth
                label='请输入文本'
                variant='outlined'
                multiline
                rows={4}
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                sx={{
                  mb: 3,
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: theme.palette.primary.light
                    }
                  }
                }}
                placeholder='粘贴您的文本内容...'
                helperText='系统将基于此文本内容生成PPT大纲'
              />
            </Box>
          </Fade>

          <Fade in={importOption === 'uploadFile'} timeout={500}>
            <Box sx={{ display: importOption === 'uploadFile' ? 'block' : 'none' }}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  mb: 3,
                  borderRadius: 2,
                  backgroundColor: theme.palette.background.paper,
                  border: `2px dashed ${theme.palette.primary.light}`,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <UploadFile sx={{ fontSize: 48, color: theme.palette.primary.main, mb: 2 }} />
                <Typography variant='h6' color='primary' gutterBottom>
                  点击或拖拽文件到此处
                </Typography>
                <Typography variant='body2' color='textSecondary'>
                  支持 PDF, DOCX, TXT 等格式
                </Typography>
              </Paper>
            </Box>
          </Fade>

          <Fade in={importOption === 'inputUrl'} timeout={500}>
            <Box sx={{ display: importOption === 'inputUrl' ? 'block' : 'none' }}>
              <TextField
                fullWidth
                label='请输入网页地址'
                variant='outlined'
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                sx={{
                  mb: 3,
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: theme.palette.primary.light
                    }
                  }
                }}
                placeholder='https://example.com'
                helperText='系统将抓取网页内容并生成PPT大纲'
              />
            </Box>
          </Fade>

          <Fade in={importOption === 'importOutline'} timeout={500}>
            <Box sx={{ display: importOption === 'importOutline' ? 'block' : 'none' }}>
              <TextField
                fullWidth
                label='请输入大纲内容'
                variant='outlined'
                multiline
                rows={4}
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                sx={{
                  mb: 3,
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: theme.palette.primary.light
                    }
                  }
                }}
                placeholder='第一章: 介绍\n1.1 背景\n1.2 目标\n第二章: 内容...'
                helperText='请按照章节格式输入大纲内容'
              />
            </Box>
          </Fade>
        </Box>
      </Fade>

      {/* 更多生成要求 */}
      <Paper
        elevation={0}
        sx={{
          p: 0.5,
          mb: 3,
          borderRadius: 2,
          backgroundColor: theme.palette.background.paper
        }}
      >
        <Button
          fullWidth
          variant='text'
          color='primary'
          onClick={toggleMoreOptions}
          sx={{
            cursor: 'pointer',
            borderRadius: 2,
            py: 1,
            display: 'flex',
            justifyContent: 'space-between'
          }}
          startIcon={<Settings />}
          endIcon={showMoreOptions ? <KeyboardArrowRight /> : <KeyboardArrowDown />}
        >
          <Typography variant='subtitle1' sx={{ fontWeight: 500 }}>
            更多生成要求
          </Typography>
        </Button>
      </Paper>

      <Fade in={showMoreOptions} timeout={500}>
        <Box sx={{ display: showMoreOptions ? 'block' : 'none', mb: 3 }}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              borderRadius: 2,
              backgroundColor: theme.palette.background.paper
            }}
          >
            <TextField
              fullWidth
              size='small'
              label='请输入更多要求'
              variant='outlined'
              value={moreOptions.moreRequirement}
              onChange={e => setMoreOptions({ ...moreOptions, moreRequirement: e.target.value })}
              sx={{
                mb: 3,
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2
                }
              }}
              placeholder='例如：包含数据图表、案例分析等'
            />

            {/* 大纲篇幅选择 */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                mb: 2,
                flexWrap: 'wrap'
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <FormatSize sx={{ color: theme.palette.primary.main, mr: 1 }} />
                <Typography variant='body1' sx={{ fontWeight: 500 }}>
                  大纲篇幅:
                </Typography>
              </Box>
              <Select
                size='small'
                value={moreOptions.outlineLength}
                onChange={e => setMoreOptions({ ...moreOptions, outlineLength: e.target.value as string })}
                displayEmpty
                sx={{
                  minWidth: 150,
                  borderRadius: 2,
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: theme.palette.primary.light
                  }
                }}
              >
                <MenuItem value='' disabled>
                  请选择
                </MenuItem>
                <MenuItem value='short'>较短 10-15 页</MenuItem>
                <MenuItem value='regular'>常规 20-30 页</MenuItem>
                <MenuItem value='long'>更长 25-35 页</MenuItem>
              </Select>
            </Box>

            {/* 语言选择 */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                flexWrap: 'wrap'
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Language sx={{ color: theme.palette.primary.main, mr: 1 }} />
                <Typography variant='body1' sx={{ fontWeight: 500 }}>
                  选择语言:
                </Typography>
              </Box>
              <Select
                size='small'
                value={moreOptions.language}
                onChange={e => setMoreOptions({ ...moreOptions, language: e.target.value as string })}
                displayEmpty
                sx={{
                  minWidth: 150,
                  borderRadius: 2,
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: theme.palette.primary.light
                  }
                }}
              >
                <MenuItem value='' disabled>
                  请选择
                </MenuItem>
                <MenuItem value='zh-CN'>中文</MenuItem>
                <MenuItem value='en'>英文</MenuItem>
              </Select>
            </Box>
          </Paper>
        </Box>
      </Fade>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Button
          variant='contained'
          color='primary'
          size='large'
          onClick={handleGenerateOutline}
          startIcon={<PlayCircleFilled />}
          sx={{
            borderRadius: 8,
            px: 4,
            py: 1.5,
            boxShadow: theme.shadows[4],
            '&:hover': {
              boxShadow: theme.shadows[8]
            },
            transition: 'all 0.3s ease'
          }}
        >
          立即生成
        </Button>
      </Box>
    </Box>
  )
}

export default StepOneInputData
