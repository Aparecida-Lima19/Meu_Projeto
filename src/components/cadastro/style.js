import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  visualizacaoCentralizada: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  visualizacaoModal: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  botao: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  botaoAbrir: {
    backgroundColor: '#F194FF',
  },
  botaoFechar: {
    backgroundColor: '#2196F3',
  },
  estiloTexto: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textoModal: {
    marginBottom: 15,
    textAlign: 'center',
  },
  inputEmail: {
    borderRadius: 10,
    backgroundColor: "#DCDCDC",
    height: 40,
    margin: 12,
    paddingLeft: 10
  }
});

export default estilos;
