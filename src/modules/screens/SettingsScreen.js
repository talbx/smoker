import React, {Component} from 'react';
import {Body, Title, Container, Content, Header, Icon, Left, ListItem, Right, Text} from 'native-base';
import {connect} from "react-redux";

class SettingsScreen extends Component {
    render() {
        return (
            <Container>
                <Header transparent>
                    <Title>Settings</Title>
                </Header>
                <Content>
                    <ListItem icon>
                        <Left>
                            <Icon name="ios-person"/>
                        </Left>
                        <Body>
                        <Text>Profile</Text>
                        </Body>
                        <Right>
                            <Text>{this.props.settings.profile.username}</Text>
                            <Icon onPress={() => this.props.navigation.navigate("ProfileSettings")}
                                  name="arrow-forward"/>
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon name="ios-calendar"/>
                        </Left>
                        <Body>
                        <Text>Stop Smoking Date</Text>
                        </Body>
                        <Right>
                            <Icon name="arrow-forward"/>
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon name="ios-barcode"/>
                        </Left>
                        <Body>
                        <Text>Cigs Per Day</Text>
                        </Body>
                        <Right>
                            <Text>{this.props.settings.smoking.cigarettesPerDay}</Text>
                            <Icon name="arrow-forward"/>
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon name="ios-filing"/>
                        </Left>
                        <Body>
                        <Text>Cigs Per Pack</Text>
                        </Body>
                        <Right>
                            <Text>{this.props.settings.smoking.cigarettesPerPack}</Text>
                            <Icon name="arrow-forward"/>
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon name="ios-analytics"/>
                        </Left>
                        <Body>
                        <Text>Brand</Text>
                        </Body>
                        <Right>
                            <Text>{this.props.settings.smoking.cigaretteBrand}</Text>
                            <Icon name="arrow-forward"/>
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon name="ios-pricetag"/>
                        </Left>
                        <Body>
                        <Text>Price per Pack</Text>
                        </Body>
                        <Right>
                            <Text>{this.props.settings.smoking.pricePerPack}</Text>
                            <Icon name="arrow-forward"/>
                        </Right>
                    </ListItem>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        settings: state.settings
    }
};

export const settingsScreen = connect(mapStateToProps)(SettingsScreen);