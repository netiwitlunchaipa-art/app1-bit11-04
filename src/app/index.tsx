//นำเข้า วิว ข้อความ จาก ชื่อไลบรารี่
import { Image, StyleSheet, Text, View } from 'react-native';

//ส่งออก เริ่มต้น ฟังก์ชัน ชื่อฟังก์ชัน
export default function App (){
  return(
    <View style={homeStyle.container}>

     {/* ใส่ข้อความ */}
     <Text style={homeStyle.title}>Netiwit Lunchaipa</Text>

     {/* ใส่ภาพ */}
    <Image
       source={require('@/assets/dog.jpg')} 
      style={{
        width: 400, // กว้าง
        height: 350, // สูง
        borderRadius: 130, // มุมโค้ง
        borderWidth: 5, // ขอบหนา
        borderColor: "lightblue", //สีขอบ
      }}
      />
      {/* ใส่รูปจากเว็บ */}
      <Image 
      source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLYDu2_eIJGfUlzJaD2C0wjMhfaI2B8Mwac7JLbKyP4Q&s=10"}}
      style={{
        width: 400, // กว้าง
        height: 350, // สูง
        borderRadius: 130, // มุมโค้ง
        borderWidth: 5, // ขอบหนา
        borderColor: "lightblue", //สีขอบ
      }}
        />
        {/* เรียงวัตถุแนวนอน ซ้ายไปขวา */}
        <View style={{flexDirection: "row"}}>
          <Text> ชิน</Text>
          <Text> ปาย</Text>
        </View>
    </View>
  )
}

//สร้างสไตล์ตกแต่ง
const homeStyle = StyleSheet.create({
  container:{
    backgroundColor: "red", // สีพื้นหลัง
    flex:1, //ขยายเต็มพื้นที่
    alignItems: "center"
  },
  title:{
    color: "white", // สีอักษร
    fontSize: 32, // ขนาดอักษร
    fontWeight: 700, // ความหนาอักษร 100-900
    fontStyle: "italic", // เอียง
    textAlign: "center"
  }
})