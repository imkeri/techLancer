import PropTypes from 'prop-types'
import SecondHeader from '../../header/SecondHeader'
import Footer from '../../footer'

const SecondSharedLayout = ({ children,  className = '' }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <SecondHeader/>
      <main className={className}>{children}</main>
   <Footer/>
    </div>
  )
}

SecondSharedLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}

export default SecondSharedLayout
