import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Logo from "../images/logo.png";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import clsx from "clsx";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import HomeIcon from "@material-ui/icons/Home";
import Produits from "../components/AdminPage/Produits";
import Commandes from "../components/AdminPage/Commandes";
import AjoutProduit from "../components/AdminPage/AjoutProduit";
import EditeCommande from "../components/AdminPage/EditeCommande";
import EditeProduit from "../components/AdminPage/EditeProduit";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    background: "var(--primaryColor)",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),

    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function ClippedDrawer() {
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
      <Router>
        <CssBaseline />
        <AppBar
          position='fixed'
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              onClick={handleDrawerOpen}
              edge='start'
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <img src={Logo} alt='logo' className='logo-title' width='60px' />
            <Typography variant='h4' style={{ paddingLeft: "20px" }}>
              lboy delivery
            </Typography>
          </Toolbar>
        </AppBar>

        <Drawer
          className={classes.drawer}
          variant='persistent'
          anchor='left'
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          {/* <Toolbar /> */}

          <List>
            <ListItem>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary='administration' />
            </ListItem>
          </List>
          <Divider />
          <List>
            <Link to='/admin' className={classes.link}>
              <ListItem button>
                <ListItemIcon></ListItemIcon>
                <ListItemText primary='dashboard' />
              </ListItem>
            </Link>
          </List>
          <List>
            <Link to='/admin/produits' className={classes.link}>
              <ListItem button>
                <ListItemIcon></ListItemIcon>
                <ListItemText primary='produits' />
              </ListItem>
            </Link>
          </List>
          <List>
            <Link to='/admin/commandes' className={classes.link}>
              <ListItem button>
                <ListItemIcon></ListItemIcon>
                <ListItemText primary='commandes' />
              </ListItem>
            </Link>
          </List>
          <Divider />
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <Switch>
            <Route exact path='/admin'>
              <Container>
                <Typography variant='h3' gutterBottom>
                  Dashboard
                </Typography>
                <Typography variant='body1' gutterBottom>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti id, quod asperiores explicabo non culpa recusandae
                  reiciendis quaerat. Repellat doloremque facilis, commodi
                  architecto est dolor ab, deserunt ducimus corporis blanditiis
                  quibusdam illum, iusto earum quas minima. Nam fugiat quia iste
                  iure, minus quam blanditiis velit neque quis, est voluptatem
                  sunt commodi quaerat voluptate nisi dolorem voluptatum
                  voluptates obcaecati tempore repellendus et maiores!
                  Repudiandae aperiam facere dolor omnis consequuntur nemo quos
                  saepe distinctio adipisci quis pariatur optio, nobis expedita
                  dignissimos voluptas odio quibusdam ad labore delectus qui
                  asperiores tempora blanditiis. Velit consectetur, placeat
                  delectus nihil facilis consequuntur consequatur cumque nemo
                  soluta? Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Corrupti id, quod asperiores explicabo non culpa
                  recusandae reiciendis quaerat. Repellat doloremque facilis,
                  commodi architecto est dolor ab, deserunt ducimus corporis
                  blanditiis quibusdam illum, iusto earum quas minima. Nam
                  fugiat quia iste iure, minus quam blanditiis velit neque quis,
                  est voluptatem sunt commodi quaerat voluptate nisi dolorem
                  voluptatum voluptates obcaecati tempore repellendus et
                  maiores! Repudiandae aperiam facere dolor omnis consequuntur
                  nemo quos saepe distinctio adipisci quis pariatur optio, nobis
                  expedita dignissimos voluptas odio quibusdam ad labore
                  delectus qui asperiores tempora blanditiis. Velit consectetur,
                  placeat delectus nihil facilis consequuntur consequatur cumque
                  nemo soluta?
                </Typography>
              </Container>
            </Route>
            <Route exact path='/admin/produits'>
              <Container>
                <Produits />
              </Container>
            </Route>
            <Route exact path='/admin/commandes'>
              <Container>
                <Commandes />
              </Container>
            </Route>
            <Route exact path='/admin/ajoutproduit'>
              <Container>
                <AjoutProduit />
              </Container>
            </Route>
            <Route
              exact
              path='/admin/commandes/:idcom'
              render={(props) => (
                <Container>
                  <EditeCommande {...props} />
                </Container>
              )}
            />
            <Route
              exact
              path='/admin/produits/:idproduit'
              render={(props) => (
                <Container>
                  <EditeProduit {...props} />
                </Container>
              )}
            />
          </Switch>
        </main>
      </Router>
    </div>
  );
}
