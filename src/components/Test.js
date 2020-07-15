import React, { useState } from 'react'
import styled from 'styled-components'

function Test() {
    const [opened, setOpened] = useState(false)

    const Circle = styled.circle`
        fill: #DF9047;
        transition: .2s
    `
    const Circle1 = styled.circle`
    fill: #DF9047;
    transition: .2s
    `
    const Circle2 = styled.circle`
    fill: #DF9047;
    transition: .2s
    `
    const Circle3 = styled.circle`
    fill: #DF9047;
    transition: .2s
    `

    const Button = styled.div`
        background-color: #fff;
        justify-content: center;
        position: absolute;
        left: 45%;
        margin-top: 20%;
        border: 2px solid #DF9047;
        border-radius: 30px;
        color: #DF9047;
        width: 203px;
        height: 1.7em;
        font-size: 1.1em;
        display: flex;
        flex-direction: row;
        transition: .2s;      
        &:hover ${Circle}{
            fill: #FFFFFF
        }
        &:hover{
            transition: .2s;
            background-color: #DF9047;
            color: #FFFFFF
        }
        `
    const Text = styled.div`
        padding-top: 3px;
    `

    const CircleSvg = styled.svg`
        position:absolute;
        margin-left: 120px;
    `
    const CircleSvg2 = styled.svg`
    position:absolute;
    margin-left: -30px;
    `

    const Blur = styled.div`
        position:fixed;
        width: 220px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 22px;
        height: ${opened? "140px" : "65px"};
        background-size: cover;
        filter: blur(9px);
        transform: scale(1.1); 
        margin:-9px;
        z-index: -10;
    `

    const Center = styled.div`
        position: absolute;
        top:30%;
        left:45%;
    `
    const Elements = styled.ul`
        position: absolute;
        z-index: -1;
        background-color: #fff;
        left: 2px;
        width: 164px;
        padding-top: 25px;
        height: 95px;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
    `
    const ListEl = styled.li`
        list-style-type: none;
        position: absolute;
        padding-top: 1px;
        width: 77%;
        left: 0;
        padding-left: 3rem;
        padding-bottom: 3px;
        font-size: 1.1em;
        transition: .3s;
        &:hover{
            background-color: #DF9047;
        }
        &:hover ${Circle1}{
            fill: #fff;
        }
    `
    const ListEl2 = styled.li`
        list-style-type: none;
        position: absolute;
        padding-top: 3px;
        width: 77%;
        left: 0;
        margin-top: 30px;
        padding-left: 3rem;
        padding-bottom: 3px;
        font-size: 1.1em;
        transition: .3s;
        &:hover{
            background-color: #DF9047;
        }
        &:hover ${Circle2}{
            fill: #fff;
        }
    `
    const ListEl3 = styled.li`
        list-style-type: none;
        position: absolute;
        padding-top: 3px;
        width: 77%;
        left: 0;
        margin-top: 60px;
        padding-left: 3rem;
        padding-bottom: 9.1px;
        font-size: 1.1em;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
        transition: .3s;
        &:hover{
            background-color: #DF9047;
        }
        &:hover ${Circle3}{
            fill: #fff;
        }
    `

    return (
     <>
     <Center>
        <Blur />
        <Button onClick={() => setOpened(!opened)}>   
            <Text>
            Title Title
            </Text>
            <CircleSvg width={100} height={40}>
             <Circle cx="9" cy="15" r="8.3"/>
            </CircleSvg> 
        </Button> 
        {opened && <Elements>
                    <ListEl>
                    <CircleSvg2 width={100} height={40}>
                        <Circle1 cx="9" cy="13" r="8.3"/>
                    </CircleSvg2> 
                        Кнопка 1
                    </ListEl>
                    <ListEl2>
                    <CircleSvg2 width={100} height={40}>
                        <Circle2 cx="9" cy="13" r="8.3"/>
                    </CircleSvg2> 
                        Кнопка 2
                    </ListEl2>
                    <ListEl3>
                    <CircleSvg2 width={100} height={40}>
                        <Circle3 cx="9" cy="13" r="8.3"/>
                    </CircleSvg2> 
                        Кнопка 3
                    </ListEl3>
        </Elements>}
        </Center>
    </>
    )
}

export default Test
