import React, {useRef, useState} from 'react';
import {FlatList, Modal} from 'react-native';

import {
  Wrapper,
  Header,
  Left,
  Right,
  Container,
  Space,
  Row,
  Column,
  H1,
  H2,
  Footer,
  FloatingLabelInput,
  Picker,
  Btn,
  IconBtn,
} from '../utils';
import sample_data from '../../sample_data';
import countries from '../../countries';
import {AddressItem} from '../reuse/AddressItem';

export default function Address(props) {
  const fnameRef = useRef(null);
  const companyRef = useRef(null);
  const add1Ref = useRef(null);
  const emailRef = useRef(null); 
  const phoneRef = useRef(null);
  const zipRef = useRef(null);
  const cityRef = useRef(null);
  const [selected, setSelected] = useState('');
  const [fullname, setFullname] = useState('');
  const [company, setCompany] = useState('');
  const [addr1, setAddr1] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');
  const [zip, setZip] = useState(''); 
  const [showAddressModal, setShowAddressModal] = useState(false);

  const focusNextField = (field) => {
    if (inputs[field] !== undefined) {
      inputs[field].focus();
    }
  };
  const addAddress = () => {};
  const footer = (
    <Footer>
      <Btn
        label={'Proceed to Payment'}
        onPress={() => this.props.navigation.navigate('Payment')}
      />
    </Footer>
  );

  return (
    <Wrapper footer={footer}>
      <Header>
        <Left>
          <IconBtn
            icon={global.backIcon}
            onPress={() => props.navigation.goBack()}
            style={{marginLeft: -10}}
          />
        </Left>
        <Right>
          <IconBtn
            icon={'plus'}
            onPress={() => setShowAddressModal(true)}
            style={{marginRight: -10}}
          />
        </Right>
      </Header>
      <Container>
        <H1>Address</H1>

        <FlatList
          data={sample_data.addresses}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <AddressItem
              onPress={(item) => setSelected(item.id)}
              item={item}
              selected={item.id == selected}
            />
          )}
        />
      </Container>

      <Modal animationType="slide" visible={showAddressModal}>
        <Wrapper>
          <Header>
            <Left>
              <IconBtn
                icon={'x'}
                onPress={() => setShowAddressModal(false)}
                style={{marginLeft: -10}}
              />
            </Left>
          </Header>

          <Container>
            <H2>Add New Address</H2>

            <FloatingLabelInput
              label="Full Name"
              onChangeText={(text) => setFullname(text)}
              returnKeyType={'next'}
              value={fullname}
              onSubmitEditing={() => {
                fnameRef.current.focus();
              }}
            />

            <FloatingLabelInput
              label="Company Name (optional)"
              onChangeText={(text) => setCompany(text)}
              returnKeyType={'next'}
              value={company}
              ref={fnameRef}
              onSubmitEditing={() => {
                companyRef.current.focus();
              }}
            />

            <FloatingLabelInput
              label="Email"
              onChangeText={(text) => setEmail(text)}
              returnKeyType={'next'}
              value={email}
              ref={companyRef}
              onSubmitEditing={() => {
                compemailRefanyRef.current.focus();
              }}
            />

            <FloatingLabelInput
              label="Address"
              onChangeText={(text) => setAddr1(text)}
              returnKeyType={'next'}
              value={addr1}
              ref={emailRef}
              onSubmitEditing={() => {
                add1Ref.current.focus();
              }}
            />

            <Row>
              <Column>
                <FloatingLabelInput
                  label="City"
                  onChangeText={(text) => setCity(text)}
                  returnKeyType={'next'}
                  value={city}
                  ref={add1Ref}
                  onSubmitEditing={() => {
                    cityRef.current.focus();
                  }}
                />
              </Column>

              <Column>
                <FloatingLabelInput
                  label="Zip"
                  onChangeText={(text) => setZip(text)}
                  returnKeyType={'next'}
                  value={zip}
                  ref={cityRef}
                  onSubmitEditing={() => {
                    zipRef.current.focus();
                  }}
                />
              </Column>
            </Row>

            <Row>
              <Column>
                <Picker
                  label="Country"
                  onChangeItem={(item) => setCountry(item.label)}
                  returnKeyType={'next'}
                  value={country}
                
                  items={countries}
                />
              </Column>

              <Column>
                <FloatingLabelInput
                  label="State"
                  onChangeText={(text) => setState(text)}
                  returnKeyType={'next'}
                  value={state}
                  ref={zipRef}
                  onSubmitEditing={() => {
                    phoneRef.current.focus();
                  }}
                />
              </Column>
            </Row>

            <FloatingLabelInput
              label="Phone"
              onChangeText={(text) => setPhone(text)}
              value={phone}
              returnKeyType={'done'}
              ref={phoneRef}
            />

            <Space />

            <Btn label={'Add Shipping Address'} onPress={() => addAddress()} />
          </Container>
        </Wrapper>
      </Modal>
    </Wrapper>
  );
}
