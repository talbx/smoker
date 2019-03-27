import React, {Component} from "react";
import {Container, Content, Header, Icon, Input, Item, Text} from 'native-base'
import {connect} from "react-redux";
import {CHANGE_USERNAME} from "../state/actions";

class ProfileSettings extends Component {
    render() {
        return (
            <Container>
                <Header/>
                <Content>
                    <Item>
                        <Text>Username</Text>
                    </Item>
                    <Item>
                        <Icon active name='ios-person'/>
                        <Input onChangeText={(text) => this.props.changeUsername(text)}
                               placeholder='Icon Textbox'>{this.props.profile.username}</Input>
                    </Item>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        profile: state.settings.profile
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeUsername: (name) => dispatch({type: CHANGE_USERNAME, payload: name}),
    }
};

export const profileSettings = connect(mapStateToProps, mapDispatchToProps)(ProfileSettings);