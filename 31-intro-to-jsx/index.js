// Intro to JSX

// This is a valid React Component
// It is just a function that takes an object *props* {} as an argument and returns React Elements
const Title = (props) => React.createElement('h1', null, props.text)

const Article = (props) => React.createElement('div', { className: 'article' }, [
  React.createElement('h2', null, props.title),
  React.createElement('img', { src: props.image, style: { width: '100px' } }),
  React.createElement('p', null, props.content),
])

const Navbar = props => React.createElement('div', { className: `ui inverted ${props.colour} menu` },
  React.createElement('a', { className: "item" },
    React.createElement('h2', { className: "ui header" }, [
      React.createElement('i', { className: `${props.icon} icon` }),
      React.createElement('div', { className: "content" }, props.header),
      React.createElement('div', { className: "sub header"}, props.subHeader)
    ])
  )
)

const NavbarJSX = props =>
  <div className={`ui inverted ${props.colour} menu`}>
    <a className='item'>
      <h2 className="ui header">
        <i className={`${props.icon} icon`}></i>
        <div className="content">
          {props.header}
        </div>
        <div className="sub header">
          {props.subHeader}
        </div>
      </h2>
    </a>
  </div>

const App = props => React.createElement('div', null, [
  // here we are just calling the Navbar function with the right props
  Navbar({ subHeader: 'This is kinda fun!', colour: 'blue', icon: 'react', header: 'My first React App!' }),
  // here calling the Navbar function using the JSX syntax instead, this is doing the same thing behind the scenes.
  // You can think of props here as just attributes of the Navbar element
  <Navbar subHeader="This is cool!" header="React rocks!" colour="yellow" icon="github" />,
  NavbarJSX({ subHeader: 'This is kinda fun!', colour: 'pink', icon: 'react', header: 'My first React App!' }),
  <Title text='Welcome to React!!!!!' />,
  Article({ title: 'Butterfly', image: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg', content: 'Fly away little butterfly!' }),
  Article({ title: 'Owl', image: 'https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/242ce817-97a3-48fe-9acd-b1bf97930b01/09-posterization-opt.jpg', content: "You're a hoot!" }),
  Article({ title: 'Swan', image: 'https://datarecovery.wondershare.com/uploads/image-3-4.jpg', content: "Quack!" }),
])


ReactDOM.render(
  // what to render
  <App />,
  // where to put it
  document.querySelector('#root')
)

