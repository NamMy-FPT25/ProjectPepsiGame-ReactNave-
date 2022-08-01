import { View, Text, Image, StyleSheet, Button, Alert, TouchableOpacity, StatusBar, ScrollView, Modal, Pressable } from 'react-native'
import Image_pepsi  from '../../asset/images/cans_pepsi.png';
import React, { useState } from 'react'
import {Ionicons, Feather} from "@expo/vector-icons";
import CustomInput from '../../components/CustomInput';
import { useNavigation } from '@react-navigation/native';
import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
import { render } from 'react-native-web';
import {useForm} from 'react-hook-form';
const exchangeGift = 'ĐỔI QUÀ';
const myGift = 'QUÀ CỦA TÔI';

const DetailGift = () => {
    
    const navigation = useNavigation();
    const [page, setPage] = useState(exchangeGift);
  
    const onBackPressed = () =>{
        // console.warn("Hướng dẫn");
        navigation.navigate('HomePage');
    }
    
    const twoOptionAlert = () =>{
        Alert.alert(
          // Title
          'Bạn có muốn Đăng xuất không?',
          // Body
          'Choose option',
          [
            {
              text: 'Đăng xuất', 
              onPress: () => {
                // console.warn("SignIn")
                navigation.navigate('SignIn');
              }
            },
            {
              text: 'Hủy',
              onPress: () => {
                console.log('Hủy');
              }
            }
          ]
        )
    }

  return (
    <View >
      <Ionicons style = {styles.icon_back} name="arrow-back" size={32} color="#6699CC" onPress={onBackPressed}/>
      <Ionicons style = {styles.icon} name="exit" size={40} color="#6699CC" onPress={twoOptionAlert}/>
      <View style={{marginTop:88, justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontSize: 22, fontWeight: '600'}}>Chi tiết quà tặng</Text>
      </View>
      <StatusBar barStyle='light-content'/>
      <NavComponent page = {page} setPage = {setPage}/>

      <View style={{height: '100%', width: '100%', marginTop:164}}>
        {/* chuyển đổi view */}
        {page === exchangeGift? <ExchangeGiftComponent /> : null}
        {page === myGift? <MyGiftComponent /> :null}
      </View>
      
    </View>
  )
}

const MyGiftComponent = () => {
  return (
    <ScrollView style={{height: '100%', width: '100%', bottom: 44}}>
      <View style={styles.boxes}>
        <View style={styles.item}>
          <View style={styles.inner}>
            <Image source={require("../../asset/images/hatpepsi.png")} style={styles.image} resizeMode = "contain"/>
            <Text style={{fontSize: 18, color: '#3399FF'}}>Pepsi Bucket Hat</Text>
            <Text style={{fontSize: 14, color: '#444444', marginTop: 8}}>Trạng thái:{' '}<Text 
                  style={{color: '#00CC00', fontSize: 14, fontStyle: 'normal'}}>Đã nhận</Text></Text>
          </View>
        </View>

        <View style={styles.item}>
          <View style={styles.inner}>
            <Image source={require("../../asset/images/shirtpepsi.png")} style={styles.image} resizeMode = "contain"/>
            <Text style={{fontSize: 18, color: '#3399FF'}}>Pepsi Jacket</Text>
            <Text style={{fontSize: 14, color: '#444444', marginTop: 8}}>Trạng thái:{' '}<Text 
                  style={{color: '#FF3300', fontSize: 14, fontStyle: 'normal'}}>Chưa nhận</Text></Text>
          </View>
        </View>

        <View style={styles.item}>
          <View style={styles.inner}>
            <Image source={require("../../asset/images/handbagpepsi.png")} style={styles.image} resizeMode = "contain"/>
            <Text style={{fontSize: 18, color: '#3399FF'}}>Pepsi Tote Bag</Text>
            <Text style={{fontSize: 14, color: '#444444', marginTop: 8}}>Trạng thái:{' '}<Text 
                  style={{color: '#00CC00', fontSize: 14, fontStyle: 'normal'}}>Đã nhận</Text></Text>
          </View>
        </View>

        <View style={styles.item}>
          <View style={styles.inner}>
            <Image source={require("../../asset/images/Thermostats.png")} style={styles.image} resizeMode = "contain"/>
            <Text style={{fontSize: 18, color: '#3399FF'}}>Pepsi Tumbler</Text>
            <Text style={{fontSize: 14, color: '#444444', marginTop: 8}}>Trạng thái:{' '}<Text 
                  style={{color: '#FF3300', fontSize: 14, fontStyle: 'normal'}}>Chưa nhận</Text></Text>
          </View>
        </View>

      </View>
    </ScrollView>
  );
}

