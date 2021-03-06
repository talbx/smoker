import React, {Component} from 'react';
import {connect} from "react-redux";
import {Body, Container, Content, Header, Left, ListItem, Right, Text, Title} from "native-base";

class AboutScreen extends Component {
    render() {
        return (
            <Container>
                <Header transparent>
                    <Title>About</Title>
                </Header>
                <Content>
                    <ListItem>
                        <Left>
                            <Text>App Name</Text>
                        </Left>
                        <Right>
                            <Text>{this.props.about.appName}</Text>
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>Version</Text>
                        </Left>
                        <Right>
                            <Text>{this.props.about.version}</Text>
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>Build No.</Text>
                        </Left>
                        <Right>
                            <Text>{this.props.about.build}</Text>
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>Developer</Text>
                        </Left>
                        <Right>
                            <Text>{this.props.about.developer}</Text>
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>Website</Text>
                        </Left>
                        <Right>
                            <Text>{this.props.about.website}</Text>
                        </Right>
                    </ListItem>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        about: state.about
    }
};

export default connect(mapStateToProps)(AboutScreen);