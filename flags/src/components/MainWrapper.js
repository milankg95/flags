import react from 'react'
import styled from 'styled-components'

import Home from './Home'
import About from './About'
import Flags from './Flags'
import FlagItem from './FlagItem'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import colors from '../styles/colors'

const MainWrapperStyled = styled.section`
    padding-top: 80px;
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
            <Route path="/flags">
                <Flags />
            </Route>
            <Route path="/:id" children={<FlagItem />} />
        </Switch>
    </MainWrapperStyled>
}

export default MainWrapper