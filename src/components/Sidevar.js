import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Drawer , CssBaseline , AppBar , Toolbar, List , Typography , Divider , IconButton , ListItem , ListItemIcon , ListItemText } from "@material-ui/core"
import {Menu as MenuIcon, ChevronLeft as ChevronLeftIcon , ChevronRight as ChevronRightIcon }  from "@material-ui/icons"

import { grey } from "@material-ui/core/colors"

import {
  Dashboard,
  Collections as Pages,
  ViewModule as Components,
  Description as Forms,
  TableChart as Tables,
  LocationOn as Maps,
  Widgets,
  ShowChart as Charts,
  Notifications,
  AccountCircle,
  Search
} from "@material-ui/icons";
import { Button, TextField , InputAdornment} from '@material-ui/core';
;
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  left : {
    flexGrow:1
  },
  margin5 : {
marginLeft:"5px",
marginRight: "5px"
  }
}));

export default function PersistentDrawerLeft() {

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <div className={classes.left} >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />

          <Typography variant="h6" noWrap>
            Dashboard
          </Typography>
          </IconButton>
          </div>
          <TextField id="standard-basic" label="Buscar" 
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          />
          <Button
            variant="text"
            color={grey[500]}
            startIcon={<Dashboard />}
            className={classes.margin5}
          >
            
          </Button>
          

          <Button
            variant="text"
            color={grey[500]}
            startIcon={<Notifications />}
            className={classes.margin5}
          >
            
          </Button>
          
          <Button
            variant="text"
            color={grey[500]}
            startIcon={<AccountCircle />}
            className={classes.margin5}
          >
            
          </Button>
          
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <Typography variant="h5" color="initial">
            Team Creative
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
    
        <Divider />
      <List>
        <ListItem button>
          <Divider />
          <ListItemIcon>             
            <Dashboard />
          </ListItemIcon>
          <ListItemText>Dashboard</ListItemText>
        </ListItem>

        <ListItem button>
          <Divider />
          <ListItemIcon>             
            <Pages />
          </ListItemIcon>
          <ListItemText>Pages</ListItemText>
        </ListItem>

        <ListItem button>
          <Divider />
          <ListItemIcon>             
            <Components />
          </ListItemIcon>
          <ListItemText>Components</ListItemText>
        </ListItem>

        <ListItem button>
          <Divider />
          <ListItemIcon>             
            <Forms />
          </ListItemIcon>
          <ListItemText>Forms</ListItemText>
        </ListItem>
        
        <ListItem button>
          <Divider />
          <ListItemIcon>             
            <Tables />
          </ListItemIcon>
          <ListItemText>Tables</ListItemText>
        </ListItem>
        
        <ListItem button>
          <Divider />
          <ListItemIcon>             
            <Maps />
          </ListItemIcon>
          <ListItemText>Maps</ListItemText>
        </ListItem>

        <ListItem button>
          <Divider />
          <ListItemIcon>             
            <Widgets />
          </ListItemIcon>
          <ListItemText>Widgets</ListItemText>
        </ListItem>

        <ListItem button>
          <Divider />
          <ListItemIcon>             
            <Charts />
          </ListItemIcon>
          <ListItemText>Charts</ListItemText>
        </ListItem>

      </List>
    </Drawer>


      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        {/* Genera un espaciado para que las cosas no queden abajo del appBar */}
        <div className={classes.drawerHeader} />
       
      </main>
    </div>
  );
}



