import { StyleSheet, Text, View, Dimensions, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import { ImageHeaderMaterials } from '../../assets'

import ComponentMaterial from './ComponentMaterial/ComponentMaterial'


const Materials = () => {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={ImageHeaderMaterials} style={styles.header}></ImageBackground>

       <ComponentMaterial status="PLA cukup mudah dibentuk dan tidak membutuhkan penyesuaian terlalu rumit pada proses desainnya. Hal ini membuat hasil cetaknya 
        lebih akurat dan minim kesalahan walau objek yang Anda pilih memiliki detail cukup banyak." content="PLA" />

        <ComponentMaterial status="PETG merupakan termoplastik poliester yang merupakan turunan dari jenis plastik PET. Dalam strukturnya, jenis plastik ini didapati glikol yang ditambahkan untuk menghasilkan karakteristik kimiawi tertentu. Seperti plastik PET, jenis plastik ini umumnya memiliki warna bening. Plastik PETG sangat mudah dicetak atau dipotong menjadi berbagai bentuk lewat pengaplikasian panas karena termasuk dalam kategori termoplastik. 
        Hal ini membuat plastik PETG memiliki pengaplikasian yang sangat beragam di berbagai industri yang berbeda." content="PTEG" />
       
       <ComponentMaterial status="Balok permainan lego yang terbuat dari plastik ABS Akrilonitril adalah Monomer sintetis yang dihasilkan dari propilen dan amonia. 
        Komponen ini berkontribusi terhadap ketahanan kimiawi dan stabilitas panas ABS. Butadiena adalah Diproduksi sebagai produk sampingan dari produksi etilen dari steam cracker. Komponen ini memberikan ketangguhan dan ketahanan akan benturan pada polimer ABS.
        Stiren adalah Diproduksi dari dehidrogenasi etil benzena. Monomer ini memberikan sifat kaku pada plastik ABS" content="ABS (Acrylonitrile butadiene styrene)" />

        <ComponentMaterial status="Bahan TPU memiliki fleksibilitas seperti karet sehingga tidak mudah patah. 
        Jenis Filamen 3D printing dengan bahan ini juga cocok untuk membuat lapisan-lapisan tertentu pada model 
        3D yang sedang dihasilkan. Produk juga tahan dengan minyak. TPU mudah sekali menggumpal meski masih dalam bentuk filamen." content="TPU" />
       
       
      
       </ScrollView>
    </View>
  )
}

export default Materials
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const styles = StyleSheet.create({
    header: {
        width: windowWidth,
        marginTop:28,
        height: windowHeight * 0.08
      }
})