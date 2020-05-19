/* eslint-disable react/no-unused-state */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import {
  Text, StyleSheet, View, Dimensions, TouchableOpacity, TouchableWithoutFeedback
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Modal from 'react-native-modal';
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import AcceptRequest from '../Requests/AcceptRequest';

const { height, width } = Dimensions.get('screen');

class RequestScreen extends Component {
  state = {
    activeModal: null,
    date: new Date(),
  }

  goBack = () => {
    const { navigation } = this.props;
    navigation.navigate('Home');
  }

  accept = () => {
    const requestId = global.requestId;
    const acceptor = global.userId;
    console.log(requestId);
    AcceptRequest(requestId, acceptor).then(res => {
      console.log(res);
      this.goBack();
    }).catch(err => console.log(err));
  
  }

  renderParking = () => (
    <TouchableWithoutFeedback>
      <View style={styles.parkings}>
        <View style={[styles.parking, styles.shadow]}>
          <View style={styles.hours}>
            <Text style={styles.hoursTitle}>BloodDonation</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ color: '#7D818A' }}>11.05.2020</Text>
            </View>
          </View>
          <View style={styles.parkingInfoContainer}>
            <View style={styles.parkingInfo}>
              <View style={styles.parkingIcon}>
                <Ionicons name="ios-star" size={16} color="#7D818A" />
                <Text style={{ marginLeft: 12 }}> 4.5</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.buy}
              onPress={() => this.setState({ activeModal: true })}
            >
              <View style={styles.buyTotal}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={styles.buyTotalPrice}>More</Text>
                </View>
              </View>
              <View style={styles.buyBtn}>
                <FontAwesome name="angle-right" size={16 * 1.75} color="#FFFFFF" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )

  renderModal() {
    const { activeModal } = this.state;

    if (!activeModal) return null;

    return (
      <Modal
        isVisible
        useNativeDriver
        style={styles.modalContainer}
        backdropColor="#C1BEC0"
        onBackButtonPress={() => this.setState({ activeModal: null })}
        onBackdropPress={() => this.setState({ activeModal: null })}
        onSwipeComplete={() => this.setState({ activeModal: null })}
      >
        <View style={styles.modal}>
          <View>
            <Text style={{ fontSize: 16 * 1.5 }}>
              BloodDonation
            </Text>
          </View>
          <View style={{ paddingVertical: 12 }}>
            <Text style={{ color: '#7D818A', fontSize: 16 * 1.1 }}>
              Need an urgent Blood Donation to Hospital
            </Text>
          </View>
          <View style={styles.modalInfo}>
            <View style={[styles.parkingIcon, { justifyContent: 'flex-start' }]}>
              <Ionicons name="ios-star" size={16 * 1.1} color="#7D818A" />
              <Text style={{ fontSize: 16 * 1.15 }}>4.5</Text>
            </View>
            <View style={[styles.parkingIcon, { justifyContent: 'flex-start' }]}>
              <Ionicons name="ios-pin" size={16 * 1.1} color="#7D818A" />
              <Text style={{ fontSize: 16 * 1.15 }}>Available</Text>
            </View>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 15, color: '#A5A5A5', paddingBottom: 5 }}>Information about Request</Text>
          </View>
          <View style={{ flexDirection: 'row', bottom: 5 }}>
            <Text style={{ fontSize: 15, color: 'red' }}>Scheduled for: </Text>
            <Text>11.05.2020</Text>
          </View>

          <View style={{ flexDirection: 'row', bottom: 5 }}>
            <Text style={{ fontSize: 15, color: 'red' }}>Address: </Text>
            <Text>Ehmedli</Text>
          </View>

          <View>
            <TouchableOpacity style={styles.payBtn} onPress={() => this.goBack()}>
              <Text style={styles.payText}>
                Go Back
              </Text>
              <FontAwesome name="angle-right" size={16 * 1.75} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
          {
            !global.isAccepted ? (
              <View style={{marginTop: 10}}>
                <TouchableOpacity style={styles.payBtn} onPress={() => this.accept()}>
                  <Text style={styles.payText}>
                    Accept
                  </Text>
                </TouchableOpacity>
              </View>
            ) : (null)
          }
        </View>
      </Modal>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 40.376931,
            longitude: 49.823895,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker coordinate={{ latitude: 40.376931, longitude: 49.823895 }}>
            <View style={styles.myMarker}>
              <View style={styles.myMarkerDot} />
            </View>
          </Marker>

          <Marker coordinate={{ latitude: 40.379473, longitude: 49.831744 }}>
            <MaterialCommunityIcons name="home-circle" size={27} />
          </Marker>

        </MapView>
        {this.renderParking()}
        {this.renderModal()}
      </View>
    );
  }
}

