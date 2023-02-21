import './root.css'
import { Outlet } from 'react-router-dom'

import Header from "../Components/header/Header";
import Wrapper from "../Components/Wrapper/Wrapper";
import Page from '../Components/Page/Page';

export default function Root() {
    return (
        <>
            <Header />
            <Wrapper>
                <Page>
                    <Outlet />
                </Page>
            </Wrapper>

        </>
    )
}