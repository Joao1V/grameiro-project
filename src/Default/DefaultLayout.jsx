import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const DefaultLayout = ({children}) => {

    return (
        <div className={'d-flex flex-column h-100'}>
            <Header/>
            <main className={'flex-grow-1'}>
                {children}
            </main>
            <Footer/>
        </div>
    );
};

export default DefaultLayout;
