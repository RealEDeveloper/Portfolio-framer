import "./Header.scss"

const Header = () => {

    const Items =["HomePage","Services","Portfolio","Contact","About"]
  return (
    <div className ="header">
        {Items.map((item) =>(<a href ={`#${item}`} className = "active-block">{item}</a>))}
     
    </div>
  )
}

export default Header
