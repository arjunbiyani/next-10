


#Material UI 

Customize UI Styles 
Eg: Component Button 

Standard Way 
<Button style={{backgroudColor:purple;}}>

Via Hooks :

import {makeStyles } from  '@material-ui/core/styles'

const useStyles = makeStyles({
button:{
    color: "white",
    backgroundColor:"purplle"
}

});

const App = () => {
    const classes = useStyles()
    return(
        <Button className={classes.button}>
    )
}



#Material Custom themes 

import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const theme = createTheme({
  status: {
    danger: orange[500],
  },
});

 <ThemeProvider theme={theme}>
      <CustomCheckbox defaultChecked />
</ThemeProvider>