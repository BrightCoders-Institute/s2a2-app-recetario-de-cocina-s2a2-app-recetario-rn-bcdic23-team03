import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  // ... tus estilos actuales
  container: {
    backgroundColor: '#282828',
    height: Dimensions.get('window').height,
  },
  topBar: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: -50,
    zIndex: 5,
  },
  leftButton:{
    
  },
  rightButtons:{
    flexDirection: 'row-reverse',     
  },
  backButton: {
    paddingLeft: 20,
    paddingTop: 20,
    height: 50,
    position: 'relative',
    width: 50,
  },
  shareButton: {     
    paddingTop: 20,
    height: 50,
    width: 50,
  },
  likeButton: {
    height: 50,
    width: 50,
    paddingTop:20
  },
  icons: {
    height: 30,
    width: 30,
    tintColor: '#fff',
  },
  iconLike: {
    height: 25,
    width: 25,
    tintColor: '#fff',
  },
  iconShare: {
    height: 25,
    width: 35,
    tintColor: '#fff',
  },
  cerrar: {
    height: 20,
    width: 20,
  },
  trendingFood: {
    opacity: .4,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2,
  },
  viewDetail: {
    flex: 1,
    position: 'absolute', 
    top: 0, 
    bottom: 0, 
    left: 0, 
    right: 0,
  },
  textDetail: {
    top: -90,
    textAlign: "left",
    color: 'white',
    marginBottom: 8,
    fontSize: 20,
    marginLeft: 20,
  },
  textName: {
    top: -90,
    textAlign: "left",
    color: 'white',
    fontSize: 25,
    marginLeft: 20,
    
  },
  textDescription: {
    color: 'white',
    top: -50,
    fontSize: 20,
    marginLeft: 20,
    lineHeight: 30,
  }, 
  textServings:{
    color: 'white',
    top: -50,
    fontSize: 15,
    marginLeft: 20,
    lineHeight: 30,
  },
  ingredients: {
    marginTop: 15,
    color: 'white',
    top: -50,
    fontSize: 15,
    marginLeft: -10,
    borderColor: 'darkgrey',
    borderStyle: 'solid',
    borderBottomWidth: .4,
    paddingBottom: 18,
    marginRight: -10,
  },
  ingredients2: {
    textAlign: 'right',
    marginTop: 28,
    color: 'white',
    top: -120,
    fontSize: 15,
    marginLeft: -10,
    paddingBottom: 15,
    marginRight: -10,
  },
  ingView: {
    margin: 35,
    marginBottom: -100, 
  },
  scrollView: {
    marginTop: (Dimensions.get('window').height / 2) + 100,
  },
});

export default styles;
