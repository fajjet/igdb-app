import React from 'react';
import 'styles/reset.css';
import 'styles/global.css';
import 'styles/fonts.css';

interface Props {
    children: React.ReactNode;
}

const Layout = (props: Props) => {
    return (
        <>
            {props.children}
        </>
    )
};

export default Layout;
