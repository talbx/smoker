import React, {Component} from 'react';
import {Body, Container, Content, Header, Icon, Left, ListItem, Right, Text, Title} from 'native-base';
import {connect} from "react-redux";

class SettingsScreen extends Component {
    render() {
        return (
            <Container>
                <Header transparent>
                    <Title>Settings</Title>
                </Header>
                <Content>
                    <ListItem onPress={() => this.props.navigation.navigate("ProfileSettings")} icon>
                        <Left>
                            <Icon name="ios-person"/>
                        </Left>
                        <Body>
                            <Text>Profile</Text>
                        </Body>
                        <Right>
                            <Text>{this.props.settings.profile.username}</Text>
                            <Icon name="arrow-forward"/>
                        </Right>
                    </ListItem>
                    <ListItem onPress={() => this.props.navigation.navigate("SmokingSettings")} icon>
                        <Left>
                            <Icon type="MaterialCommunityIcons" name="smoking"/>
                        </Left>
                        <Body>
                            <Text>Stop Smoking Date</Text>
                        </Body>
                        <Right>
                            <Text>{this.props.settings.smoking.stopSmokingDate.toDateString()}</Text>
                            <Icon name="arrow-forward"/>
                        </Right>
                    </ListItem>
                    <ListItem onPress={() => this.props.navigation.navigate("SmokingSettings")} icon>
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
                    <ListItem onPress={() => this.props.navigation.navigate("SmokingSettings")} icon>
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
                    <ListItem onPress={() => this.props.navigation.navigate("SmokingSettings")} icon>
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
                    <ListItem onPress={() => this.props.navigation.navigate("SmokingSettings")} icon>
                        <Left>
                            <Icon name="ios-pricetag"/>
                        </Left>
                        <Body>
                            <Text>Price per Pack</Text>
                        </Body>
                        <Right>
                            <Text>{this.props.settings.smoking.pricePerPack}€</Text>
                            <Icon name="arrow-forward"/>
                        </Right>
                    </ListItem>
                    <ListItem onPress={() => this.props.navigation.navigate("LevelsOverview")} icon>
                        <Left>
                            <Icon name="ios-cube"/>
                        </Left>
                        <Body>
                            <Text>Levels</Text>
                        </Body>
                        <Right>
                            <Text>{this.props.settings.profile.level}</Text>
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

export default connect(mapStateToProps)(SettingsScreen);