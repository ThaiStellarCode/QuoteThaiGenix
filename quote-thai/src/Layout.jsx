import Footer from './components/Footer';

const Layout = ({ children }) => {
    return (
        <div className="relative min-h-screen">
            {children}
            {/* <Footer /> */}
        </div>
    );
};

export default Layout;
