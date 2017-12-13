const switchOptions = [
  {
    id: 'lineNumbers',
    title: 'Line Numbers',
    trueValue: true,
    falseValue: false,
    value: true
  },
  {
    id: 'readOnly',
    title: 'Read Only',
    trueValue: false,
    falseValue: true,
    value: true
  }
];
const selectOptions = [
  {
    id: 'tabSize',
    title: 'Tab Size',
    options: ['2', '4', '6', '8'],
    value: 2
  },
  {
    id: 'mode',
    title: 'Language',
    options: ['javascript', 'xml', 'markdown', 'php', 'python', 'ruby'],
    value: 'javascript'
  },
  {
    id: 'theme',
    title: 'Select themes',
    options: [
      'default',
      'zenburn',
      'solarized',
      'rubyblue',
      'paraiso-dark',
      'midnight',
      'material',
      'hopscotch',
      'twilight'
    ],
    value: 'zenburn'
  }
];

const defaultValues = {
  basic: `const component = {
    name: 'Isomorphic',
    author: 'MobileFirst Team',
    website: 'https://autozone.com'
};`,
  javascript: `const component = {
    name: 'Isomorphic',
    author: 'MobileFirst Team',
    website: 'https://autozone.com'
};`,
  markdown: `# Isomorphic
###This is a MobileFirst Team production
[have a look](https://autozone.com)
  `,
  xml: `<isomprphic>
    <to>Tove</to>
    <name>Isomorphic</name>
    <author>MobileFirst Team</author>
    <website>autozone.com</website>
</isomprphic>`,
  php: `<html>
 <head>
  <title> v</title>
 </head>
 <body>
 <h1>https://autozone.com</h1>
 <p>This is a MobileFirst Team production</p>
 <a href="https://autozone.com">visit ou site</a>
 </body>
</html>
`,
  python: `
print("Isomorphic")
print("This is a MobileFirst Team production")
print("visit us https://autozone.com ")
`,
  ruby: `rint "Isomorphic"
print "This is a MobileFirst Team production"
print "visit us https://autozone.com "
`
};

export { switchOptions, selectOptions, defaultValues };
