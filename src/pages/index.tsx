// ** React Imports
import { ReactNode, useState } from 'react'

// ** Component Imports
import AiPPTX from 'src/views/AiPPTX/AiPPTX'
import Setting from 'src/views/AiPPTX/Setting'

// ** MUI Imports
import {
  Box,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Tooltip,
  Typography,
  useTheme
} from '@mui/material'

// ** Hooks
import { useSettings } from 'src/@core/hooks/useSettings'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

const AiPPTXModel = () => {
  const theme = useTheme()
  const { settings, saveSettings } = useSettings()
  const [pageMode, setPageMode] = useState('AiToPPTX')
  const [sidebarOpen, setSidebarOpen] = useState(true)

  // 侧边栏宽度
  const drawerWidth = 240
  const drawerCollapsedWidth = 68

  // 切换侧边栏展开/收起状态
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <Box sx={{ minHeight: '100vh', position: 'relative', display: 'flex' }}>
      {/* 侧边栏 */}
      <Drawer
        variant='permanent'
        sx={{
          width: sidebarOpen ? drawerWidth : drawerCollapsedWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: sidebarOpen ? drawerWidth : drawerCollapsedWidth,
            boxSizing: 'border-box',
            transition: theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen
            }),
            background:
              settings.mode === 'light'
                ? 'linear-gradient(90deg,rgb(226, 222, 240) 0%,rgb(255, 255, 255) 100%)'
                : 'linear-gradient(90deg,rgb(49, 45, 75) 0%,rgb(40, 37, 61) 100%)',
            color: settings.mode === 'light' ? 'rgba(58, 53, 65, 0.87)' : 'white',
            overflowX: 'hidden'
          }
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: sidebarOpen ? 'space-between' : 'center',
            padding: theme.spacing(2),
            minHeight: 64
          }}
        >
          {sidebarOpen ? (
            <>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant='h6' sx={{ ml: 1, fontWeight: 'bold' }}>
                  DF-PPT
                </Typography>
              </Box>
              <IconButton
                onClick={toggleSidebar}
                sx={{ color: settings.mode === 'light' ? 'rgba(58, 53, 65, 0.87)' : 'white' }}
              >
                <Icon icon='mdi:chevron-left' />
              </IconButton>
            </>
          ) : (
            <IconButton
              onClick={toggleSidebar}
              sx={{ color: settings.mode === 'light' ? 'rgba(58, 53, 65, 0.87)' : 'white' }}
            >
              <Icon icon='mdi:chevron-right' />
            </IconButton>
          )}
        </Box>

        <List sx={{ mt: 2 }}>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: sidebarOpen ? 'initial' : 'center',
                px: 2.5,
                backgroundColor:
                  pageMode === 'AiToPPTX'
                    ? settings.mode === 'light'
                      ? 'rgba(58, 53, 65, 0.1)'
                      : 'rgba(255, 255, 255, 0.1)'
                    : 'transparent',
                '&:hover': {
                  backgroundColor: settings.mode === 'light' ? 'rgba(58, 53, 65, 0.2)' : 'rgba(255, 255, 255, 0.2)'
                }
              }}
              onClick={() => setPageMode('AiToPPTX')}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: sidebarOpen ? 3 : 'auto',
                  justifyContent: 'center',
                  color: settings.mode === 'light' ? 'rgba(58, 53, 65, 0.87)' : 'white'
                }}
              >
                <Icon icon='mdi:presentation' fontSize={24} />
              </ListItemIcon>
              {sidebarOpen && (
                <ListItemText
                  primary='AI PPT生成'
                  sx={{
                    opacity: 1,
                    '& .MuiListItemText-primary': {
                      fontWeight: pageMode === 'AiToPPTX' ? 'bold' : 'normal'
                    }
                  }}
                />
              )}
            </ListItemButton>
          </ListItem>
        </List>
        {/* 底部固定区域 */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            borderTop:
              settings.mode === 'light' ? '1px solid rgba(58, 53, 65, 0.1)' : '1px solid rgba(255, 255, 255, 0.1)',
            padding: theme.spacing(2, 0)
          }}
        >
          {sidebarOpen ? (
            <Grid container spacing={0}>
              {/* 用户中心 */}
              <Grid item xs={4}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    '&:hover': {
                      backgroundColor: settings.mode === 'light' ? 'rgba(58, 53, 65, 0.1)' : 'rgba(255, 255, 255, 0.1)'
                    },
                    padding: theme.spacing(1)
                  }}
                >
                  <Box sx={{ color: settings.mode === 'light' ? 'rgba(58, 53, 65, 0.87)' : 'white', mb: 0.5 }}>
                    <Icon icon='mdi:account-circle' fontSize={24} />
                  </Box>
                  <Typography
                    variant='caption'
                    sx={{ color: settings.mode === 'light' ? 'rgba(58, 53, 65, 0.87)' : 'white' }}
                  >
                    用户中心
                  </Typography>
                </Box>
              </Grid>

              {/* 参数设置 */}
              <Grid item xs={4}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    backgroundColor:
                      pageMode === 'Setting'
                        ? settings.mode === 'light'
                          ? 'rgba(58, 53, 65, 0.1)'
                          : 'rgba(255, 255, 255, 0.1)'
                        : 'transparent',
                    '&:hover': {
                      backgroundColor: settings.mode === 'light' ? 'rgba(58, 53, 65, 0.2)' : 'rgba(255, 255, 255, 0.2)'
                    },
                    padding: theme.spacing(1)
                  }}
                  onClick={() => setPageMode('Setting')}
                >
                  <Box sx={{ color: settings.mode === 'light' ? 'rgba(58, 53, 65, 0.87)' : 'white', mb: 0.5 }}>
                    <Icon icon='mdi:cog' fontSize={24} />
                  </Box>
                  <Typography
                    variant='caption'
                    sx={{
                      color: settings.mode === 'light' ? 'rgba(58, 53, 65, 0.87)' : 'white',
                      fontWeight: pageMode === 'Setting' ? 'bold' : 'normal'
                    }}
                  >
                    参数设置
                  </Typography>
                </Box>
              </Grid>

              {/* 主题切换 */}
              <Grid item xs={4}>
                <Tooltip title={settings.mode === 'light' ? '切换到暗色模式' : '切换到亮色模式'}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      '&:hover': {
                        backgroundColor:
                          settings.mode === 'light' ? 'rgba(58, 53, 65, 0.1)' : 'rgba(255, 255, 255, 0.1)'
                      },
                      padding: theme.spacing(1)
                    }}
                    onClick={() => saveSettings({ ...settings, mode: settings.mode === 'light' ? 'dark' : 'light' })}
                  >
                    <Box sx={{ color: settings.mode === 'light' ? 'rgba(58, 53, 65, 0.87)' : 'white', mb: 0.5 }}>
                      <Icon
                        icon={settings.mode === 'light' ? 'mdi:weather-night' : 'mdi:weather-sunny'}
                        fontSize={24}
                      />
                    </Box>
                    <Typography
                      variant='caption'
                      sx={{ color: settings.mode === 'light' ? 'rgba(58, 53, 65, 0.87)' : 'white' }}
                    >
                      {settings.mode === 'light' ? '暗色模式' : '亮色模式'}
                    </Typography>
                  </Box>
                </Tooltip>
              </Grid>
            </Grid>
          ) : (
            <Box>
              {/* 用户中心 */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: settings.mode === 'light' ? 'rgba(58, 53, 65, 0.1)' : 'rgba(255, 255, 255, 0.1)'
                  },
                  padding: theme.spacing(1)
                }}
              >
                <Box sx={{ color: settings.mode === 'light' ? 'rgba(58, 53, 65, 0.87)' : 'white' }}>
                  <Icon icon='mdi:account-circle' fontSize={24} />
                </Box>
              </Box>

              {/* 参数设置 */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  backgroundColor:
                    pageMode === 'Setting'
                      ? settings.mode === 'light'
                        ? 'rgba(58, 53, 65, 0.1)'
                        : 'rgba(255, 255, 255, 0.1)'
                      : 'transparent',
                  '&:hover': {
                    backgroundColor: settings.mode === 'light' ? 'rgba(58, 53, 65, 0.2)' : 'rgba(255, 255, 255, 0.2)'
                  },
                  padding: theme.spacing(1)
                }}
                onClick={() => setPageMode('Setting')}
              >
                <Box sx={{ color: settings.mode === 'light' ? 'rgba(58, 53, 65, 0.87)' : 'white' }}>
                  <Icon icon='mdi:cog' fontSize={24} />
                </Box>
              </Box>

              {/* 主题切换 */}
              <Tooltip title={settings.mode === 'light' ? '切换到暗色模式' : '切换到亮色模式'}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    '&:hover': {
                      backgroundColor: settings.mode === 'light' ? 'rgba(58, 53, 65, 0.1)' : 'rgba(255, 255, 255, 0.1)'
                    },
                    padding: theme.spacing(1)
                  }}
                  onClick={() => saveSettings({ ...settings, mode: settings.mode === 'light' ? 'dark' : 'light' })}
                >
                  <Box sx={{ color: settings.mode === 'light' ? 'rgba(58, 53, 65, 0.87)' : 'white' }}>
                    <Icon icon={settings.mode === 'light' ? 'mdi:weather-night' : 'mdi:weather-sunny'} fontSize={24} />
                  </Box>
                </Box>
              </Tooltip>
            </Box>
          )}
        </Box>
      </Drawer>

      {/* 主要内容区域 */}
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          p: 4,
          width: { sm: `calc(100% - ${sidebarOpen ? drawerWidth : drawerCollapsedWidth}px)` },
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
          })
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 3,
            borderRadius: 2,
            height: 'calc(100vh - 40px)',
            overflow: 'hidden'
          }}
        >
          {pageMode === 'AiToPPTX' && <AiPPTX />}
          {pageMode === 'Setting' && <Setting />}
        </Paper>
      </Box>
    </Box>
  )
}

AiPPTXModel.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

AiPPTXModel.guestGuard = true

export default AiPPTXModel
