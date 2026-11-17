//นำเข้า วิว ข้อความ จาก ชื่อไลบรารี่
import { Background } from 'expo-router/build/react-navigation/index.js';
import { Image, StyleSheet, Text, View } from 'react-native';

//ส่งออก เริ่มต้น ฟังก์ชัน ชื่อฟังก์ชัน
export default function App() {
  return (
    <View style={homeStyle.container}>

      <Image
      source={require('@/assets/name.jpg')}
        style={{
          width: 200,
          height: 200,
          borderRadius: 400,
          borderWidth: 3,
          borderColor: "blue",
          marginBottom: 20,
        }}
      />

      <Text style={homeStyle.title}>เนติวิชญ์ ลุนชัยภา</Text>
      <Text style={{ color: "gray",marginTop: 10 }}>
        OG
      </Text>


      <View
        style={{
          flexDirection: "column",
          backgroundColor: "darkgray",
          padding: 30,
          marginTop: 20,
          borderRadius: 25,
          height: 150,
          gap: 15,
          marginBottom: 25,
        }}>

        <Text>ห้อง BIT.1/1 เลขที่ 4</Text>
        <Text>Email : netiwit.lunchaipa@e-tech.ac.th</Text>
        <Text>Phone : 082-082-2273</Text>

      </View>

      <Text style={{
        color: "black",
        fontSize: 20,
        fontWeight: 700,
        textAlign: "left",
        width: "100%",
        marginBottom: 15,
      }}>
        ภาพกิจกรรม</Text>

      <View style={{ flexDirection: "row", gap: 20 }}>
        <Image
          source={{ uri: "https://assets.vogue.com/photos/668405014f23ca83ef816aaf/1:1/w_3903,h_3903,c_limit/1029818226" }}
          style={{
            width: 110,
            height: 110,
            borderRadius: 15,
          }}
        />
        <Image
          source={{ uri: "https://assets.cntraveller.in/photos/6a4499db09f1ff753d1eabc7/1:1/w_4672,h_4672,c_limit/GettyImages-1470275474.jpg" }}
          style={{
            width: 110,
            height: 110,
            borderRadius: 15,
          }}
        />
        <Image
          source={{ uri: "https://media.cntraveler.com/photos/689f49a1d3c2736d8cd13cb9/2:3/w_1332,h_1998,c_limit/081525-Italy-Unwritten-Rules-GettyImages-1341229201.jpg" }}
          style={{
            width: 110,
            height: 110,
            borderRadius: 15,
          }}
        />


      </View>



    </View>
   )
  }
  //สร้างสไตล์ตกแต่ง
  const homeStyle = StyleSheet.create ({
  container: {
    backgroundColor: "White",
    flex:1,
    alignItems: "center",
    padding: 20,
  },
  title: {
    color: "black", 
    fontSize: 32, 
    fontWeight: 700, 
    fontStyle: "italic", 
    textAlign: "center", 
  }
  })