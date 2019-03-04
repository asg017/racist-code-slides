import createTheme from "../../createTheme";

const colors = {
  white: '#fff',
  orange: "#f5ab35",
  blue: "#00e0e0",
  darkBlue: "#007acc",
}
colors['primary'] = colors.orange
  colors['secondary'] = colors.white
  colors['tertiary'] = colors.darkBlue
  colors['quaternary'] = colors.orange // for progress

const theme = createTheme(colors, {
    primary: "Montserrat",
    secondary: "Helvetica"
  }, {
    components: {
      heading: {
        h1: {
          fontSize: '3.5rem',
          textAlign:'left'
        },
        h2: {
          fontSize: '3.25rem',
        },
        h3: {
          fontSize: '3rem',
        },
        h4: {
          fontSize: '2rem',
        },
        h5: {
          fontSize: '1.5rem',
        },
        h6: {
          fontSize: '1.25rem',
        }
      },
      codePane: {
        fontSize: '2rem'
      }
    }
  });

export default theme;
