import React, {Component} from "react";
import {Container, Content, Form, Header, Icon, Input, Item, Label, Picker, Title} from 'native-base'
import {connect} from "react-redux";
import {CHANGE_GENDER, CHANGE_USERNAME} from "../../state/actions";
import {Gender} from "../dashboard/model/Gender";

class ProfileSettings extends Component {
    render() {
        return (
            <Container>
                <Header transparent>
                    <Title>Profile Settings</Title>
                </Header>
                <Content>
                    <Form>
                        <Item stackedLabel>
                            <Label>Username</Label>
                            <Input onChangeText={(text) => this.props.changeUsername(text)}
                                   placeholder='Icon Textbox'>{this.props.profile.username}</Input>
                        </Item>
                        <Item stackedLabel>
                            <Label>Gender</Label>
                            <Picker
                                mode="dropdown"
                                iosHeader="Gender"
                                iosIcon={<Icon name="arrow-down"/>}
                                style={{width: undefined}}
                                selectedValue={this.props.profile.gender}
                                onValueChange={(gender) => this.props.changeGender(gender)}>
                                <Picker.Item label="Male" value={Gender.MALE}/>
                                <Picker.Item label="Female" value={Gender.FEMALE}/>
                            </Picker>
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
        changeGender: (gender) => dispatch({type: CHANGE_GENDER, payload: gender}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSettings);