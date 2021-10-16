import react from 'react'
import styled from 'styled-components'

import Home from './Home'
import About from './About'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const MainWrapperStyled = styled.section`
    margin-top: 60px;
`

const MainWrapper = () => {
    return <MainWrapperStyled>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/about">
                <About />
            </Route>
        </Switch>
    </MainWrapperStyled>
}

export default MainWrapper