import React, {Component} from "react";
import {Container, Content, Header, Icon, Input, Item} from 'native-base'
import {connect} from "react-redux";

class ProfileSettings extends Component {
    render() {
        return (
            <Container>
                <Header/>
                <Content>
                    <Item>
                        <Icon active name='home'/>
                        <Input placeholder='Icon Textbox'/>
                    </Item>
                    <Item>
                        <Input placeholder='Icon Alignment in Textbox'/>
                        <Icon active name='swap'/>
                    </Item>
                </Content>
            </Container>
        );
    }
};

const mapStateToProps = state => {
    return {
        settings: state.settings
    }
};

export const profileSettings = connect(mapStateToProps)(ProfileSettings);