const ExchangeGiftComponent = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const {control, formState: {errors},} = useForm();

  return(
    <ScrollView showsVerticalScrollIndicator={false} style={{height: '100%', width: '100%', bottom: 44}}>
      <Text style={styles.number}>700</Text>
      <Text style={styles.text}>Số coins hiện tại của bạn</Text>
      <View style={styles.centeredView}>
        
    </View>
    

    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible1}
        onRequestClose={() => {
          Alert.alert("Thông báo");
          setModalVisible1(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView1}>
            
            <Text style={{fontSize: 24, color: '#FFCC33', marginStart: 64, fontStyle: 'normal'}}>Thành Công</Text>
            <Text style={{fontSize: 18, color: 'white', fontStyle: 'normal', marginTop: 14}}>Chúc mừng bạn đã nhận được quà từ {' '}<Text style={{color: '#FFCC66', fontSize: 24}}>Pepsi Tết</Text></Text>
          </View>
          <Feather name="x-circle" size={32} color="red" onPress={() => setModalVisible1(!modalVisible1)}/>
        </View>
      </Modal>
  
      <View style={styles.boxes}>
        <View style={styles.item}>
          <View style={styles.inner}>
            <Image source={require("../../asset/images/hatpepsi.png")} style={styles.image} resizeMode = "contain"/>
            <Text style={{fontSize: 16, color: '#3399FF'}}>Pepsi Bucket Hat</Text>
            <Text style={{fontSize: 12, color: '#444444'}}>Còn lại: 600</Text>
            <Pressable
              style={[styles.button1, styles.buttonOpen]}
              onPress={() => setModalVisible(true)}>
              <Text style={styles.textStyle}>Đổi quà</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.item}>
          <View style={styles.inner}>
            <Image source={require("../../asset/images/shirtpepsi.png")} style={styles.image} resizeMode = "contain"/>
            <Text style={{fontSize: 16, color: '#3399FF'}}>Pepsi Jacket</Text>
            <Text style={{fontSize: 12, color: '#444444'}}>Còn lại: 10</Text>
            <Pressable
              style={[styles.button1, styles.buttonOpen]}
              onPress={() => setModalVisible(true)}>
              <Text style={styles.textStyle}>Đổi quà</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.item}>
          <View style={styles.inner}>
            <Image source={require("../../asset/images/handbagpepsi.png")} style={styles.image} resizeMode = "contain"/>
            <Text style={{fontSize: 16, color: '#3399FF'}}>Pepsi Tote Bag</Text>
            <Text style={{fontSize: 12, color: '#444444'}}>Còn lại: 800</Text>
            <Pressable
              style={[styles.button1, styles.buttonOpen]}
              onPress={() => setModalVisible(true)}>
              <Text style={styles.textStyle}>Đổi quà</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.item}>
          <View style={styles.inner}>
            <Image source={require("../../asset/images/Thermostats.png")} style={styles.image} resizeMode = "contain"/>
            <Text style={{fontSize: 16, color: '#3399FF'}}>Pepsi Tumbler</Text>
            <Text style={{fontSize: 12, color: '#444444'}}>Còn lại: 500</Text>
            <Pressable
              style={[styles.button1, styles.buttonOpen]}
              onPress={() => setModalVisible(true)}>
              <Text style={styles.textStyle}>Đổi quà</Text>
            </Pressable>
          </View>
        </View>
        
        <View style={styles.item}>
          <View style={styles.inner}>
            <Image source={require("../../asset/images/Airpodpepsi.png")} style={styles.image} resizeMode = "contain"/>
            <Text style={{fontSize: 16, color: '#3399FF'}}>Airpod case</Text>
            <Text style={{fontSize: 12, color: '#444444'}}>Còn lại: 20</Text>
            <Pressable
              style={[styles.button1, styles.buttonOpen]}
              onPress={() => setModalVisible(true)}>
              <Text style={styles.textStyle}>Đổi quà</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.item}>
          <View style={styles.inner}>
            <Image source={require("../../asset/images/electioniclunch.png")} style={styles.image} resizeMode = "contain"/>
            <Text style={{fontSize: 16, color: '#CCCCCC'}}>Electronic lunch bo</Text>
            <Text style={{fontSize: 12, color: '#CCCCCC'}}>Còn lại: 5</Text>
            <View style={styles.button}>
              <Button color='#FF3333' title='Đổi quà' disabled></Button>
            </View>
          </View>
        </View>

        <View style={styles.item}>
          <View style={styles.inner}>
            <Image source={require("../../asset/images/Portablespeaker.png")} style={styles.image} resizeMode = "contain"/>
            <Text style={{fontSize: 16, color: '#CCCCCC'}}>Portable Speaker</Text>
            <Text style={{fontSize: 12, color: '#CCCCCC'}}>Còn lại: 30</Text>
            <View style={styles.button}>
              <Button color='#FF3333' title='Đổi quà' disabled></Button>
            </View>
          </View>
        </View>
        {/* Thông tin quà tặng */}
    <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Feather style = {styles.icon_x_circle} name="x-circle" size={32} color="red" onPress={() => setModalVisible(!modalVisible)}/>
            <Text style={{fontSize: 22, color: '#3366FF', marginTop: 54}}>THÔNG TIN NHẬN QUÀ</Text>
            <Text style={styles.modalText}>Quà của bạn: {' '}<Text style={{color: '#FF3333', fontSize: 16}}>Pepsi Tote Bag</Text></Text>
            <Text style={{color: '#3366CC', marginTop: 16, fontSize:16}}>Họ và Tên</Text>
            <CustomInput name="Username" placeholder="Nhập Họ và tên của bạn" control={control} rules={{required: 'Bạn chưa điền Họ và tên'}}/>
            <Text style={{color: '#3366CC', marginTop: 8, fontSize:16}}>Số điện thoại</Text>
            <CustomInput name="Mobile" placeholder="Nhập Số điện thoại của bạn" control={control} rules={{required: 'Bạn chưa điền Số điện thoại'}}/>
            <Text style={{color: '#3366CC', marginTop: 8, fontSize:16}}>Địa chỉ</Text>
            <CustomInput name="Address" placeholder="Nhập Địa chỉ của bạn" control={control} rules={{required: 'Bạn chưa điền địa chỉ'}}/>
            <Text style={{color: '#3366CC', marginTop: 8, fontSize:16}}>Ghi chú</Text>
            <CustomInput name="Note" placeholder="Nhập ghi chú (nếu có)" control={control} />
            <Pressable
              style={[styles.button_info, styles.buttonClose]}
              onPress={() => setModalVisible1(!modalVisible1)}
              // onPressIn={() => {
              //   setModalVisible1(!modalVisible1);
              // }}
              >
              <Text style={styles.textStyle}>Xác nhận</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

        
      </View>
    </ScrollView>
    
  );
}

const NavComponent = ({page, setPage}) =>{
  return (
    <View style={{flex: 1}}>
      <View style={{height: 50, marginTop: 64, flexDirection: 'row'}}>
        <TouchableOpacity style={{width: '55%', height: '100%', 
        justifyContent: 'center', alignItems: 'center'}} onPress={() => {setPage(exchangeGift)}}
        disabled ={page === exchangeGift? true : false}>
          <Text style={{fontSize: 18, color: '#FF3333'}}>Đổi quà</Text>
          {page === exchangeGift ? <View style={{position:'absolute', bottom:0, height: 3, width: '60%',
          backgroundColor: '#FF3333'}}></View> : null}
        </TouchableOpacity>
        <TouchableOpacity style={{width: '30%', height: '100%', 
        justifyContent: 'center', alignItems: 'center'}} onPress={() => {setPage(myGift)}}
        disabled ={page === myGift? true : false}>
          <Text style={{fontSize: 18, color: '#FF3333'}}>Quà của tôi</Text>
          {page === myGift ? <View style={{position:'absolute', bottom:0, height: 3, width: '100%',
          backgroundColor: '#FF3333'}}></View> : null}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    root:{
        flex: 1,
        top: 100,
        alignItems: 'center',
    },
    image:{
      width: 160,
      marginBottom: 8,
      borderRadius:14,
      height: 140
    },
    button:{
      size: "lg",
      marginTop: 8,
      width: '55%',
      borderRadius: 44,
    },
    text:{
      color: '#000',
      fontSize: 14,
      alignItems: 'center',
      left: 120,
    },
    boxes:{
      marginBottom: 700,
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    item: {
      width: '50%',
      padding: 14,
    },
    inner:{
      flex: 1,
      display: 'flex',
      width: 180,
      height: 260,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 16,
      backgroundColor: '#E8E8E8',
    },
    number:{
        alignItems: 'center',
        left: 170,
        fontSize: 36,
        color:'#FF3333',
        fontStyle: 'bold',
    },
    icon_back:{
        marginTop: 88,
        position: 'absolute',
        left: 30,
    },
    icon:{
      marginTop: 88,
      position: 'absolute',
      right: 30,
    },
    icon_x_circle:{
      position: 'absolute',
      top: 18,
      right: 28,
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: '#FFCC99',
      borderRadius: 20,
      padding: 35,
      alignItems: 'flex-start',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    modalView1: {
      margin: 20,
      backgroundColor: '#66CC33',
      borderRadius: 20,
      padding: 35,
      alignItems: 'flex-start',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button1: {
      marginTop: 4,
      borderRadius: 14,
      padding: 10,
      elevation: 6,
      alignContent: 'center',
      width: 100,
    },
    button_info: {
      marginTop: 4,
      borderRadius: 14,
      marginStart: 84,
      padding: 10,
      elevation: 6,
      alignContent: 'center',
      width: 100,
    },
    buttonOpen: {
      backgroundColor: "#FF3333",
    },
    buttonClose: {
      marginTop: 24,
      alignItems: 'center',
      backgroundColor: "#FF3333",
    },
    textStyle: {
      padding: 4,
      color: "white",
      fontSize: 14,
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      color: '#3366FF',
      fontSize: 16,
      marginTop: 16,
      marginBottom: 8,
      
    }
    
  });

export default DetailGift