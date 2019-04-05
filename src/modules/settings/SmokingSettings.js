import React, {Component} from "react";
import {Container, Content, DatePicker, Form, Header, Icon, Input, Item, Label, Picker, Title} from "native-base";
import {
    CHANGE_CIGARETTE_BRAND,
    CHANGE_CIGARETTES_PER_DAY,
    CHANGE_CIGARETTES_PER_PACK, CHANGE_PRICE_PER_PACK,
    CHANGE_STOP_SMOKING_DATE
} from "../../state/actions";
import {connect} from "react-redux";
import {TextInput} from "react-native";

class SmokingSettings extends Component {
    render() {
        return (
            <Container>
                <Header transparent>
                    <Title>Smoking Settings</Title>
                </Header>
                <Content>
                    <Form>
                        <Item stackedLabel>
                            <Label>Stop Smoking Date</Label>
                            <DatePicker
                                defaultDate={this.props.smoking.stopSmokingDate}
                                minimumDate={new Date(2010, 1, 1)}
                                maximumDate={new Date()}
                                locale={"de"}
                                timeZoneOffsetInMinutes={undefined}
                                modalTransparent={false}
                                animationType={"fade"}
                                androidMode={"default"}
                                placeHolderText={this.props.smoking.stopSmokingDate.toDateString()}
                                textStyle={{color: "black"}}
                                placeHolderTextStyle={{color: "#d3d3d3"}}
                                onDateChange={date => this.props.updateStopSmokingDate(date)}
                                disabled={false}
                            />
                        </Item>
                        <Item stackedLabel>
                            <Label>Cigarettes Per Day</Label>
                            <Input onChangeText={(text) => this.props.changeCigsPerDay(text)}>
                                {this.props.smoking.cigarettesPerDay}</Input>
                        </Item>
                        <Item stackedLabel>
                            <Label>Brand</Label>
                            <Picker
                                mode="dropdown"
                                iosHeader="Brand"
                                iosIcon={<Icon name="arrow-down"/>}
                                style={{width: undefined}}
                                selectedValue={this.props.smoking.cigaretteBrand}
                                onValueChange={(brand) => this.props.updateBrand(brand)}>

                                <Picker.Item label="Gauloises" value="Gauloises"/>
                                <Picker.Item label="L&M" value="L&M"/>
                                <Picker.Item label="Marlboro" value="Marlboro"/>
                                <Picker.Item label="Rothaende" value="Rotheande"/>
                                <Picker.Item label="Pall Mall Red" value="Pall Mall Red"/>
                            </Picker>
                        </Item>
                        <Item stackedLabel>
                            <Label>Cigarettes Per Pack</Label>
                            <Input onChangeText={(text) => this.props.changeCigsPerPack(text)}>
                                {this.props.smoking.cigarettesPerPack}</Input>
                        </Item>
                        <Item stackedLabel>
                            <Label>Price per Pack</Label>
                            <TextInput keyboardType='numeric'
                            onChangeText={(price) => this.props.changePricePerPack(price)}>
                                {this.props.smoking.pricePerPack}
                            </TextInput>
                        </Item>
                    </Form>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        smoking: state.settings.smoking
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateStopSmokingDate: (date) => dispatch({type: CHANGE_STOP_SMOKING_DATE, payload: date}),
        updateBrand: (brand) => dispatch({type: CHANGE_CIGARETTE_BRAND, payload: brand}),
        changeCigsPerDay: (cigs) => dispatch({type: CHANGE_CIGARETTES_PER_DAY, payload: cigs}),
        changeCigsPerPack: (cigs) => dispatch({type: CHANGE_CIGARETTES_PER_PACK, payload: cigs}),
        changePricePerPack: (price) => dispatch({type: CHANGE_PRICE_PER_PACK, payload: price})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SmokingSettings);