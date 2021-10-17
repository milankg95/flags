import react, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Row, Col, Image } from 'react-bootstrap'
import styled from 'styled-components'
import { rgba, darken } from 'polished'
import colors from '../styles/colors'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom"

import FlagItem from './FlagItem'

const FlagItemWrapper = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 20px;
    background-color: ${rgba(colors.primaryColor, .7)};
    border-radius: 6px;
    min-height: 250px;

    -webkit-box-shadow: 0px 0px 2px 0px rgba(250,250,250,0.75);
    -moz-box-shadow: 0px 0px 2px 0px rgba(250,250,250,0.75);
    box-shadow: 0px 0px 2px 0px rgba(250,250,250,0.75);

    img {
        margin: 5px;
        -webkit-box-shadow: 0px 0px 2px 0px rgba(250,250,250,0.75);
        -moz-box-shadow: 0px 0px 2px 0px rgba(250,250,250,0.75);
        box-shadow: 0px 0px 2px 0px rgba(250,250,250,0.75);
    }

    &:hover {
        cursor: pointer;
        transition: .5s;
        background-color: ${colors.lightPrimary};
        -webkit-box-shadow: 0px 0px 5px 0px rgba(250,250,250,0.75);
        -moz-box-shadow: 0px 0px 5px 0px rgba(250,250,250,0.75);
        box-shadow: 0px 0px 5px 0px rgba(250,250,250,0.75);

        img {
            transition: .2s;
            -webkit-box-shadow: 0px 0px 2px 0px rgba(6,6,6,0.75);
            -moz-box-shadow: 0px 0px 2px 0px rgba(6,6,6,0.75);
            box-shadow: 0px 0px 2px 0px rgba(6,6,6,0.75);
        }

        h4 {
            transition: .3s;
            color: ${darken(.2, colors.primaryColor)};
        }
    }
`

const FlagItemTitle = styled.h4`
    color: ${colors.lightPrimary};
    text-align: center;
    text-decoration: none !important;
`

const Flags = () => {
    const [data, setData] = useState([])

    useEffect(async () => {
        const fetchedData = await axios(
          'https://restcountries.com/v3.1/all',
        );
     
        setData(fetchedData.data);
    }, [])

    console.log('data')
    console.log(data)
    console.log('data')

    return (
        <Container fluid>
                <Container>
                    <Row>
                        {data.map((val, key) => {
                            return (
                                <Col key={key} md="6" lg="4">
                                    <Link to={`/${val.cca3.toLowerCase()}`}>
                                        <FlagItemWrapper>
                                            <Image src={val.flags.png} rounded />
                                            <FlagItemTitle>{val.name.common}</FlagItemTitle>
                                        </FlagItemWrapper>
                                    </Link>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
        </Container>
    )
}

export default Flags