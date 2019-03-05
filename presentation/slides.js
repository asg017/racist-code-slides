import React from 'react';
import { Slide, Text, Heading,Link } from 'spectacle';
import { MDXProvider } from '@mdx-js/tag'
import components from './components';
import theme from './theme';

export const darkComponents = {
  ...components,
  h1: ({ children }) => <Heading size={1} textColor={theme.screen.colors.secondary}>{children}</Heading>,
  h2: ({ children }) => <Heading size={2} textColor={theme.screen.colors.secondary}>{children}</Heading>,
  h3: ({ children }) => <Heading size={3} textColor={theme.screen.colors.quaternary}>{children}</Heading>,
  h4: ({ children }) => <Heading size={4} textColor={theme.screen.colors.quaternary}>{children}</Heading>,
  h5: ({ children }) => <Heading size={5} textColor={theme.screen.colors.quaternary}>{children}</Heading>,
  h6: ({ children }) => <Heading size={6} textColor={theme.screen.colors.quaternary}>{children}</Heading>,
  p: ({ children, ...rest}) => {
    console.log(children, rest)
    return <Text textColor="white" {...rest}>{children}</Text>
  },
  a:  ({children, ...rest}) => <Link textColor={theme.screen.colors.blue} {...rest}>{children}</Link>,
}


export const DefaultSlide = ({ children, ...rest }) => (
  <Slide bgColor="black" {...rest}>
    <MDXProvider components={darkComponents}>{children}</MDXProvider>
  </Slide>
);

// CODE LAYOUT

export const CodeSlide = ({ children, ...rest }) => (
  <Slide bgColor="#1d1f21" {...rest}>
    <MDXProvider components={components}>{children}</MDXProvider>
  </Slide>
);
