import React, {Component} from 'react';
import {Body, Button, Container, Content, Header, Icon, Left, ListItem, Right, Text} from 'native-base';
import {connect} from "react-redux";

class SettingsScreen extends Component {
    render() {
        return (
            <Container>
                <Header/>
                <Content>
                    <ListItem icon>
                        <Left>
                            <Button style={{backgroundColor: "#007AFF"}}>
                                <Icon name="ios-person"/>
                            </Button>
                        </Left>
                        <Body>
                        <Text>Profile</Text>
                        </Body>
                        <Right>
                            <Text>{this.props.settings.username}</Text>
                            <Icon name="arrow-forward"/>
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Button style={{backgroundColor: 'red'}}>
                                <Icon name="ios-calendar"/>
                            </Button>
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
                            <Button style={{backgroundColor: 'orange'}}>
                                <Icon name="ios-barcode"/>
                            </Button>
                        </Left>
                        <Body>
                        <Text>Cigs Per Day</Text>
                        </Body>
                        <Right>
                            <Text>{this.props.settings.cigarettesPerDay}</Text>
                            <Icon name="arrow-forward"/>
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Button style={{backgroundColor: 'orange'}}>
                                <Icon name="ios-filing"/>
                            </Button>
                        </Left>
                        <Body>
                        <Text>Cigs Per Pack</Text>
                        </Body>
                        <Right>
                            <Text>{this.props.settings.cigarettesPerPack}</Text>
                            <Icon name="arrow-forward"/>
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Button style={{backgroundColor: 'orange'}}>
                                <Icon name="ios-analytics"/>
                            </Button>
                        </Left>
                        <Body>
                        <Text>Brand</Text>
                        </Body>
                        <Right>
                            <Text>{this.props.settings.cigaretteBrand}</Text>
                            <Icon name="arrow-forward"/>
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Button style={{backgroundColor: 'orange'}}>
                                <Icon name="ios-pricetag"/>
                            </Button>
                        </Left>
                        <Body>
                        <Text>Price per Pack</Text>
                        </Body>
                        <Right>
                            <Text>{this.props.settings.pricePerPack}</Text>
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