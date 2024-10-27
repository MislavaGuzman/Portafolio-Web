import { createTheme } from  '@mui/material' ;
export const portafolioTheme = createTheme(

  {  
    colorSchemes : {
     light : {
       palette : {
         text : {
           primary :  'rgba(72, 19, 219, 0.87)' ,
           secondary : 'rgba(72, 19, 219, 0.6)' ,
           disabled :  'rgba(72, 19, 219, 0.38)' ,
           _states : {
             hover :  'rgba(72, 19, 219, 0.04)' ,
             selected :  'rgba(72, 19, 219, 0.08)' ,
             focus :  'rgba(72, 19, 219, 0.12)' ,
             focusVisible : 'rgba(72, 19, 219, 0.3) '
          }
        },
         primary : {
           contrastText :  '#FFFFFF' ,
           main :  '#2196F3' ,
           _states : {
             focusVisible :  'rgba(33, 150, 243, 0.3)' ,
             outlinedBorder :  'rgba(33, 150, 243, 0.5)' 
          }
        },
         action : {
           active :  'rgba(72, 19, 219, 0.56)' ,
           hover :  'rgba(72, 19, 219, 0.04)' ,
           selected :  'rgba(72, 19, 219, 0.08)' ,
           focus :  'rgba(72, 19, 219, 0.12)' ,
           disabled :  'rgba(72, 19, 219, 0.38)' ,
           disabledBackground :  'rgba(72, 19, 219, 0.12) '
        },
         common : {
           white_states : {
             main :  '#FFFFFF' ,
             focusVisible :  'rgba(255, 255, 255, 0.3) '
          }
        },
         secondary : {
           main :  '#9C27B0' ,
           _states : {
             focusVisible :  'rgba(156, 39, 176, 0.3)' ,
             outlinedBorder :  'rgba(156, 39, 176, 0.5)' 
          }
        },
         error : {
           main :  '#D32F2F' ,
           _states : {
             focusVisible :  'rgba(211, 47, 47, 0.3)' ,
             outlinedBorder :  'rgba(211, 47, 47, 0.5)' 
          }
        },
         warning : {
           main :  '#EF6C00' ,
           dark :  '#E65100' ,
           _states : {
             focusVisible :  'rgba(239, 108, 0, 0.3)' ,
             outlinedBorder :  'rgba(239, 108, 0, 0.5)' 
          }
        },
         info : {
           main :  '#0288D1' ,
           _states : {
             outlinedBorder : 'rgba(2, 136, 209, 0.5)' 
          }
        },
         success : {
           main : '#2E7D32',
           _states : {
             focusVisible :  'rgba(46, 125, 50, 0.3)' ,
             outlinedBorder :  'rgba(46, 125, 50, 0.5)' 
          }
        }
      }
    },
  
  } 
  
  }

    
)