export default RequestScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 12 * 2,
    paddingTop: 12 * 2.5,
    paddingBottom: 12 * 1.5,
  },
  headerTitle: {
    color: '#7D818A',
  },
  headerLocation: {
    fontSize: 16,
    fontWeight: '500',
    paddingVertical: 12 / 3,
  },
  map: {
    flex: 3,
  },
  parkings: {
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
    paddingBottom: 12 * 2,
  },
  parking: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    padding: 12,
    marginHorizontal: 12 * 2,
    width: width - (24 * 2),
  },
  buy: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 12 * 1.5,
    paddingVertical: 12,
    backgroundColor: '#D83C54',
    borderRadius: 6,
  },
  buyTotal: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  buyTotalPrice: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
    paddingLeft: 12 / 4,
  },
  buyBtn: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  marker: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12 * 2,
    paddingVertical: 12,
    paddingHorizontal: 12 * 2,
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  markerPrice: { color: '#D83C54', fontWeight: 'bold', },
  markerStatus: { color: '#7D818A' },
  shadow: {
    shadowColor: '#3D4448',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  active: {
    borderColor: '#3D4448',
  },
  hours: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 12 / 2,
    justifyContent: 'space-evenly',
  },
  hoursTitle: {
    fontSize: 12,
    fontWeight: '500',
  },
  hoursDropdown: {
    borderRadius: 12 / 2,
    borderColor: '#C1BEC0',
    borderWidth: 1,
    padding: 12,
    marginRight: 12 / 2,
  },
  hoursDropdownOption: {
    padding: 5,
    fontSize: 16 * 0.8,
  },
  hoursDropdownStyle: {
    marginLeft: -12,
    paddingHorizontal: 12 / 2,
    marginVertical: -(12 + 1),
  },
  parkingInfoContainer: { flex: 1.5, flexDirection: 'row' },
  parkingInfo: {
    justifyContent: 'space-evenly',
    marginHorizontal: 12 * 1.5,
  },
  parkingIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalContainer: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  modal: {
    flexDirection: 'column',
    height: height * 0.63,
    padding: 12 * 2,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  modalInfo: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: '#C1BEC0',
    borderBottomColor: '#C1BEC0',
  },
  modalHours: {
    paddingVertical: height * 0.11,
  },
  modalHoursDropdown: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
  },
  payBtn: {
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12 * 1.5,
    backgroundColor: '#D83C54',
  },
  payText: {
    fontWeight: '600',
    fontSize: 12 * 1.5,
    color: '#FFFFFF',
  },
  myMarker: {
    zIndex: 2,
    width: 60,
    height: 60,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(51, 83, 251, 0.2)'
  },
  myMarkerDot: {
    width: 12,
    height: 12,
    borderRadius: 12,
    backgroundColor: '#3353FB'
  },
  profile: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#777777',
  },
  imgView: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  img: {
    height: 70,
    width: 70,
    borderRadius: 20,
  },
  profileText: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    paddingBottom: 1,
    color: 'black',
    textAlign: 'left',
  },
  email: {
    fontSize: 13,
    color: 'black',
    textAlign: 'left',
  },
});
