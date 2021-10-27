
import React from 'react';
import {Text, StyleSheet, View, Image,TouchableOpacity, Alert} from 'react-native';
import foto from './assets/myprof.jpg'
import Icon from 'react-native-vector-icons/Feather'
import Card from './components/card';
import Cardskill from './components/cardskill';

const App = () => {

  function handleSocial(rede_social) {
    switch(rede_social){
      case 'linkedin':
        Alert.alert('Meu Linkedin:',"https://www.linkedin.com/in/marcoslopeswebdeveloper/")
      break
      case 'github':
        Alert.alert('Meu Github:',"https://github.com/MarcosLopes-Dev")
      break
      case 'instagram':
        Alert.alert('Meu Instagram:',"https://www.instagram.com/m4rcosl0pz/")
      break
     
    }
  }

  return(
    <>
      <View style={style.page}>
        <View style={style.top}>
          <Image  source={foto} style={style.foto}/>
          <Text style={style.nome}>Marcos Vinicius Lopes</Text>
          <Text style={style.cargo}>Desenvolvedor</Text>
        </View>
        <View style={style.follow}>
          <View style={style.redes_sociais}> 
            <TouchableOpacity onPress={()=>handleSocial('github')}> 
              <Icon name='github' size={30} color='blue'></Icon>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>handleSocial('linkedin')}>
              <Icon name='linkedin' size={30} color='blue'></Icon>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>handleSocial('instagram')}>
              <Icon name='instagram' size={30} color='blue'></Icon>
            </TouchableOpacity>
          </View>
        </View>
        <Card titulo="Experiência Profissional">
          <Text style={style.content}>Desenvolvedor Full stack freelancer</Text>
          <Text style={style.data}>(atualmente)</Text>
        </Card>
        <Cardskill></Cardskill>

          <Text style={style.marca}>By: Marcos Lopes</Text>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  page: {
    backgroundColor: "#4169E1",
    flex: 1,
    alignItems: 'center',
    fontSize: 20,
    
  },
  top:{
    
    alignItems:'center',
    backgroundColor:'#4169E1',
    justifyContent: 'center',
    width: '100%'
  }, 
  follow:{
    alignItems:'center',
    backgroundColor:'#F5FFFA',
    justifyContent: 'center',
    width: '100%',
    height: '10%'
  },
  foto:{
    margin: 10,
    width: 150,
    height: 150,
    borderRadius: 125
  },
  nome:{
    marginTop: 10,
    fontSize: 32,
    fontWeight:'bold',
    color:'white'
  },
  cargo:{
    fontSize: 25,
    fontWeight:'bold',
    color:'blue'
  },
  redes_sociais:{
    flexDirection: 'row',
    justifyContent:'space-between',
    width: '50%'
  },
  
  marca:{
    color:'black'
  },
  content:{
    color:'white'
  },
  data:{
    color:'white',
    alignSelf:'flex-end'
  },

})

export default App;
