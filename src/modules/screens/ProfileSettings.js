import React, {Component} from "react";
import {Container, Content, Form, Header, Input, Item, Label} from 'native-base'
import {connect} from "react-redux";
import {CHANGE_USERNAME} from "../state/actions";

class ProfileSettings extends Component {
    render() {
        return (
            <Container>
                <Header/>
                <Content>
                    <Form>
                        <Item stackedLabel>
                            <Label>Username</Label>
                            <Input onChangeText={(text) => this.props.changeUsername(text)}
                                   placeholder='Icon Textbox'>{this.props.profile.username}</Input>
                        </Item>
                    </Form>
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